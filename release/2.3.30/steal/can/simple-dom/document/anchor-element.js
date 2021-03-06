/*!
 * CanJS - 2.3.29
 * http://canjs.com/
 * Copyright (c) 2017 Bitovi
 * Mon, 06 Mar 2017 22:40:28 GMT
 * Licensed MIT
 */

/*can-simple-dom@0.3.0#simple-dom/document/anchor-element*/
steal('can-simple-dom@0.3.0#simple-dom/document/element', 'micro-location@0.1.5#lib/micro-location', 'can-simple-dom@0.3.0#simple-dom/extend', function (__can_simple_dom_0_3_0_simple_dom_document_element, __micro_location_0_1_5_lib_micro_location, __can_simple_dom_0_3_0_simple_dom_extend) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _element = __can_simple_dom_0_3_0_simple_dom_document_element;
    var _element2 = _interopRequireDefault(_element);
    var _microLocation = __micro_location_0_1_5_lib_micro_location;
    var _microLocation2 = _interopRequireDefault(_microLocation);
    var _extend = __can_simple_dom_0_3_0_simple_dom_extend;
    var _extend2 = _interopRequireDefault(_extend);
    var Location = _microLocation2['default'].Location || _microLocation2['default'];
    function AnchorElement(tagName, ownerDocument) {
        this.elementConstructor(tagName, ownerDocument);
        (0, _extend2['default'])(this, Location.parse(''));
    }
    AnchorElement.prototype = Object.create(_element2['default'].prototype);
    AnchorElement.prototype.constructor = AnchorElement;
    AnchorElement.prototype.elementConstructor = _element2['default'];
    AnchorElement.prototype.setAttribute = function (_name, value) {
        _element2['default'].prototype.setAttribute.apply(this, arguments);
        if (_name.toLowerCase() === 'href') {
            (0, _extend2['default'])(this, Location.parse(value));
        }
    };
    exports['default'] = AnchorElement;
    module.exports = exports['default'];
});