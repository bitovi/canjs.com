/*!
 * CanJS - 2.3.5
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Thu, 03 Dec 2015 23:34:11 GMT
 * Licensed MIT
 */

/*can@2.3.5#view/ejs/system*/
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