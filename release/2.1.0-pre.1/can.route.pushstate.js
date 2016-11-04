/*!
 * CanJS - 2.1.0-pre.1
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Mon, 05 May 2014 20:37:35 GMT
 * Licensed MIT
 * Includes: can/route/pushstate
 * Download from: http://canjs.com
 */
(function(undefined) {

    // ## route/pushstate/pushstate.js
    var __m1 = (function(can) {
        "use strict";

        // Initialize plugin only if browser supports pushstate.
        if (window.history && history.pushState) {

            // Registers itself within `can.route.bindings`.
            can.route.bindings.pushstate = {


                // Start of `location.pathname` is the root.
                // (Can be configured via `can.route.bindings.pushstate.root`)
                root: "/",
                paramsMatcher: /^\?(?:[^=]+=[^&]*&)*[^=]+=[^&]*/,
                querySeparator: '?',

                // ## bind

                // Intercepts clicks on `<a>` elements and rewrites original `history` methods.
                bind: function() {
                    // Intercept routable links.
                    can.delegate.call(can.$(document.documentElement), 'a', 'click', anchorClickHandler);

                    // Rewrites original `pushState`/`replaceState` methods on `history` and keeps pointer to original methods
                    can.each(methodsToOverwrite, function(method) {
                        originalMethods[method] = window.history[method];
                        window.history[method] = function(state, title, url) {
                            // Avoid doubled history states (with pushState).
                            var absolute = url.indexOf("http") === 0;
                            var searchHash = window.location.search + window.location.hash;
                            // If url differs from current call original histoy method and update `can.route` state.
                            if ((!absolute && url !== window.location.pathname + searchHash) || (absolute && url !== window.location.href + searchHash)) {
                                originalMethods[method].apply(window.history, arguments);
                                can.route.setState();
                            }
                        };
                    });

                    // Bind to `popstate` event, fires on back/forward.
                    can.bind.call(window, 'popstate', can.route.setState);
                },

                // ## unbind

                // Unbinds and restores original `history` methods
                unbind: function() {
                    can.undelegate.call(can.$(document.documentElement), 'click', 'a', anchorClickHandler);

                    can.each(methodsToOverwrite, function(method) {
                        window.history[method] = originalMethods[method];
                    });
                    can.unbind.call(window, 'popstate', can.route.setState);
                },

                // ## matchingPartOfURL

                // Returns matching part of url without root.
                matchingPartOfURL: function() {
                    var root = cleanRoot(),
                        loc = (location.pathname + location.search),
                        index = loc.indexOf(root);

                    return loc.substr(index + root.length);
                },

                // ## setURL

                // Updates URL by calling `pushState`.
                setURL: function(path) {
                    // Keeps hash if not in path.
                    if (includeHash && path.indexOf("#") === -1 && window.location.hash) {
                        path += window.location.hash;
                    }
                    window.history.pushState(null, null, can.route._call("root") + path);
                }
            };

            // ## anchorClickHandler

            // Handler function for `click` events.
            var anchorClickHandler = function(e) {
                if (!(e.isDefaultPrevented ? e.isDefaultPrevented() : e.defaultPrevented === true)) {
                    // YUI calls back events triggered with this as a wrapped object.
                    var node = this._node || this;
                    // Fix for IE showing blank host, but blank host means current host.
                    var linksHost = node.host || window.location.host;

                    // If link is within the same domain and descendant of `root`
                    if (window.location.host === linksHost) {
                        var root = can.route._call("root");
                        if (node.pathname.indexOf(root) === 0) {

                            // Removes root from url.
                            var url = (node.pathname + node.search).substr(root.length);
                            // If a route matches update the data.
                            var curParams = can.route.deparam(url);
                            if (curParams.hasOwnProperty('route')) {
                                // Makes it possible to have a link with a hash.
                                includeHash = true;
                                window.history.pushState(null, null, node.href);

                                // Test if you can preventDefault
                                // our tests can't call .click() b/c this
                                // freezes phantom.
                                if (e.preventDefault) {
                                    e.preventDefault();
                                }
                            }
                        }
                    }
                }
            },

                // ## cleanRoot

                // Always returns clean root, without domain.
                cleanRoot = function() {
                    var domain = location.protocol + "//" + location.host,
                        root = can.route._call("root"),
                        index = root.indexOf(domain);
                    if (index === 0) {
                        return can.route.root.substr(domain.length);
                    }
                    return root;
                },
                // Original methods on `history` that will be overwritten
                methodsToOverwrite = ['pushState', 'replaceState'],
                // A place to store pointers to original `history` methods.
                originalMethods = {},
                // Used to tell setURL to include the hash because we clicked on a link.
                includeHash = false;

            // Enables plugin, by default `hashchange` binding is used.
            can.route.defaultBinding = "pushstate";
        }

        return can;
    })(window.can, undefined);

})();