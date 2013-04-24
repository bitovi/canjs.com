/*! canjs.us - v0.1.0 - 2013-04-23
* https://github.com/bitovi/canjs.us
* Copyright (c) 2013 Bitovi; Licensed MIT */
/*!
 * CanJS - 1.1.5
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 22 Apr 2013 16:22:13 GMT
 * Licensed MIT
 * Download from: http://bitbuilder.herokuapp.com/can.custom.js?configuration=jquery&plugins=can%2Fconstruct%2Fconstruct.js&plugins=can%2Fobserve%2Fobserve.js&plugins=can%2Fmodel%2Fmodel.js&plugins=can%2Fview%2Fview.js&plugins=can%2Fcontrol%2Fcontrol.js&plugins=can%2Froute%2Froute.js&plugins=can%2Fcontrol%2Froute%2Froute.js&plugins=can%2Fview%2Fmustache%2Fmustache.js&plugins=can%2Fconstruct%2Fsuper%2Fsuper.js
 */
(function(undefined) {

    // ## can/util/can.js
    var __m5 = (function() {

        var can = window.can || {};
        if (typeof GLOBALCAN === 'undefined' || GLOBALCAN !== false) {
            window.can = can;
        }

        can.isDeferred = function(obj) {
            var isFunction = this.isFunction;
            // Returns `true` if something looks like a deferred.
            return obj && isFunction(obj.then) && isFunction(obj.pipe);
        };

        var cid = 0;
        can.cid = function(object, name) {
            if (object._cid) {
                return object._cid
            } else {
                return object._cid = (name || "") + (++cid)
            }
        }
        return can;
    })();

    // ## can/util/array/each.js
    var __m6 = (function(can) {
        can.each = function(elements, callback, context) {
            var i = 0,
                key;
            if (elements) {
                if (typeof elements.length === 'number' && elements.pop) {
                    if (elements.attr) {
                        elements.attr('length');
                    }
                    for (key = elements.length; i < key; i++) {
                        if (callback.call(context || elements[i], elements[i], i, elements) === false) {
                            break;
                        }
                    }
                } else if (elements.hasOwnProperty) {
                    for (key in elements) {
                        if (elements.hasOwnProperty(key)) {
                            if (callback.call(context || elements[key], elements[key], key, elements) === false) {
                                break;
                            }
                        }
                    }
                }
            }
            return elements;
        };

        return can;
    })(__m5);

    // ## can/util/jquery/jquery.js
    var __m3 = (function($, can) {
        // _jQuery node list._
        $.extend(can, $, {
            trigger: function(obj, event, args) {
                if (obj.trigger) {
                    obj.trigger(event, args);
                } else {
                    $.event.trigger(event, args, obj, true);
                }
            },
            addEvent: function(ev, cb) {
                $([this]).bind(ev, cb);
                return this;
            },
            removeEvent: function(ev, cb) {
                $([this]).unbind(ev, cb);
                return this;
            },
            // jquery caches fragments, we always needs a new one
            buildFragment: function(elems, context) {
                var oldFragment = $.buildFragment,
                    ret;

                elems = [elems];
                // Set context per 1.8 logic
                context = context || document;
                context = !context.nodeType && context[0] || context;
                context = context.ownerDocument || context;

                ret = oldFragment.call(jQuery, elems, context);

                return ret.cacheable ? $.clone(ret.fragment) : ret.fragment || ret;
            },
            $: $,
            each: can.each
        });

        // Wrap binding functions.
        $.each(['bind', 'unbind', 'undelegate', 'delegate'], function(i, func) {
            can[func] = function() {
                var t = this[func] ? this : $([this]);
                t[func].apply(t, arguments);
                return this;
            };
        });

        // Wrap modifier functions.
        $.each(["append", "filter", "addClass", "remove", "data", "get"], function(i, name) {
            can[name] = function(wrapped) {
                return wrapped[name].apply(wrapped, can.makeArray(arguments).slice(1));
            };
        });

        // Memory safe destruction.
        var oldClean = $.cleanData;

        $.cleanData = function(elems) {
            $.each(elems, function(i, elem) {
                if (elem) {
                    can.trigger(elem, "destroyed", [], false);
                }
            });
            oldClean(elems);
        };

        return can;
    })(jQuery, __m5, __m6);

    // ## can/util/string/string.js
    var __m2 = (function(can) {
        // ##string.js
        // _Miscellaneous string utility functions._  

        // Several of the methods in this plugin use code adapated from Prototype
        // Prototype JavaScript framework, version 1.6.0.1.
        // © 2005-2007 Sam Stephenson
        var strUndHash = /_|-/,
            strColons = /\=\=/,
            strWords = /([A-Z]+)([A-Z][a-z])/g,
            strLowUp = /([a-z\d])([A-Z])/g,
            strDash = /([a-z\d])([A-Z])/g,
            strReplacer = /\{([^\}]+)\}/g,
            strQuote = /"/g,
            strSingleQuote = /'/g,

            // Returns the `prop` property from `obj`.
            // If `add` is true and `prop` doesn't exist in `obj`, create it as an 
            // empty object.
            getNext = function(obj, prop, add) {
                return prop in obj ?
                    obj[prop] :
                    (add && (obj[prop] = {}));
            },

            // Returns `true` if the object can have properties (no `null`s).
            isContainer = function(current) {
                return (/^f|^o/).test(typeof current);
            };

        can.extend(can, {
            // Escapes strings for HTML.

            esc: function(content) {
                // Convert bad values into empty strings
                var isInvalid = content === null || content === undefined || (isNaN(content) && ("" + content === 'NaN'));
                return ("" + (isInvalid ? '' : content))
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(strQuote, '&#34;')
                    .replace(strSingleQuote, "&#39;");
            },


            getObject: function(name, roots, add) {

                // The parts of the name we are looking up  
                // `['App','Models','Recipe']`
                var parts = name ? name.split('.') : [],
                    length = parts.length,
                    current,
                    r = 0,
                    ret, i;

                // Make sure roots is an `array`.
                roots = can.isArray(roots) ? roots : [roots || window];

                if (!length) {
                    return roots[0];
                }

                // For each root, mark it as current.
                while (roots[r]) {
                    current = roots[r];

                    // Walk current to the 2nd to last object or until there 
                    // is not a container.
                    for (i = 0; i < length - 1 && isContainer(current); i++) {
                        current = getNext(current, parts[i], add);
                    }

                    // If we can get a property from the 2nd to last object...
                    if (isContainer(current)) {

                        // Get (and possibly set) the property.
                        ret = getNext(current, parts[i], add);

                        // If there is a value, we exit.
                        if (ret !== undefined) {
                            // If `add` is `false`, delete the property
                            if (add === false) {
                                delete current[parts[i]];
                            }
                            return ret;

                        }
                    }
                    r++;
                }
            },
            // Capitalizes a string.

            capitalize: function(s, cache) {
                // Used to make newId.
                return s.charAt(0).toUpperCase() + s.slice(1);
            },

            // Underscores a string.

            underscore: function(s) {
                return s
                    .replace(strColons, '/')
                    .replace(strWords, '$1_$2')
                    .replace(strLowUp, '$1_$2')
                    .replace(strDash, '_')
                    .toLowerCase();
            },
            // Micro-templating.

            sub: function(str, data, remove) {
                var obs = [];

                obs.push(str.replace(strReplacer, function(whole, inside) {

                    // Convert inside to type.
                    var ob = can.getObject(inside, data, remove === undefined ? remove : !remove);

                    if (ob === undefined) {
                        obs = null;
                        return "";
                    }

                    // If a container, push into objs (which will return objects found).
                    if (isContainer(ob) && obs) {
                        obs.push(ob);
                        return "";
                    }

                    return "" + ob;
                }));

                return obs === null ? obs : (obs.length <= 1 ? obs[0] : obs);
            },

            // These regex's are used throughout the rest of can, so let's make
            // them available.
            replacer: strReplacer,
            undHash: strUndHash
        });
        return can;
    })(__m3);

    // ## can/construct/construct.js
    var __m1 = (function(can) {

        // ## construct.js
        // `can.Construct`  
        // _This is a modified version of
        // [John Resig's class](http://ejohn.org/blog/simple-javascript-inheritance/).  
        // It provides class level inheritance and callbacks._

        // A private flag used to initialize a new class instance without
        // initializing it's bindings.
        var initializing = 0;


        can.Construct = function() {
            if (arguments.length) {
                return can.Construct.extend.apply(can.Construct, arguments);
            }
        };


        can.extend(can.Construct, {

            newInstance: function() {
                // Get a raw instance object (`init` is not called).
                var inst = this.instance(),
                    arg = arguments,
                    args;

                // Call `setup` if there is a `setup`
                if (inst.setup) {
                    args = inst.setup.apply(inst, arguments);
                }

                // Call `init` if there is an `init`  
                // If `setup` returned `args`, use those as the arguments
                if (inst.init) {
                    inst.init.apply(inst, args || arguments);
                }

                return inst;
            },
            // Overwrites an object with methods. Used in the `super` plugin.
            // `newProps` - New properties to add.  
            // `oldProps` - Where the old properties might be (used with `super`).  
            // `addTo` - What we are adding to.
            _inherit: function(newProps, oldProps, addTo) {
                can.extend(addTo || newProps, newProps || {})
            },
            // used for overwriting a single property.
            // this should be used for patching other objects
            // the super plugin overwrites this
            _overwrite: function(what, oldProps, propName, val) {
                what[propName] = val;
            },
            // Set `defaults` as the merger of the parent `defaults` and this 
            // object's `defaults`. If you overwrite this method, make sure to
            // include option merging logic.

            setup: function(base, fullName) {
                this.defaults = can.extend(true, {}, base.defaults, this.defaults);
            },
            // Create's a new `class` instance without initializing by setting the
            // `initializing` flag.
            instance: function() {

                // Prevents running `init`.
                initializing = 1;

                var inst = new this();

                // Allow running `init`.
                initializing = 0;

                return inst;
            },
            // Extends classes.

            extend: function(fullName, klass, proto) {
                // Figure out what was passed and normalize it.
                if (typeof fullName != 'string') {
                    proto = klass;
                    klass = fullName;
                    fullName = null;
                }

                if (!proto) {
                    proto = klass;
                    klass = null;
                }
                proto = proto || {};

                var _super_class = this,
                    _super = this.prototype,
                    name, shortName, namespace, prototype;

                // Instantiate a base class (but only create the instance,
                // don't run the init constructor).
                prototype = this.instance();

                // Copy the properties over onto the new prototype.
                can.Construct._inherit(proto, _super, prototype);

                // The dummy class constructor.

                function Constructor() {
                    // All construction is actually done in the init method.
                    if (!initializing) {
                        return this.constructor !== Constructor && arguments.length ?
                        // We are being called without `new` or we are extending.
                        arguments.callee.extend.apply(arguments.callee, arguments) :
                        // We are being called with `new`.
                        this.constructor.newInstance.apply(this.constructor, arguments);
                    }
                }

                // Copy old stuff onto class (can probably be merged w/ inherit)
                for (name in _super_class) {
                    if (_super_class.hasOwnProperty(name)) {
                        Constructor[name] = _super_class[name];
                    }
                }

                // Copy new static properties on class.
                can.Construct._inherit(klass, _super_class, Constructor);

                // Setup namespaces.
                if (fullName) {

                    var parts = fullName.split('.'),
                        shortName = parts.pop(),
                        current = can.getObject(parts.join('.'), window, true),
                        namespace = current,
                        _fullName = can.underscore(fullName.replace(/\./g, "_")),
                        _shortName = can.underscore(shortName);



                    current[shortName] = Constructor;
                }

                // Set things that shouldn't be overwritten.
                can.extend(Constructor, {
                    constructor: Constructor,
                    prototype: prototype,

                    namespace: namespace,

                    _shortName: _shortName,

                    fullName: fullName,
                    _fullName: _fullName
                });

                // Dojo and YUI extend undefined
                if (shortName !== undefined) {
                    Constructor.shortName = shortName;
                }

                // Make sure our prototype looks nice.
                Constructor.prototype.constructor = Constructor;


                // Call the class `setup` and `init`
                var t = [_super_class].concat(can.makeArray(arguments)),
                    args = Constructor.setup.apply(Constructor, t);

                if (Constructor.init) {
                    Constructor.init.apply(Constructor, args || t);
                }


                return Constructor;

            }

        });
        return can.Construct;
    })(__m2);

    // ## can/observe/observe.js
    var __m7 = (function(can) {
        // ## observe.js  
        // `can.Observe`  
        // _Provides the observable pattern for JavaScript Objects._  
        // Returns `true` if something is an object with properties of its own.
        var canMakeObserve = function(obj) {
            return obj && (can.isArray(obj) || can.isPlainObject(obj) || (obj instanceof can.Observe));
        },

            // Removes all listeners.
            unhookup = function(items, namespace) {
                return can.each(items, function(item) {
                    if (item && item.unbind) {
                        item.unbind("change" + namespace);
                    }
                });
            },
            // Listens to changes on `val` and "bubbles" the event up.  
            // `val` - The object to listen for changes on.  
            // `prop` - The property name is at on.  
            // `parent` - The parent object of prop.
            // `ob` - (optional) The Observe object constructor
            // `list` - (optional) The observable list constructor
            hookupBubble = function(val, prop, parent, Ob, List) {
                Ob = Ob || Observe;
                List = List || Observe.List;

                // If it's an `array` make a list, otherwise a val.
                if (val instanceof Observe) {
                    // We have an `observe` already...
                    // Make sure it is not listening to this already
                    unhookup([val], parent._cid);
                } else if (can.isArray(val)) {
                    val = new List(val);
                } else {
                    val = new Ob(val);
                }

                // Listen to all changes and `batchTrigger` upwards.
                val.bind("change" + parent._cid, function() {
                    // `batchTrigger` the type on this...
                    var args = can.makeArray(arguments),
                        ev = args.shift();
                    args[0] = (prop === "*" ? [parent.indexOf(val), args[0]] : [prop, args[0]]).join(".");

                    // track objects dispatched on this observe		
                    ev.triggeredNS = ev.triggeredNS || {};

                    // if it has already been dispatched exit
                    if (ev.triggeredNS[parent._cid]) {
                        return;
                    }

                    ev.triggeredNS[parent._cid] = true;
                    // send change event with modified attr to parent	
                    can.trigger(parent, ev, args);
                    // send modified attr event to parent
                    //can.trigger(parent, args[0], args);
                });

                return val;
            },

            // An `id` to track events for a given observe.
            observeId = 0,
            // A helper used to serialize an `Observe` or `Observe.List`.  
            // `observe` - The observable.  
            // `how` - To serialize with `attr` or `serialize`.  
            // `where` - To put properties, in an `{}` or `[]`.
            serialize = function(observe, how, where) {
                // Go through each property.
                observe.each(function(val, name) {
                    // If the value is an `object`, and has an `attrs` or `serialize` function.
                    where[name] = canMakeObserve(val) && can.isFunction(val[how]) ?
                    // Call `attrs` or `serialize` to get the original data back.
                    val[how]() :
                    // Otherwise return the value.
                    val;
                });
                return where;
            },
            $method = function(name) {
                return function() {
                    return can[name].apply(this, arguments);
                };
            },
            bind = $method('addEvent'),
            unbind = $method('removeEvent'),
            attrParts = function(attr, keepKey) {
                if (keepKey) {
                    return [attr];
                }
                return can.isArray(attr) ? attr : ("" + attr).split(".");
            },
            // Which batch of events this is for -- might not want to send multiple
            // messages on the same batch.  This is mostly for event delegation.
            batchNum = 1,
            // how many times has start been called without a stop
            transactions = 0,
            // an array of events within a transaction
            batchEvents = [],
            stopCallbacks = [];




        var Observe = can.Observe = can.Construct({

            // keep so it can be overwritten
            bind: bind,
            unbind: unbind,
            id: "id",
            canMakeObserve: canMakeObserve,
            // starts collecting events
            // takes a callback for after they are updated
            // how could you hook into after ejs

            startBatch: function(batchStopHandler) {
                transactions++;
                batchStopHandler && stopCallbacks.push(batchStopHandler);
            },

            stopBatch: function(force, callStart) {
                if (force) {
                    transactions = 0;
                } else {
                    transactions--;
                }

                if (transactions == 0) {
                    var items = batchEvents.slice(0),
                        callbacks = stopCallbacks.slice(0);
                    batchEvents = [];
                    stopCallbacks = [];
                    batchNum++;
                    callStart && this.startBatch();
                    can.each(items, function(args) {
                        can.trigger.apply(can, args);
                    });
                    can.each(callbacks, function(cb) {
                        cb();
                    });
                }
            },

            triggerBatch: function(item, event, args) {
                // Don't send events if initalizing.
                if (!item._init) {
                    if (transactions == 0) {
                        return can.trigger(item, event, args);
                    } else {
                        event = typeof event === "string" ? {
                            type: event
                        } :
                            event;
                        event.batchNum = batchNum;
                        batchEvents.push([
                                item,
                                event,
                                args
                        ]);
                    }
                }
            },

            keys: function(observe) {
                var keys = [];
                Observe.__reading && Observe.__reading(observe, '__keys');
                for (var keyName in observe._data) {
                    keys.push(keyName);
                }
                return keys;
            }
        },

        {
            setup: function(obj) {
                // `_data` is where we keep the properties.
                this._data = {};

                // The namespace this `object` uses to listen to events.
                can.cid(this, ".observe");
                // Sets all `attrs`.
                this._init = 1;
                this.attr(obj);
                this.bind('change' + this._cid, can.proxy(this._changes, this));
                delete this._init;
            },
            _changes: function(ev, attr, how, newVal, oldVal) {
                Observe.triggerBatch(this, {
                    type: attr,
                    batchNum: ev.batchNum
                }, [newVal, oldVal]);
            },
            _triggerChange: function(attr, how, newVal, oldVal) {
                Observe.triggerBatch(this, "change", can.makeArray(arguments))
            },

            attr: function(attr, val) {
                // This is super obfuscated for space -- basically, we're checking
                // if the type of the attribute is not a `number` or a `string`.
                var type = typeof attr;
                if (type !== "string" && type !== "number") {
                    return this._attrs(attr, val)
                } else if (val === undefined) { // If we are getting a value.
                    // Let people know we are reading.
                    Observe.__reading && Observe.__reading(this, attr)
                    return this._get(attr)
                } else {
                    // Otherwise we are setting.
                    this._set(attr, val);
                    return this;
                }
            },

            each: function() {
                Observe.__reading && Observe.__reading(this, '__keys');
                return can.each.apply(undefined, [this.__get()].concat(can.makeArray(arguments)))
            },

            removeAttr: function(attr) {
                // Info if this is List or not
                var isList = this instanceof can.Observe.List,
                    // Convert the `attr` into parts (if nested).
                    parts = attrParts(attr),
                    // The actual property to remove.
                    prop = parts.shift(),
                    // The current value.
                    current = isList ? this[prop] : this._data[prop];

                // If we have more parts, call `removeAttr` on that part.
                if (parts.length) {
                    return current.removeAttr(parts)
                } else {
                    if (isList) {
                        this.splice(prop, 1)
                    } else if (prop in this._data) {
                        // Otherwise, `delete`.
                        delete this._data[prop];
                        // Create the event.
                        if (!(prop in this.constructor.prototype)) {
                            delete this[prop]
                        }
                        // Let others know the number of keys have changed
                        Observe.triggerBatch(this, "__keys");
                        this._triggerChange(prop, "remove", undefined, current);

                    }
                    return current;
                }
            },
            // Reads a property from the `object`.
            _get: function(attr) {
                var value = typeof attr === 'string' && !! ~attr.indexOf('.') && this.__get(attr);
                if (value) {
                    return value;
                }

                // break up the attr (`"foo.bar"`) into `["foo","bar"]`
                var parts = attrParts(attr),
                    // get the value of the first attr name (`"foo"`)
                    current = this.__get(parts.shift());
                // if there are other attributes to read
                return parts.length ?
                // and current has a value
                current ?
                // lookup the remaining attrs on current
                current._get(parts) :
                // or if there's no current, return undefined
                undefined :
                // if there are no more parts, return current
                current;
            },
            // Reads a property directly if an `attr` is provided, otherwise
            // returns the "real" data object itself.
            __get: function(attr) {
                return attr ? this._data[attr] : this._data;
            },
            // Sets `attr` prop as value on this object where.
            // `attr` - Is a string of properties or an array  of property values.
            // `value` - The raw value to set.
            _set: function(attr, value, keepKey) {
                // Convert `attr` to attr parts (if it isn't already).
                var parts = attrParts(attr, keepKey),
                    // The immediate prop we are setting.
                    prop = parts.shift(),
                    // The current value.
                    current = this.__get(prop);

                // If we have an `object` and remaining parts.
                if (canMakeObserve(current) && parts.length) {
                    // That `object` should set it (this might need to call attr).
                    current._set(parts, value)
                } else if (!parts.length) {
                    // We're in "real" set territory.
                    if (this.__convert) {
                        value = this.__convert(prop, value)
                    }
                    this.__set(prop, value, current)
                } else {
                    throw "can.Observe: Object does not exist"
                }
            },
            __set: function(prop, value, current) {

                // Otherwise, we are setting it on this `object`.
                // TODO: Check if value is object and transform
                // are we changing the value.
                if (value !== current) {
                    // Check if we are adding this for the first time --
                    // if we are, we need to create an `add` event.
                    var changeType = this.__get().hasOwnProperty(prop) ? "set" : "add";

                    // Set the value on data.
                    this.___set(prop,

                    // If we are getting an object.
                    canMakeObserve(value) ?

                    // Hook it up to send event.
                    hookupBubble(value, prop, this) :
                    // Value is normal.
                    value);

                    if (changeType == "add") {
                        // If there is no current value, let others know that
                        // the the number of keys have changed

                        Observe.triggerBatch(this, "__keys", undefined);

                    }
                    // `batchTrigger` the change event.
                    this._triggerChange(prop, changeType, value, current);

                    //Observe.triggerBatch(this, prop, [value, current]);
                    // If we can stop listening to our old value, do it.
                    current && unhookup([current], this._cid);
                }

            },
            // Directly sets a property on this `object`.
            ___set: function(prop, val) {
                this._data[prop] = val;
                // Add property directly for easy writing.
                // Check if its on the `prototype` so we don't overwrite methods like `attrs`.
                if (!(prop in this.constructor.prototype)) {
                    this[prop] = val
                }
            },


            bind: bind,

            unbind: unbind,

            serialize: function() {
                return serialize(this, 'serialize', {});
            },

            _attrs: function(props, remove) {

                if (props === undefined) {
                    return serialize(this, 'attr', {})
                }

                props = can.extend({}, props);
                var prop,
                    self = this,
                    newVal;
                Observe.startBatch();
                this.each(function(curVal, prop) {
                    newVal = props[prop];

                    // If we are merging...
                    if (newVal === undefined) {
                        remove && self.removeAttr(prop);
                        return;
                    }

                    if (self.__convert) {
                        newVal = self.__convert(prop, newVal)
                    }

                    // if we're dealing with models, want to call _set to let converter run
                    if (newVal instanceof can.Observe) {
                        self.__set(prop, newVal, curVal)
                        // if its an object, let attr merge
                    } else if (canMakeObserve(curVal) && canMakeObserve(newVal) && curVal.attr) {
                        curVal.attr(newVal, remove)
                        // otherwise just set
                    } else if (curVal != newVal) {
                        self.__set(prop, newVal, curVal)
                    }

                    delete props[prop];
                })
                // Add remaining props.
                for (var prop in props) {
                    newVal = props[prop];
                    this._set(prop, newVal, true)
                }
                Observe.stopBatch()
                return this;
            },


            compute: function(prop) {
                var self = this,
                    computer = function(val) {
                        return self.attr(prop, val);
                    };

                return can.compute ? can.compute(computer) : computer;
            }
        });
        // Helpers for `observable` lists.

        var splice = [].splice,
            list = Observe(

            {
                setup: function(instances, options) {
                    this.length = 0;
                    can.cid(this, ".observe")
                    this._init = 1;
                    if (can.isDeferred(instances)) {
                        this.replace(instances)
                    } else {
                        this.push.apply(this, can.makeArray(instances || []));
                    }
                    this.bind('change' + this._cid, can.proxy(this._changes, this));
                    can.extend(this, options);
                    delete this._init;
                },
                _triggerChange: function(attr, how, newVal, oldVal) {

                    Observe.prototype._triggerChange.apply(this, arguments)
                    // `batchTrigger` direct add and remove events...
                    if (!~attr.indexOf('.')) {

                        if (how === 'add') {
                            Observe.triggerBatch(this, how, [newVal, +attr]);
                            Observe.triggerBatch(this, 'length', [this.length]);
                        } else if (how === 'remove') {
                            Observe.triggerBatch(this, how, [oldVal, +attr]);
                            Observe.triggerBatch(this, 'length', [this.length]);
                        } else {
                            Observe.triggerBatch(this, how, [newVal, +attr])
                        }

                    }

                },
                __get: function(attr) {
                    return attr ? this[attr] : this;
                },
                ___set: function(attr, val) {
                    this[attr] = val;
                    if (+attr >= this.length) {
                        this.length = (+attr + 1)
                    }
                },
                // Returns the serialized form of this list.

                serialize: function() {
                    return serialize(this, 'serialize', []);
                },

                splice: function(index, howMany) {
                    var args = can.makeArray(arguments),
                        i;

                    for (i = 2; i < args.length; i++) {
                        var val = args[i];
                        if (canMakeObserve(val)) {
                            args[i] = hookupBubble(val, "*", this, this.constructor.Observe, this.constructor)
                        }
                    }
                    if (howMany === undefined) {
                        howMany = args[1] = this.length - index;
                    }
                    var removed = splice.apply(this, args);
                    can.Observe.startBatch();
                    if (howMany > 0) {
                        this._triggerChange("" + index, "remove", undefined, removed);
                        unhookup(removed, this._cid);
                    }
                    if (args.length > 2) {
                        this._triggerChange("" + index, "add", args.slice(2), removed);
                    }
                    can.Observe.stopBatch();
                    return removed;
                },

                _attrs: function(items, remove) {
                    if (items === undefined) {
                        return serialize(this, 'attr', []);
                    }

                    // Create a copy.
                    items = can.makeArray(items);

                    Observe.startBatch();
                    this._updateAttrs(items, remove);
                    Observe.stopBatch()
                },

                _updateAttrs: function(items, remove) {
                    var len = Math.min(items.length, this.length);

                    for (var prop = 0; prop < len; prop++) {
                        var curVal = this[prop],
                            newVal = items[prop];

                        if (canMakeObserve(curVal) && canMakeObserve(newVal)) {
                            curVal.attr(newVal, remove)
                        } else if (curVal != newVal) {
                            this._set(prop, newVal)
                        } else {

                        }
                    }
                    if (items.length > this.length) {
                        // Add in the remaining props.
                        this.push.apply(this, items.slice(this.length));
                    } else if (items.length < this.length && remove) {
                        this.splice(items.length)
                    }
                }
            }),

            // Converts to an `array` of arguments.
            getArgs = function(args) {
                return args[0] && can.isArray(args[0]) ?
                    args[0] :
                    can.makeArray(args);
            };
        // Create `push`, `pop`, `shift`, and `unshift`
        can.each({

            push: "length",

            unshift: 0
        },
        // Adds a method
        // `name` - The method name.
        // `where` - Where items in the `array` should be added.

        function(where, name) {
            var orig = [][name]
            list.prototype[name] = function() {
                // Get the items being added.
                var args = [],
                    // Where we are going to add items.
                    len = where ? this.length : 0,
                    i = arguments.length,
                    res,
                    val,
                    constructor = this.constructor;

                // Go through and convert anything to an `observe` that needs to be converted.
                while (i--) {
                    val = arguments[i];
                    args[i] = canMakeObserve(val) ?
                        hookupBubble(val, "*", this, this.constructor.Observe, this.constructor) :
                        val;
                }

                // Call the original method.
                res = orig.apply(this, args);

                if (!this.comparator || args.length) {

                    this._triggerChange("" + len, "add", args, undefined);
                }

                return res;
            }
        });

        can.each({

            pop: "length",

            shift: 0
        },
        // Creates a `remove` type method

        function(where, name) {
            list.prototype[name] = function() {

                var args = getArgs(arguments),
                    len = where && this.length ? this.length - 1 : 0;

                var res = [][name].apply(this, args)

                // Create a change where the args are
                // `*` - Change on potentially multiple properties.
                // `remove` - Items removed.
                // `undefined` - The new values (there are none).
                // `res` - The old, removed values (should these be unbound).
                // `len` - Where these items were removed.
                this._triggerChange("" + len, "remove", undefined, [res])

                if (res && res.unbind) {
                    res.unbind("change" + this._cid)
                }
                return res;
            }
        });

        can.extend(list.prototype, {

            indexOf: function(item) {
                this.attr('length')
                return can.inArray(item, this)
            },


            join: [].join,


            reverse: [].reverse,


            slice: function() {
                var temp = Array.prototype.slice.apply(this, arguments);
                return new this.constructor(temp);
            },


            concat: function() {
                var args = [];
                can.each(can.makeArray(arguments), function(arg, i) {
                    args[i] = arg instanceof can.Observe.List ? arg.serialize() : arg;
                });
                return new this.constructor(Array.prototype.concat.apply(this.serialize(), args));
            },


            forEach: function(cb, thisarg) {
                can.each(this, cb, thisarg || this);
            },


            replace: function(newList) {
                if (can.isDeferred(newList)) {
                    newList.then(can.proxy(this.replace, this));
                } else {
                    this.splice.apply(this, [0, this.length].concat(can.makeArray(newList || [])));
                }

                return this;
            }
        });

        Observe.List = list;
        Observe.setup = function() {
            can.Construct.setup.apply(this, arguments);
            // I would prefer not to do it this way. It should
            // be using the attributes plugin to do this type of conversion.
            this.List = Observe.List({
                Observe: this
            }, {});
        }
        return Observe;
    })(__m3, __m1);

    // ## can/model/model.js
    var __m8 = (function(can) {

        // ## model.js  
        // `can.Model`  
        // _A `can.Observe` that connects to a RESTful interface._
        // Generic deferred piping function

        var pipe = function(def, model, func) {
            var d = new can.Deferred();
            def.then(function() {
                var args = can.makeArray(arguments);
                args[0] = model[func](args[0]);
                d.resolveWith(d, args);
            }, function() {
                d.rejectWith(this, arguments);
            });

            if (typeof def.abort === 'function') {
                d.abort = function() {
                    return def.abort();
                }
            }

            return d;
        },
            modelNum = 0,
            ignoreHookup = /change.observe\d+/,
            getId = function(inst) {
                // Instead of using attr, use __get for performance.
                // Need to set reading
                can.Observe.__reading && can.Observe.__reading(inst, inst.constructor.id)
                return inst.__get(inst.constructor.id);
            },
            // Ajax `options` generator function
            ajax = function(ajaxOb, data, type, dataType, success, error) {

                var params = {};

                // If we get a string, handle it.
                if (typeof ajaxOb == "string") {
                    // If there's a space, it's probably the type.
                    var parts = ajaxOb.split(/\s+/);
                    params.url = parts.pop();
                    if (parts.length) {
                        params.type = parts.pop();
                    }
                } else {
                    can.extend(params, ajaxOb);
                }

                // If we are a non-array object, copy to a new attrs.
                params.data = typeof data == "object" && !can.isArray(data) ?
                    can.extend(params.data || {}, data) : data;

                // Get the url with any templated values filled out.
                params.url = can.sub(params.url, params.data, true);

                return can.ajax(can.extend({
                    type: type || "post",
                    dataType: dataType || "json",
                    success: success,
                    error: error
                }, params));
            },
            makeRequest = function(self, type, success, error, method) {
                var args;
                // if we pass an array as `self` it it means we are coming from
                // the queued request, and we're passing already serialized data
                // self's signature will be: [self, serializedData]
                if (can.isArray(self)) {
                    args = self[1];
                    self = self[0];
                } else {
                    args = self.serialize();
                }
                args = [args];
                var deferred,
                    // The model.
                    model = self.constructor,
                    jqXHR;

                // `destroy` does not need data.
                if (type == 'destroy') {
                    args.shift();
                }
                // `update` and `destroy` need the `id`.
                if (type !== 'create') {
                    args.unshift(getId(self));
                }


                jqXHR = model[type].apply(model, args);

                deferred = jqXHR.pipe(function(data) {
                    self[method || type + "d"](data, jqXHR);
                    return self;
                });

                // Hook up `abort`
                if (jqXHR.abort) {
                    deferred.abort = function() {
                        jqXHR.abort();
                    };
                }

                deferred.then(success, error);
                return deferred;
            },

            // This object describes how to make an ajax request for each ajax method.  
            // The available properties are:
            //		`url` - The default url to use as indicated as a property on the model.
            //		`type` - The default http request type
            //		`data` - A method that takes the `arguments` and returns `data` used for ajax.

            ajaxMethods = {

                create: {
                    url: "_shortName",
                    type: "post"
                },

                update: {
                    data: function(id, attrs) {
                        attrs = attrs || {};
                        var identity = this.id;
                        if (attrs[identity] && attrs[identity] !== id) {
                            attrs["new" + can.capitalize(id)] = attrs[identity];
                            delete attrs[identity];
                        }
                        attrs[identity] = id;
                        return attrs;
                    },
                    type: "put"
                },

                destroy: {
                    type: "delete",
                    data: function(id) {
                        var args = {};
                        args.id = args[this.id] = id;
                        return args;
                    }
                },

                findAll: {
                    url: "_shortName"
                },

                findOne: {}
            },
            // Makes an ajax request `function` from a string.
            //		`ajaxMethod` - The `ajaxMethod` object defined above.
            //		`str` - The string the user provided. Ex: `findAll: "/recipes.json"`.
            ajaxMaker = function(ajaxMethod, str) {
                // Return a `function` that serves as the ajax method.
                return function(data) {
                    // If the ajax method has it's own way of getting `data`, use that.
                    data = ajaxMethod.data ?
                        ajaxMethod.data.apply(this, arguments) :
                    // Otherwise use the data passed in.
                    data;
                    // Return the ajax method with `data` and the `type` provided.
                    return ajax(str || this[ajaxMethod.url || "_url"], data, ajaxMethod.type || "get")
                }
            }



        can.Model = can.Observe({
            fullName: "can.Model",
            setup: function(base) {
                // create store here if someone wants to use model without inheriting from it
                this.store = {};
                can.Observe.setup.apply(this, arguments);
                // Set default list as model list
                if (!can.Model) {
                    return;
                }
                this.List = ML({
                    Observe: this
                }, {});
                var self = this,
                    clean = can.proxy(this._clean, self);


                // go through ajax methods and set them up
                can.each(ajaxMethods, function(method, name) {
                    // if an ajax method is not a function, it's either
                    // a string url like findAll: "/recipes" or an
                    // ajax options object like {url: "/recipes"}
                    if (!can.isFunction(self[name])) {
                        // use ajaxMaker to convert that into a function
                        // that returns a deferred with the data
                        self[name] = ajaxMaker(method, self[name]);
                    }
                    // check if there's a make function like makeFindAll
                    // these take deferred function and can do special
                    // behavior with it (like look up data in a store)
                    if (self["make" + can.capitalize(name)]) {
                        // pass the deferred method to the make method to get back
                        // the "findAll" method.
                        var newMethod = self["make" + can.capitalize(name)](self[name]);
                        can.Construct._overwrite(self, base, name, function() {
                            // increment the numer of requests
                            this._reqs++;
                            var def = newMethod.apply(this, arguments);
                            var then = def.then(clean, clean);
                            then.abort = def.abort;

                            // attach abort to our then and return it
                            return then;
                        })
                    }
                });

                if (self.fullName == "can.Model" || !self.fullName) {
                    self.fullName = "Model" + (++modelNum);
                }
                // Add ajax converters.
                this._reqs = 0;
                this._url = this._shortName + "/{" + this.id + "}"
            },
            _ajax: ajaxMaker,
            _makeRequest: makeRequest,
            _clean: function() {
                this._reqs--;
                if (!this._reqs) {
                    for (var id in this.store) {
                        if (!this.store[id]._bindings) {
                            delete this.store[id];
                        }
                    }
                }
                return arguments[0];
            },

            models: function(instancesRawData, oldList) {

                if (!instancesRawData) {
                    return;
                }

                if (instancesRawData instanceof this.List) {
                    return instancesRawData;
                }

                // Get the list type.
                var self = this,
                    tmp = [],
                    res = oldList instanceof can.Observe.List ? oldList : new(self.List || ML),
                    // Did we get an `array`?
                    arr = can.isArray(instancesRawData),

                    // Did we get a model list?
                    ml = (instancesRawData instanceof ML),

                    // Get the raw `array` of objects.
                    raw = arr ?

                    // If an `array`, return the `array`.
                    instancesRawData :

                    // Otherwise if a model list.
                    (ml ?

                    // Get the raw objects from the list.
                    instancesRawData.serialize() :

                    // Get the object's data.
                    instancesRawData.data),
                    i = 0;



                if (res.length) {
                    res.splice(0);
                }

                can.each(raw, function(rawPart) {
                    tmp.push(self.model(rawPart));
                });

                // We only want one change event so push everything at once
                res.push.apply(res, tmp);

                if (!arr) { // Push other stuff onto `array`.
                    can.each(instancesRawData, function(val, prop) {
                        if (prop !== 'data') {
                            res.attr(prop, val);
                        }
                    })
                }
                return res;
            },

            model: function(attributes) {
                if (!attributes) {
                    return;
                }
                if (attributes instanceof this) {
                    attributes = attributes.serialize();
                }
                var id = attributes[this.id],
                    model = (id || id === 0) && this.store[id] ?
                        this.store[id].attr(attributes, this.removeAttr || false) : new this(attributes);
                if (this._reqs) {
                    this.store[attributes[this.id]] = model;
                }
                return model;
            }
        },

        {

            isNew: function() {
                var id = getId(this);
                return !(id || id === 0); // If `null` or `undefined`
            },

            save: function(success, error) {
                return makeRequest(this, this.isNew() ? 'create' : 'update', success, error);
            },

            destroy: function(success, error) {
                if (this.isNew()) {
                    var self = this;
                    return can.Deferred().done(function(data) {
                        self.destroyed(data)
                    }).resolve(self);
                }
                return makeRequest(this, 'destroy', success, error, 'destroyed');
            },

            bind: function(eventName) {
                if (!ignoreHookup.test(eventName)) {
                    if (!this._bindings) {
                        this.constructor.store[this.__get(this.constructor.id)] = this;
                        this._bindings = 0;
                    }
                    this._bindings++;
                }

                return can.Observe.prototype.bind.apply(this, arguments);
            },

            unbind: function(eventName) {
                if (!ignoreHookup.test(eventName)) {
                    this._bindings--;
                    if (!this._bindings) {
                        delete this.constructor.store[getId(this)];
                    }
                }
                return can.Observe.prototype.unbind.apply(this, arguments);
            },
            // Change `id`.
            ___set: function(prop, val) {
                can.Observe.prototype.___set.call(this, prop, val)
                // If we add an `id`, move it to the store.
                if (prop === this.constructor.id && this._bindings) {
                    this.constructor.store[getId(this)] = this;
                }
            }
        });

        can.each({
            makeFindAll: "models",
            makeFindOne: "model"
        }, function(method, name) {
            can.Model[name] = function(oldFind) {
                return function(params, success, error) {
                    var def = pipe(oldFind.call(this, params), this, method);
                    def.then(success, error);
                    // return the original promise
                    return def;
                };
            };
        });

        can.each([

            "created",

            "updated",

            "destroyed"
        ], function(funcName) {
            can.Model.prototype[funcName] = function(attrs) {
                var stub,
                    constructor = this.constructor;

                // Update attributes if attributes have been passed
                stub = attrs && typeof attrs == 'object' && this.attr(attrs.attr ? attrs.attr() : attrs);

                // Call event on the instance
                can.trigger(this, funcName);

                // triggers change event that bubble's like
                // handler( 'change','1.destroyed' ). This is used
                // to remove items on destroyed from Model Lists.
                // but there should be a better way.
                can.trigger(this, "change", funcName)


                // Call event on the instance's Class
                can.trigger(constructor, funcName, this);
            };
        });

        // Model lists are just like `Observe.List` except that when their items are 
        // destroyed, it automatically gets removed from the list.

        var ML = can.Model.List = can.Observe.List({
            setup: function() {
                can.Observe.List.prototype.setup.apply(this, arguments);
                // Send destroy events.
                var self = this;
                this.bind('change', function(ev, how) {
                    if (/\w+\.destroyed/.test(how)) {
                        var index = self.indexOf(ev.target);
                        if (index != -1) {
                            self.splice(index, 1);
                        }
                    }
                })
            }
        })

        return can.Model;
    })(__m3, __m7);

    // ## can/view/view.js
    var __m9 = (function(can) {
        // ## view.js
        // `can.view`  
        // _Templating abstraction._

        var isFunction = can.isFunction,
            makeArray = can.makeArray,
            // Used for hookup `id`s.
            hookupId = 1,

            $view = can.view = function(view, data, helpers, callback) {
                // If helpers is a `function`, it is actually a callback.
                if (isFunction(helpers)) {
                    callback = helpers;
                    helpers = undefined;
                }

                var pipe = function(result) {
                    return $view.frag(result);
                },
                    // In case we got a callback, we need to convert the can.view.render
                    // result to a document fragment
                    wrapCallback = isFunction(callback) ? function(frag) {
                        callback(pipe(frag));
                    } : null,
                    // Get the result.
                    result = $view.render(view, data, helpers, wrapCallback),
                    deferred = can.Deferred();

                if (isFunction(result)) {
                    return result;
                }

                if (can.isDeferred(result)) {
                    result.then(function(result, data) {
                        deferred.resolve.call(deferred, pipe(result), data);
                    }, function() {
                        deferred.fail.apply(deferred, arguments);
                    });
                    return deferred;
                }

                // Convert it into a dom frag.
                return pipe(result);
            };

        can.extend($view, {
            // creates a frag and hooks it up all at once
            frag: function(result, parentNode) {
                return $view.hookup($view.fragment(result), parentNode);
            },

            // simply creates a frag
            // this is used internally to create a frag
            // insert it
            // then hook it up
            fragment: function(result) {
                var frag = can.buildFragment(result, document.body);
                // If we have an empty frag...
                if (!frag.childNodes.length) {
                    frag.appendChild(document.createTextNode(''));
                }
                return frag;
            },

            // Convert a path like string into something that's ok for an `element` ID.
            toId: function(src) {
                return can.map(src.toString().split(/\/|\./g), function(part) {
                    // Dont include empty strings in toId functions
                    if (part) {
                        return part;
                    }
                }).join("_");
            },

            hookup: function(fragment, parentNode) {
                var hookupEls = [],
                    id,
                    func;

                // Get all `childNodes`.
                can.each(fragment.childNodes ? can.makeArray(fragment.childNodes) : fragment, function(node) {
                    if (node.nodeType === 1) {
                        hookupEls.push(node);
                        hookupEls.push.apply(hookupEls, can.makeArray(node.getElementsByTagName('*')));
                    }
                });

                // Filter by `data-view-id` attribute.
                can.each(hookupEls, function(el) {
                    if (el.getAttribute && (id = el.getAttribute('data-view-id')) && (func = $view.hookups[id])) {
                        func(el, parentNode, id);
                        delete $view.hookups[id];
                        el.removeAttribute('data-view-id');
                    }
                });

                return fragment;
            },


            hookups: {},


            hook: function(cb) {
                $view.hookups[++hookupId] = cb;
                return " data-view-id='" + hookupId + "'";
            },


            cached: {},

            cachedRenderers: {},


            cache: true,


            register: function(info) {
                this.types["." + info.suffix] = info;
            },

            types: {},


            ext: ".ejs",


            registerScript: function() {},


            preload: function() {},


            render: function(view, data, helpers, callback) {
                // If helpers is a `function`, it is actually a callback.
                if (isFunction(helpers)) {
                    callback = helpers;
                    helpers = undefined;
                }

                // See if we got passed any deferreds.
                var deferreds = getDeferreds(data);

                if (deferreds.length) { // Does data contain any deferreds?
                    // The deferred that resolves into the rendered content...
                    var deferred = new can.Deferred(),
                        dataCopy = can.extend({}, data);

                    // Add the view request to the list of deferreds.
                    deferreds.push(get(view, true))

                    // Wait for the view and all deferreds to finish...
                    can.when.apply(can, deferreds).then(function(resolved) {
                        // Get all the resolved deferreds.
                        var objs = makeArray(arguments),
                            // Renderer is the last index of the data.
                            renderer = objs.pop(),
                            // The result of the template rendering with data.
                            result;

                        // Make data look like the resolved deferreds.
                        if (can.isDeferred(data)) {
                            dataCopy = usefulPart(resolved);
                        } else {
                            // Go through each prop in data again and
                            // replace the defferreds with what they resolved to.
                            for (var prop in data) {
                                if (can.isDeferred(data[prop])) {
                                    dataCopy[prop] = usefulPart(objs.shift());
                                }
                            }
                        }

                        // Get the rendered result.
                        result = renderer(dataCopy, helpers);

                        // Resolve with the rendered view.
                        deferred.resolve(result, dataCopy);

                        // If there's a `callback`, call it back with the result.
                        callback && callback(result, dataCopy);
                    }, function() {
                        deferred.reject.apply(deferred, arguments)
                    });
                    // Return the deferred...
                    return deferred;
                } else {
                    // No deferreds! Render this bad boy.
                    var response,
                        // If there's a `callback` function
                        async = isFunction(callback),
                        // Get the `view` type
                        deferred = get(view, async);

                    // If we are `async`...
                    if (async) {
                        // Return the deferred
                        response = deferred;
                        // And fire callback with the rendered result.
                        deferred.then(function(renderer) {
                            callback(data ? renderer(data, helpers) : renderer);
                        })
                    } else {
                        // if the deferred is resolved, call the cached renderer instead
                        // this is because it's possible, with recursive deferreds to
                        // need to render a view while its deferred is _resolving_.  A _resolving_ deferred
                        // is a deferred that was just resolved and is calling back it's success callbacks.
                        // If a new success handler is called while resoliving, it does not get fired by
                        // jQuery's deferred system.  So instead of adding a new callback
                        // we use the cached renderer.
                        // We also add __view_id on the deferred so we can look up it's cached renderer.
                        // In the future, we might simply store either a deferred or the cached result.
                        if (deferred.state() === "resolved" && deferred.__view_id) {
                            var currentRenderer = $view.cachedRenderers[deferred.__view_id];
                            return data ? currentRenderer(data, helpers) : currentRenderer;
                        } else {
                            // Otherwise, the deferred is complete, so
                            // set response to the result of the rendering.
                            deferred.then(function(renderer) {
                                response = data ? renderer(data, helpers) : renderer;
                            });
                        }
                    }

                    return response;
                }
            },


            registerView: function(id, text, type, def) {
                // Get the renderer function.
                var func = (type || $view.types[$view.ext]).renderer(id, text);
                def = def || new can.Deferred();

                // Cache if we are caching.
                if ($view.cache) {
                    $view.cached[id] = def;
                    def.__view_id = id;
                    $view.cachedRenderers[id] = func;
                }

                // Return the objects for the response's `dataTypes`
                // (in this case view).
                return def.resolve(func);
            }
        });

        // Makes sure there's a template, if not, have `steal` provide a warning.
        var checkText = function(text, url) {
            if (!text.length) {

                throw "can.view: No template or empty template:" + url;
            }
        },
            // `Returns a `view` renderer deferred.  
            // `url` - The url to the template.  
            // `async` - If the ajax request should be asynchronous.  
            // Returns a deferred.
            get = function(url, async) {
                var suffix = url.match(/\.[\w\d]+$/),
                    type,
                    // If we are reading a script element for the content of the template,
                    // `el` will be set to that script element.
                    el,
                    // A unique identifier for the view (used for caching).
                    // This is typically derived from the element id or
                    // the url for the template.
                    id,
                    // The ajax request used to retrieve the template content.
                    jqXHR;

                //If the url has a #, we assume we want to use an inline template
                //from a script element and not current page's HTML
                if (url.match(/^#/)) {
                    url = url.substr(1);
                }
                // If we have an inline template, derive the suffix from the `text/???` part.
                // This only supports `<script>` tags.
                if (el = document.getElementById(url)) {
                    suffix = "." + el.type.match(/\/(x\-)?(.+)/)[2];
                }

                // If there is no suffix, add one.
                if (!suffix && !$view.cached[url]) {
                    url += (suffix = $view.ext);
                }

                if (can.isArray(suffix)) {
                    suffix = suffix[0]
                }

                // Convert to a unique and valid id.
                id = $view.toId(url);

                // If an absolute path, use `steal` to get it.
                // You should only be using `//` if you are using `steal`.
                if (url.match(/^\/\//)) {
                    var sub = url.substr(2);
                    url = !window.steal ?
                        sub :
                        steal.config().root.mapJoin(sub);
                }

                // Set the template engine type.
                type = $view.types[suffix];

                // If it is cached, 
                if ($view.cached[id]) {
                    // Return the cached deferred renderer.
                    return $view.cached[id];

                    // Otherwise if we are getting this from a `<script>` element.
                } else if (el) {
                    // Resolve immediately with the element's `innerHTML`.
                    return $view.registerView(id, el.innerHTML, type);
                } else {
                    // Make an ajax request for text.
                    var d = new can.Deferred();
                    can.ajax({
                        async: async,
                        url: url,
                        dataType: "text",
                        error: function(jqXHR) {
                            checkText("", url);
                            d.reject(jqXHR);
                        },
                        success: function(text) {
                            // Make sure we got some text back.
                            checkText(text, url);
                            $view.registerView(id, text, type, d)
                        }
                    });
                    return d;
                }
            },
            // Gets an `array` of deferreds from an `object`.
            // This only goes one level deep.
            getDeferreds = function(data) {
                var deferreds = [];

                // pull out deferreds
                if (can.isDeferred(data)) {
                    return [data]
                } else {
                    for (var prop in data) {
                        if (can.isDeferred(data[prop])) {
                            deferreds.push(data[prop]);
                        }
                    }
                }
                return deferreds;
            },
            // Gets the useful part of a resolved deferred.
            // This is for `model`s and `can.ajax` that resolve to an `array`.
            usefulPart = function(resolved) {
                return can.isArray(resolved) && resolved[1] === 'success' ? resolved[0] : resolved
            };

        //!steal-pluginify-remove-start
        if (window.steal) {
            steal.type("view js", function(options, success, error) {
                var type = $view.types["." + options.type],
                    id = $view.toId(options.id);

                options.text = "steal('" + (type.plugin || "can/view/" + options.type) + "',function(can){return " + "can.view.preload('" + id + "'," + options.text + ");\n})";
                success();
            })
        }
        //!steal-pluginify-remove-end

        can.extend($view, {
            register: function(info) {
                this.types["." + info.suffix] = info;

                //!steal-pluginify-remove-start
                if (window.steal) {
                    steal.type(info.suffix + " view js", function(options, success, error) {
                        var type = $view.types["." + options.type],
                            id = $view.toId(options.id + '');

                        options.text = type.script(id, options.text)
                        success();
                    })
                };
                //!steal-pluginify-remove-end

                $view[info.suffix] = function(id, text) {
                    if (!text) {
                        // Return a nameless renderer
                        var renderer = function() {
                            return $view.frag(renderer.render.apply(this, arguments));
                        }
                        renderer.render = function() {
                            var renderer = info.renderer(null, id);
                            return renderer.apply(renderer, arguments);
                        }
                        return renderer;
                    }

                    $view.preload(id, info.renderer(id, text));
                    return can.view(id);
                }
            },
            registerScript: function(type, id, src) {
                return "can.view.preload('" + id + "'," + $view.types["." + type].script(id, src) + ");";
            },
            preload: function(id, renderer) {
                $view.cached[id] = new can.Deferred().resolve(function(data, helpers) {
                    return renderer.call(data, data, helpers);
                });

                function frag() {
                    return $view.frag(renderer.apply(this, arguments));
                }
                // expose the renderer for mustache
                frag.render = renderer;
                return frag;
            }

        });

        return can;
    })(__m3);

    // ## can/control/control.js
    var __m10 = (function(can) {
        // ## control.js
        // `can.Control`  
        // _Controller_

        // Binds an element, returns a function that unbinds.
        var bind = function(el, ev, callback) {

            can.bind.call(el, ev, callback);

            return function() {
                can.unbind.call(el, ev, callback);
            };
        },
            isFunction = can.isFunction,
            extend = can.extend,
            each = can.each,
            slice = [].slice,
            paramReplacer = /\{([^\}]+)\}/g,
            special = can.getObject("$.event.special", [can]) || {},

            // Binds an element, returns a function that unbinds.
            delegate = function(el, selector, ev, callback) {
                can.delegate.call(el, selector, ev, callback);
                return function() {
                    can.undelegate.call(el, selector, ev, callback);
                };
            },

            // Calls bind or unbind depending if there is a selector.
            binder = function(el, ev, callback, selector) {
                return selector ?
                    delegate(el, can.trim(selector), ev, callback) :
                    bind(el, ev, callback);
            },

            basicProcessor;


        var Control = can.Control = can.Construct(

        {
            // Setup pre-processes which methods are event listeners.

            setup: function() {

                // Allow contollers to inherit "defaults" from super-classes as it 
                // done in `can.Construct`
                can.Construct.setup.apply(this, arguments);

                // If you didn't provide a name, or are `control`, don't do anything.
                if (can.Control) {

                    // Cache the underscored names.
                    var control = this,
                        funcName;

                    // Calculate and cache actions.
                    control.actions = {};
                    for (funcName in control.prototype) {
                        if (control._isAction(funcName)) {
                            control.actions[funcName] = control._action(funcName);
                        }
                    }
                }
            },

            // Moves `this` to the first argument, wraps it with `jQuery` if it's an element
            _shifter: function(context, name) {

                var method = typeof name == "string" ? context[name] : name;

                if (!isFunction(method)) {
                    method = context[method];
                }

                return function() {
                    context.called = name;
                    return method.apply(context, [this.nodeName ? can.$(this) : this].concat(slice.call(arguments, 0)));
                };
            },

            // Return `true` if is an action.

            _isAction: function(methodName) {

                var val = this.prototype[methodName],
                    type = typeof val;
                // if not the constructor
                return (methodName !== 'constructor') &&
                // and is a function or links to a function
                (type == "function" || (type == "string" && isFunction(this.prototype[val]))) &&
                // and is in special, a processor, or has a funny character
                !! (special[methodName] || processors[methodName] || /[^\w]/.test(methodName));
            },
            // Takes a method name and the options passed to a control
            // and tries to return the data necessary to pass to a processor
            // (something that binds things).

            _action: function(methodName, options) {

                // If we don't have options (a `control` instance), we'll run this 
                // later.  
                paramReplacer.lastIndex = 0;
                if (options || !paramReplacer.test(methodName)) {
                    // If we have options, run sub to replace templates `{}` with a
                    // value from the options or the window
                    var convertedName = options ? can.sub(methodName, [options, window]) : methodName;
                    if (!convertedName) {
                        return null;
                    }
                    // If a `{}` template resolves to an object, `convertedName` will be
                    // an array
                    var arr = can.isArray(convertedName),

                        // Get the name
                        name = arr ? convertedName[1] : convertedName,

                        // Grab the event off the end
                        parts = name.split(/\s+/g),
                        event = parts.pop();

                    return {
                        processor: processors[event] || basicProcessor,
                        parts: [name, parts.join(" "), event],
                        delegate: arr ? convertedName[0] : undefined
                    };
                }
            },
            // An object of `{eventName : function}` pairs that Control uses to 
            // hook up events auto-magically.

            processors: {},
            // A object of name-value pairs that act as default values for a 
            // control instance

            defaults: {}
        },

        {
            // Sets `this.element`, saves the control in `data, binds event
            // handlers.

            setup: function(element, options) {

                var cls = this.constructor,
                    pluginname = cls.pluginName || cls._fullName,
                    arr;

                // Want the raw element here.
                this.element = can.$(element)

                if (pluginname && pluginname !== 'can_control') {
                    // Set element and `className` on element.
                    this.element.addClass(pluginname);
                }

                (arr = can.data(this.element, "controls")) || can.data(this.element, "controls", arr = []);
                arr.push(this);

                // Option merging.

                this.options = extend({}, cls.defaults, options);

                // Bind all event handlers.
                this.on();

                // Get's passed into `init`.

                return [this.element, this.options];
            },

            on: function(el, selector, eventName, func) {
                if (!el) {

                    // Adds bindings.
                    this.off();

                    // Go through the cached list of actions and use the processor 
                    // to bind
                    var cls = this.constructor,
                        bindings = this._bindings,
                        actions = cls.actions,
                        element = this.element,
                        destroyCB = can.Control._shifter(this, "destroy"),
                        funcName, ready;

                    for (funcName in actions) {
                        // Only push if we have the action and no option is `undefined`
                        if (actions.hasOwnProperty(funcName) &&
                            (ready = actions[funcName] || cls._action(funcName, this.options))) {
                            bindings.push(ready.processor(ready.delegate || element,
                                ready.parts[2], ready.parts[1], funcName, this));
                        }
                    }


                    // Setup to be destroyed...  
                    // don't bind because we don't want to remove it.
                    can.bind.call(element, "destroyed", destroyCB);
                    bindings.push(function(el) {
                        can.unbind.call(el, "destroyed", destroyCB);
                    });
                    return bindings.length;
                }

                if (typeof el == 'string') {
                    func = eventName;
                    eventName = selector;
                    selector = el;
                    el = this.element;
                }

                if (func === undefined) {
                    func = eventName;
                    eventName = selector;
                    selector = null;
                }

                if (typeof func == 'string') {
                    func = can.Control._shifter(this, func);
                }

                this._bindings.push(binder(el, eventName, func, selector));

                return this._bindings.length;
            },
            // Unbinds all event handlers on the controller.

            off: function() {
                var el = this.element[0]
                each(this._bindings || [], function(value) {
                    value(el);
                });
                // Adds bindings.
                this._bindings = [];
            },
            // Prepares a `control` for garbage collection

            destroy: function() {
                var Class = this.constructor,
                    pluginName = Class.pluginName || Class._fullName,
                    controls;

                // Unbind bindings.
                this.off();

                if (pluginName && pluginName !== 'can_control') {
                    // Remove the `className`.
                    this.element.removeClass(pluginName);
                }

                // Remove from `data`.
                controls = can.data(this.element, "controls");
                controls.splice(can.inArray(this, controls), 1);

                can.trigger(this, "destroyed"); // In case we want to know if the `control` is removed.

                this.element = null;
            }
        });

        var processors = can.Control.processors,
            // Processors do the binding.
            // They return a function that unbinds when called.  
            // The basic processor that binds events.
            basicProcessor = function(el, event, selector, methodName, control) {
                return binder(el, event, can.Control._shifter(control, methodName), selector);
            };

        // Set common events to be processed as a `basicProcessor`
        each(["change", "click", "contextmenu", "dblclick", "keydown", "keyup",
                "keypress", "mousedown", "mousemove", "mouseout", "mouseover",
                "mouseup", "reset", "resize", "scroll", "select", "submit", "focusin",
                "focusout", "mouseenter", "mouseleave",
            // #104 - Add touch events as default processors
            // TOOD feature detect?
            "touchstart", "touchmove", "touchcancel", "touchend", "touchleave"
        ], function(v) {
            processors[v] = basicProcessor;
        });

        return Control;
    })(__m3, __m1);

    // ## can/util/string/deparam/deparam.js
    var __m12 = (function(can) {

        // ## deparam.js  
        // `can.deparam`  
        // _Takes a string of name value pairs and returns a Object literal that represents those params._
        var digitTest = /^\d+$/,
            keyBreaker = /([^\[\]]+)|(\[\])/g,
            paramTest = /([^?#]*)(#.*)?$/,
            prep = function(str) {
                return decodeURIComponent(str.replace(/\+/g, " "));
            };


        can.extend(can, {

            deparam: function(params) {

                var data = {},
                    pairs, lastPart;

                if (params && paramTest.test(params)) {

                    pairs = params.split('&'),

                    can.each(pairs, function(pair) {

                        var parts = pair.split('='),
                            key = prep(parts.shift()),
                            value = prep(parts.join("=")),
                            current = data;

                        if (key) {
                            parts = key.match(keyBreaker);

                            for (var j = 0, l = parts.length - 1; j < l; j++) {
                                if (!current[parts[j]]) {
                                    // If what we are pointing to looks like an `array`
                                    current[parts[j]] = digitTest.test(parts[j + 1]) || parts[j + 1] == "[]" ? [] : {};
                                }
                                current = current[parts[j]];
                            }
                            lastPart = parts.pop();
                            if (lastPart == "[]") {
                                current.push(value);
                            } else {
                                current[lastPart] = value;
                            }
                        }
                    });
                }
                return data;
            }
        });
        return can;
    })(__m3, __m2);

    // ## can/route/route.js
    var __m11 = (function(can) {

        // ## route.js  
        // `can.route`  
        // _Helps manage browser history (and client state) by synchronizing the 
        // `window.location.hash` with a `can.Observe`._  
        // Helper methods used for matching routes.
        var
        // `RegExp` used to match route variables of the type ':name'.
        // Any word character or a period is matched.
        matcher = /\:([\w\.]+)/g,
            // Regular expression for identifying &amp;key=value lists.
            paramsMatcher = /^(?:&[^=]+=[^&]*)+/,
            // Converts a JS Object into a list of parameters that can be 
            // inserted into an html element tag.
            makeProps = function(props) {
                var tags = [];
                can.each(props, function(val, name) {
                    tags.push((name === 'className' ? 'class' : name) + '="' +
                        (name === "href" ? val : can.esc(val)) + '"');
                });
                return tags.join(" ");
            },
            // Checks if a route matches the data provided. If any route variable
            // is not present in the data, the route does not match. If all route
            // variables are present in the data, the number of matches is returned 
            // to allow discerning between general and more specific routes. 
            matchesData = function(route, data) {
                var count = 0,
                    i = 0,
                    defaults = {};
                // look at default values, if they match ...
                for (var name in route.defaults) {
                    if (route.defaults[name] === data[name]) {
                        // mark as matched
                        defaults[name] = 1;
                        count++;
                    }
                }
                for (; i < route.names.length; i++) {
                    if (!data.hasOwnProperty(route.names[i])) {
                        return -1;
                    }
                    if (!defaults[route.names[i]]) {
                        count++;
                    }

                }

                return count;
            },
            onready = !0,
            location = window.location,
            wrapQuote = function(str) {
                return (str + '').replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
            },
            each = can.each,
            extend = can.extend;

        can.route = function(url, defaults) {
            defaults = defaults || {};
            // Extract the variable names and replace with `RegExp` that will match
            // an atual URL with values.
            var names = [],
                test = url.replace(matcher, function(whole, name, i) {
                    names.push(name);
                    var next = "\\" + (url.substr(i + whole.length, 1) || can.route._querySeparator);
                    // a name without a default value HAS to have a value
                    // a name that has a default value can be empty
                    // The `\\` is for string-escaping giving single `\` for `RegExp` escaping.
                    return "([^" + next + "]" + (defaults[name] ? "*" : "+") + ")";
                });

            // Add route in a form that can be easily figured out.
            can.route.routes[url] = {
                // A regular expression that will match the route when variable values 
                // are present; i.e. for `:page/:type` the `RegExp` is `/([\w\.]*)/([\w\.]*)/` which
                // will match for any value of `:page` and `:type` (word chars or period).
                test: new RegExp("^" + test + "($|" + wrapQuote(can.route._querySeparator) + ")"),
                // The original URL, same as the index for this entry in routes.
                route: url,
                // An `array` of all the variable names in this route.
                names: names,
                // Default values provided for the variables.
                defaults: defaults,
                // The number of parts in the URL separated by `/`.
                length: url.split('/').length
            };
            return can.route;
        };

        extend(can.route, {

            _querySeparator: '&',
            _paramsMatcher: paramsMatcher,


            param: function(data, _setRoute) {
                // Check if the provided data keys match the names in any routes;
                // Get the one with the most matches.
                var route,
                    // Need to have at least 1 match.
                    matches = 0,
                    matchCount,
                    routeName = data.route,
                    propCount = 0;

                delete data.route;

                each(data, function() {
                    propCount++;
                });
                // Otherwise find route.
                each(can.route.routes, function(temp, name) {
                    // best route is the first with all defaults matching


                    matchCount = matchesData(temp, data);
                    if (matchCount > matches) {
                        route = temp;
                        matches = matchCount;
                    }
                    if (matchCount >= propCount) {
                        return false;
                    }
                });
                // If we have a route name in our `can.route` data, and it's
                // just as good as what currently matches, use that
                if (can.route.routes[routeName] && matchesData(can.route.routes[routeName], data) === matches) {
                    route = can.route.routes[routeName];
                }
                // If this is match...
                if (route) {
                    var cpy = extend({}, data),
                        // Create the url by replacing the var names with the provided data.
                        // If the default value is found an empty string is inserted.
                        res = route.route.replace(matcher, function(whole, name) {
                            delete cpy[name];
                            return data[name] === route.defaults[name] ? "" : encodeURIComponent(data[name]);
                        }),
                        after;
                    // Remove matching default values
                    each(route.defaults, function(val, name) {
                        if (cpy[name] === val) {
                            delete cpy[name];
                        }
                    });

                    // The remaining elements of data are added as 
                    // `&amp;` separated parameters to the url.
                    after = can.param(cpy);
                    // if we are paraming for setting the hash
                    // we also want to make sure the route value is updated
                    if (_setRoute) {
                        can.route.attr('route', route.route);
                    }
                    return res + (after ? can.route._querySeparator + after : "");
                }
                // If no route was found, there is no hash URL, only paramters.
                return can.isEmptyObject(data) ? "" : can.route._querySeparator + can.param(data);
            },

            deparam: function(url) {
                // See if the url matches any routes by testing it against the `route.test` `RegExp`.
                // By comparing the URL length the most specialized route that matches is used.
                var route = {
                    length: -1
                };
                each(can.route.routes, function(temp, name) {
                    if (temp.test.test(url) && temp.length > route.length) {
                        route = temp;
                    }
                });
                // If a route was matched.
                if (route.length > -1) {

                    var // Since `RegExp` backreferences are used in `route.test` (parens)
                    // the parts will contain the full matched string and each variable (back-referenced) value.
                    parts = url.match(route.test),
                        // Start will contain the full matched string; parts contain the variable values.
                        start = parts.shift(),
                        // The remainder will be the `&amp;key=value` list at the end of the URL.
                        remainder = url.substr(start.length - (parts[parts.length - 1] === can.route._querySeparator ? 1 : 0)),
                        // If there is a remainder and it contains a `&amp;key=value` list deparam it.
                        obj = (remainder && can.route._paramsMatcher.test(remainder)) ? can.deparam(remainder.slice(1)) : {};

                    // Add the default values for this route.
                    obj = extend(true, {}, route.defaults, obj);
                    // Overwrite each of the default values in `obj` with those in 
                    // parts if that part is not empty.
                    each(parts, function(part, i) {
                        if (part && part !== can.route._querySeparator) {
                            obj[route.names[i]] = decodeURIComponent(part);
                        }
                    });
                    obj.route = route.route;
                    return obj;
                }
                // If no route was matched, it is parsed as a `&amp;key=value` list.
                if (url.charAt(0) !== can.route._querySeparator) {
                    url = can.route._querySeparator + url;
                }
                return can.route._paramsMatcher.test(url) ? can.deparam(url.slice(1)) : {};
            },

            data: new can.Observe({}),

            routes: {},

            ready: function(val) {
                if (val === false) {
                    onready = val;
                }
                if (val === true || onready === true) {
                    can.route._setup();
                    setState();
                }
                return can.route;
            },

            url: function(options, merge) {
                if (merge) {
                    options = extend({}, curParams, options)
                }
                return "#!" + can.route.param(options);
            },

            link: function(name, options, props, merge) {
                return "<a " + makeProps(
                    extend({
                    href: can.route.url(options, merge)
                }, props)) + ">" + name + "</a>";
            },

            current: function(options) {
                return location.hash == "#!" + can.route.param(options)
            },
            _setup: function() {
                // If the hash changes, update the `can.route.data`.
                can.bind.call(window, 'hashchange', setState);
            },
            _getHash: function() {
                return location.href.split(/#!?/)[1] || "";
            },
            _setHash: function(serialized) {
                var path = (can.route.param(serialized, true));
                location.hash = "#!" + path;
                return path;
            }
        });


        // The functions in the following list applied to `can.route` (e.g. `can.route.attr('...')`) will
        // instead act on the `can.route.data` observe.
        each(['bind', 'unbind', 'delegate', 'undelegate', 'attr', 'removeAttr'], function(name) {
            can.route[name] = function() {
                return can.route.data[name].apply(can.route.data, arguments)
            }
        })

        var // A ~~throttled~~ debounced function called multiple times will only fire once the
        // timer runs down. Each call resets the timer.
        timer,
            // Intermediate storage for `can.route.data`.
            curParams,
            // Deparameterizes the portion of the hash of interest and assign the
            // values to the `can.route.data` removing existing values no longer in the hash.
            // setState is called typically by hashchange which fires asynchronously
            // So it's possible that someone started changing the data before the 
            // hashchange event fired.  For this reason, it will not set the route data
            // if the data is changing or the hash already matches the hash that was set.
            setState = can.route.setState = function() {
                var hash = can.route._getHash();
                curParams = can.route.deparam(hash);

                // if the hash data is currently changing, or
                // the hash is what we set it to anyway, do NOT change the hash
                if (!changingData || hash !== lastHash) {
                    can.route.attr(curParams, true);
                }
            },
            // The last hash caused by a data change
            lastHash,
            // Are data changes pending that haven't yet updated the hash
            changingData;

        // If the `can.route.data` changes, update the hash.
        // Using `.serialize()` retrieves the raw data contained in the `observable`.
        // This function is ~~throttled~~ debounced so it only updates once even if multiple values changed.
        // This might be able to use batchNum and avoid this.
        can.route.bind("change", function(ev, attr) {
            // indicate that data is changing
            changingData = 1;
            clearTimeout(timer);
            timer = setTimeout(function() {
                // indicate that the hash is set to look like the data
                changingData = 0;
                var serialized = can.route.data.serialize();

                lastHash = can.route._setHash(serialized);
            }, 1);
        });
        // `onready` event...
        can.bind.call(document, "ready", can.route.ready);

        // Libraries other than jQuery don't execute the document `ready` listener
        // if we are already DOM ready
        if ((document.readyState === 'complete' || document.readyState === "interactive") && onready) {
            can.route.ready();
        }

        // extend route to have a similar property 
        // that is often checked in mustache to determine
        // an object's observability
        can.route.constructor.canMakeObserve = can.Observe.canMakeObserve;

        return can.route;
    })(__m3, __m7, __m12);

    // ## can/control/route/route.js
    var __m13 = (function(can) {

        // ## control/route.js  
        // _Controller route integration._

        can.Control.processors.route = function(el, event, selector, funcName, controller) {
            selector = selector || "";
            can.route(selector);
            var batchNum,
                check = function(ev, attr, how) {
                    if (can.route.attr('route') === (selector) &&
                        (ev.batchNum === undefined || ev.batchNum !== batchNum)) {

                        batchNum = ev.batchNum;

                        var d = can.route.attr();
                        delete d.route;
                        if (can.isFunction(controller[funcName])) {
                            controller[funcName](d);
                        } else {
                            controller[controller[funcName]](d);
                        }

                    }
                };
            can.route.bind('change', check);
            return function() {
                can.route.unbind('change', check);
            };
        };

        return can;
    })(__m3, __m11, __m10);

    // ## can/view/scanner.js
    var __m15 = (function(can) {

        var newLine = /(\r|\n)+/g,
            tagToContentPropMap = {
                option: "textContent",
                textarea: "value"
            },
            // Escapes characters starting with `\`.
            clean = function(content) {
                return content
                    .split('\\').join("\\\\")
                    .split("\n").join("\\n")
                    .split('"').join('\\"')
                    .split("\t").join("\\t");
            },
            reverseTagMap = {
                tr: "tbody",
                option: "select",
                td: "tr",
                th: "tr",
                li: "ul"
            },
            // Returns a tagName to use as a temporary placeholder for live content
            // looks forward ... could be slow, but we only do it when necessary
            getTag = function(tagName, tokens, i) {
                // if a tagName is provided, use that
                if (tagName) {
                    return tagName;
                } else {
                    // otherwise go searching for the next two tokens like "<",TAG
                    while (i < tokens.length) {
                        if (tokens[i] == "<" && reverseTagMap[tokens[i + 1]]) {
                            return reverseTagMap[tokens[i + 1]];
                        }
                        i++;
                    }
                }
                return '';
            },
            bracketNum = function(content) {
                return (--content.split("{").length) - (--content.split("}").length);
            },
            myEval = function(script) {
                eval(script);
            },
            attrReg = /([^\s]+)[\s]*=[\s]*$/,
            // Commands for caching.
            startTxt = 'var ___v1ew = [];',
            finishTxt = "return ___v1ew.join('')",
            put_cmd = "___v1ew.push(",
            insert_cmd = put_cmd,
            // Global controls (used by other functions to know where we are).
            // Are we inside a tag?
            htmlTag = null,
            // Are we within a quote within a tag?
            quote = null,
            // What was the text before the current quote? (used to get the `attr` name)
            beforeQuote = null,
            // Whether a rescan is in progress
            rescan = null,
            // Used to mark where the element is.
            status = function() {
                // `t` - `1`.
                // `h` - `0`.
                // `q` - String `beforeQuote`.
                return quote ? "'" + beforeQuote.match(attrReg)[1] + "'" : (htmlTag ? 1 : 0);
            };

        can.view.Scanner = Scanner = function(options) {
            // Set options on self
            can.extend(this, {
                text: {},
                tokens: []
            }, options);

            // Cache a token lookup
            this.tokenReg = [];
            this.tokenSimple = {
                "<": "<",
                ">": ">",
                '"': '"',
                "'": "'"
            };
            this.tokenComplex = [];
            this.tokenMap = {};
            for (var i = 0, token; token = this.tokens[i]; i++) {


                // Save complex mappings (custom regexp)
                if (token[2]) {
                    this.tokenReg.push(token[2]);
                    this.tokenComplex.push({
                        abbr: token[1],
                        re: new RegExp(token[2]),
                        rescan: token[3]
                    });
                }
                // Save simple mappings (string only, no regexp)
                else {
                    this.tokenReg.push(token[1]);
                    this.tokenSimple[token[1]] = token[0];
                }
                this.tokenMap[token[0]] = token[1];
            }

            // Cache the token registry.
            this.tokenReg = new RegExp("(" + this.tokenReg.slice(0).concat(["<", ">", '"', "'"]).join("|") + ")", "g");
        };

        Scanner.prototype = {

            helpers: [

                {
                    name: /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
                    fn: function(content) {
                        var quickFunc = /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
                            parts = content.match(quickFunc);

                        return "function(__){var " + parts[1] + "=can.$(__);" + parts[2] + "}";
                    }
                }
            ],

            scan: function(source, name) {
                var tokens = [],
                    last = 0,
                    simple = this.tokenSimple,
                    complex = this.tokenComplex;

                source = source.replace(newLine, "\n");
                source.replace(this.tokenReg, function(whole, part) {
                    // offset is the second to last argument
                    var offset = arguments[arguments.length - 2];

                    // if the next token starts after the last token ends
                    // push what's in between
                    if (offset > last) {
                        tokens.push(source.substring(last, offset));
                    }

                    // push the simple token (if there is one)
                    if (simple[whole]) {
                        tokens.push(whole);
                    }
                    // otherwise lookup complex tokens
                    else {
                        for (var i = 0, token; token = complex[i]; i++) {
                            if (token.re.test(whole)) {
                                tokens.push(token.abbr);
                                // Push a rescan function if one exists
                                if (token.rescan) {
                                    tokens.push(token.rescan(part));
                                }
                                break;
                            }
                        }
                    }

                    // update the position of the last part of the last token
                    last = offset + part.length;
                });

                // if there's something at the end, add it
                if (last < source.length) {
                    tokens.push(source.substr(last));
                }

                var content = '',
                    buff = [startTxt + (this.text.start || '')],
                    // Helper `function` for putting stuff in the view concat.
                    put = function(content, bonus) {
                        buff.push(put_cmd, '"', clean(content), '"' + (bonus || '') + ');');
                    },
                    // A stack used to keep track of how we should end a bracket
                    // `}`.  
                    // Once we have a `<%= %>` with a `leftBracket`,
                    // we store how the file should end here (either `))` or `;`).
                    endStack = [],
                    // The last token, used to remember which tag we are in.
                    lastToken,
                    // The corresponding magic tag.
                    startTag = null,
                    // Was there a magic tag inside an html tag?
                    magicInTag = false,
                    // The current tag name.
                    tagName = '',
                    // stack of tagNames
                    tagNames = [],
                    // Pop from tagNames?
                    popTagName = false,
                    // Declared here.
                    bracketCount,
                    i = 0,
                    token,
                    tmap = this.tokenMap;

                // Reinitialize the tag state goodness.
                htmlTag = quote = beforeQuote = null;

                for (;
                (token = tokens[i++]) !== undefined;) {
                    if (startTag === null) {
                        switch (token) {
                            case tmap.left:
                            case tmap.escapeLeft:
                            case tmap.returnLeft:
                                magicInTag = htmlTag && 1;
                            case tmap.commentLeft:
                                // A new line -- just add whatever content within a clean.  
                                // Reset everything.
                                startTag = token;
                                if (content.length) {
                                    put(content);
                                }
                                content = '';
                                break;
                            case tmap.escapeFull:
                                // This is a full line escape (a line that contains only whitespace and escaped logic)
                                // Break it up into escape left and right
                                magicInTag = htmlTag && 1;
                                rescan = 1;
                                startTag = tmap.escapeLeft;
                                if (content.length) {
                                    put(content);
                                }
                                rescan = tokens[i++];
                                content = rescan.content || rescan;
                                if (rescan.before) {
                                    put(rescan.before);
                                }
                                tokens.splice(i, 0, tmap.right);
                                break;
                            case tmap.commentFull:
                                // Ignore full line comments.
                                break;
                            case tmap.templateLeft:
                                content += tmap.left;
                                break;
                            case '<':
                                // Make sure we are not in a comment.
                                if (tokens[i].indexOf("!--") !== 0) {
                                    htmlTag = 1;
                                    magicInTag = 0;
                                }
                                content += token;
                                break;
                            case '>':
                                htmlTag = 0;
                                // content.substr(-1) doesn't work in IE7/8
                                var emptyElement = content.substr(content.length - 1) == "/" || content.substr(content.length - 2) == "--";
                                // if there was a magic tag
                                // or it's an element that has text content between its tags, 
                                // but content is not other tags add a hookup
                                // TODO: we should only add `can.EJS.pending()` if there's a magic tag 
                                // within the html tags.
                                if (magicInTag || !popTagName && tagToContentPropMap[tagNames[tagNames.length - 1]]) {
                                    // make sure / of /> is on the left of pending
                                    if (emptyElement) {
                                        put(content.substr(0, content.length - 1), ",can.view.pending(),\"/>\"");
                                    } else {
                                        put(content, ",can.view.pending(),\">\"");
                                    }
                                    content = '';
                                    magicInTag = 0;
                                } else {
                                    content += token;
                                }
                                // if it's a tag like <input/>
                                if (emptyElement || popTagName) {
                                    // remove the current tag in the stack
                                    tagNames.pop();
                                    // set the current tag to the previous parent
                                    tagName = tagNames[tagNames.length - 1];
                                    // Don't pop next time
                                    popTagName = false;
                                }
                                break;
                            case "'":
                            case '"':
                                // If we are in an html tag, finding matching quotes.
                                if (htmlTag) {
                                    // We have a quote and it matches.
                                    if (quote && quote === token) {
                                        // We are exiting the quote.
                                        quote = null;
                                        // Otherwise we are creating a quote.
                                        // TODO: does this handle `\`?
                                    } else if (quote === null) {
                                        quote = token;
                                        beforeQuote = lastToken;
                                    }
                                }
                            default:
                                // Track the current tag
                                if (lastToken === '<') {
                                    tagName = token.split(/\s/)[0];
                                    if (tagName.indexOf("/") === 0 && tagNames[tagNames.length - 1] === tagName.substr(1)) {
                                        // set tagName to the last tagName
                                        // if there are no more tagNames, we'll rely on getTag.
                                        tagName = tagNames[tagNames.length - 1];
                                        popTagName = true;
                                    } else {
                                        tagNames.push(tagName);
                                    }
                                }
                                content += token;
                                break;
                        }
                    } else {
                        // We have a start tag.
                        switch (token) {
                            case tmap.right:
                            case tmap.returnRight:
                                switch (startTag) {
                                    case tmap.left:
                                        // Get the number of `{ minus }`
                                        bracketCount = bracketNum(content);

                                        // We are ending a block.
                                        if (bracketCount == 1) {

                                            // We are starting on.
                                            buff.push(insert_cmd, "can.view.txt(0,'" + getTag(tagName, tokens, i) + "'," + status() + ",this,function(){", startTxt, content);

                                            endStack.push({
                                                before: "",
                                                after: finishTxt + "}));\n"
                                            });
                                        } else {

                                            // How are we ending this statement?
                                            last = // If the stack has value and we are ending a block...
                                            endStack.length && bracketCount == -1 ? // Use the last item in the block stack.
                                            endStack.pop() : // Or use the default ending.
                                            {
                                                after: ";"
                                            };

                                            // If we are ending a returning block, 
                                            // add the finish text which returns the result of the
                                            // block.
                                            if (last.before) {
                                                buff.push(last.before);
                                            }
                                            // Add the remaining content.
                                            buff.push(content, ";", last.after);
                                        }
                                        break;
                                    case tmap.escapeLeft:
                                    case tmap.returnLeft:
                                        // We have an extra `{` -> `block`.
                                        // Get the number of `{ minus }`.
                                        bracketCount = bracketNum(content);
                                        // If we have more `{`, it means there is a block.
                                        if (bracketCount) {
                                            // When we return to the same # of `{` vs `}` end with a `doubleParent`.
                                            endStack.push({
                                                before: finishTxt,
                                                after: "}));"
                                            });
                                        }

                                        var escaped = startTag === tmap.escapeLeft ? 1 : 0,
                                            commands = {
                                                insert: insert_cmd,
                                                tagName: getTag(tagName, tokens, i),
                                                status: status()
                                            };

                                        for (var ii = 0; ii < this.helpers.length; ii++) {
                                            // Match the helper based on helper
                                            // regex name value
                                            var helper = this.helpers[ii];
                                            if (helper.name.test(content)) {
                                                content = helper.fn(content, commands);

                                                // dont escape partials
                                                if (helper.name.source == /^>[\s]*\w*/.source) {
                                                    escaped = 0;
                                                }
                                                break;
                                            }
                                        }

                                        // Handle special cases
                                        if (typeof content == 'object') {
                                            if (content.raw) {
                                                buff.push(content.raw);
                                            }
                                        } else {
                                            // If we have `<%== a(function(){ %>` then we want
                                            // `can.EJS.text(0,this, function(){ return a(function(){ var _v1ew = [];`.
                                            buff.push(insert_cmd, "can.view.txt(" + escaped + ",'" + tagName + "'," + status() + ",this,function(){ " + (this.text.escape || '') + "return ", content,
                                            // If we have a block.
                                            bracketCount ?
                                            // Start with startTxt `"var _v1ew = [];"`.
                                            startTxt :
                                            // If not, add `doubleParent` to close push and text.
                                            "}));");
                                        }

                                        if (rescan && rescan.after && rescan.after.length) {
                                            put(rescan.after.length);
                                            rescan = null;
                                        }
                                        break;
                                }
                                startTag = null;
                                content = '';
                                break;
                            case tmap.templateLeft:
                                content += tmap.left;
                                break;
                            default:
                                content += token;
                                break;
                        }
                    }
                    lastToken = token;
                }

                // Put it together...
                if (content.length) {
                    // Should be `content.dump` in Ruby.
                    put(content);
                }
                buff.push(";");

                var template = buff.join(''),
                    out = {
                        out: 'with(_VIEW) { with (_CONTEXT) {' + template + " " + finishTxt + "}}"
                    };

                // Use `eval` instead of creating a function, because it is easier to debug.
                myEval.call(out, 'this.fn = (function(_CONTEXT,_VIEW){' + out.out + '});\r\n//@ sourceURL=' + name + ".js");

                return out;
            }
        };

        return Scanner;
    })(__m9);

    // ## can/observe/compute/compute.js
    var __m16 = (function(can) {

        // returns the
        // - observes and attr methods are called by func
        // - the value returned by func
        // ex: `{value: 100, observed: [{obs: o, attr: "completed"}]}`
        var getValueAndObserved = function(func, self) {

            var oldReading;
            if (can.Observe) {
                // Set a callback on can.Observe to know
                // when an attr is read.
                // Keep a reference to the old reader
                // if there is one.  This is used
                // for nested live binding.
                oldReading = can.Observe.__reading;
                can.Observe.__reading = function(obj, attr) {
                    // Add the observe and attr that was read
                    // to `observed`
                    observed.push({
                        obj: obj,
                        attr: attr
                    });
                };
            }

            var observed = [],
                // Call the "wrapping" function to get the value. `observed`
                // will have the observe/attribute pairs that were read.
                value = func.call(self);

            // Set back so we are no longer reading.
            if (can.Observe) {
                can.Observe.__reading = oldReading;
            }
            return {
                value: value,
                observed: observed
            };
        },
            // Calls `callback(newVal, oldVal)` everytime an observed property
            // called within `getterSetter` is changed and creates a new result of `getterSetter`.
            // Also returns an object that can teardown all event handlers.
            computeBinder = function(getterSetter, context, callback, computeState) {
                // track what we are observing
                var observing = {},
                    // a flag indicating if this observe/attr pair is already bound
                    matched = true,
                    // the data to return 
                    data = {
                        // we will maintain the value while live-binding is taking place
                        value: undefined,
                        // a teardown method that stops listening
                        teardown: function() {
                            for (var name in observing) {
                                var ob = observing[name];
                                ob.observe.obj.unbind(ob.observe.attr, onchanged);
                                delete observing[name];
                            }
                        }
                    },
                    batchNum;

                // when a property value is changed
                var onchanged = function(ev) {
                    // If the compute is no longer bound (because the same change event led to an unbind)
                    // then do not call getValueAndBind, or we will leak bindings.
                    if (computeState && !computeState.bound) {
                        return;
                    }
                    if (ev.batchNum === undefined || ev.batchNum !== batchNum) {
                        // store the old value
                        var oldValue = data.value,
                            // get the new value
                            newvalue = getValueAndBind();
                        // update the value reference (in case someone reads)
                        data.value = newvalue;
                        // if a change happened
                        if (newvalue !== oldValue) {
                            callback(newvalue, oldValue);
                        }
                        batchNum = batchNum = ev.batchNum;
                    }


                };

                // gets the value returned by `getterSetter` and also binds to any attributes
                // read by the call
                var getValueAndBind = function() {
                    var info = getValueAndObserved(getterSetter, context),
                        newObserveSet = info.observed;

                    var value = info.value;
                    matched = !matched;

                    // go through every attribute read by this observe
                    can.each(newObserveSet, function(ob) {
                        // if the observe/attribute pair is being observed
                        if (observing[ob.obj._cid + "|" + ob.attr]) {
                            // mark at as observed
                            observing[ob.obj._cid + "|" + ob.attr].matched = matched;
                        } else {
                            // otherwise, set the observe/attribute on oldObserved, marking it as being observed
                            observing[ob.obj._cid + "|" + ob.attr] = {
                                matched: matched,
                                observe: ob
                            };
                            ob.obj.bind(ob.attr, onchanged);
                        }
                    });

                    // Iterate through oldObserved, looking for observe/attributes
                    // that are no longer being bound and unbind them
                    for (var name in observing) {
                        var ob = observing[name];
                        if (ob.matched !== matched) {
                            ob.observe.obj.unbind(ob.observe.attr, onchanged);
                            delete observing[name];
                        }
                    }
                    return value;
                };
                // set the initial value
                data.value = getValueAndBind();
                data.isListening = !can.isEmptyObject(observing);
                return data;
            }

            // if no one is listening ... we can not calculate every time

        can.compute = function(getterSetter, context) {
            if (getterSetter && getterSetter.isComputed) {
                return getterSetter;
            }
            // get the value right away
            // TODO: eventually we can defer this until a bind or a read
            var computedData,
                bindings = 0,
                computed,
                canbind = true;
            if (typeof getterSetter === "function") {
                computed = function(value) {
                    if (value === undefined) {
                        // we are reading
                        if (computedData) {
                            // If another compute is calling this compute for the value,
                            // it needs to bind to this compute's change so it will re-compute
                            // and re-bind when this compute changes.
                            if (bindings && can.Observe.__reading) {
                                can.Observe.__reading(computed, 'change');
                            }
                            return computedData.value;
                        } else {
                            return getterSetter.call(context || this)
                        }
                    } else {
                        return getterSetter.apply(context || this, arguments)
                    }
                }

            } else {
                // we just gave it a value
                computed = function(val) {
                    if (val === undefined) {
                        // If observing, record that the value is being read.
                        if (can.Observe.__reading) {
                            can.Observe.__reading(computed, 'change');
                        }
                        return getterSetter;
                    } else {
                        var old = getterSetter;
                        getterSetter = val;
                        if (old !== val) {
                            can.Observe.triggerBatch(computed, "change", [val, old]);
                        }

                        return val;
                    }

                }
                canbind = false;
            }

            computed.isComputed = true;

            can.cid(computed, "compute")
            var computeState = {
                bound: false
            };

            computed.bind = function(ev, handler) {
                can.addEvent.apply(computed, arguments);
                if (bindings === 0 && canbind) {
                    computeState.bound = true;
                    // setup live-binding
                    computedData = computeBinder(getterSetter, context || this, function(newValue, oldValue) {
                        can.Observe.triggerBatch(computed, "change", [newValue, oldValue])
                    }, computeState);
                }
                bindings++;
            }

            computed.unbind = function(ev, handler) {
                can.removeEvent.apply(computed, arguments);
                bindings--;
                if (bindings === 0 && canbind) {
                    computedData.teardown();
                    computeState.bound = false;
                }

            };
            return computed;
        };
        can.compute.binder = computeBinder;
        return can.compute;
    })(__m3);

    // ## can/view/render.js
    var __m17 = (function(can) {
        // text node expando test
        var canExpando = true;
        try {
            document.createTextNode('')._ = 0;
        } catch (ex) {
            canExpando = false;
        }

        var attrMap = {
            "class": "className",
            "value": "value",
            "innerText": "innerText",
            "textContent": "textContent"
        },
            tagMap = {
                "": "span",
                table: "tbody",
                tr: "td",
                ol: "li",
                ul: "li",
                tbody: "tr",
                thead: "tr",
                tfoot: "tr",
                select: "option",
                optgroup: "option"
            },
            attributePlaceholder = '__!!__',
            attributeReplace = /__!!__/g,
            tagToContentPropMap = {
                option: "textContent" in document.createElement("option") ? "textContent" : "innerText",
                textarea: "value"
            },
            bool = can.each(["checked", "disabled", "readonly", "required"], function(n) {
                attrMap[n] = n;
            }),
            // a helper to get the parentNode for a given element el
            // if el is in a documentFragment, it will return defaultParentNode
            getParentNode = function(el, defaultParentNode) {
                return defaultParentNode && el.parentNode.nodeType === 11 ? defaultParentNode : el.parentNode;
            },
            setAttr = function(el, attrName, val) {
                var tagName = el.nodeName.toString().toLowerCase(),
                    prop = attrMap[attrName];
                // if this is a special property
                if (prop) {
                    // set the value as true / false
                    el[prop] = can.inArray(attrName, bool) > -1 ? true : val;
                    if (prop === "value" && (tagName === "input" || tagName === "textarea")) {
                        el.defaultValue = val;
                    }
                } else {
                    el.setAttribute(attrName, val);
                }
            },
            getAttr = function(el, attrName) {
                // Default to a blank string for IE7/8
                return (attrMap[attrName] && el[attrMap[attrName]] ?
                    el[attrMap[attrName]] :
                    el.getAttribute(attrName)) || '';
            },
            removeAttr = function(el, attrName) {
                if (can.inArray(attrName, bool) > -1) {
                    el[attrName] = false;
                } else {
                    el.removeAttribute(attrName);
                }
            },
            pendingHookups = [],
            // Returns text content for anything other than a live-binding 
            contentText = function(input) {

                // If it's a string, return.
                if (typeof input == 'string') {
                    return input;
                }
                // If has no value, return an empty string.
                if (!input && input !== 0) {
                    return '';
                }

                // If it's an object, and it has a hookup method.
                var hook = (input.hookup &&

                // Make a function call the hookup method.

                function(el, id) {
                    input.hookup.call(input, el, id);
                }) ||

                // Or if it's a `function`, just use the input.
                (typeof input == 'function' && input);

                // Finally, if there is a `function` to hookup on some dom,
                // add it to pending hookups.
                if (hook) {
                    pendingHookups.push(hook);
                    return '';
                }

                // Finally, if all else is `false`, `toString()` it.
                return "" + input;
            },
            // Returns escaped/sanatized content for anything other than a live-binding
            contentEscape = function(txt) {
                return (typeof txt == 'string' || typeof txt == 'number') ?
                    can.esc(txt) :
                    contentText(txt);
            },
            // a mapping of element ids to nodeList ids
            nodeMap = {},
            // a mapping of ids to text nodes
            textNodeMap = {},
            // a mapping of nodeList ids to nodeList
            nodeListMap = {},
            expando = "ejs_" + Math.random(),
            _id = 0,
            id = function(node) {
                if (canExpando || node.nodeType !== 3) {
                    if (node[expando]) {
                        return node[expando];
                    } else {
                        return node[expando] = (node.nodeName ? "element_" : "obj_") + (++_id);
                    }
                } else {
                    for (var textNodeID in textNodeMap) {
                        if (textNodeMap[textNodeID] === node) {
                            return textNodeID;
                        }
                    }

                    textNodeMap["text_" + (++_id)] = node;
                    return "text_" + _id;
                }
            },
            // removes a nodeListId from a node's nodeListIds
            removeNodeListId = function(node, nodeListId) {
                var nodeListIds = nodeMap[id(node)];
                if (nodeListIds) {
                    var index = can.inArray(nodeListId, nodeListIds);

                    if (index >= 0) {
                        nodeListIds.splice(index, 1);
                    }
                    if (!nodeListIds.length) {
                        delete nodeMap[id(node)];
                    }
                }
            },
            addNodeListId = function(node, nodeListId) {
                var nodeListIds = nodeMap[id(node)];
                if (!nodeListIds) {
                    nodeListIds = nodeMap[id(node)] = [];
                }
                nodeListIds.push(nodeListId);
            },
            tagChildren = function(tagName) {
                var newTag = tagMap[tagName] || "span";
                if (newTag === "span") {
                    //innerHTML in IE doesn't honor leading whitespace after empty elements
                    return "@@!!@@";
                }
                return "<" + newTag + ">" + tagChildren(newTag) + "</" + newTag + ">";
            };

        can.extend(can.view, {

            pending: function() {
                // TODO, make this only run for the right tagName
                var hooks = pendingHookups.slice(0);
                lastHookups = hooks;
                pendingHookups = [];
                return can.view.hook(function(el) {
                    can.each(hooks, function(fn) {
                        fn(el);
                    });
                });
            },

            registerNode: function(nodeList) {
                var nLId = id(nodeList);
                nodeListMap[nLId] = nodeList;

                can.each(nodeList, function(node) {
                    addNodeListId(node, nLId);
                });
            },

            unregisterNode: function(nodeList) {
                var nLId = id(nodeList);
                can.each(nodeList, function(node) {
                    removeNodeListId(node, nLId);
                });
                delete nodeListMap[nLId];
            },


            txt: function(escape, tagName, status, self, func) {
                // call the "wrapping" function and get the binding information
                var binding = can.compute.binder(func, self, function(newVal, oldVal) {
                    // call the update method we will define for each
                    // type of attribute
                    update(newVal, oldVal);
                });

                // If we had no observes just return the value returned by func.
                if (!binding.isListening) {
                    return (escape || status !== 0 ? contentEscape : contentText)(binding.value);
                }

                // The following are helper methods or varaibles that will
                // be defined by one of the various live-updating schemes.
                // The parent element we are listening to for teardown
                var parentElement,
                    nodeList,
                    teardown = function() {
                        binding.teardown();
                        if (nodeList) {
                            can.view.unregisterNode(nodeList);
                        }
                    },
                    // if the parent element is removed, teardown the binding
                    setupTeardownOnDestroy = function(el) {
                        can.bind.call(el, 'destroyed', teardown);
                        parentElement = el;
                    },
                    // if there is no parent, undo bindings
                    teardownCheck = function(parent) {
                        if (!parent) {
                            teardown();
                            can.unbind.call(parentElement, 'destroyed', teardown);
                        }
                    },
                    // the tag type to insert
                    tag = (tagMap[tagName] || "span"),
                    // this will be filled in if binding.isListening
                    update,
                    // the property (instead of innerHTML elements) to adjust. For
                    // example options should use textContent
                    contentProp = tagToContentPropMap[tagName];


                // The magic tag is outside or between tags.
                if (status === 0 && !contentProp) {
                    // Return an element tag with a hookup in place of the content
                    return "<" + tag + can.view.hook(
                        escape ?
                    // If we are escaping, replace the parentNode with 
                    // a text node who's value is `func`'s return value.

                    function(el, parentNode) {
                        // updates the text of the text node
                        update = function(newVal) {
                            node.nodeValue = "" + newVal;
                            teardownCheck(node.parentNode);
                        };

                        var parent = getParentNode(el, parentNode),
                            node = document.createTextNode(binding.value);

                        // When iterating through an Observe.List with no DOM
                        // elements containing the individual items, the parent 
                        // is sometimes incorrect not the true parent of the 
                        // source element. (#153)
                        if (el.parentNode !== parent) {
                            parent = el.parentNode;
                            parent.insertBefore(node, el);
                            parent.removeChild(el);
                        } else {
                            parent.insertBefore(node, el);
                            parent.removeChild(el);
                        }
                        setupTeardownOnDestroy(parent);
                    } :
                    // If we are not escaping, replace the parentNode with a
                    // documentFragment created as with `func`'s return value.

                    function(span, parentNode) {
                        // updates the elements with the new content
                        update = function(newVal) {
                            // is this still part of the DOM?
                            var attached = nodes[0].parentNode;
                            // update the nodes in the DOM with the new rendered value
                            if (attached) {
                                makeAndPut(newVal);
                            }
                            teardownCheck(nodes[0].parentNode);
                        };

                        // make sure we have a valid parentNode
                        parentNode = getParentNode(span, parentNode);
                        // A helper function to manage inserting the contents
                        // and removing the old contents
                        var nodes,
                            makeAndPut = function(val) {
                                // create the fragment, but don't hook it up
                                // we need to insert it into the document first
                                var frag = can.view.frag(val, parentNode),
                                    // keep a reference to each node
                                    newNodes = can.makeArray(frag.childNodes),
                                    last = nodes ? nodes[nodes.length - 1] : span;

                                // Insert it in the `document` or `documentFragment`
                                if (last.nextSibling) {
                                    last.parentNode.insertBefore(frag, last.nextSibling);
                                } else {
                                    last.parentNode.appendChild(frag);
                                }
                                // nodes hasn't been set yet
                                if (!nodes) {
                                    can.remove(can.$(span));
                                    nodes = newNodes;
                                    // set the teardown nodeList
                                    nodeList = nodes;
                                    can.view.registerNode(nodes);
                                } else {
                                    // Update node Array's to point to new nodes
                                    // and then remove the old nodes.
                                    // It has to be in this order for Mootools
                                    // and IE because somehow, after an element
                                    // is removed from the DOM, it loses its
                                    // expando values.
                                    var nodesToRemove = can.makeArray(nodes);
                                    can.view.replace(nodes, newNodes);
                                    can.remove(can.$(nodesToRemove));
                                }
                            };
                        // nodes are the nodes that any updates will replace
                        // at this point, these nodes could be part of a documentFragment
                        makeAndPut(binding.value, [span]);

                        setupTeardownOnDestroy(parentNode);
                        //children have to be properly nested HTML for buildFragment to work properly
                    }) + ">" + tagChildren(tag) + "</" + tag + ">";
                    // In a tag, but not in an attribute
                } else if (status === 1) {
                    // remember the old attr name
                    var attrName = binding.value.replace(/['"]/g, '').split('=')[0];
                    pendingHookups.push(function(el) {
                        update = function(newVal) {
                            var parts = (newVal || "").replace(/['"]/g, '').split('='),
                                newAttrName = parts.shift();

                            // Remove if we have a change and used to have an `attrName`.
                            if ((newAttrName != attrName) && attrName) {
                                removeAttr(el, attrName);
                            }
                            // Set if we have a new `attrName`.
                            if (newAttrName) {
                                setAttr(el, newAttrName, parts.join('='));
                                attrName = newAttrName;
                            }
                        };
                        setupTeardownOnDestroy(el);
                    });

                    return binding.value;
                } else { // In an attribute...
                    var attributeName = status === 0 ? contentProp : status;
                    // if the magic tag is inside the element, like `<option><% TAG %></option>`,
                    // we add this hookup to the last element (ex: `option`'s) hookups.
                    // Otherwise, the magic tag is in an attribute, just add to the current element's
                    // hookups.
                    (status === 0 ? lastHookups : pendingHookups).push(function(el) {
                        // update will call this attribute's render method
                        // and set the attribute accordingly
                        update = function() {
                            setAttr(el, attributeName, hook.render(), contentProp);
                        };

                        var wrapped = can.$(el),
                            hooks;

                        // Get the list of hookups or create one for this element.
                        // Hooks is a map of attribute names to hookup `data`s.
                        // Each hookup data has:
                        // `render` - A `function` to render the value of the attribute.
                        // `funcs` - A list of hookup `function`s on that attribute.
                        // `batchNum` - The last event `batchNum`, used for performance.
                        hooks = can.data(wrapped, 'hooks');
                        if (!hooks) {
                            can.data(wrapped, 'hooks', hooks = {});
                        }

                        // Get the attribute value.
                        var attr = getAttr(el, attributeName, contentProp),
                            // Split the attribute value by the template.
                            // Only split out the first __!!__ so if we have multiple hookups in the same attribute, 
                            // they will be put in the right spot on first render
                            parts = attr.split(attributePlaceholder),
                            goodParts = [],
                            hook;
                        goodParts.push(parts.shift(),
                            parts.join(attributePlaceholder));

                        // If we already had a hookup for this attribute...
                        if (hooks[attributeName]) {
                            // Just add to that attribute's list of `function`s.
                            hooks[attributeName].bindings.push(binding);
                        } else {
                            // Create the hookup data.
                            hooks[attributeName] = {
                                render: function() {
                                    var i = 0,
                                        newAttr = attr.replace(attributeReplace, function() {
                                            return contentText(hook.bindings[i++].value);
                                        });
                                    return newAttr;
                                },
                                bindings: [binding],
                                batchNum: undefined
                            };
                        }

                        // Save the hook for slightly faster performance.
                        hook = hooks[attributeName];

                        // Insert the value in parts.
                        goodParts.splice(1, 0, binding.value);

                        // Set the attribute.
                        setAttr(el, attributeName, goodParts.join(""), contentProp);

                        // Bind on change.
                        //liveBind(observed, el, binder,oldObserved);
                        setupTeardownOnDestroy(el);
                    });
                    return attributePlaceholder;
                }
            },

            replace: function(oldNodeList, newNodes) {
                // for each node in the node list
                oldNodeList = can.makeArray(oldNodeList);

                can.each(oldNodeList, function(node) {
                    // for each nodeList the node is in
                    can.each(can.makeArray(nodeMap[id(node)]), function(nodeListId) {
                        var nodeList = nodeListMap[nodeListId],
                            startIndex = can.inArray(node, nodeList),
                            endIndex = can.inArray(oldNodeList[oldNodeList.length - 1], nodeList);

                        // remove this nodeListId from each node
                        if (startIndex >= 0 && endIndex >= 0) {
                            for (var i = startIndex; i <= endIndex; i++) {
                                var n = nodeList[i];
                                removeNodeListId(n, nodeListId);
                            }

                            // swap in new nodes into the nodeLIst
                            nodeList.splice.apply(nodeList, [startIndex, endIndex - startIndex + 1].concat(newNodes));

                            // tell these new nodes they belong to the nodeList
                            can.each(newNodes, function(node) {
                                addNodeListId(node, nodeListId);
                            });
                        } else {
                            can.view.unregisterNode(nodeList);
                        }
                    });
                });
            },

            canExpando: canExpando,
            // Node mappings
            textNodeMap: textNodeMap,
            nodeMap: nodeMap,
            nodeListMap: nodeListMap
        });

        return can;
    })(__m9, __m2);

    // ## can/view/mustache/mustache.js
    var __m14 = (function(can) {

        // # mustache.js
        // `can.Mustache`: The Mustache templating engine.
        // See the [Transformation](#section-29) section within *Scanning Helpers* for a detailed explanation 
        // of the runtime render code design. The majority of the Mustache engine implementation 
        // occurs within the *Transformation* scanning helper.

        // ## Initialization
        // Define the view extension.
        can.view.ext = ".mustache";

        // ### Setup internal helper variables and functions.
        // An alias for the context variable used for tracking a stack of contexts.
        // This is also used for passing to helper functions to maintain proper context.
        var CONTEXT = '___c0nt3xt',
            // An alias for the variable used for the hash object that can be passed
            // to helpers via `options.hash`.
            HASH = '___h4sh',
            // An alias for the function that adds a new context to the context stack.
            STACK = '___st4ck',
            STACKED = '___st4ck3d',
            // An alias for the most used context stacking call.
            CONTEXT_STACK = STACK + '(' + CONTEXT + ',this)',
            CONTEXT_OBJ = '{context:' + CONTEXT_STACK + ',options:options}',


            isObserve = function(obj) {
                return obj !== null && can.isFunction(obj.attr) && obj.constructor && !! obj.constructor.canMakeObserve;
            },


            isArrayLike = function(obj) {
                return obj && obj.splice && typeof obj.length == 'number';
            },

            // ## Mustache

            Mustache = function(options, helpers) {
                // Support calling Mustache without the constructor.
                // This returns a function that renders the template.
                if (this.constructor != Mustache) {
                    var mustache = new Mustache(options);
                    return function(data, options) {
                        return mustache.render(data, options);
                    };
                }

                // If we get a `function` directly, it probably is coming from
                // a `steal`-packaged view.
                if (typeof options == "function") {
                    this.template = {
                        fn: options
                    };
                    return;
                }

                // Set options on self.
                can.extend(this, options);
                this.template = this.scanner.scan(this.text, this.name);
            };


        // Put Mustache on the `can` object.
        can.Mustache = window.Mustache = Mustache;


        Mustache.prototype.

        render = function(object, options) {
            object = object || {};
            options = options || {};
            if (!options.helpers && !options.partials) {
                options.helpers = options;
            }
            return this.template.fn.call(object, object, {
                _data: object,
                options: options
            });
        };

        can.extend(Mustache.prototype, {
            // Share a singleton scanner for parsing templates.
            scanner: new can.view.Scanner({
                // A hash of strings for the scanner to inject at certain points.
                text: {
                    // This is the logic to inject at the beginning of a rendered template. 
                    // This includes initializing the `context` stack.
                    start: 'var ' + CONTEXT + ' = this && this.' + STACKED + ' ? this : [];' + CONTEXT + '.' + STACKED + ' = true;' + 'var ' + STACK + ' = function(context, self) {' + 'var s;' + 'if (arguments.length == 1 && context) {' + 's = !context.' + STACKED + ' ? [context] : context;' +
                    // Handle helpers with custom contexts (#228)
                    '} else if (!context.' + STACKED + ') {' + 's = [self, context];' + '} else if (context && context === self && context.' + STACKED + ') {' + 's = context.slice(0);' + '} else {' + 's = context && context.' + STACKED + ' ? context.concat([self]) : ' + STACK + '(context).concat([self]);' + '}' + 'return (s.' + STACKED + ' = true) && s;' + '};'
                },

                // An ordered token registry for the scanner.
                // This needs to be ordered by priority to prevent token parsing errors.
                // Each token follows the following structure:
                //		[
                //			// Which key in the token map to match.
                //			"tokenMapName",
                //			// A simple token to match, like "{{".
                //			"token",
                //			// Optional. A complex (regexp) token to match that 
                //			// overrides the simple token.
                //			"[\\s\\t]*{{",
                //			// Optional. A function that executes advanced 
                //			// manipulation of the matched content. This is 
                //			// rarely used.
                //			function(content){   
                //				return content;
                //			}
                //		]
                tokens: [
                    // Return unescaped
                    ["returnLeft", "{{{", "{{[{&]"],
                    // Full line comments
                    ["commentFull", "{{!}}", "^[\\s\\t]*{{!.+?}}\\n"],
                    // Inline comments
                    ["commentLeft", "{{!", "(\\n[\\s\\t]*{{!|{{!)"],
                    // Full line escapes
                    // This is used for detecting lines with only whitespace and an escaped tag
                    ["escapeFull", "{{}}", "(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)", function(content) {
                            return {
                                before: /^\n.+?\n$/.test(content) ? '\n' : '',
                                content: content.match(/\{\{(.+?)\}\}/)[1] || ''
                            };
                        }
                    ],
                    // Return escaped
                    ["escapeLeft", "{{"],
                    // Close return unescaped
                    ["returnRight", "}}}"],
                    // Close tag
                    ["right", "}}"]
                ],

                // ## Scanning Helpers
                // This is an array of helpers that transform content that is within escaped tags like `{{token}}`. These helpers are solely for the scanning phase; they are unrelated to Mustache/Handlebars helpers which execute at render time. Each helper has a definition like the following:
                //		{
                //			// The content pattern to match in order to execute.
                //			// Only the first matching helper is executed.
                //			name: /pattern to match/,
                //			// The function to transform the content with.
                //			// @param {String} content   The content to transform.
                //			// @param {Object} cmd       Scanner helper data.
                //			//                           {
                //			//                             insert: "insert command",
                //			//                             tagName: "div",
                //			//                             status: 0
                //			//                           }
                //			fn: function(content, cmd) {
                //				return 'for text injection' || 
                //					{ raw: 'to bypass text injection' };
                //			}
                //		}
                helpers: [
                    // ### Partials
                    // Partials begin with a greater than sign, like {{> box}}.
                    // Partials are rendered at runtime (as opposed to compile time), 
                    // so recursive partials are possible. Just avoid infinite loops.
                    // For example, this template and partial:
                    // 		base.mustache:
                    // 			<h2>Names</h2>
                    // 			{{#names}}
                    // 				{{> user}}
                    // 			{{/names}}
                    // 		user.mustache:
                    // 			<strong>{{name}}</strong>
                    {
                        name: /^>[\s]*\w*/,
                        fn: function(content, cmd) {
                            // Get the template name and call back into the render method,
                            // passing the name and the current context.
                            var templateName = can.trim(content.replace(/^>\s?/, '')).replace(/["|']/g, "");
                            return "options.partials && options.partials['" + templateName + "'] ? can.Mustache.renderPartial(options.partials['" + templateName + "']," +
                                CONTEXT_STACK + ".pop(),options) : can.Mustache.render('" + templateName + "', " + CONTEXT_STACK + ")";
                        }
                    },

                    // ### Data Hookup
                    // This will attach the data property of `this` to the element
                    // its found on using the first argument as the data attribute
                    // key.
                    // For example:
                    //		<li id="nameli" {{ data 'name' }}></li>
                    // then later you can access it like:
                    //		can.$('#nameli').data('name');
                    {
                        name: /^\s*data\s/,
                        fn: function(content, cmd) {
                            var attr = content.match(/["|'](.*)["|']/)[1];
                            // return a function which calls `can.data` on the element
                            // with the attribute name with the current context.
                            return "can.proxy(function(__){" +
                            // "var context = this[this.length-1];" +
                            // "context = context." + STACKED + " ? context[context.length-2] : context; console.warn(this, context);" +
                            "can.data(can.$(__),'" + attr + "', this.pop()); }, " + CONTEXT_STACK + ")";
                        }
                    },

                    // ### Transformation (default)
                    // This transforms all content to its interpolated equivalent,
                    // including calls to the corresponding helpers as applicable. 
                    // This outputs the render code for almost all cases.
                    // #### Definitions
                    // * `context` - This is the object that the current rendering context operates within. 
                    //		Each nested template adds a new `context` to the context stack.
                    // * `stack` - Mustache supports nested sections, 
                    //		each of which add their own context to a stack of contexts.
                    //		Whenever a token gets interpolated, it will check for a match against the 
                    //		last context in the stack, then iterate through the rest of the stack checking for matches.
                    //		The first match is the one that gets returned.
                    // * `Mustache.txt` - This serializes a collection of logic, optionally contained within a section.
                    //		If this is a simple interpolation, only the interpolation lookup will be passed.
                    //		If this is a section, then an `options` object populated by the truthy (`options.fn`) and 
                    //		falsey (`options.inverse`) encapsulated functions will also be passed. This section handling 
                    //		exists to support the runtime context nesting that Mustache supports.
                    // * `Mustache.get` - This resolves an interpolation reference given a stack of contexts.
                    // * `options` - An object containing methods for executing the inner contents of sections or helpers.  
                    //		`options.fn` - Contains the inner template logic for a truthy section.  
                    //		`options.inverse` - Contains the inner template logic for a falsey section.  
                    //		`options.hash` - Contains the merged hash object argument for custom helpers.
                    // #### Design
                    // This covers the design of the render code that the transformation helper generates.
                    // ##### Pseudocode
                    // A detailed explanation is provided in the following sections, but here is some brief pseudocode
                    // that gives a high level overview of what the generated render code does (with a template similar to  
                    // `"{{#a}}{{b.c.d.e.name}}{{/a}}" == "Phil"`).
                    // *Initialize the render code.*
                    // 		view = []
                    // 		context = []
                    // 		stack = fn { context.concat([this]) }
                    // *Render the root section.*
                    // 		view.push( "string" )
                    // 		view.push( can.view.txt(
                    // *Render the nested section with `can.Mustache.txt`.*
                    // 			txt( 
                    // *Add the current context to the stack.*
                    // 				stack(), 
                    // *Flag this for truthy section mode.*
                    // 				"#",
                    // *Interpolate and check the `a` variable for truthyness using the stack with `can.Mustache.get`.*
                    // 				get( "a", stack() ),
                    // *Include the nested section's inner logic.
                    // The stack argument is usually the parent section's copy of the stack, 
                    // but it can be an override context that was passed by a custom helper.
                    // Sections can nest `0..n` times -- **NESTCEPTION**.*
                    // 				{ fn: fn(stack) {
                    // *Render the nested section (everything between the `{{#a}}` and `{{/a}}` tokens).*
                    // 					view = []
                    // 					view.push( "string" )
                    // 					view.push(
                    // *Add the current context to the stack.*
                    // 						stack(),
                    // *Flag this as interpolation-only mode.*
                    // 						null,
                    // *Interpolate the `b.c.d.e.name` variable using the stack.*
                    // 						get( "b.c.d.e.name", stack() ),
                    // 					)
                    // 					view.push( "string" )
                    // *Return the result for the nested section.*
                    // 					return view.join()
                    // 				}}
                    // 			)
                    // 		))
                    // 		view.push( "string" )
                    // *Return the result for the root section, which includes all nested sections.*
                    // 		return view.join()
                    // ##### Initialization
                    // Each rendered template is started with the following initialization code:
                    // 		var ___v1ew = [];
                    // 		var ___c0nt3xt = [];
                    // 		___c0nt3xt.___st4ck = true;
                    // 		var ___st4ck = function(context, self) {
                    // 			var s;
                    // 			if (arguments.length == 1 && context) {
                    // 				s = !context.___st4ck ? [context] : context;
                    // 			} else {
                    // 				s = context && context.___st4ck 
                    //					? context.concat([self]) 
                    //					: ___st4ck(context).concat([self]);
                    // 			}
                    // 			return (s.___st4ck = true) && s;
                    // 		};
                    // The `___v1ew` is the the array used to serialize the view.
                    // The `___c0nt3xt` is a stacking array of contexts that slices and expands with each nested section.
                    // The `___st4ck` function is used to more easily update the context stack in certain situations.
                    // Usually, the stack function simply adds a new context (`self`/`this`) to a context stack. 
                    // However, custom helpers will occasionally pass override contexts that need their own context stack.
                    // ##### Sections
                    // Each section, `{{#section}} content {{/section}}`, within a Mustache template generates a section 
                    // context in the resulting render code. The template itself is treated like a root section, with the 
                    // same execution logic as any others. Each section can have `0..n` nested sections within it.
                    // Here's an example of a template without any descendent sections.  
                    // Given the template: `"{{a.b.c.d.e.name}}" == "Phil"`  
                    // Would output the following render code:
                    //		___v1ew.push("\"");
                    //		___v1ew.push(can.view.txt(1, '', 0, this, function() {
                    // 			return can.Mustache.txt(___st4ck(___c0nt3xt, this), null, 
                    //				can.Mustache.get("a.b.c.d.e.name", 
                    //					___st4ck(___c0nt3xt, this))
                    //			);
                    //		}));
                    //		___v1ew.push("\" == \"Phil\"");
                    // The simple strings will get appended to the view. Any interpolated references (like `{{a.b.c.d.e.name}}`) 
                    // will be pushed onto the view via `can.view.txt` in order to support live binding.
                    // The function passed to `can.view.txt` will call `can.Mustache.txt`, which serializes the object data by doing 
                    // a context lookup with `can.Mustache.get`.
                    // `can.Mustache.txt`'s first argument is a copy of the context stack with the local context `this` added to it.
                    // This stack will grow larger as sections nest.
                    // The second argument is for the section type. This will be `"#"` for truthy sections, `"^"` for falsey, 
                    // or `null` if it is an interpolation instead of a section.
                    // The third argument is the interpolated value retrieved with `can.Mustache.get`, which will perform the 
                    // context lookup and return the approriate string or object.
                    // Any additional arguments, if they exist, are used for passing arguments to custom helpers.
                    // For nested sections, the last argument is an `options` object that contains the nested section's logic.
                    // Here's an example of a template with a single nested section.  
                    // Given the template: `"{{#a}}{{b.c.d.e.name}}{{/a}}" == "Phil"`  
                    // Would output the following render code:
                    //		___v1ew.push("\"");
                    // 		___v1ew.push(can.view.txt(0, '', 0, this, function() {
                    // 			return can.Mustache.txt(___st4ck(___c0nt3xt, this), "#", 
                    //				can.Mustache.get("a", ___st4ck(___c0nt3xt, this)), 
                    //					[{
                    // 					_: function() {
                    // 						return ___v1ew.join("");
                    // 					}
                    // 				}, {
                    // 					fn: function(___c0nt3xt) {
                    // 						var ___v1ew = [];
                    // 						___v1ew.push(can.view.txt(1, '', 0, this, 
                    //								function() {
                    //  								return can.Mustache.txt(
                    // 									___st4ck(___c0nt3xt, this), 
                    // 									null, 
                    // 									can.Mustache.get("b.c.d.e.name", 
                    // 										___st4ck(___c0nt3xt, this))
                    // 								);
                    // 							}
                    // 						));
                    // 						return ___v1ew.join("");
                    // 					}
                    // 				}]
                    //			)
                    // 		}));
                    //		___v1ew.push("\" == \"Phil\"");
                    // This is specified as a truthy section via the `"#"` argument. The last argument includes an array of helper methods used with `options`.
                    // These act similarly to custom helpers: `options.fn` will be called for truthy sections, `options.inverse` will be called for falsey sections.
                    // The `options._` function only exists as a dummy function to make generating the section nesting easier (a section may have a `fn`, `inverse`,
                    // or both, but there isn't any way to determine that at compilation time).
                    // Within the `fn` function is the section's render context, which in this case will render anything between the `{{#a}}` and `{{/a}}` tokens.
                    // This function has `___c0nt3xt` as an argument because custom helpers can pass their own override contexts. For any case where custom helpers
                    // aren't used, `___c0nt3xt` will be equivalent to the `___st4ck(___c0nt3xt, this)` stack created by its parent section. The `inverse` function
                    // works similarly, except that it is added when `{{^a}}` and `{{else}}` are used. `var ___v1ew = []` is specified in `fn` and `inverse` to 
                    // ensure that live binding in nested sections works properly.
                    // All of these nested sections will combine to return a compiled string that functions similar to EJS in its uses of `can.view.txt`.
                    // #### Implementation
                    {
                        name: /^.*$/,
                        fn: function(content, cmd) {
                            var mode = false,
                                result = [];

                            // Trim the content so we don't have any trailing whitespace.
                            content = can.trim(content);

                            // Determine what the active mode is.
                            // * `#` - Truthy section
                            // * `^` - Falsey section
                            // * `/` - Close the prior section
                            // * `else` - Inverted section (only exists within a truthy/falsey section)
                            if (content.length && (mode = content.match(/^([#^/]|else$)/))) {
                                mode = mode[0];
                                switch (mode) {
                                    // Open a new section.
                                    case '#':
                                    case '^':
                                        result.push(cmd.insert + 'can.view.txt(0,\'' + cmd.tagName + '\',' + cmd.status + ',this,function(){ return ');
                                        break;
                                        // Close the prior section.
                                    case '/':
                                        return {
                                            raw: 'return ___v1ew.join("");}}])}));'
                                        };
                                        break;
                                }

                                // Trim the mode off of the content.
                                content = content.substring(1);
                            }

                            // `else` helpers are special and should be skipped since they don't 
                            // have any logic aside from kicking off an `inverse` function.
                            if (mode != 'else') {
                                var args = [],
                                    i = 0,
                                    hashing = false,
                                    arg, split, m;

                                // Parse the helper arguments.
                                // This needs uses this method instead of a split(/\s/) so that 
                                // strings with spaces can be correctly parsed.
                                (can.trim(content) + ' ').replace(/((([^\s]+?=)?('.*?'|".*?"))|.*?)\s/g, function(whole, part) {
                                    args.push(part);
                                });

                                // Start the content render block.
                                result.push('can.Mustache.txt(' + CONTEXT_OBJ + ',' + (mode ? '"' + mode + '"' : 'null') + ',');

                                // Iterate through the helper arguments, if there are any.
                                for (; arg = args[i]; i++) {
                                    i && result.push(',');

                                    // Check for special helper arguments (string/number/boolean/hashes).
                                    if (i && (m = arg.match(/^(('.*?'|".*?"|[0-9.]+|true|false)|((.+?)=(('.*?'|".*?"|[0-9.]+|true|false)|(.+))))$/))) {
                                        // Found a native type like string/number/boolean.
                                        if (m[2]) {
                                            result.push(m[0]);
                                        }
                                        // Found a hash object.
                                        else {
                                            // Open the hash object.
                                            if (!hashing) {
                                                hashing = true;
                                                result.push('{' + HASH + ':{');
                                            }

                                            // Add the key/value.
                                            result.push(m[4], ':', m[6] ? m[6] : 'can.Mustache.get("' + m[5].replace(/"/g, '\\"') + '",' + CONTEXT_OBJ + ')');

                                            // Close the hash if this was the last argument.
                                            if (i == args.length - 1) {
                                                result.push('}}');
                                            }
                                        }
                                    }
                                    // Otherwise output a normal interpolation reference.
                                    else {
                                        result.push('can.Mustache.get("' +
                                        // Include the reference name.
                                        arg.replace(/"/g, '\\"') + '",' +
                                        // Then the stack of context.
                                        CONTEXT_OBJ +
                                        // Flag as a helper method to aid performance, 
                                        // if it is a known helper (anything with > 0 arguments).
                                        (i == 0 && args.length > 1 ? ',true' : ',false') +
                                            (i > 0 ? ',true' : ',false') +
                                            ')');
                                    }
                                }
                            }

                            // Create an option object for sections of code.
                            mode && mode != 'else' && result.push(',[{_:function(){');
                            switch (mode) {
                                // Truthy section
                                case '#':
                                    result.push('return ___v1ew.join("");}},{fn:function(' + CONTEXT + '){var ___v1ew = [];');
                                    break;
                                    // If/else section
                                    // Falsey section
                                case 'else':
                                case '^':
                                    result.push('return ___v1ew.join("");}},{inverse:function(' + CONTEXT + '){var ___v1ew = [];');
                                    break;
                                    // Not a section
                                default:
                                    result.push(');');
                                    break;
                            }

                            // Return a raw result if there was a section, otherwise return the default string.
                            result = result.join('');
                            return mode ? {
                                raw: result
                            } : result;
                        }
                    }
                ]
            })
        });

        // Add in default scanner helpers first.
        // We could probably do this differently if we didn't 'break' on every match.
        var helpers = can.view.Scanner.prototype.helpers;
        for (var i = 0; i < helpers.length; i++) {
            Mustache.prototype.scanner.helpers.unshift(helpers[i]);
        };


        Mustache.txt = function(context, mode, name) {
            // Grab the extra arguments to pass to helpers.
            var args = Array.prototype.slice.call(arguments, 3),
                // Create a default `options` object to pass to the helper.
                options = can.extend.apply(can, [{
                        fn: function() {},
                        inverse: function() {}
                    }
                ].concat(mode ? args.pop() : []));


            var extra = {};
            if (context.context) {
                extra = context.options;
                context = context.context;
            }

            // Check for a registered helper or a helper-like function.
            if (helper = (Mustache.getHelper(name, extra) || (can.isFunction(name) && !name.isComputed && {
                fn: name
            }))) {
                // Use the most recent context as `this` for the helper.
                var stack = context[STACKED] && context,
                    context = (stack && context[context.length - 1]) || context,
                    // Update the options with a function/inverse (the inner templates of a section).
                    opts = {
                        fn: can.proxy(options.fn, context),
                        inverse: can.proxy(options.inverse, context)
                    },
                    lastArg = args[args.length - 1];

                // Store the context stack in the options if one exists
                if (stack) {
                    opts.contexts = stack;
                }
                // Add the hash to `options` if one exists
                if (lastArg && lastArg[HASH]) {
                    opts.hash = args.pop()[HASH];
                }
                args.push(opts);

                // Call the helper.
                return helper.fn.apply(context, args) || '';
            }

            // if a compute, get the value
            if (can.isFunction(name) && name.isComputed) {
                name = name();
            }

            // An array of arguments to check for truthyness when evaluating sections.
            var validArgs = args.length ? args : [name],
                // Whether the arguments meet the condition of the section.
                valid = true,
                result = [],
                i, helper, argIsObserve, arg;
            // Validate the arguments based on the section mode.
            if (mode) {
                for (i = 0; i < validArgs.length; i++) {
                    arg = validArgs[i];
                    argIsObserve = typeof arg !== 'undefined' && isObserve(arg);
                    // Array-like objects are falsey if their length = 0.
                    if (isArrayLike(arg)) {
                        // Use .attr to trigger binding on empty lists returned from function
                        if (mode == '#') {
                            valid = valid && !! (argIsObserve ? arg.attr('length') : arg.length);
                        } else if (mode == '^') {
                            valid = valid && !(argIsObserve ? arg.attr('length') : arg.length);
                        }
                    }
                    // Otherwise just check if it is truthy or not.
                    else {
                        valid = mode == '#' ? valid && !! arg : mode == '^' ? valid && !arg : valid;
                    }
                }
            }

            // Otherwise interpolate like normal.
            if (valid) {
                switch (mode) {
                    // Truthy section.
                    case '#':
                        // Iterate over arrays
                        if (isArrayLike(name)) {
                            var isObserveList = isObserve(name);

                            // Add the reference to the list in the contexts.
                            for (i = 0; i < name.length; i++) {
                                result.push(options.fn.call(name[i], context) || '');

                                // Ensure that live update works on observable lists
                                isObserveList && name.attr('' + i);
                            }
                            return result.join('');
                        }
                        // Normal case.
                        else {
                            return options.fn.call(name || {}, context) || '';
                        }
                        break;
                        // Falsey section.
                    case '^':
                        return options.inverse.call(name || {}, context) || '';
                        break;
                    default:
                        // Add + '' to convert things like numbers to strings.
                        // This can cause issues if you are trying to
                        // eval on the length but this is the more
                        // common case.
                        return '' + (name !== undefined ? name : '');
                        break;
                }
            }

            return '';
        };


        Mustache.get = function(ref, contexts, isHelper, isArgument) {
            var options = contexts.options || {};
            contexts = contexts.context || contexts;
            // Assume the local object is the last context in the stack.
            var obj = contexts[contexts.length - 1],
                // Assume the parent context is the second to last context in the stack.
                context = contexts[contexts.length - 2],
                // Split the reference (like `a.b.c`) into an array of key names.
                names = ref.split('.'),
                namesLength = names.length,
                value, lastValue, name, i, j,
                // if we walk up and don't find a property, we default
                // to listening on an undefined property of the first
                // context that is an observe
                defaultObserve,
                defaultObserveName;

            // Handle `this` references for list iteration: {{.}} or {{this}}
            if (/^\.|this$/.test(ref)) {
                // If context isn't an object, then it was a value passed by a helper so use it as an override.
                if (!/^object|undefined$/.test(typeof context)) {
                    return context || '';
                }
                // Otherwise just return the closest object.
                else {
                    while (value = contexts.pop()) {
                        if (typeof value !== 'undefined') {
                            return value;
                        }
                    }
                    return '';
                }
            }
            // Handle object resolution (like `a.b.c`).
            else if (!isHelper) {
                // Reverse iterate through the contexts (last in, first out).
                for (i = contexts.length - 1; i >= 0; i--) {
                    // Check the context for the reference
                    value = contexts[i];

                    // Is the value a compute?
                    if (can.isFunction(value) && value.isComputed) {
                        value = value();
                    }

                    // Make sure the context isn't a failed object before diving into it.
                    if (typeof value !== 'undefined' && value !== null) {
                        var isHelper = Mustache.getHelper(ref, options);
                        for (j = 0; j < namesLength; j++) {
                            // Keep running up the tree while there are matches.
                            if (typeof value[names[j]] !== 'undefined' && value[names[j]] !== null) {
                                lastValue = value;
                                value = value[name = names[j]];
                            }
                            // if there's a name conflict between property and helper
                            // property wins
                            else if (isHelper) {
                                return ref;
                            }
                            // If it's undefined, still match if the parent is an Observe.
                            else if (isObserve(value)) {
                                defaultObserve = value;
                                defaultObserveName = names[j];
                                lastValue = value = undefined;
                                break;
                            } else {
                                lastValue = value = undefined;
                                break;
                            }
                        }
                    }

                    // Found a matched reference.
                    if (value !== undefined) {
                        return Mustache.resolve(value, lastValue, name, isArgument);
                    }
                }
            }

            if (defaultObserve &&
            // if there's not a helper by this name and no attribute with this name
            !(Mustache.getHelper(ref) &&
                can.inArray(defaultObserveName, can.Observe.keys(defaultObserve)) === -1)) {
                return defaultObserve.compute(defaultObserveName);
            }
            // Support helpers without arguments, but only if there wasn't a matching data reference.
            // Helpers have priority over local function, see https://github.com/bitovi/canjs/issues/258
            if (value = Mustache.getHelper(ref, options)) {
                return ref;
            } else if (typeof obj !== 'undefined' && obj !== null && can.isFunction(obj[ref])) {
                // Support helper-like functions as anonymous helpers
                return obj[ref];
            }

            return '';
        };


        Mustache.resolve = function(value, lastValue, name, isArgument) {
            if (lastValue && can.isFunction(lastValue[name]) && isArgument) {
                if (lastValue[name].isComputed) {
                    return lastValue[name];
                }
                // Don't execute functions if they are parameters for a helper and are not a can.compute
                // Need to bind it to the original context so that that information doesn't get lost by the helper
                return function() {
                    return lastValue[name].apply(lastValue, arguments);
                };
            } else if (lastValue && can.isFunction(lastValue[name])) {
                // Support functions stored in objects.
                return lastValue[name]();
            }
            // Invoke the length to ensure that Observe.List events fire.
            else if (isObserve(value) && isArrayLike(value) && value.attr('length')) {
                return value;
            }
            // Add support for observes
            else if (lastValue && isObserve(lastValue)) {
                return lastValue.compute(name);
            } else if (can.isFunction(value)) {
                return value();
            } else {
                return value;
            }
        };


        // ## Helpers
        // Helpers are functions that can be called from within a template.
        // These helpers differ from the scanner helpers in that they execute
        // at runtime instead of during compilation.
        // Custom helpers can be added via `can.Mustache.registerHelper`,
        // but there are also some built-in helpers included by default.
        // Most of the built-in helpers are little more than aliases to actions 
        // that the base version of Mustache simply implies based on the 
        // passed in object.
        // Built-in helpers:
        // * `data` - `data` is a special helper that is implemented via scanning helpers. 
        //		It hooks up the active element to the active data object: `<div {{data "key"}} />`
        // * `if` - Renders a truthy section: `{{#if var}} render {{/if}}`
        // * `unless` - Renders a falsey section: `{{#unless var}} render {{/unless}}`
        // * `each` - Renders an array: `{{#each array}} render {{this}} {{/each}}`
        // * `with` - Opens a context section: `{{#with var}} render {{/with}}`
        Mustache._helpers = {};

        Mustache.registerHelper = function(name, fn) {
            this._helpers[name] = {
                name: name,
                fn: fn
            };
        };


        Mustache.getHelper = function(name, options) {
            return options && options.helpers && options.helpers[name] && {
                fn: options.helpers[name]
            } || this._helpers[name]
            for (var i = 0, helper; helper = [i]; i++) {
                // Find the correct helper
                if (helper.name == name) {
                    return helper;
                }
            }
            return null;
        };


        Mustache.render = function(partial, context) {
            // Make sure the partial being passed in
            // isn't a variable like { partial: "foo.mustache" }
            if (!can.view.cached[partial] && context[partial]) {
                partial = context[partial];
            }

            // Call into `can.view.render` passing the
            // partial and context.
            return can.view.render(partial, context);
        };

        Mustache.renderPartial = function(partial, context, options) {
            return partial.render ? partial.render(context, options) :
                partial(context, options);
        };

        // The built-in Mustache helpers.
        can.each({
            // Implements the `if` built-in helper.

            'if': function(expr, options) {
                if ( !! Mustache.resolve(expr)) {
                    return options.fn(options.contexts || this);
                } else {
                    return options.inverse(options.contexts || this);
                }
            },
            // Implements the `unless` built-in helper.

            'unless': function(expr, options) {
                if (!Mustache.resolve(expr)) {
                    return options.fn(options.contexts || this);
                }
            },

            // Implements the `each` built-in helper.

            'each': function(expr, options) {
                expr = Mustache.resolve(expr);
                if ( !! expr && expr.length) {
                    var result = [];
                    for (var i = 0; i < expr.length; i++) {
                        result.push(options.fn(expr[i]));
                    }
                    return result.join('');
                }
            },
            // Implements the `with` built-in helper.

            'with': function(expr, options) {
                var ctx = expr;
                expr = Mustache.resolve(expr);
                if ( !! expr) {
                    return options.fn(ctx);
                }
            }

        }, function(fn, name) {
            Mustache.registerHelper(name, fn);
        });

        // ## Registration
        // Registers Mustache with can.view.
        can.view.register({
            suffix: "mustache",

            contentType: "x-mustache-template",

            // Returns a `function` that renders the view.
            script: function(id, src) {
                return "can.Mustache(function(_CONTEXT,_VIEW) { " + new Mustache({
                    text: src,
                    name: id
                }).template.out + " })";
            },

            renderer: function(id, text) {
                return Mustache({
                    text: text,
                    name: id
                });
            }
        });

        return can;
    })(__m3, __m9, __m15, __m16, __m17);

    // ## can/construct/super/super.js
    var __m18 = (function(can, Construct) {

        // tests if we can get super in .toString()
        var isFunction = can.isFunction,

            fnTest = /xyz/.test(function() {
                xyz;
            }) ? /\b_super\b/ : /.*/;

        // overwrites a single property so it can still call super
        can.Construct._overwrite = function(addTo, base, name, val) {
            // Check if we're overwriting an existing function
            addTo[name] = isFunction(val) &&
                isFunction(base[name]) &&
                fnTest.test(val) ? (function(name, fn) {
                return function() {
                    var tmp = this._super,
                        ret;

                    // Add a new ._super() method that is the same method
                    // but on the super-class
                    this._super = base[name];

                    // The method only need to be bound temporarily, so we
                    // remove it when we're done executing
                    ret = fn.apply(this, arguments);
                    this._super = tmp;
                    return ret;
                };
            })(name, val) : val;
        }

        // overwrites an object with methods, sets up _super
        //   newProps - new properties
        //   oldProps - where the old properties might be
        //   addTo - what we are adding to
        can.Construct._inherit = function(newProps, oldProps, addTo) {
            addTo = addTo || newProps
            for (var name in newProps) {
                can.Construct._overwrite(addTo, oldProps, name, newProps[name]);
            }
        }

        return can;
    })(__m3, __m1);

    window['can'] = __m5;
})();
// Adapted from http://webdesignerwall.com/tutorials/html5-grayscale-image-hover

var grayscale = function(src) {
	var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		imgObj = new Image();
	
	imgObj.src = src;
	canvas.width = imgObj.width;
	canvas.height = imgObj.height; 
	
	ctx.drawImage(imgObj, 0, 0); 
	var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

	for(var y = 0; y < imgPixels.height; y++){
		for(var x = 0; x < imgPixels.width; x++){
			var i = (y * 4) * imgPixels.width + x * 4;
			var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
			imgPixels.data[i] = avg; 
			imgPixels.data[i + 1] = avg; 
			imgPixels.data[i + 2] = avg;
		}
	}
	
	ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
	return canvas.toDataURL();
};

window.Grayscale = function(elements, fadeDuration) {
	elements.each(function() {
		var el = $(this);

		// wrap the image in a wrapper and clone it, adding the clone to the wrapper
		el.css({"position":"absolute"})
		  .wrap("<div class='img_wrapper' style='display: inline-block'>")
		  .clone()
		  .addClass('img_grayscale')
		  .css({
		  	'position': "absolute",
		  	'z-index': "998",
		  	'opacity': "0"
		  })
		  .insertBefore(el)
		  .queue(function(){
			el.parent().css({
				'width': this.width,
				'height': this.height
			}).end()
			.dequeue();
		});

		// replace the original with a greyscale version
		this.src = grayscale(this.src);
	});

	elements.parent().mouseover(function() {
		// fade in color image
		$(this).find('img:first').stop().animate({opacity:1}, fadeDuration);
	});
};

$(function() {
	$(document.body).on('mouseout', '.img_grayscale', function(){
		// fade out color image
		$(this).stop().animate({opacity:0}, 300);
	});
});
	    
// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com

(function (undefined) {

	/************************************
	 Constants
	 ************************************/

	var moment,
		VERSION = "2.0.0",
		round = Math.round, i,
	// internal storage for language config files
		languages = {},

	// check for nodeJS
		hasModule = (typeof module !== 'undefined' && module.exports),

	// ASP.NET json date format regex
		aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,

	// format tokens
		formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
		localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

	// parsing tokens
		parseMultipleFormatChunker = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,

	// parsing token regexes
		parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
		parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
		parseTokenThreeDigits = /\d{3}/, // 000 - 999
		parseTokenFourDigits = /\d{1,4}/, // 0 - 9999
		parseTokenSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
		parseTokenWord = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, // any word (or two) characters or numbers including two word month in arabic.
		parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, // +00:00 -00:00 +0000 -0000 or Z
		parseTokenT = /T/i, // T (ISO seperator)
		parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

	// preliminary iso regex
	// 0000-00-00 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000
		isoRegex = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
		isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

	// iso time formats and regexes
		isoTimes = [
			['HH:mm:ss.S', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
			['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
			['HH:mm', /(T| )\d\d:\d\d/],
			['HH', /(T| )\d\d/]
		],

	// timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
		parseTimezoneChunker = /([\+\-]|\d\d)/gi,

	// getter and setter names
		proxyGettersAndSetters = 'Month|Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
		unitMillisecondFactors = {
			'Milliseconds' : 1,
			'Seconds' : 1e3,
			'Minutes' : 6e4,
			'Hours' : 36e5,
			'Days' : 864e5,
			'Months' : 2592e6,
			'Years' : 31536e6
		},

	// format function strings
		formatFunctions = {},

	// tokens to ordinalize and pad
		ordinalizeTokens = 'DDD w W M D d'.split(' '),
		paddedTokens = 'M D H h m s w W'.split(' '),

		formatTokenFunctions = {
			M    : function () {
				return this.month() + 1;
			},
			MMM  : function (format) {
				return this.lang().monthsShort(this, format);
			},
			MMMM : function (format) {
				return this.lang().months(this, format);
			},
			D    : function () {
				return this.date();
			},
			DDD  : function () {
				return this.dayOfYear();
			},
			d    : function () {
				return this.day();
			},
			dd   : function (format) {
				return this.lang().weekdaysMin(this, format);
			},
			ddd  : function (format) {
				return this.lang().weekdaysShort(this, format);
			},
			dddd : function (format) {
				return this.lang().weekdays(this, format);
			},
			w    : function () {
				return this.week();
			},
			W    : function () {
				return this.isoWeek();
			},
			YY   : function () {
				return leftZeroFill(this.year() % 100, 2);
			},
			YYYY : function () {
				return leftZeroFill(this.year(), 4);
			},
			YYYYY : function () {
				return leftZeroFill(this.year(), 5);
			},
			a    : function () {
				return this.lang().meridiem(this.hours(), this.minutes(), true);
			},
			A    : function () {
				return this.lang().meridiem(this.hours(), this.minutes(), false);
			},
			H    : function () {
				return this.hours();
			},
			h    : function () {
				return this.hours() % 12 || 12;
			},
			m    : function () {
				return this.minutes();
			},
			s    : function () {
				return this.seconds();
			},
			S    : function () {
				return ~~(this.milliseconds() / 100);
			},
			SS   : function () {
				return leftZeroFill(~~(this.milliseconds() / 10), 2);
			},
			SSS  : function () {
				return leftZeroFill(this.milliseconds(), 3);
			},
			Z    : function () {
				var a = -this.zone(),
					b = "+";
				if (a < 0) {
					a = -a;
					b = "-";
				}
				return b + leftZeroFill(~~(a / 60), 2) + ":" + leftZeroFill(~~a % 60, 2);
			},
			ZZ   : function () {
				var a = -this.zone(),
					b = "+";
				if (a < 0) {
					a = -a;
					b = "-";
				}
				return b + leftZeroFill(~~(10 * a / 6), 4);
			},
			X    : function () {
				return this.unix();
			}
		};

	function padToken(func, count) {
		return function (a) {
			return leftZeroFill(func.call(this, a), count);
		};
	}
	function ordinalizeToken(func) {
		return function (a) {
			return this.lang().ordinal(func.call(this, a));
		};
	}

	while (ordinalizeTokens.length) {
		i = ordinalizeTokens.pop();
		formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i]);
	}
	while (paddedTokens.length) {
		i = paddedTokens.pop();
		formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
	}
	formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


	/************************************
	 Constructors
	 ************************************/

	function Language() {

	}

	// Moment prototype object
	function Moment(config) {
		extend(this, config);
	}

	// Duration Constructor
	function Duration(duration) {
		var data = this._data = {},
			years = duration.years || duration.year || duration.y || 0,
			months = duration.months || duration.month || duration.M || 0,
			weeks = duration.weeks || duration.week || duration.w || 0,
			days = duration.days || duration.day || duration.d || 0,
			hours = duration.hours || duration.hour || duration.h || 0,
			minutes = duration.minutes || duration.minute || duration.m || 0,
			seconds = duration.seconds || duration.second || duration.s || 0,
			milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

		// representation for dateAddRemove
		this._milliseconds = milliseconds +
			seconds * 1e3 + // 1000
			minutes * 6e4 + // 1000 * 60
			hours * 36e5; // 1000 * 60 * 60
		// Because of dateAddRemove treats 24 hours as different from a
		// day when working around DST, we need to store them separately
		this._days = days +
			weeks * 7;
		// It is impossible translate months into days without knowing
		// which months you are are talking about, so we have to store
		// it separately.
		this._months = months +
			years * 12;

		// The following code bubbles up values, see the tests for
		// examples of what that means.
		data.milliseconds = milliseconds % 1000;
		seconds += absRound(milliseconds / 1000);

		data.seconds = seconds % 60;
		minutes += absRound(seconds / 60);

		data.minutes = minutes % 60;
		hours += absRound(minutes / 60);

		data.hours = hours % 24;
		days += absRound(hours / 24);

		days += weeks * 7;
		data.days = days % 30;

		months += absRound(days / 30);

		data.months = months % 12;
		years += absRound(months / 12);

		data.years = years;
	}


	/************************************
	 Helpers
	 ************************************/


	function extend(a, b) {
		for (var i in b) {
			if (b.hasOwnProperty(i)) {
				a[i] = b[i];
			}
		}
		return a;
	}

	function absRound(number) {
		if (number < 0) {
			return Math.ceil(number);
		} else {
			return Math.floor(number);
		}
	}

	// left zero fill a number
	// see http://jsperf.com/left-zero-filling for performance comparison
	function leftZeroFill(number, targetLength) {
		var output = number + '';
		while (output.length < targetLength) {
			output = '0' + output;
		}
		return output;
	}

	// helper function for _.addTime and _.subtractTime
	function addOrSubtractDurationFromMoment(mom, duration, isAdding) {
		var ms = duration._milliseconds,
			d = duration._days,
			M = duration._months,
			currentDate;

		if (ms) {
			mom._d.setTime(+mom + ms * isAdding);
		}
		if (d) {
			mom.date(mom.date() + d * isAdding);
		}
		if (M) {
			currentDate = mom.date();
			mom.date(1)
				.month(mom.month() + M * isAdding)
				.date(Math.min(currentDate, mom.daysInMonth()));
		}
	}

	// check if is an array
	function isArray(input) {
		return Object.prototype.toString.call(input) === '[object Array]';
	}

	// compare two arrays, return the number of differences
	function compareArrays(array1, array2) {
		var len = Math.min(array1.length, array2.length),
			lengthDiff = Math.abs(array1.length - array2.length),
			diffs = 0,
			i;
		for (i = 0; i < len; i++) {
			if (~~array1[i] !== ~~array2[i]) {
				diffs++;
			}
		}
		return diffs + lengthDiff;
	}


	/************************************
	 Languages
	 ************************************/


	Language.prototype = {
		set : function (config) {
			var prop, i;
			for (i in config) {
				prop = config[i];
				if (typeof prop === 'function') {
					this[i] = prop;
				} else {
					this['_' + i] = prop;
				}
			}
		},

		_months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		months : function (m) {
			return this._months[m.month()];
		},

		_monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		monthsShort : function (m) {
			return this._monthsShort[m.month()];
		},

		monthsParse : function (monthName) {
			var i, mom, regex, output;

			if (!this._monthsParse) {
				this._monthsParse = [];
			}

			for (i = 0; i < 12; i++) {
				// make the regex if we don't have it already
				if (!this._monthsParse[i]) {
					mom = moment([2000, i]);
					regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
					this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
				}
				// test the regex
				if (this._monthsParse[i].test(monthName)) {
					return i;
				}
			}
		},

		_weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		weekdays : function (m) {
			return this._weekdays[m.day()];
		},

		_weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		weekdaysShort : function (m) {
			return this._weekdaysShort[m.day()];
		},

		_weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		weekdaysMin : function (m) {
			return this._weekdaysMin[m.day()];
		},

		_longDateFormat : {
			LT : "h:mm A",
			L : "MM/DD/YYYY",
			LL : "MMMM D YYYY",
			LLL : "MMMM D YYYY LT",
			LLLL : "dddd, MMMM D YYYY LT"
		},
		longDateFormat : function (key) {
			var output = this._longDateFormat[key];
			if (!output && this._longDateFormat[key.toUpperCase()]) {
				output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
					return val.slice(1);
				});
				this._longDateFormat[key] = output;
			}
			return output;
		},

		meridiem : function (hours, minutes, isLower) {
			if (hours > 11) {
				return isLower ? 'pm' : 'PM';
			} else {
				return isLower ? 'am' : 'AM';
			}
		},

		_calendar : {
			sameDay : '[Today at] LT',
			nextDay : '[Tomorrow at] LT',
			nextWeek : 'dddd [at] LT',
			lastDay : '[Yesterday at] LT',
			lastWeek : '[last] dddd [at] LT',
			sameElse : 'L'
		},
		calendar : function (key, mom) {
			var output = this._calendar[key];
			return typeof output === 'function' ? output.apply(mom) : output;
		},

		_relativeTime : {
			future : "in %s",
			past : "%s ago",
			s : "a few seconds",
			m : "a minute",
			mm : "%d minutes",
			h : "an hour",
			hh : "%d hours",
			d : "a day",
			dd : "%d days",
			M : "a month",
			MM : "%d months",
			y : "a year",
			yy : "%d years"
		},
		relativeTime : function (number, withoutSuffix, string, isFuture) {
			var output = this._relativeTime[string];
			return (typeof output === 'function') ?
				output(number, withoutSuffix, string, isFuture) :
				output.replace(/%d/i, number);
		},
		pastFuture : function (diff, output) {
			var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
			return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
		},

		ordinal : function (number) {
			return this._ordinal.replace("%d", number);
		},
		_ordinal : "%d",

		preparse : function (string) {
			return string;
		},

		postformat : function (string) {
			return string;
		},

		week : function (mom) {
			return weekOfYear(mom, this._week.dow, this._week.doy);
		},
		_week : {
			dow : 0, // Sunday is the first day of the week.
			doy : 6  // The week that contains Jan 1st is the first week of the year.
		}
	};

	// Loads a language definition into the `languages` cache.  The function
	// takes a key and optionally values.  If not in the browser and no values
	// are provided, it will load the language file module.  As a convenience,
	// this function also returns the language values.
	function loadLang(key, values) {
		values.abbr = key;
		if (!languages[key]) {
			languages[key] = new Language();
		}
		languages[key].set(values);
		return languages[key];
	}

	// Determines which language definition to use and returns it.
	//
	// With no parameters, it will return the global language.  If you
	// pass in a language key, such as 'en', it will return the
	// definition for 'en', so long as 'en' has already been loaded using
	// moment.lang.
	function getLangDefinition(key) {
		if (!key) {
			return moment.fn._lang;
		}
		if (!languages[key] && hasModule) {
			require('./lang/' + key);
		}
		return languages[key];
	}


	/************************************
	 Formatting
	 ************************************/


	function removeFormattingTokens(input) {
		if (input.match(/\[.*\]/)) {
			return input.replace(/^\[|\]$/g, "");
		}
		return input.replace(/\\/g, "");
	}

	function makeFormatFunction(format) {
		var array = format.match(formattingTokens), i, length;

		for (i = 0, length = array.length; i < length; i++) {
			if (formatTokenFunctions[array[i]]) {
				array[i] = formatTokenFunctions[array[i]];
			} else {
				array[i] = removeFormattingTokens(array[i]);
			}
		}

		return function (mom) {
			var output = "";
			for (i = 0; i < length; i++) {
				output += typeof array[i].call === 'function' ? array[i].call(mom, format) : array[i];
			}
			return output;
		};
	}

	// format date using native date object
	function formatMoment(m, format) {
		var i = 5;

		function replaceLongDateFormatTokens(input) {
			return m.lang().longDateFormat(input) || input;
		}

		while (i-- && localFormattingTokens.test(format)) {
			format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
		}

		if (!formatFunctions[format]) {
			formatFunctions[format] = makeFormatFunction(format);
		}

		return formatFunctions[format](m);
	}


	/************************************
	 Parsing
	 ************************************/


		// get the regex to find the next token
	function getParseRegexForToken(token) {
		switch (token) {
			case 'DDDD':
				return parseTokenThreeDigits;
			case 'YYYY':
				return parseTokenFourDigits;
			case 'YYYYY':
				return parseTokenSixDigits;
			case 'S':
			case 'SS':
			case 'SSS':
			case 'DDD':
				return parseTokenOneToThreeDigits;
			case 'MMM':
			case 'MMMM':
			case 'dd':
			case 'ddd':
			case 'dddd':
			case 'a':
			case 'A':
				return parseTokenWord;
			case 'X':
				return parseTokenTimestampMs;
			case 'Z':
			case 'ZZ':
				return parseTokenTimezone;
			case 'T':
				return parseTokenT;
			case 'MM':
			case 'DD':
			case 'YY':
			case 'HH':
			case 'hh':
			case 'mm':
			case 'ss':
			case 'M':
			case 'D':
			case 'd':
			case 'H':
			case 'h':
			case 'm':
			case 's':
				return parseTokenOneOrTwoDigits;
			default :
				return new RegExp(token.replace('\\', ''));
		}
	}

	// function to convert string input to date
	function addTimeToArrayFromToken(token, input, config) {
		var a, b,
			datePartArray = config._a;

		switch (token) {
			// MONTH
			case 'M' : // fall through to MM
			case 'MM' :
				datePartArray[1] = (input == null) ? 0 : ~~input - 1;
				break;
			case 'MMM' : // fall through to MMMM
			case 'MMMM' :
				a = getLangDefinition(config._l).monthsParse(input);
				// if we didn't find a month name, mark the date as invalid.
				if (a != null) {
					datePartArray[1] = a;
				} else {
					config._isValid = false;
				}
				break;
			// DAY OF MONTH
			case 'D' : // fall through to DDDD
			case 'DD' : // fall through to DDDD
			case 'DDD' : // fall through to DDDD
			case 'DDDD' :
				if (input != null) {
					datePartArray[2] = ~~input;
				}
				break;
			// YEAR
			case 'YY' :
				datePartArray[0] = ~~input + (~~input > 68 ? 1900 : 2000);
				break;
			case 'YYYY' :
			case 'YYYYY' :
				datePartArray[0] = ~~input;
				break;
			// AM / PM
			case 'a' : // fall through to A
			case 'A' :
				config._isPm = ((input + '').toLowerCase() === 'pm');
				break;
			// 24 HOUR
			case 'H' : // fall through to hh
			case 'HH' : // fall through to hh
			case 'h' : // fall through to hh
			case 'hh' :
				datePartArray[3] = ~~input;
				break;
			// MINUTE
			case 'm' : // fall through to mm
			case 'mm' :
				datePartArray[4] = ~~input;
				break;
			// SECOND
			case 's' : // fall through to ss
			case 'ss' :
				datePartArray[5] = ~~input;
				break;
			// MILLISECOND
			case 'S' :
			case 'SS' :
			case 'SSS' :
				datePartArray[6] = ~~ (('0.' + input) * 1000);
				break;
			// UNIX TIMESTAMP WITH MS
			case 'X':
				config._d = new Date(parseFloat(input) * 1000);
				break;
			// TIMEZONE
			case 'Z' : // fall through to ZZ
			case 'ZZ' :
				config._useUTC = true;
				a = (input + '').match(parseTimezoneChunker);
				if (a && a[1]) {
					config._tzh = ~~a[1];
				}
				if (a && a[2]) {
					config._tzm = ~~a[2];
				}
				// reverse offsets
				if (a && a[0] === '+') {
					config._tzh = -config._tzh;
					config._tzm = -config._tzm;
				}
				break;
		}

		// if the input is null, the date is not valid
		if (input == null) {
			config._isValid = false;
		}
	}

	// convert an array to a date.
	// the array should mirror the parameters below
	// note: all values past the year are optional and will default to the lowest possible value.
	// [year, month, day , hour, minute, second, millisecond]
	function dateFromArray(config) {
		var i, date, input = [];

		if (config._d) {
			return;
		}

		for (i = 0; i < 7; i++) {
			config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
		}

		// add the offsets to the time to be parsed so that we can have a clean array for checking isValid
		input[3] += config._tzh || 0;
		input[4] += config._tzm || 0;

		date = new Date(0);

		if (config._useUTC) {
			date.setUTCFullYear(input[0], input[1], input[2]);
			date.setUTCHours(input[3], input[4], input[5], input[6]);
		} else {
			date.setFullYear(input[0], input[1], input[2]);
			date.setHours(input[3], input[4], input[5], input[6]);
		}

		config._d = date;
	}

	// date from string and format string
	function makeDateFromStringAndFormat(config) {
		// This array is used to make a Date, either with `new Date` or `Date.UTC`
		var tokens = config._f.match(formattingTokens),
			string = config._i,
			i, parsedInput;

		config._a = [];

		for (i = 0; i < tokens.length; i++) {
			parsedInput = (getParseRegexForToken(tokens[i]).exec(string) || [])[0];
			if (parsedInput) {
				string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
			}
			// don't parse if its not a known token
			if (formatTokenFunctions[tokens[i]]) {
				addTimeToArrayFromToken(tokens[i], parsedInput, config);
			}
		}
		// handle am pm
		if (config._isPm && config._a[3] < 12) {
			config._a[3] += 12;
		}
		// if is 12 am, change hours to 0
		if (config._isPm === false && config._a[3] === 12) {
			config._a[3] = 0;
		}
		// return
		dateFromArray(config);
	}

	// date from string and array of format strings
	function makeDateFromStringAndArray(config) {
		var tempConfig,
			tempMoment,
			bestMoment,

			scoreToBeat = 99,
			i,
			currentDate,
			currentScore;

		while (config._f.length) {
			tempConfig = extend({}, config);
			tempConfig._f = config._f.pop();
			makeDateFromStringAndFormat(tempConfig);
			tempMoment = new Moment(tempConfig);

			if (tempMoment.isValid()) {
				bestMoment = tempMoment;
				break;
			}

			currentScore = compareArrays(tempConfig._a, tempMoment.toArray());

			if (currentScore < scoreToBeat) {
				scoreToBeat = currentScore;
				bestMoment = tempMoment;
			}
		}

		extend(config, bestMoment);
	}

	// date from iso format
	function makeDateFromString(config) {
		var i,
			string = config._i;
		if (isoRegex.exec(string)) {
			config._f = 'YYYY-MM-DDT';
			for (i = 0; i < 4; i++) {
				if (isoTimes[i][1].exec(string)) {
					config._f += isoTimes[i][0];
					break;
				}
			}
			if (parseTokenTimezone.exec(string)) {
				config._f += " Z";
			}
			makeDateFromStringAndFormat(config);
		} else {
			config._d = new Date(string);
		}
	}

	function makeDateFromInput(config) {
		var input = config._i,
			matched = aspNetJsonRegex.exec(input);

		if (input === undefined) {
			config._d = new Date();
		} else if (matched) {
			config._d = new Date(+matched[1]);
		} else if (typeof input === 'string') {
			makeDateFromString(config);
		} else if (isArray(input)) {
			config._a = input.slice(0);
			dateFromArray(config);
		} else {
			config._d = input instanceof Date ? new Date(+input) : new Date(input);
		}
	}


	/************************************
	 Relative Time
	 ************************************/


		// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
		return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	}

	function relativeTime(milliseconds, withoutSuffix, lang) {
		var seconds = round(Math.abs(milliseconds) / 1000),
			minutes = round(seconds / 60),
			hours = round(minutes / 60),
			days = round(hours / 24),
			years = round(days / 365),
			args = seconds < 45 && ['s', seconds] ||
				minutes === 1 && ['m'] ||
				minutes < 45 && ['mm', minutes] ||
				hours === 1 && ['h'] ||
				hours < 22 && ['hh', hours] ||
				days === 1 && ['d'] ||
				days <= 25 && ['dd', days] ||
				days <= 45 && ['M'] ||
				days < 345 && ['MM', round(days / 30)] ||
				years === 1 && ['y'] || ['yy', years];
		args[2] = withoutSuffix;
		args[3] = milliseconds > 0;
		args[4] = lang;
		return substituteTimeAgo.apply({}, args);
	}


	/************************************
	 Week of Year
	 ************************************/


		// firstDayOfWeek       0 = sun, 6 = sat
		//                      the day of the week that starts the week
		//                      (usually sunday or monday)
		// firstDayOfWeekOfYear 0 = sun, 6 = sat
		//                      the first week is the week that contains the first
		//                      of this day of the week
		//                      (eg. ISO weeks use thursday (4))
	function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
		var end = firstDayOfWeekOfYear - firstDayOfWeek,
			daysToDayOfWeek = firstDayOfWeekOfYear - mom.day();


		if (daysToDayOfWeek > end) {
			daysToDayOfWeek -= 7;
		}

		if (daysToDayOfWeek < end - 7) {
			daysToDayOfWeek += 7;
		}

		return Math.ceil(moment(mom).add('d', daysToDayOfWeek).dayOfYear() / 7);
	}


	/************************************
	 Top Level Functions
	 ************************************/

	function makeMoment(config) {
		var input = config._i,
			format = config._f;

		if (input === null || input === '') {
			return null;
		}

		if (typeof input === 'string') {
			config._i = input = getLangDefinition().preparse(input);
		}

		if (moment.isMoment(input)) {
			config = extend({}, input);
			config._d = new Date(+input._d);
		} else if (format) {
			if (isArray(format)) {
				makeDateFromStringAndArray(config);
			} else {
				makeDateFromStringAndFormat(config);
			}
		} else {
			makeDateFromInput(config);
		}

		return new Moment(config);
	}

	moment = function (input, format, lang) {
		return makeMoment({
			_i : input,
			_f : format,
			_l : lang,
			_isUTC : false
		});
	};

	// creating with utc
	moment.utc = function (input, format, lang) {
		return makeMoment({
			_useUTC : true,
			_isUTC : true,
			_l : lang,
			_i : input,
			_f : format
		});
	};

	// creating with unix timestamp (in seconds)
	moment.unix = function (input) {
		return moment(input * 1000);
	};

	// duration
	moment.duration = function (input, key) {
		var isDuration = moment.isDuration(input),
			isNumber = (typeof input === 'number'),
			duration = (isDuration ? input._data : (isNumber ? {} : input)),
			ret;

		if (isNumber) {
			if (key) {
				duration[key] = input;
			} else {
				duration.milliseconds = input;
			}
		}

		ret = new Duration(duration);

		if (isDuration && input.hasOwnProperty('_lang')) {
			ret._lang = input._lang;
		}

		return ret;
	};

	// version number
	moment.version = VERSION;

	// default format
	moment.defaultFormat = isoFormat;

	// This function will load languages and then set the global language.  If
	// no arguments are passed in, it will simply return the current global
	// language key.
	moment.lang = function (key, values) {
		var i;

		if (!key) {
			return moment.fn._lang._abbr;
		}
		if (values) {
			loadLang(key, values);
		} else if (!languages[key]) {
			getLangDefinition(key);
		}
		moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
	};

	// returns language data
	moment.langData = function (key) {
		if (key && key._lang && key._lang._abbr) {
			key = key._lang._abbr;
		}
		return getLangDefinition(key);
	};

	// compare moment object
	moment.isMoment = function (obj) {
		return obj instanceof Moment;
	};

	// for typechecking Duration objects
	moment.isDuration = function (obj) {
		return obj instanceof Duration;
	};


	/************************************
	 Moment Prototype
	 ************************************/


	moment.fn = Moment.prototype = {

		clone : function () {
			return moment(this);
		},

		valueOf : function () {
			return +this._d;
		},

		unix : function () {
			return Math.floor(+this._d / 1000);
		},

		toString : function () {
			return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
		},

		toDate : function () {
			return this._d;
		},

		toJSON : function () {
			return moment.utc(this).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
		},

		toArray : function () {
			var m = this;
			return [
				m.year(),
				m.month(),
				m.date(),
				m.hours(),
				m.minutes(),
				m.seconds(),
				m.milliseconds()
			];
		},

		isValid : function () {
			if (this._isValid == null) {
				if (this._a) {
					this._isValid = !compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray());
				} else {
					this._isValid = !isNaN(this._d.getTime());
				}
			}
			return !!this._isValid;
		},

		utc : function () {
			this._isUTC = true;
			return this;
		},

		local : function () {
			this._isUTC = false;
			return this;
		},

		format : function (inputString) {
			var output = formatMoment(this, inputString || moment.defaultFormat);
			return this.lang().postformat(output);
		},

		add : function (input, val) {
			var dur;
			// switch args to support add('s', 1) and add(1, 's')
			if (typeof input === 'string') {
				dur = moment.duration(+val, input);
			} else {
				dur = moment.duration(input, val);
			}
			addOrSubtractDurationFromMoment(this, dur, 1);
			return this;
		},

		subtract : function (input, val) {
			var dur;
			// switch args to support subtract('s', 1) and subtract(1, 's')
			if (typeof input === 'string') {
				dur = moment.duration(+val, input);
			} else {
				dur = moment.duration(input, val);
			}
			addOrSubtractDurationFromMoment(this, dur, -1);
			return this;
		},

		diff : function (input, units, asFloat) {
			var that = this._isUTC ? moment(input).utc() : moment(input).local(),
				zoneDiff = (this.zone() - that.zone()) * 6e4,
				diff, output;

			if (units) {
				// standardize on singular form
				units = units.replace(/s$/, '');
			}

			if (units === 'year' || units === 'month') {
				diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
				output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
				output += ((this - moment(this).startOf('month')) - (that - moment(that).startOf('month'))) / diff;
				if (units === 'year') {
					output = output / 12;
				}
			} else {
				diff = (this - that) - zoneDiff;
				output = units === 'second' ? diff / 1e3 : // 1000
					units === 'minute' ? diff / 6e4 : // 1000 * 60
						units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
							units === 'day' ? diff / 864e5 : // 1000 * 60 * 60 * 24
								units === 'week' ? diff / 6048e5 : // 1000 * 60 * 60 * 24 * 7
									diff;
			}
			return asFloat ? output : absRound(output);
		},

		from : function (time, withoutSuffix) {
			return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
		},

		fromNow : function (withoutSuffix) {
			return this.from(moment(), withoutSuffix);
		},

		calendar : function () {
			var diff = this.diff(moment().startOf('day'), 'days', true),
				format = diff < -6 ? 'sameElse' :
					diff < -1 ? 'lastWeek' :
						diff < 0 ? 'lastDay' :
							diff < 1 ? 'sameDay' :
								diff < 2 ? 'nextDay' :
									diff < 7 ? 'nextWeek' : 'sameElse';
			return this.format(this.lang().calendar(format, this));
		},

		isLeapYear : function () {
			var year = this.year();
			return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
		},

		isDST : function () {
			return (this.zone() < moment([this.year()]).zone() ||
				this.zone() < moment([this.year(), 5]).zone());
		},

		day : function (input) {
			var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return input == null ? day :
				this.add({ d : input - day });
		},

		startOf: function (units) {
			units = units.replace(/s$/, '');
			// the following switch intentionally omits break keywords
			// to utilize falling through the cases.
			switch (units) {
				case 'year':
					this.month(0);
				/* falls through */
				case 'month':
					this.date(1);
				/* falls through */
				case 'week':
				case 'day':
					this.hours(0);
				/* falls through */
				case 'hour':
					this.minutes(0);
				/* falls through */
				case 'minute':
					this.seconds(0);
				/* falls through */
				case 'second':
					this.milliseconds(0);
				/* falls through */
			}

			// weeks are a special case
			if (units === 'week') {
				this.day(0);
			}

			return this;
		},

		endOf: function (units) {
			return this.startOf(units).add(units.replace(/s?$/, 's'), 1).subtract('ms', 1);
		},

		isAfter: function (input, units) {
			units = typeof units !== 'undefined' ? units : 'millisecond';
			return +this.clone().startOf(units) > +moment(input).startOf(units);
		},

		isBefore: function (input, units) {
			units = typeof units !== 'undefined' ? units : 'millisecond';
			return +this.clone().startOf(units) < +moment(input).startOf(units);
		},

		isSame: function (input, units) {
			units = typeof units !== 'undefined' ? units : 'millisecond';
			return +this.clone().startOf(units) === +moment(input).startOf(units);
		},

		zone : function () {
			return this._isUTC ? 0 : this._d.getTimezoneOffset();
		},

		daysInMonth : function () {
			return moment.utc([this.year(), this.month() + 1, 0]).date();
		},

		dayOfYear : function (input) {
			var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
			return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
		},

		isoWeek : function (input) {
			var week = weekOfYear(this, 1, 4);
			return input == null ? week : this.add("d", (input - week) * 7);
		},

		week : function (input) {
			var week = this.lang().week(this);
			return input == null ? week : this.add("d", (input - week) * 7);
		},

		// If passed a language key, it will set the language for this
		// instance.  Otherwise, it will return the language configuration
		// variables for this instance.
		lang : function (key) {
			if (key === undefined) {
				return this._lang;
			} else {
				this._lang = getLangDefinition(key);
				return this;
			}
		}
	};

	// helper for adding shortcuts
	function makeGetterAndSetter(name, key) {
		moment.fn[name] = moment.fn[name + 's'] = function (input) {
			var utc = this._isUTC ? 'UTC' : '';
			if (input != null) {
				this._d['set' + utc + key](input);
				return this;
			} else {
				return this._d['get' + utc + key]();
			}
		};
	}

	// loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)
	for (i = 0; i < proxyGettersAndSetters.length; i ++) {
		makeGetterAndSetter(proxyGettersAndSetters[i].toLowerCase().replace(/s$/, ''), proxyGettersAndSetters[i]);
	}

	// add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
	makeGetterAndSetter('year', 'FullYear');

	// add plural methods
	moment.fn.days = moment.fn.day;
	moment.fn.weeks = moment.fn.week;
	moment.fn.isoWeeks = moment.fn.isoWeek;

	/************************************
	 Duration Prototype
	 ************************************/


	moment.duration.fn = Duration.prototype = {
		weeks : function () {
			return absRound(this.days() / 7);
		},

		valueOf : function () {
			return this._milliseconds +
				this._days * 864e5 +
				this._months * 2592e6;
		},

		humanize : function (withSuffix) {
			var difference = +this,
				output = relativeTime(difference, !withSuffix, this.lang());

			if (withSuffix) {
				output = this.lang().pastFuture(difference, output);
			}

			return this.lang().postformat(output);
		},

		lang : moment.fn.lang
	};

	function makeDurationGetter(name) {
		moment.duration.fn[name] = function () {
			return this._data[name];
		};
	}

	function makeDurationAsGetter(name, factor) {
		moment.duration.fn['as' + name] = function () {
			return +this / factor;
		};
	}

	for (i in unitMillisecondFactors) {
		if (unitMillisecondFactors.hasOwnProperty(i)) {
			makeDurationAsGetter(i, unitMillisecondFactors[i]);
			makeDurationGetter(i.toLowerCase());
		}
	}

	makeDurationAsGetter('Weeks', 6048e5);


	/************************************
	 Default Lang
	 ************************************/


		// Set default language, other languages will inherit from English.
	moment.lang('en', {
		ordinal : function (number) {
			var b = number % 10,
				output = (~~ (number % 100 / 10) === 1) ? 'th' :
					(b === 1) ? 'st' :
						(b === 2) ? 'nd' :
							(b === 3) ? 'rd' : 'th';
			return number + output;
		}
	});


	/************************************
	 Exposing Moment
	 ************************************/


	// CommonJS module is defined
	if (hasModule) {
		module.exports = moment;
	}
	/*global ender:false */
	if (typeof ender === 'undefined') {
		// here, `this` means `window` in the browser, or `global` on the server
		// add `moment` as a global object via a string identifier,
		// for Closure Compiler "advanced" mode
		this['moment'] = moment;
	}
	/*global define:false */
	if (typeof define === "function" && define.amd) {
		define("moment", [], function () {
			return moment;
		});
	}
}).call(this);
window['Rainbow'] = (function() {

    /**
     * array of replacements to process at the end
     *
     * @type {Object}
     */
    var replacements = {},

        /**
         * an array of start and end positions of blocks to be replaced
         *
         * @type {Object}
         */
        replacement_positions = {},

        /**
         * an array of the language patterns specified for each language
         *
         * @type {Object}
         */
        language_patterns = {},

        /**
         * an array of languages and whether they should bypass the default patterns
         *
         * @type {Object}
         */
        bypass_defaults = {},

        /**
         * processing level
         *
         * replacements are stored at this level so if there is a sub block of code
         * (for example php inside of html) it runs at a different level
         *
         * @type {number}
         */
        CURRENT_LEVEL = 0,

        /**
         * constant used to refer to the default language
         *
         * @type {number}
         */
        DEFAULT_LANGUAGE = 0,

        /**
         * used as counters so we can selectively call setTimeout
         * after processing a certain number of matches/replacements
         *
         * @type {number}
         */
        match_counter = 0,

        /**
         * @type {number}
         */
        replacement_counter = 0,

        /**
         * @type {null|string}
         */
        global_class,

        /**
         * @type {null|Function}
         */
        onHighlight;

    /**
     * cross browser get attribute for an element
     *
     * @see http://stackoverflow.com/questions/3755227/cross-browser-javascript-getattribute-method
     *
     * @param {Node} el
     * @param {string} attr     attribute you are trying to get
     * @returns {string|number}
     */
    function _attr(el, attr, attrs, i) {
        var result = (el.getAttribute && el.getAttribute(attr)) || 0;

        if (!result) {
            attrs = el.attributes;

            for (i = 0; i < attrs.length; ++i) {
                if (attrs[i].nodeName === attr) {
                    return attrs[i].nodeValue;
                }
            }
        }

        return result;
    }

    /**
     * adds a class to a given code block
     *
     * @param {Element} el
     * @param {string} class_name   class name to add
     * @returns void
     */
    function _addClass(el, class_name) {
        el.className += el.className ? ' ' + class_name : class_name;
    }

    /**
     * checks if a block has a given class
     *
     * @param {Element} el
     * @param {string} class_name   class name to check for
     * @returns {boolean}
     */
    function _hasClass(el, class_name) {
        return (' ' + el.className + ' ').indexOf(' ' + class_name + ' ') > -1;
    }

    /**
     * gets the language for this block of code
     *
     * @param {Element} block
     * @returns {string|null}
     */
    function _getLanguageForBlock(block) {

        // if this doesn't have a language but the parent does then use that
        // this means if for example you have: <pre data-language="php">
        // with a bunch of <code> blocks inside then you do not have
        // to specify the language for each block
        var language = _attr(block, 'data-language') || _attr(block.parentNode, 'data-language');

        // this adds support for specifying language via a css class
        // you can use the Google Code Prettify style: <pre class="lang-php">
        // or the HTML5 style: <pre><code class="language-php">
        if (!language) {
            var pattern = /\blang(?:uage)?-(\w+)/,
                match = block.className.match(pattern) || block.parentNode.className.match(pattern);

            if (match) {
                language = match[1];
            }
        }

        return language;
    }

    /**
     * makes sure html entities are always used for tags
     *
     * @param {string} code
     * @returns {string}
     */
    function _htmlEntities(code) {
        return code.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&(?![\w\#]+;)/g, '&amp;');
    }

    /**
     * determines if a new match intersects with an existing one
     *
     * @param {number} start1    start position of existing match
     * @param {number} end1      end position of existing match
     * @param {number} start2    start position of new match
     * @param {number} end2      end position of new match
     * @returns {boolean}
     */
    function _intersects(start1, end1, start2, end2) {
        if (start2 >= start1 && start2 < end1) {
            return true;
        }

        return end2 > start1 && end2 < end1;
    }

    /**
     * determines if two different matches have complete overlap with each other
     *
     * @param {number} start1   start position of existing match
     * @param {number} end1     end position of existing match
     * @param {number} start2   start position of new match
     * @param {number} end2     end position of new match
     * @returns {boolean}
     */
    function _hasCompleteOverlap(start1, end1, start2, end2) {

        // if the starting and end positions are exactly the same
        // then the first one should stay and this one should be ignored
        if (start2 == start1 && end2 == end1) {
            return false;
        }

        return start2 <= start1 && end2 >= end1;
    }

    /**
     * determines if the match passed in falls inside of an existing match
     * this prevents a regex pattern from matching inside of a bigger pattern
     *
     * @param {number} start - start position of new match
     * @param {number} end - end position of new match
     * @returns {boolean}
     */
    function _matchIsInsideOtherMatch(start, end) {
        for (var key in replacement_positions[CURRENT_LEVEL]) {
            key = parseInt(key, 10);

            // if this block completely overlaps with another block
            // then we should remove the other block and return false
            if (_hasCompleteOverlap(key, replacement_positions[CURRENT_LEVEL][key], start, end)) {
                delete replacement_positions[CURRENT_LEVEL][key];
                delete replacements[CURRENT_LEVEL][key];
            }

            if (_intersects(key, replacement_positions[CURRENT_LEVEL][key], start, end)) {
                return true;
            }
        }

        return false;
    }

    /**
     * takes a string of code and wraps it in a span tag based on the name
     *
     * @param {string} name     name of the pattern (ie keyword.regex)
     * @param {string} code     block of code to wrap
     * @returns {string}
     */
    function _wrapCodeInSpan(name, code) {
        return '<span class="' + name.replace(/\./g, ' ') + (global_class ? ' ' + global_class : '') + '">' + code + '</span>';
    }

    /**
     * finds out the position of group match for a regular expression
     *
     * @see http://stackoverflow.com/questions/1985594/how-to-find-index-of-groups-in-match
     *
     * @param {Object} match
     * @param {number} group_number
     * @returns {number}
     */
    function _indexOfGroup(match, group_number) {
        var index = 0,
            i;

        for (i = 1; i < group_number; ++i) {
            if (match[i]) {
                index += match[i].length;
            }
        }

        return index;
    }

    /**
     * matches a regex pattern against a block of code
     * finds all matches that should be processed and stores the positions
     * of where they should be replaced within the string
     *
     * this is where pretty much all the work is done but it should not
     * be called directly
     *
     * @param {RegExp} pattern
     * @param {string} code
     * @returns void
     */
    function _processPattern(regex, pattern, code, callback)
    {
        var match = regex.exec(code);

        if (!match) {
            return callback();
        }

        ++match_counter;

        // treat match 0 the same way as name
        if (!pattern['name'] && typeof pattern['matches'][0] == 'string') {
            pattern['name'] = pattern['matches'][0];
            delete pattern['matches'][0];
        }

        var replacement = match[0],
            start_pos = match.index,
            end_pos = match[0].length + start_pos,

            /**
             * callback to process the next match of this pattern
             */
            processNext = function() {
                var nextCall = function() {
                    _processPattern(regex, pattern, code, callback);
                };

                // every 100 items we process let's call set timeout
                // to let the ui breathe a little
                return match_counter % 100 > 0 ? nextCall() : setTimeout(nextCall, 0);
            };

        // if this is not a child match and it falls inside of another
        // match that already happened we should skip it and continue processing
        if (_matchIsInsideOtherMatch(start_pos, end_pos)) {
            return processNext();
        }

        /**
         * callback for when a match was successfully processed
         *
         * @param {string} replacement
         * @returns void
         */
        var onMatchSuccess = function(replacement) {
                // if this match has a name then wrap it in a span tag
                if (pattern['name']) {
                    replacement = _wrapCodeInSpan(pattern['name'], replacement);
                }

                // console.log('LEVEL', CURRENT_LEVEL, 'replace', match[0], 'with', replacement, 'at position', start_pos, 'to', end_pos);

                // store what needs to be replaced with what at this position
                if (!replacements[CURRENT_LEVEL]) {
                    replacements[CURRENT_LEVEL] = {};
                    replacement_positions[CURRENT_LEVEL] = {};
                }

                replacements[CURRENT_LEVEL][start_pos] = {
                    'replace': match[0],
                    'with': replacement
                };

                // store the range of this match so we can use it for comparisons
                // with other matches later
                replacement_positions[CURRENT_LEVEL][start_pos] = end_pos;

                // process the next match
                processNext();
            },

            // if this pattern has sub matches for different groups in the regex
            // then we should process them one at a time by rerunning them through
            // this function to generate the new replacement
            //
            // we run through them backwards because the match position of earlier
            // matches will not change depending on what gets replaced in later
            // matches
            group_keys = keys(pattern['matches']),

            /**
             * callback for processing a sub group
             *
             * @param {number} i
             * @param {Array} group_keys
             * @param {Function} callback
             */
            processGroup = function(i, group_keys, callback) {
                if (i >= group_keys.length) {
                    return callback(replacement);
                }

                var processNextGroup = function() {
                        processGroup(++i, group_keys, callback);
                    },
                    block = match[group_keys[i]];

                // if there is no match here then move on
                if (!block) {
                    return processNextGroup();
                }

                var group = pattern['matches'][group_keys[i]],
                    language = group['language'],

                    /**
                     * process group is what group we should use to actually process
                     * this match group
                     *
                     * for example if the subgroup pattern looks like this
                     * 2: {
                     *     'name': 'keyword',
                     *     'pattern': /true/g
                     * }
                     *
                     * then we use that as is, but if it looks like this
                     *
                     * 2: {
                     *     'name': 'keyword',
                     *     'matches': {
                     *          'name': 'special',
                     *          'pattern': /whatever/g
                     *      }
                     * }
                     *
                     * we treat the 'matches' part as the pattern and keep
                     * the name around to wrap it with later
                     */
                    process_group = group['name'] && group['matches'] ? group['matches'] : group,

                    /**
                     * takes the code block matched at this group, replaces it
                     * with the highlighted block, and optionally wraps it with
                     * a span with a name
                     *
                     * @param {string} block
                     * @param {string} replace_block
                     * @param {string|null} match_name
                     */
                    _replaceAndContinue = function(block, replace_block, match_name) {
                        replacement = _replaceAtPosition(_indexOfGroup(match, group_keys[i]), block, match_name ? _wrapCodeInSpan(match_name, replace_block) : replace_block, replacement);
                        processNextGroup();
                    };

                // if this is a sublanguage go and process the block using that language
                if (language) {
                    return _highlightBlockForLanguage(block, language, function(code) {
                        _replaceAndContinue(block, code);
                    });
                }

                // if this is a string then this match is directly mapped to selector
                // so all we have to do is wrap it in a span and continue
                if (typeof group === 'string') {
                    return _replaceAndContinue(block, block, group);
                }

                // the process group can be a single pattern or an array of patterns
                // _processCodeWithPatterns always expects an array so we convert it here
                _processCodeWithPatterns(block, process_group.length ? process_group : [process_group], function(code) {
                    _replaceAndContinue(block, code, group['matches'] ? group['name'] : 0);
                });
            };

        processGroup(0, group_keys, onMatchSuccess);
    }

    /**
     * should a language bypass the default patterns?
     *
     * if you call Rainbow.extend() and pass true as the third argument
     * it will bypass the defaults
     */
    function _bypassDefaultPatterns(language)
    {
        return bypass_defaults[language];
    }

    /**
     * returns a list of regex patterns for this language
     *
     * @param {string} language
     * @returns {Array}
     */
    function _getPatternsForLanguage(language) {
        var patterns = language_patterns[language] || [],
            default_patterns = language_patterns[DEFAULT_LANGUAGE] || [];

        return _bypassDefaultPatterns(language) ? patterns : patterns.concat(default_patterns);
    }

    /**
     * substring replace call to replace part of a string at a certain position
     *
     * @param {number} position         the position where the replacement should happen
     * @param {string} replace          the text we want to replace
     * @param {string} replace_with     the text we want to replace it with
     * @param {string} code             the code we are doing the replacing in
     * @returns {string}
     */
    function _replaceAtPosition(position, replace, replace_with, code) {
        var sub_string = code.substr(position);
        return code.substr(0, position) + sub_string.replace(replace, replace_with);
    }

   /**
     * sorts an object by index descending
     *
     * @param {Object} object
     * @return {Array}
     */
    function keys(object) {
        var locations = [],
            replacement,
            pos;

        for(var location in object) {
            if (object.hasOwnProperty(location)) {
                locations.push(location);
            }
        }

        // numeric descending
        return locations.sort(function(a, b) {
            return b - a;
        });
    }

    /**
     * processes a block of code using specified patterns
     *
     * @param {string} code
     * @param {Array} patterns
     * @returns void
     */
    function _processCodeWithPatterns(code, patterns, callback)
    {
        // we have to increase the level here so that the
        // replacements will not conflict with each other when
        // processing sub blocks of code
        ++CURRENT_LEVEL;

        // patterns are processed one at a time through this function
        function _workOnPatterns(patterns, i)
        {
            // still have patterns to process, keep going
            if (i < patterns.length) {
                return _processPattern(patterns[i]['pattern'], patterns[i], code, function() {
                    _workOnPatterns(patterns, ++i);
                });
            }

            // we are done processing the patterns
            // process the replacements and update the DOM
            _processReplacements(code, function(code) {

                // when we are done processing replacements
                // we are done at this level so we can go back down
                delete replacements[CURRENT_LEVEL];
                delete replacement_positions[CURRENT_LEVEL];
                --CURRENT_LEVEL;
                callback(code);
            });
        }

        _workOnPatterns(patterns, 0);
    }

    /**
     * process replacements in the string of code to actually update the markup
     *
     * @param {string} code         the code to process replacements in
     * @param {Function} onComplete   what to do when we are done processing
     * @returns void
     */
    function _processReplacements(code, onComplete) {

        /**
         * processes a single replacement
         *
         * @param {string} code
         * @param {Array} positions
         * @param {number} i
         * @param {Function} onComplete
         * @returns void
         */
        function _processReplacement(code, positions, i, onComplete) {
            if (i < positions.length) {
                ++replacement_counter;
                var pos = positions[i],
                    replacement = replacements[CURRENT_LEVEL][pos];
                code = _replaceAtPosition(pos, replacement['replace'], replacement['with'], code);

                // process next function
                var next = function() {
                    _processReplacement(code, positions, ++i, onComplete);
                };

                // use a timeout every 250 to not freeze up the UI
                return replacement_counter % 250 > 0 ? next() : setTimeout(next, 0);
            }

            onComplete(code);
        }

        var string_positions = keys(replacements[CURRENT_LEVEL]);
        _processReplacement(code, string_positions, 0, onComplete);
    }

    /**
     * takes a string of code and highlights it according to the language specified
     *
     * @param {string} code
     * @param {string} language
     * @param {Function} onComplete
     * @returns void
     */
    function _highlightBlockForLanguage(code, language, onComplete) {
        var patterns = _getPatternsForLanguage(language);
        _processCodeWithPatterns(_htmlEntities(code), patterns, onComplete);
    }

    /**
     * highlight an individual code block
     *
     * @param {Array} code_blocks
     * @param {number} i
     * @returns void
     */
    function _highlightCodeBlock(code_blocks, i, onComplete) {
        if (i < code_blocks.length) {
            var block = code_blocks[i],
                language = _getLanguageForBlock(block);

            if (!_hasClass(block, 'rainbow') && language) {
                language = language.toLowerCase();

                _addClass(block, 'rainbow');

                return _highlightBlockForLanguage(block.innerHTML, language, function(code) {
                    block.innerHTML = code;

                    // reset the replacement arrays
                    replacements = {};
                    replacement_positions = {};

                    // if you have a listener attached tell it that this block is now highlighted
                    if (onHighlight) {
                        onHighlight(block, language);
                    }

                    // process the next block
                    setTimeout(function() {
                        _highlightCodeBlock(code_blocks, ++i, onComplete);
                    }, 0);
                });
            }
            return _highlightCodeBlock(code_blocks, ++i, onComplete);
        }

        if (onComplete) {
            onComplete();
        }
    }

    /**
     * start highlighting all the code blocks
     *
     * @returns void
     */
    function _highlight(node, onComplete) {

        // the first argument can be an Event or a DOM Element
        // I was originally checking instanceof Event but that makes it break
        // when using mootools
        //
        // @see https://github.com/ccampbell/rainbow/issues/32
        //
        node = node && typeof node.getElementsByTagName == 'function' ? node : document;

        var pre_blocks = node.getElementsByTagName('pre'),
            code_blocks = node.getElementsByTagName('code'),
            i,
            final_pre_blocks = [],
            final_code_blocks = [];

        // first loop through all pre blocks to find which ones to highlight
        // also strip whitespace
        for (i = 0; i < pre_blocks.length; ++i) {

            // strip whitespace around code tags when they are inside of a pre tag
            // this makes the themes look better because you can't accidentally
            // add extra linebreaks at the start and end
            //
            // when the pre tag contains a code tag then strip any extra whitespace
            // for example
            // <pre>
            //      <code>var foo = true;</code>
            // </pre>
            //
            // will become
            // <pre><code>var foo = true;</code></pre>
            //
            // if you want to preserve whitespace you can use a pre tag on its own
            // without a code tag inside of it
            if (pre_blocks[i].getElementsByTagName('code').length) {
                pre_blocks[i].innerHTML = pre_blocks[i].innerHTML.replace(/^\s+/, '').replace(/\s+$/, '');
                continue;
            }

            // if the pre block has no code blocks then we are going to want to
            // process it directly
            final_pre_blocks.push(pre_blocks[i]);
        }

        // @see http://stackoverflow.com/questions/2735067/how-to-convert-a-dom-node-list-to-an-array-in-javascript
        // we are going to process all <code> blocks
        for (i = 0; i < code_blocks.length; ++i) {
            final_code_blocks.push(code_blocks[i]);
        }

        _highlightCodeBlock(final_code_blocks.concat(final_pre_blocks), 0, onComplete);
    }

    /**
     * public methods
     */
    return {

        /**
         * extends the language pattern matches
         *
         * @param {*} language     name of language
         * @param {*} patterns      array of patterns to add on
         * @param {boolean|null} bypass      if true this will bypass the default language patterns
         */
        extend: function(language, patterns, bypass) {

            // if there is only one argument then we assume that we want to
            // extend the default language rules
            if (arguments.length == 1) {
                patterns = language;
                language = DEFAULT_LANGUAGE;
            }

            bypass_defaults[language] = bypass;
            language_patterns[language] = patterns.concat(language_patterns[language] || []);
        },

        /**
         * call back to let you do stuff in your app after a piece of code has been highlighted
         *
         * @param {Function} callback
         */
        onHighlight: function(callback) {
            onHighlight = callback;
        },

        /**
         * method to set a global class that will be applied to all spans
         *
         * @param {string} class_name
         */
        addClass: function(class_name) {
            global_class = class_name;
        },

        /**
         * starts the magic rainbow
         *
         * @returns void
         */
        color: function() {

            // if you want to straight up highlight a string you can pass the string of code,
            // the language, and a callback function
            if (typeof arguments[0] == 'string') {
                return _highlightBlockForLanguage(arguments[0], arguments[1], arguments[2]);
            }

            // if you pass a callback function then we rerun the color function
            // on all the code and call the callback function on complete
            if (typeof arguments[0] == 'function') {
                return _highlight(0, arguments[0]);
            }

            // otherwise we use whatever node you passed in with an optional
            // callback function as the second parameter
            _highlight(arguments[0], arguments[1]);
        }
    };
}) ();

/**
 * adds event listener to start highlighting
 */
(function() {
    if (document.addEventListener) {
        return document.addEventListener('DOMContentLoaded', Rainbow.color, false);
    }
    window.attachEvent('onload', Rainbow.color);
}) ();

// When using Google closure compiler in advanced mode some methods
// get renamed.  This keeps a public reference to these methods so they can
// still be referenced from outside this library.
Rainbow["onHighlight"] = Rainbow.onHighlight;
Rainbow["addClass"] = Rainbow.addClass;

Rainbow.extend('css', [
    {
        'name': 'comment',
        'pattern': /\/\*[\s\S]*?\*\//gm
    },
    {
        'name': 'constant.hex-color',
        'pattern': /#([a-f0-9]{3}|[a-f0-9]{6})(?=;|\s)/gi
    },
    {
        'matches': {
            1: 'constant.numeric',
            2: 'keyword.unit'
        },
        'pattern': /(\d+)(px|em|cm|s|%)?/g
    },
    {
        'name': 'string',
        'pattern': /('|")(.*?)\1/g
    },
    {
        'name': 'support.css-property',
        'matches': {
            1: 'support.vendor-prefix'
        },
        'pattern': /(-o-|-moz-|-webkit-|-ms-)?[\w-]+(?=\s?:)(?!.*\{)/g
    },
    {
        'matches': {
            1: [
                {
                    'name': 'entity.name.sass',
                    'pattern': /&amp;/g
                },
                {
                    'name': 'direct-descendant',
                    'pattern': /&gt;/g
                },
                {
                    'name': 'entity.name.class',
                    'pattern': /\.[\w\-_]+/g
                },
                {
                    'name': 'entity.name.id',
                    'pattern': /\#[\w\-_]+/g
                },
                {
                    'name': 'entity.name.pseudo',
                    'pattern': /:[\w\-_]+/g
                },
                {
                    'name': 'entity.name.tag',
                    'pattern': /\w+/g
                }
            ]
        },
        'pattern': /([\w\ ,:\.\#\&\;\-_]+)(?=.*\{)/g
    },
    {
        'matches': {
            2: 'support.vendor-prefix',
            3: 'support.css-value'
        },
        'pattern': /(:|,)\s?(-o-|-moz-|-webkit-|-ms-)?([a-zA-Z-]*)(?=\b)(?!.*\{)/g
    },
    {
        'matches': {
            1: 'support.tag.style',
            2: [
                {
                    'name': 'string',
                    'pattern': /('|")(.*?)(\1)/g
                },
                {
                    'name': 'entity.tag.style',
                    'pattern': /(\w+)/g
                }
            ],
            3: 'support.tag.style'
        },
        'pattern': /(&lt;\/?)(style.*?)(&gt;)/g
    }
], true);

Rainbow.extend([
    {
        'matches': {
            1: {
                'name': 'keyword.operator',
                'pattern': /\=/g
            },
            2: {
                'name': 'string',
                'matches': {
                    'name': 'constant.character.escape',
                    'pattern': /\\('|"){1}/g
                }
            }
        },
        'pattern': /(\(|\s|\[|\=|:)(('|")([^\\\1]|\\.)*?(\3))/gm
    },
    {
        'name': 'comment',
        'pattern': /\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm
    },
    {
        'name': 'constant.numeric',
        'pattern': /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
    },
    {
        'matches': {
            1: 'keyword'
        },
        'pattern': /\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi
    },
    {
        'name': 'constant.language',
        'pattern': /true|false|null/g
    },
    {
        'name': 'keyword.operator',
        'pattern': /\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g
    },
    {
        'matches': {
            1: 'function.call'
        },
        'pattern': /(\w+?)(?=\()/g
    },
    {
        'matches': {
            1: 'storage.function',
            2: 'entity.name.function'
        },
        'pattern': /(function)\s(.*?)(?=\()/g
    }
]);

Rainbow.extend('html', [
    {
        'name': 'source.php.embedded',
        'matches': {
            2: {
                'language': 'php'
            }
        },
        'pattern': /&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm
    },
    {
        'name': 'source.css.embedded',
        'matches': {
            0: {
                'language': 'css'
            }
        },
        'pattern': /&lt;style(.*?)&gt;([\s\S]*?)&lt;\/style&gt;/gm
    },
    {
        'name': 'source.js.embedded',
        'matches': {
            0: {
                'language': 'javascript'
            }
        },
        'pattern': /&lt;script(?! src)(.*?)&gt;([\s\S]*?)&lt;\/script&gt;/gm
    },
    {
        'name': 'comment.html',
        'pattern': /&lt;\!--[\S\s]*?--&gt;/g
    },
    {
        'matches': {
            1: 'support.tag.open',
            2: 'support.tag.close'
        },
        'pattern': /(&lt;)|(\/?\??&gt;)/g
    },
    {
        'name': 'support.tag',
        'matches': {
            1: 'support.tag',
            2: 'support.tag.special',
            3: 'support.tag-name'
        },
        'pattern': /(&lt;\??)(\/|\!?)(\w+)/g
    },
    {
        'matches': {
            1: 'support.attribute'
        },
        'pattern': /([a-z-]+)(?=\=)/gi
    },
    {
        'matches': {
            1: 'support.operator',
            2: 'string.quote',
            3: 'string.value',
            4: 'string.quote'
        },
        'pattern': /(=)('|")(.*?)(\2)/g
    },
    {
        'matches': {
            1: 'support.operator',
            2: 'support.value'
        },
        'pattern': /(=)([a-zA-Z\-0-9]*)\b/g
    },
    {
        'matches': {
            1: 'support.attribute'
        },
        'pattern': /\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g
    }
], true);

Rainbow.extend('javascript', [

    /**
     * matches $. or $(
     */
    {
        'name': 'selector',
        'pattern': /(\s|^)\$(?=\.|\()/g
    },
    {
        'name': 'support',
        'pattern': /\b(window|document)\b/g
    },
    {
        'matches': {
            1: 'support.property'
        },
        'pattern': /\.(length|node(Name|Value))\b/g
    },
    {
        'matches': {
            1: 'support.function'
        },
        'pattern': /(setTimeout|setInterval)(?=\()/g

    },
    {
        'matches': {
            1: 'support.method'
        },
        'pattern': /\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g
    },
    {
        'matches': {
            1: 'support.tag.script',
            2: [
                {
                    'name': 'string',
                    'pattern': /('|")(.*?)(\1)/g
                },
                {
                    'name': 'entity.tag.script',
                    'pattern': /(\w+)/g
                }
            ],
            3: 'support.tag.script'
        },
        'pattern': /(&lt;\/?)(script.*?)(&gt;)/g
    },

    /**
     * matches any escaped characters inside of a js regex pattern
     *
     * @see https://github.com/ccampbell/rainbow/issues/22
     *
     * this was causing single line comments to fail so it now makes sure
     * the opening / is not directly followed by a *
     *
     * @todo check that there is valid regex in match group 1
     */
    {
        'name': 'string.regexp',
        'matches': {
            1: 'string.regexp.open',
            2: {
                'name': 'constant.regexp.escape',
                'pattern': /\\(.){1}/g
            },
            3: 'string.regexp.close',
            4: 'string.regexp.modifier'
        },
        'pattern': /(\/)(?!\*)(.+)(\/)([igm]{0,3})/g
    },

    /**
     * matches runtime function declarations
     */
    {
        'matches': {
            1: 'storage',
            3: 'entity.function'
        },
        'pattern': /(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g
    },

    /**
     * matches constructor call
     */
    {
        'matches': {
            1: 'keyword',
            2: 'entity.function'
        },
        'pattern': /(new)\s+(.*)(?=\()/g
    },

    /**
     * matches any function call in the style functionName: function()
     */
    {
        'name': 'entity.function',
        'pattern': /(\w+)(?=:\s{0,}function)/g
    }
]);

can.Model("CanJSUS.ChatLine", {
	models: function(list) {
		var models = list.data.map(function(el) {
			return CanJSUS.ChatLine.model(el);
		});

		return new can.Observe.List(models).reverse();
	},
	model: function(data) {
		return {
			actor: data.actor,
			body: data.title,
			feed: data.feed,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		// No idea if this is the right URL yet. 
		url: 'http://www.bithub.com/api/events/?category=chat&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });

can.Model('CanJSUS.Configuration', {
	configuration: null,
	// the configuration is not going to change,
	// and it's pretty much a singleton, so:
	findOne: function() {
		if(CanJSUS.Configuration.configuration === null) {
			CanJSUS.Configuration.configuration = $.ajax({
				url: 'http://bitbuilder.herokuapp.com/canjs',
				dataType: 'jsonp'
			});
		}

		return CanJSUS.Configuration.configuration;
	},
	model: function(data) {
		var libraries = [];
		can.each(data.configurations, function(library, id) {
			library.id = id;
			libraries.push(library);
		});
		
		var types = {};
		can.each(data.types, function(description, id) {
			types[id] = {
				id: id,
				description: description,
				modules: []
			};
		});

		can.each(data.modules, function(module, path) {
			module.id = CanJSUS.Configuration.pathToID(path);
			module.path = path;
			types[module.type].modules.push(module);
		});

		return {
			name: data.name,
			version: data.version,
			description: data.description,
			libraries: libraries,
			types: types,
			modules: data.modules
		};
	},
	pathToID: function(path) {
		return path.split('/').join('-').split('.').join('_');
	},
	idToPath: function(id) {
		return id.split('_').join('.').split('/').join('/');
	}
}, { });
can.Model("CanJSUS.ForumPost", {
	model: function(data) {
		return {
			actor: data.actor,
			title: data.title,
			body: data.body,

			feed: data.feed,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: 'http://www.bithub.com/api/events/?feed=forums&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });
can.Model("CanJSUS.GithubEvent", {
	model: function(data) {
		return {
			actor: data.actor,
			actorID: data._author,
			picture: ''/*data.source_data.org.avatar_url*/,
			title: data.title,
			commits: []/*data.source_data.payload.commits.map(function(el) {
				return {
					hash: el.sha,
					message: el.message
				}
			})*/,

			feed: data.feed,
			category: data.category,
			link: data.url,
			points: data.points,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: 'http://www.bithub.com/api/events/?category=code&also=source_data&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });
can.Model("CanJSUS.GithubIssue", {
	model: function(data) {
		return {
			actor: data.actor,
			actorID: data._author,
			picture: ''/*data.source_data.org.avatar_url*/,
			title: data.title,
			body: data.body,

			feed: data.feed,
			category: data.category,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: 'http://www.bithub.com/api/events/?category=bug&also=source_data&order=upvotes&limit={limit}',
		dataType: 'json'
	}
}, { });
can.Model("CanJSUS.Plugin", {
	//TODO: remove models() once the Bithub API can filter
	models: function(list) {
		var models = list.data.map(function(el) {
			return CanJSUS.ForumPost.model(el);
		});

		return new can.Observe.List(models);
	},
	model: function(data) {
		// The API's not returning plugins and apps yet, so this may
		// end up being innacurate.
		return {
			actor: data.actor,
			title: data.title,
			body: data.body,

			feed: data.feed,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: 'http://www.bithub.com/api/events/?category=article|app|plugin&order=upvotes:desc&limit={limit}',
		dataType: 'json'
	}
}, { });
can.Model("CanJSUS.Tweet", {
	//TODO: remove models() once the Bithub API can filter
	model: function(data) {
		return {
			handle: data.actor,
			realName: ''/*data.source_data.user.name*/,
			picture: ''/*data.source_data.user.profile_image_url*/,
			body: data.title,

			feed: data.feed,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: 'http://www.bithub.com/api/events/?feed=twitter&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });
can.Control('CanJSUS.Benefits', {
	defaults: {
		taglines: {
			'flexible': 'Use it anywhere. Works with your libraries, plugins, and templates.',
			'powerful': 'Strong enough for high-power applications. Simple enough to learn in a day.',
			'fast': 'Sleek, lightweight, and responsive: exactly what it says on the can.'
		}
	}
}, {
	init: function() {
		this.state = new can.Observe({selectedTab: 'flexible', tagline: this.options.taglines.flexible});
		this.element.html(can.view('templates/benefitTabs.mustache', this.state));
		this._switchBenefit($('li[data-benefit=' + this.state.selectedTab + ']', this.element));
	},
	'li mouseover': '_switchBenefit',
	'li click': '_switchBenefit',
	_switchBenefit: function(el) {
		this.state.attr({
			'selectedTab': can.data(el, 'benefit') || '',
			'tagline': this.options.taglines[can.data(el, 'benefit')] || ''
		});

		$('li', this.element).removeClass('active');
		el.addClass('active');

	}
});
can.Control('CanJSUS.CDNChooser', {
	defaults: {
		version: '',
		libraries: [],
		selectedLibrary: ''
	}
}, {
	init: function() {
		this.options = new can.Observe(this.options);
		
		var self = this;
		CanJSUS.Configuration.findOne().done(function(config) {
			self.options.libraries.attr(config.libraries);
			self.options.attr('version', config.version);
			self.element.find('select').change();
		});

		this.element.html(can.view('templates/cdnChooser.mustache', this.options));
	},
	// function adapted from http://stackoverflow.com/questions/11128130/select-text-in-javascript
	selectText: function(element) {
		if (document.body.createTextRange) { // ms
	        var range = document.body.createTextRange();
	        range.moveToElementText(element);
	        range.select();
	    } else if (window.getSelection) { // moz, opera, webkit
	        var selection = window.getSelection();            
	        var range = document.createRange();
	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);
	    }
	},
	'.cdn-link click': function(el, ev) {
		this.selectText(el[0]);
	},
	'select change': function(el, ev) {
		this.options.attr('selectedLibrary', el.val());
	}
});
can.Control('CanJSUS.CommunityTab', {
	defaults: {
		view: ''
	}
}, {
	init: function() {
		can.Mustache.registerHelper('formatDate', function(date) {
			return moment(date()).calendar();
		});

		this.element.html(can.view(this.options.view, this.options.state));
	}
});
can.Control('CanJSUS.CommunityTabs', {
	defaults: {
		tabControls: {
			'forums': CanJSUS.ForumsTab,
			'irc': CanJSUS.IRCTab,
			'plugins': CanJSUS.PluginsTab,
			'twitter': CanJSUS.TwitterTab,
			'issues': CanJSUS.IssuesTab,
			'github': CanJSUS.GithubTab
		}
	}
}, {
	init: function() {
		// get data for all six tabs up front
		// this way, it doesn't call for the data every time a tab switches.
		this.state = new can.Observe({});
		var self = this;

		this.modelRequests = 6;
		$('.loading').addClass('active');
		CanJSUS.ForumPost.findAll({limit: 3}).done(function(posts) {
			self._hideLoading();
			self.state.attr('forumPosts', posts);
		});
		// Missing counts for forum categories
		CanJSUS.ChatLine.findAll({limit: 30}).done(function(lines) {
			self._hideLoading();
			self.state.attr('lines', lines);
		});
		CanJSUS.Plugin.findAll({limit: 3}).done(function(plugins) {
			self._hideLoading();
			self.state.attr('plugins', plugins);
		});
		// Missing counts for plugins/apps/articles
		CanJSUS.Tweet.findAll({limit: 3}).done(function(tweets) {
			self._hideLoading();
			self.state.attr('tweets', tweets);
		});
		CanJSUS.GithubIssue.findAll({limit: 3}).done(function(issues) {
			self._hideLoading();
			self.state.attr('issues', issues);
		});
		CanJSUS.GithubEvent.findAll({limit: 3}).done(function(commits) {
			self._hideLoading();
			self.state.attr('commits', commits);
		});
		// Missing follower counts for github

		this.element.html(can.view('templates/communityTabs.mustache', {}));
		can.route.attr('type', 'community/forums');
	},
	//'li mouseenter': '_switchTab',
	'li click': function(el, ev) {
		can.route.attr('type', 'community/' + el.prop('class'));
	},
	':type route': function(data) {
		var route = data.type.split('/');
		if(route[0] === 'community') {
			this._switchTab(route[1]);
		}
	},
	_switchTab: function(selectedTab) {
		this.element
			.find('li').removeClass('active')
			.filter('.' + selectedTab).addClass('active');
		var tabControl = this.options.tabControls[selectedTab];
		new tabControl($('.content > .container'), {state: this.state});
	},
	_hideLoading: function() {
		this.modelRequests--;
		if(this.modelRequests < 1) {
			$('.loading').removeClass('active');
		}
	}
});
can.Control('CanJSUS.DownloadCustomizer', {
	defaults: {
		minified: false,
		configuration: null,
		view: 'templates/downloadCustomizer.mustache'
	}
}, {
	init: function() {
		this.options = new can.Observe(this.options);
		this.isDependedOnBy = {};
		this.checkAlls = {};
		
		var self = this;
		CanJSUS.Configuration.findOne().done(function(config) {
			self.isDependedOnBy = self._collectDependedOn(config);
			self.options.attr('configuration', config);
			can.each(config.types, function(obj, type) {
				self.element.find('[name=' + type + ']:checkbox:first').change();
			});
		});

		this.element.html(can.view(this.options.view, this.options));
	},
	_collectDependedOn: function(config) {
		var isDependedOnBy = {};
		can.each(config.modules, function(module, path) {
			can.each(module.dependencies, function(dependency) {
				if(! isDependedOnBy[dependency]) {
					isDependedOnBy[dependency] = [];
				}

				isDependedOnBy[dependency].push(path);
			});
		});

		return isDependedOnBy;
	},
	'input.module[type=checkbox] change': function(el, ev) {
		if(el.prop('checked')) {
			// also check dependencies
			can.each(can.data(el, 'module').dependencies, function(dependency) {
				$('#' + CanJSUS.Configuration.pathToID(dependency)).prop('checked', true).change();
			});

			if(! $('[name=' + el.prop('name') + ']:checkbox:enabled:not(:checked)').length) {
				$('#' + el.prop('name')).prop('checked', true);
			}
		} else {
			$('.all[data-type=' + can.data(el, 'module').type + ']').prop('checked', false);
			this.checkAlls[can.data(el, 'module').type] = false;

			if(this.isDependedOnBy[el.val()]) {
				// uncheck depended-on-cies
				can.each(this.isDependedOnBy[el.val()], function(dependedOn) {
					$('#' + CanJSUS.Configuration.pathToID(dependedOn)).prop('checked', false).change();
				});
			}
		}
	},
	'.all change': function(el, ev) {
		this.checkAlls[can.data(el, 'type')] = el.prop('checked');

		can.each(this.options.configuration.types[can.data(el, 'type')].modules, function(module) {
			var check = $('#' + CanJSUS.Configuration.pathToID(module.id))
			if(! check.prop('disabled')) {
				check.prop('checked', el.prop('checked')).change();
			}
		});
	},
	'input[name=configuration] change': function(el, ev) {
		if(el.prop('checked')) {
			this._libraryChanged(el.prop('id'));
		}
	},
	_libraryChanged: function(libraryID) {
		var self = this;
		can.each(this.options.configuration.modules, function(module) {
			var disallowed = !!(module.configurations && module.configurations.indexOf(libraryID) < 0);
			var check = $('#' + module.id);
			check
				.closest('tr').toggleClass('inactive', disallowed).end()
				.prop('disabled', disallowed)
				.prop('checked', disallowed ? false : check.prop('checked') || self.checkAlls[module.type]).change();
		});
		can.each(this.options.configuration.types, function(obj, type) {
			self.element.find('[name=' + type + ']:checkbox:first').change();
		});
	}

});
CanJSUS.CommunityTab('CanJSUS.ForumsTab', {
	defaults: {
		view: 'templates/forumsTab.mustache'
	}
}, {
	init: function() {
		this._super();

		can.Mustache.registerHelper('truncatePost', function(post) {
			var div = $('<div></div>').html(post());
			/* Here's the 'smart' (ish?) way, but that's not how Bithub does it.
			return div[0].childNodes[0].nodeValue || div.children().first().text();
			*/
			return div.text().substr(0, 200);
		});

	},
	'#forumSearch button click': function(el, ev) {
		var terms = $('input[type=search]').val();
		window.location.href = 'https://forum.javascriptmvc.com/#Search/' + terms;
	},
	'#forumSearch input[type=search] keypress': function(el, ev) {
		if(ev.which === 13/* Return */) {
			ev.preventDefault();
			var terms = el.val();
			window.location.href = 'https://forum.javascriptmvc.com/#Search/' + terms;
		}
	}
});
CanJSUS.CommunityTab('CanJSUS.GithubTab', {
	defaults: {
		view: 'templates/githubTab.mustache'
	}
}, {
	init: function() {
		this._super();

		can.Mustache.registerHelper('truncateHash', function(hash) {
			return hash().substr(0, 6);
		});
	}
});
CanJSUS.DownloadCustomizer('CanJSUS.HeroDownloadCustomizer', {
	defaults: {
		view: 'templates/heroDownloadCustomizer.mustache'
	}
}, {
	init: function() {
		this._super();
		this.isOpen = false;
	},
	'.customize click': function(el, ev) {
		this.toggleFlyout();
		ev.stopPropagation();
	},
	'.customize-box click': function(el, ev) {
		ev.stopPropagation();
	},
	'{window} click': function(el, ev) {
		this.toggleFlyout(false);
	},
	'.download click': function(el, ev) {
		this.toggleFlyout(false);
	},
	'select[name=configuration] change': function(el, ev) {
		this._libraryChanged(el.val());
	},
	_libraryChanged: function(libraryID) {
		var self = this;
		can.each(this.options.configuration.modules, function(module) {
			var disallowed = !!(module.configurations && module.configurations.indexOf(libraryID) < 0);
			var check = $('#' + module.id);
			check
				.closest('li').toggleClass('inactive', disallowed).end()
				.prop('disabled', disallowed)
				.prop('checked', disallowed ? false : check.prop('checked') || self.checkAlls[module.type]).change();
		});
	},
	toggleFlyout: function(open) {
		if(open === undefined) {
			this.isOpen = this.element.find('.customize').toggleClass('active').hasClass('active');
			this.element.find('.customize-box').toggle();
		} else if(open) {
			this.element.find('.customize').addClass('active');
			this.element.find('.customize-box').show();
			this.isOpen = true;
		} else {
			this.element.find('.customize').removeClass('active');
			this.element.find('.customize-box').hide();
			this.isOpen = false;
		}
	}
});
CanJSUS.CommunityTab('CanJSUS.IRCTab', {
	defaults: {
		view: 'templates/ircTab.mustache'
	}
}, {
	init: function() {
		this._super();
	}
});
CanJSUS.CommunityTab('CanJSUS.IssuesTab', {
	defaults: {
		view: 'templates/issuesTab.mustache'
	}
}, {
	init: function() {
		this._super();
	}
});
CanJSUS.CommunityTab('CanJSUS.PluginsTab', {
	defaults: {
		view: 'templates/pluginsTab.mustache'
	}
}, {
	init: function() {
		this._super();
	}
});
can.Control('CanJSUS.SocialStats', {
	defaults: {	}
}, {
	init: function() {
		this.state = new can.Observe({
			appsSubmitted: 0,
			recentCommits: 0,
			forumPosts: 0,
			ircPeople: 0,
			pluginsSubmitted: 0
		});
		this.element.html(can.view('templates/socialStats.mustache', this.state));

		// TODO: bithub API call here.
		// TODO: create helper so that plurals are correct.
	}
});
CanJSUS.CommunityTab('CanJSUS.TwitterTab', {
	defaults: {
		view: 'templates/twitterTab.mustache'
	}
}, {
	init: function() {
		this._super();
	}
});
(function(window) {
can.view.preload('templates_benefitTabs_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("  <ul class=\"circle-tabs\">\n    <li class=\"flexible\" data-benefit=\"flexible\"><a>Flexible</a></li>\n    <li class=\"powerful\" data-benefit=\"powerful\"><a>Powerful</a></li>\n    <li class=\"fast\" data-benefit=\"fast\"><a>Fast</a></li>\n  </ul>\n  <div class=\"tab-description ");___v1ew.push(can.view.txt(1,'div','class',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("selectedTab",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("tagline",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</div>");; return ___v1ew.join('')}} }));
can.view.preload('templates_cdnChooser_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<h4>CDN:</h4>\n<div class=\"input\">\n\t<div class=\"dropdown\">\n\t  <select>");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'select',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("libraries",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t    <option value=\"");___v1ew.push(can.view.txt(1,'option','value',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'option',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("description",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</option>");___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("\t  </select>\n  </div>\n  <span class=\"cdn-link\">http://cdn.canjs.com/releases/");___v1ew.push(can.view.txt(1,'span',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("version",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("/can.");___v1ew.push(can.view.txt(1,'span',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("selectedLibrary",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push(".js</span>\n</div>");; return ___v1ew.join('')}} }));
can.view.preload('templates_chat_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"irc-chat-container\">");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("lines",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t<div><span class=\"username\">");___v1ew.push(can.view.txt(1,'span',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("actor",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</span>: ");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("body",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</div>");___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("</div>");; return ___v1ew.join('')}} }));
can.view.preload('templates_communityTabs_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<ul class=\"circle-tabs\">\n   <li class=\"forums\"><a>Forums</a></li>\n   <li class=\"irc\"><a>IRC</a></li>\n   <li class=\"plugins\"><a>Apps & Plugins</a></li>\n   <li class=\"twitter\"><a>Twitter</a></li>\n   <li class=\"issues\"><a>Issues</a></li>\n   <li class=\"github\"><a>Github</a></li>\n</ul>");; return ___v1ew.join('')}} }));
can.view.preload('templates_downloadCustomizer_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<h1>Customize<span class=\"pullright\">version ");___v1ew.push(can.view.txt(1,'span',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("version",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</span></h1>\n<form method=\"get\" action=\"http://bitbuilder.herokuapp.com/can.custom.js\">\n  <div class=\"libraries\">Library:");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("configuration.libraries",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("    <input type=\"radio\" id=\"");___v1ew.push(can.view.txt(1,'input','id',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" name=\"configuration\" value=\"");___v1ew.push(can.view.txt(1,'input','value',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("name",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" ");___v1ew.push(can.view.txt(0,'input',1,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("isDefault",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("checked");return ___v1ew.join("");}}])}));___v1ew.push("",can.view.pending(),">");___v1ew.push("<label for=\"");___v1ew.push(can.view.txt(1,'label','for',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" class=\"radio\"",can.view.pending(),">");___v1ew.push("</label>\n    <label for=\"");___v1ew.push(can.view.txt(1,'label','for',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'label',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("description",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</label>");___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("    \n    <span class=\"pullright\">\n      <input id=\"minify\" type=\"checkbox\" name=\"minify\" value=\"true\" ");___v1ew.push(can.view.txt(0,'input',1,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("minified",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("checked");return ___v1ew.join("");}}])}));___v1ew.push("",can.view.pending(),">");___v1ew.push("<label for=\"minify\" class=\"checkbox\"></label><label for=\"minify\">Minified</label>\n    </span>\n  </div>\n  \n  <table class=\"options\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n    <tr>\n      <th width=\"40\" align=\"center\" valign=\"top\"><input type=\"checkbox\" class=\"all\" id=\"core\" data-type=\"core\"/><label for=\"core\" class=\"checkbox\"></label></th>\n      <th colspan=\"2\" align=\"center\" valign=\"middle\"><label for=\"core\">Core</label></th>\n    </tr>");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'table',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("configuration.types.core.modules",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("    <tr>\n      <td width=\"40\" align=\"center\" valign=\"top\"><input type=\"checkbox\" id=\"");___v1ew.push(can.view.txt(1,'input','id',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" class=\"module\" name=\"core\" value=\"");___v1ew.push(can.view.txt(1,'input','value',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("path",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" ");___v1ew.push(can.view.txt(0,'input',1,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("isDefault",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("checked");return ___v1ew.join("");}}])}));___v1ew.push(" ");___v1ew.push(can.view.txt(1,'input',1,this,function(){ return can.proxy(function(__){can.data(can.$(__),'module', this.pop()); }, ___st4ck(___c0nt3xt,this))}));___v1ew.push("",can.view.pending(),"/>");___v1ew.push("<label for=\"");___v1ew.push(can.view.txt(1,'label','for',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" class=\"checkbox\"",can.view.pending(),">");___v1ew.push("</label></td>\n      <td width=\"175\" align=\"left\" valign=\"top\"><label for=\"");___v1ew.push(can.view.txt(1,'label','for',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'label',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("name",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</label></td>\n      <td align=\"left\" valign=\"top\">");___v1ew.push(can.view.txt(1,'td',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("description",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</td>\n    </tr>");___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("    </tr>\n  </table>\n  <table class=\"options\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n    <tr>\n      <th width=\"40\" align=\"center\" valign=\"top\"><input type=\"checkbox\" class=\"all checkbox\" id=\"plugin\" data-type=\"plugin\"/><label for=\"plugin\" class=\"checkbox\"></label></th>\n      <th colspan=\"2\" align=\"center\" valign=\"middle\"><label for=\"plugin\">Plugins</label></th>\n    </tr>");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'table',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("configuration.types.plugin.modules",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("    <tr>\n      <td width=\"40\" align=\"center\" valign=\"top\"><input type=\"checkbox\" id=\"");___v1ew.push(can.view.txt(1,'input','id',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" class=\"module\" name=\"plugin\" value=\"");___v1ew.push(can.view.txt(1,'input','value',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("path",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" ");___v1ew.push(can.view.txt(0,'input',1,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("isDefault",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("checked");return ___v1ew.join("");}}])}));___v1ew.push(" ");___v1ew.push(can.view.txt(1,'input',1,this,function(){ return can.proxy(function(__){can.data(can.$(__),'module', this.pop()); }, ___st4ck(___c0nt3xt,this))}));___v1ew.push("",can.view.pending(),"/>");___v1ew.push("<label for=\"");___v1ew.push(can.view.txt(1,'label','for',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" class=\"checkbox\"",can.view.pending(),">");___v1ew.push("</label></td>\n      <td width=\"175\" align=\"left\" valign=\"top\"><label for=\"");___v1ew.push(can.view.txt(1,'label','for',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'label',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("name",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</label></td>\n      <td align=\"left\" valign=\"top\">");___v1ew.push(can.view.txt(1,'td',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("description",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</td>\n    </tr>");___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("    </tr>\n  </table>\n  \n  <br />  \n  <button class=\"color\" type=\"submit\">Customize & Download</button>\n</form>");; return ___v1ew.join('')}} }));
can.view.preload('templates_forumPost_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"bithub-post\">\n\t<!-- Commented out b/c it doesn't make sense without the ability to vote up, which we can't do yet. //TG -->\n\t<!-- <div class=\"pull-left score\">");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("points",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</div> --> \n\t\n\t<h5><a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("title",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></h5>\n\t<p>");___v1ew.push(can.view.txt(1,'p',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("truncatePost",{context:___st4ck(___c0nt3xt,this),options:options},true,false),can.Mustache.get("body",{context:___st4ck(___c0nt3xt,this),options:options},false,true));}));___v1ew.push(" <a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push("+</a></p>\n\t<div class=\"bithub-footer\">");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("actor",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push(" / ");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("formatDate",{context:___st4ck(___c0nt3xt,this),options:options},true,false),can.Mustache.get("date",{context:___st4ck(___c0nt3xt,this),options:options},false,true));}));___v1ew.push(" via <a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("feed",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></div>\n</div>");; return ___v1ew.join('')}} }));
can.view.preload('templates_forumsTab_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"tab-description forums\">\n\t<form id=\"forumSearch\">\n\t\t<input type=\"search\" placeholder=\"Search the forums...\" />\n\t\t<button type=\"button\">Go</button>\n\t</form>\n\t<div class=\"posts\">\n\t\t<h1>Top Posts</h1>\n\t\t<div class=\"bithub-content\">");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("forumPosts",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t\t");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return options.partials && options.partials['templates/forumPost.mustache'] ? can.Mustache.renderPartial(options.partials['templates/forumPost.mustache'],___st4ck(___c0nt3xt,this).pop(),options) : can.Mustache.render('templates/forumPost.mustache', ___st4ck(___c0nt3xt,this))}));___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("\t\t</div>\n\t</div>\n\t<div class=\"pull-right categories\">\n\t\t<ul>\n\t\t\t<li><a href=\"https://forum.javascriptmvc.com/#filter/discussions\">Discussions</a></li>\n\t\t\t<li><a href=\"https://forum.javascriptmvc.com/#filter/announcement\">Announcements</a></li>\n\t\t\t<li><a href=\"https://forum.javascriptmvc.com/#filter/questions\">Questions</a></li>\n\t\t\t<li><a href=\"https://forum.javascriptmvc.com/#filter/ideas\">Ideas</a></li>\n\t\t\t<li><a href=\"https://forum.javascriptmvc.com/#filter/problems\">Problems</a></li>\n\t\t</ul>\n\t\t<!--<ul>\n\t\t\t<li><a href=\"#\">Today</a></li>\n\t\t\t<li><a href=\"#\">This Week</a></li>\n\t\t\t<li><a href=\"#\">This Month</a></li>\n\t\t\t<li><a href=\"#\">This Year</a></li>\n\t\t</ul>-->\n\t</div>\n</div><!-- .tab-description -->");; return ___v1ew.join('')}} }));
can.view.preload('templates_githubEvent_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"bithub-post\">\n\t<!-- Commented out b/c it doesn't make sense without the ability to vote up, which we can't do yet. //TG -->\n\t<!-- <div class=\"pull-left score\">");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("points",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</div> --> \n\t\n\t<h2><a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("actor",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push(" ");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("title",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></h2>");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("commits",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t<p>- ");___v1ew.push(can.view.txt(1,'p',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("truncateHash",{context:___st4ck(___c0nt3xt,this),options:options},true,false),can.Mustache.get("hash",{context:___st4ck(___c0nt3xt,this),options:options},false,true));}));___v1ew.push(" ");___v1ew.push(can.view.txt(1,'p',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("message",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</p>");___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("\t<div class=\"bithub-footer\"><a href=\"http://bithub.com/users/");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("actorID",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("actor",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a> / ");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("formatDate",{context:___st4ck(___c0nt3xt,this),options:options},true,false),can.Mustache.get("date",{context:___st4ck(___c0nt3xt,this),options:options},false,true));}));___v1ew.push(" via <a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("feed",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></div>\n</div>");; return ___v1ew.join('')}} }));
can.view.preload('templates_githubFollowers_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<ul class=\"follower-badges\"><h4>Today</h4>\n\t<li class=\"watch\">");___v1ew.push(can.view.txt(1,'li',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("watchers",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push(" people started watching <a href=\"\">canjs</a></li>\n\t<li class=\"forked\">");___v1ew.push(can.view.txt(1,'li',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("forkers",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push(" people forked <a href=\"\">canjs</a></li>\n</ul>");; return ___v1ew.join('')}} }));
can.view.preload('templates_githubIssue_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"bithub-post\">\n\t<!-- Commented out b/c it doesn't make sense without the ability to vote up, which we can't do yet. //TG -->\n\t<!-- <div class=\"pull-left score\">");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("points",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</div> --> \n\t\n\t<h5><a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("title",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></h5>\n\t<p>");___v1ew.push(can.view.txt(0,'p',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("body",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("<a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push("+</a></p>\n\t<div class=\"bithub-footer\"><a href=\"http://bithub.com/users/");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("actorID",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("actor",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a> / ");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("formatDate",{context:___st4ck(___c0nt3xt,this),options:options},true,false),can.Mustache.get("date",{context:___st4ck(___c0nt3xt,this),options:options},false,true));}));___v1ew.push(" via <a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("feed",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></div>\n</div>");; return ___v1ew.join('')}} }));
can.view.preload('templates_githubTab_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"tab-description commits\">\n\t<h1>Latest Commits</h1>\n\t\n\t<div class=\"pull-right categories\">\n\t\t\n\t\t<div class=\"button-container\"><a href=\"http://github.com/bitovi/canjs\" class=\"button\"><span class=\"icon-github\"></span> Follow on Github</a></div>\n\t\t\t\t<div class=\"center\">\n\t\t<iframe src=\"http://ghbtns.com/github-btn.html?user=bitovi&repo=canjs&type=watch&count=true\"\n\t\t        allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"110\" height=\"20\"></iframe>\n\t\t<iframe src=\"http://ghbtns.com/github-btn.html?user=bitovi&repo=canjs&type=fork&count=true\"\n\t\t        allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"95\" height=\"20\"></iframe>\n\t\t</div><!-- center -->");___v1ew.push("\n\t\t\n\t</div><!-- categories -->\n\t\t\t\n\t<div class=\"posts\">\n\t\t\n\t\t<div class=\"bithub-content\">");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("commits",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t\t");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return options.partials && options.partials['templates/githubEvent.mustache'] ? can.Mustache.renderPartial(options.partials['templates/githubEvent.mustache'],___st4ck(___c0nt3xt,this).pop(),options) : can.Mustache.render('templates/githubEvent.mustache', ___st4ck(___c0nt3xt,this))}));___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("\t\t</div>\n\t</div>\n</div>");; return ___v1ew.join('')}} }));
can.view.preload('templates_heroDownloadCustomizer_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<a href=\"http://bitbuilder.herokuapp.com/can.custom.js\"><button class=\"download\">Download 1.1.5 <span>(One file. Everything you need.)</span></button></a>\n<button class=\"customize\">Customize <span class=\"arrow down\"></span></button>\n<div class=\"customize-box\">\n\t<form method=\"get\" action=\"http://bitbuilder.herokuapp.com/can.custom.js\">\n\t\t<div class=\"general-options\">\n\t\t\t<div class=\"dropdown\">\n\t\t\t<select name=\"configuration\" class=\"library\">");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'select',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("configuration.libraries",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t\t\t\t<option value=\"");___v1ew.push(can.view.txt(1,'option','value',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" ");___v1ew.push(can.view.txt(0,'option',1,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("isDefault",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("checked");return ___v1ew.join("");}}])}));___v1ew.push("",can.view.pending(),">");___v1ew.push(can.view.txt(1,'option',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("description",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</option>");___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("\t\t\t</select>\n\t\t\t</div>\n\t\t\t<input id=\"minified\" type=\"checkbox\" name=\"minify\" value=\"true\" ");___v1ew.push(can.view.txt(0,'input',1,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("minified",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("checked");return ___v1ew.join("");}}])}));___v1ew.push("",can.view.pending(),">");___v1ew.push("<label for=\"minified\" class=\"checkbox\"></label><label for=\"minified\">Minified</label>\n\t\t</div>\n\t\t<ul class=\"half\">");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'ul',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("configuration.types.core.modules",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t\t\t<li class=\"checkbox-wrap\"><input id=\"");___v1ew.push(can.view.txt(1,'input','id',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" class=\"module\" type=\"checkbox\" name=\"plugins\" value=\"");___v1ew.push(can.view.txt(1,'input','value',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("path",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" ");___v1ew.push(can.view.txt(0,'input',1,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("isDefault",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("checked");return ___v1ew.join("");}}])}));___v1ew.push(" ");___v1ew.push(can.view.txt(1,'input',1,this,function(){ return can.proxy(function(__){can.data(can.$(__),'module', this.pop()); }, ___st4ck(___c0nt3xt,this))}));___v1ew.push("",can.view.pending(),"/>");___v1ew.push("<label for=\"");___v1ew.push(can.view.txt(1,'label','for',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" class=\"checkbox\"",can.view.pending(),">");___v1ew.push("</label><label for=\"");___v1ew.push(can.view.txt(1,'label','for',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'label',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("name",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</label></li>");___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("\t\t</ul>\n\t\t<ul class=\"half\">");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'ul',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("configuration.types.plugin.modules",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t\t\t<li class=\"checkbox-wrap\"><input id=\"");___v1ew.push(can.view.txt(1,'input','id',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" class=\"module\" type=\"checkbox\" name=\"plugins\" value=\"");___v1ew.push(can.view.txt(1,'input','value',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("path",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" ");___v1ew.push(can.view.txt(0,'input',1,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("isDefault",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("checked");return ___v1ew.join("");}}])}));___v1ew.push(" ");___v1ew.push(can.view.txt(1,'input',1,this,function(){ return can.proxy(function(__){can.data(can.$(__),'module', this.pop()); }, ___st4ck(___c0nt3xt,this))}));___v1ew.push("",can.view.pending(),"/>");___v1ew.push("<label for=\"");___v1ew.push(can.view.txt(1,'label','for',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" class=\"checkbox\"",can.view.pending(),">");___v1ew.push("</label><label for=\"");___v1ew.push(can.view.txt(1,'label','for',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'label',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("name",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</label></li>");___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("\t\t</ul>\n\t\t<button class=\"color download\" type=\"submit\">Download</button>\n\t</form>\n</div>\n<p class=\"button-desc\">Works with: JQuery, Zepto, Dojo, Mootools, YUI</p>");; return ___v1ew.join('')}} }));
can.view.preload('templates_ircTab_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"tab-description irc\">\n\t<h1>Real-Time Chat</h1>\n\t\n\t<div class=\"pull-right categories\">\n\t\t<a href=\"http://webchat.freenode.net/?channels=canjs\" class=\"button\"><span class=\"icon-chat\"></span> Join the Chat</a>\n\t\t<p>Freenode IRC Channel <a href=\"http://webchat.freenode.net/?channels=canjs\">#canjs</a></p>\n\t\t<!--<ul><h4>Currently Online</h4>\n\t\t\t<li>tomgreever</li>\n\t\t\t<li>someone</li>\n\t\t\t<li>rabies423</li>\n\t\t\t<li>junkinyourtrunk</li>\n\t\t\t<li>canjsbot</li>\n\t\t\t<li>@bitovi</li>\n\t\t\t<li>me</li>\n\t\t</ul>-->\n\t</div>\n\t");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return options.partials && options.partials['templates/chat.mustache'] ? can.Mustache.renderPartial(options.partials['templates/chat.mustache'],___st4ck(___c0nt3xt,this).pop(),options) : can.Mustache.render('templates/chat.mustache', ___st4ck(___c0nt3xt,this))}));___v1ew.push("\n</div><!-- .tab-description -->");; return ___v1ew.join('')}} }));
can.view.preload('templates_issuesTab_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"tab-description issues\">\n\t<h1>Top Issues</h1>\n\t\n\t<div class=\"pull-right categories\">\n\t\t\n\t\t<div class=\"button-container\"><a href=\"https://github.com/bitovi/canjs/issues/new\" class=\"button\">+ New Issue</a></div>\n\t\t\n\t\t<div class=\"center\">\n\t\t<iframe src=\"http://ghbtns.com/github-btn.html?user=bitovi&repo=canjs&type=watch&count=true\"\n\t\t        allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"110\" height=\"20\"></iframe>\n\t\t<iframe src=\"http://ghbtns.com/github-btn.html?user=bitovi&repo=canjs&type=fork&count=true\"\n\t\t        allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"95\" height=\"20\"></iframe>\n\t\t</div><!-- center -->");___v1ew.push("\n\t\t\n\t</div><!-- categories -->\n\t\t\t\n\t<div class=\"posts\">\n\t\t<div class=\"bithub-content\">");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("issues",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t\t");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return options.partials && options.partials['templates/githubIssue.mustache'] ? can.Mustache.renderPartial(options.partials['templates/githubIssue.mustache'],___st4ck(___c0nt3xt,this).pop(),options) : can.Mustache.render('templates/githubIssue.mustache', ___st4ck(___c0nt3xt,this))}));___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("\t\t</div>\n\t</div>\n</div>");; return ___v1ew.join('')}} }));
can.view.preload('templates_plugin_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"bithub-post\">\n\t<!-- Commented out b/c it doesn't make sense without the ability to vote up, which we can't do yet. //TG -->\n\t<!-- <div class=\"pull-left score\">");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("points",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</div> --> \n\t\n\t<h2><a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("title",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></h2>\n\t<p>");___v1ew.push(can.view.txt(1,'p',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("body",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("<a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push("+</a></p>\n\t<div class=\"bithub-footer\"><a href=\"http://bithub.com/users/");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("actorID",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("author",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a> / ");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("formatDate",{context:___st4ck(___c0nt3xt,this),options:options},true,false),can.Mustache.get("date",{context:___st4ck(___c0nt3xt,this),options:options},false,true));}));___v1ew.push(" via <a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("feed",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></div>\n</div>");; return ___v1ew.join('')}} }));
can.view.preload('templates_pluginsTab_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"tab-description plugins\">\n\t<div class=\"pull-right categories\">\n\t\t<a href=\"http://bithub.com/\" class=\"button\">+ Add your App</a>\n\t\t<ul>\n\t\t\t<li><a href=\"http://bithub.com/article/\">Articles</a></li>\n\t\t\t<li><a href=\"http://bithub.com/app/\">Apps</a></li>\n\t\t\t<li><a href=\"http://bithub.com/plugin/\">Plugins</a></li>\n\t\t</ul>\n\t</div>\n\t<div class=\"posts\">\n\t\t<h1>Top Articles, Apps, &amp; Plugins</h1>\n\t\t<div class=\"bithub-content\">");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("plugins",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t\t");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return options.partials && options.partials['templates/plugin.mustache'] ? can.Mustache.renderPartial(options.partials['templates/plugin.mustache'],___st4ck(___c0nt3xt,this).pop(),options) : can.Mustache.render('templates/plugin.mustache', ___st4ck(___c0nt3xt,this))}));___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("\t\t</div>\n\t</div>\n</div><!-- .tab-description -->");; return ___v1ew.join('')}} }));
can.view.preload('templates_socialStats_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"container\">\n  <ul class=\"social-stats\">\n    <li class=\"apps\"><a href=\"#community/plugins\">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("appsSubmitted",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push(" apps submitted</a></li>\n    <li class=\"commits\"><a href=\"#community%2Fgithub\">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("recentCommits",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push(" recent commits</a></li>\n    <li class=\"forums\"><a href=\"#community%2Fforums\">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("forumPosts",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push(" new forum posts</a></li>\n    <li class=\"irc\"><a href=\"#community%2Firc\">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("ircPeople",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push(" people on IRC</a></li>\n    <li class=\"plugins\"><a href=\"#community%2Fplugin\">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("pluginsSubmitted",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push(" plugins submitted</a></li>\n  </ul>\n</div><!-- .container -->");; return ___v1ew.join('')}} }));
can.view.preload('templates_tweet_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"bithub-post tweet\">\n\t<!-- Commented out b/c it doesn't make sense without the ability to vote up, which we can't do yet. //TG -->\n\t<!-- <div class=\"pull-left score\">");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("points",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</div> --> \n\t\n\t<div class=\"twitter-profile-pic pull-left\">\n\t\t<a href=\"http://twitter.com/");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("handle",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push("<img src=\"");___v1ew.push(can.view.txt(1,'img','src',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("picture",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\" alt=\"\"",can.view.pending(),"/>");___v1ew.push("</a>\n\t</div>\n\t<h5><a class=\"name\" href=\"http://twitter.com/");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("handle",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("realName",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a><a class=\"handle\" href=\"http://twitter.com/");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("handle",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(" @");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("handle",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></h5>\n\t<p>");___v1ew.push(can.view.txt(1,'p',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("body",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</p>\n\t<div class=\"bithub-footer\">");___v1ew.push(can.view.txt(1,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("formatDate",{context:___st4ck(___c0nt3xt,this),options:options},true,false),can.Mustache.get("date",{context:___st4ck(___c0nt3xt,this),options:options},false,true));}));___v1ew.push(" via <a href=\"");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("link",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("feed",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></div>\n</div>");; return ___v1ew.join('')}} }));
can.view.preload('templates_twitterTab_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"tab-description twitter\">\n\t<div class=\"pull-right categories\">\n\t\t<a href=\"http://twitter.com/canjs\" class=\"button\"><span class=\"icon-twitter\"></span> Follow on Twitter</a>\n\t</div><!-- categories -->\n\t<div class=\"posts\">\n\t\t<h1>Top User Tweets</h1>\n\t\t<div class=\"bithub-content\">");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("tweets",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t\t\t");___v1ew.push(can.view.txt(0,'div',0,this,function(){ return options.partials && options.partials['templates/tweet.mustache'] ? can.Mustache.renderPartial(options.partials['templates/tweet.mustache'],___st4ck(___c0nt3xt,this).pop(),options) : can.Mustache.render('templates/tweet.mustache', ___st4ck(___c0nt3xt,this))}));___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("\t\t</div>\n\t</div>\n</div>");; return ___v1ew.join('')}} }));
})(this);
(function($) {
	can.route.ready(false);

	window.CanJSUS = window.CanJSUS || {};

	window.CanJSUS.initTwitterWidgets = function() {
		// replace the "Follow @canjs!" link with a little wiget with follower count.
		$('#twitter-wjs').remove();
		!function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (!d.getElementById(id)) {
				js = d.createElement(s);
				js.id = id;
				js.src = "//platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore(js, fjs);
			}
		}(document, "script", "twitter-wjs");
	};

	var initControls = function(mappings) {
		can.each(mappings, function(name, selector) {
			var el = $(selector);
			if(el.length) {
				new CanJSUS[name](el);
			}
		});
	}

	$(function() {
		CanJSUS.initTwitterWidgets();
		initControls({
			'.index #hero-download': 'HeroDownloadCustomizer',
			'.index .benefits': 'Benefits',
			'.index .social': 'SocialStats',
			'.download .cdn': 'CDNChooser',
			'.download .customize': 'DownloadCustomizer',
			'.community .hero': 'CommunityTabs'
		});
		// Syntax highlighting for our example.
		Rainbow.color();
	});

	// this needs to wait until everything is loaded.
	$(window).load(function() {
		// Grayscaling for our featured apps.
		Grayscale($('.carousel img'), 300);
	});
})(jQuery);
