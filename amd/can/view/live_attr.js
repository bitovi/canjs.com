/*!
 * CanJS - 2.3.9
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Mon, 11 Jan 2016 23:51:29 GMT
 * Licensed MIT
 */

/*can@2.3.9#view/stache/live_attr*/
define([
    'can/util/library',
    'can/view/live',
    'can/elements',
    'can/view/callbacks'
], function (can, live, elements, viewCallbacks) {
    live = live || can.view.live;
    elements = elements || can.view.elements;
    viewCallbacks = viewCallbacks || can.view.callbacks;
    return {
        attributes: function (el, compute, scope, options) {
            var oldAttrs = {};
            var setAttrs = function (newVal) {
                var newAttrs = live.getAttributeParts(newVal), name;
                for (name in newAttrs) {
                    var newValue = newAttrs[name], oldValue = oldAttrs[name];
                    if (newValue !== oldValue) {
                        can.attr.set(el, name, newValue);
                        var callback = viewCallbacks.attr(name);
                        if (callback) {
                            callback(el, {
                                attributeName: name,
                                scope: scope,
                                options: options
                            });
                        }
                    }
                    delete oldAttrs[name];
                }
                for (name in oldAttrs) {
                    elements.removeAttr(el, name);
                }
                oldAttrs = newAttrs;
            };
            var handler = function (ev, newVal) {
                setAttrs(newVal);
            };
            compute.bind('change', handler);
            can.bind.call(el, 'removed', function () {
                compute.unbind('change', handler);
            });
            setAttrs(compute());
        }
    };
});