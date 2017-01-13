/*can-simple-dom@0.2.23#simple-dom/document*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _documentNode = require('./document/node.js');
var _documentNode2 = _interopRequireDefault(_documentNode);
var _documentElement = require('./document/element.js');
var _documentElement2 = _interopRequireDefault(_documentElement);
var _documentText = require('./document/text.js');
var _documentText2 = _interopRequireDefault(_documentText);
var _documentComment = require('./document/comment.js');
var _documentComment2 = _interopRequireDefault(_documentComment);
var _documentDocumentFragment = require('./document/document-fragment.js');
var _documentDocumentFragment2 = _interopRequireDefault(_documentDocumentFragment);
var _documentAnchorElement = require('./document/anchor-element.js');
var _documentAnchorElement2 = _interopRequireDefault(_documentAnchorElement);
function Document() {
    this.nodeConstructor(9, '#document', null, this);
    this.documentElement = new _documentElement2['default']('html', this);
    this.body = new _documentElement2['default']('body', this);
    this.documentElement.appendChild(this.body);
    this.appendChild(this.documentElement);
}
Document.prototype = Object.create(_documentNode2['default'].prototype);
Document.prototype.constructor = Document;
Document.prototype.nodeConstructor = _documentNode2['default'];
var specialElements = { 'a': _documentAnchorElement2['default'] };
Document.prototype.createElement = function (tagName) {
    var Special = specialElements[tagName.toLowerCase()];
    if (Special) {
        return new Special(tagName, this);
    }
    return new _documentElement2['default'](tagName, this);
};
Document.prototype.createTextNode = function (text) {
    return new _documentText2['default'](text, this);
};
Document.prototype.createComment = function (text) {
    return new _documentComment2['default'](text, this);
};
Document.prototype.createDocumentFragment = function () {
    return new _documentDocumentFragment2['default'](this);
};
Document.prototype.getElementsByTagName = function (name) {
    name = name.toUpperCase();
    var elements = [];
    var cur = this.firstChild;
    while (cur) {
        if (cur.nodeType === _documentNode2['default'].ELEMENT_NODE) {
            if (cur.nodeName === name || name === '*') {
                elements.push(cur);
            }
            elements.push.apply(elements, cur.getElementsByTagName(name));
        }
        cur = cur.nextSibling;
    }
    return elements;
};
Document.prototype.getElementById = function (id) {
    return _documentElement2['default'].prototype.getElementById.apply(this.documentElement, arguments);
};
if (Object.defineProperty) {
    Object.defineProperty(Document.prototype, 'currentScript', {
        get: function get() {
            var scripts = this.getElementsByTagName('script');
            var first = scripts[scripts.length - 1];
            if (!first) {
                first = this.createElement('script');
            }
            return first;
        }
    });
}
exports['default'] = Document;
module.exports = exports['default'];