/*!
 * CanJS - 2.3.2
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Fri, 13 Nov 2015 23:57:31 GMT
 * Licensed MIT
 */

/*can@2.3.2#view/ejs/system*/
'format steal';
steal('can/view/ejs', function (can) {
    function translate(load) {
        return 'define([\'can/view/ejs/ejs\'],function(can){' + 'return can.view.preloadStringRenderer(\'' + load.metadata.pluginArgument + '\',' + 'can.EJS(function(_CONTEXT,_VIEW) { ' + new can.EJS({
            text: load.source,
            name: load.name
        }).template.out + ' })' + ')' + '})';
    }
    return { translate: translate };
});