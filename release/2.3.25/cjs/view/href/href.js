/*!
 * CanJS - 2.3.25
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Wed, 10 Aug 2016 19:17:58 GMT
 * Licensed MIT
 */

/*can@2.3.25#view/href/href*/
var can = require('../../util/util.js');
var expression = require('../stache/expression.js');
require('../callbacks/callbacks.js');
require('../scope/scope.js');
var removeCurly = function (value) {
    if (value[0] === '{' && value[value.length - 1] === '}') {
        return value.substr(1, value.length - 2);
    }
    return value;
};
can.view.attr('can-href', function (el, attrData) {
    var attrInfo = expression.parse('tmp(' + removeCurly(el.getAttribute('can-href')) + ')', { baseMethodType: 'Call' });
    var getHash = attrInfo.argExprs[0].value(attrData.scope, null);
    var routeHref = can.compute(function () {
        return can.route.url(getHash());
    });
    el.setAttribute('href', routeHref());
    var handler = function (ev, newVal) {
        el.setAttribute('href', newVal);
    };
    routeHref.bind('change', handler);
    can.bind.call(el, 'removed', function () {
        routeHref.unbind('change', handler);
    });
});