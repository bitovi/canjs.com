/*!
 * CanJS - 2.3.14
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Sat, 06 Feb 2016 00:01:32 GMT
 * Licensed MIT
 */

/*can@2.3.14#util/vdom/build_fragment/build_fragment*/
define([
    'can/util/vdom/make_parser',
    'can/util/library'
], function (makeParser, can) {
    var oldBuildFrag = can.buildFragment;
    can.buildFragment = function (text, context) {
        if (context && context.length) {
            context = context[0];
        }
        if (context && (context.ownerDocument || context) !== can.global.document && !context._yuid) {
            var parser = makeParser(context.ownerDocument || context);
            return parser.parse(text);
        } else {
            return oldBuildFrag.apply(this, arguments);
        }
    };
});