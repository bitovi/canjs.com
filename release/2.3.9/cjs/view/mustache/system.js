/*!
 * CanJS - 2.3.9
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Mon, 11 Jan 2016 23:51:29 GMT
 * Licensed MIT
 */

/*can@2.3.9#view/mustache/system*/
var can = require('./mustache.js');
function translate(load) {
    return 'define([\'can/view/mustache/mustache\'],function(can){' + 'return can.view.preloadStringRenderer(\'' + load.metadata.pluginArgument + '\',' + 'can.Mustache(function(scope,options) { ' + new can.Mustache({
        text: load.source,
        name: load.name
    }).template.out + ' })' + ')' + '})';
}
module.exports = { translate: translate };