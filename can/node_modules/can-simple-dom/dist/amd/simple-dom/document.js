/*can-simple-dom@0.2.23#simple-dom/document*/
define([
    'exports',
    'module',
    './document/node',
    './document/element',
    './document/text',
    './document/comment',
    './document/document-fragment',
    './document/anchor-element'
], function (exports, module, _documentNode, _documentElement, _documentText, _documentComment, _documentDocumentFragment, _documentAnchorElement) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _Node = _interopRequireDefault(_documentNode);
    var _Element = _interopRequireDefault(_documentElement);
    var _Text = _interopRequireDefault(_documentText);
    var _Comment = _interopRequireDefault(_documentComment);
    var _DocumentFragment = _interopRequireDefault(_documentDocumentFragment);
    var _AnchorElement = _interopRequireDefault(_documentAnchorElement);
    function Document() {
        this.nodeConstructor(9, '#document', null, this);
        this.documentElement = new _Element['default']('html', this);
        this.body = new _Element['default']('body', this);
        this.documentElement.appendChild(this.body);
        this.appendChild(this.documentElement);
    }
    Document.prototype = Object.create(_Node['default'].prototype);
    Document.prototype.constructor = Document;
    Document.prototype.nodeConstructor = _Node['default'];
    var specialElements = { 'a': _AnchorElement['default'] };
    Document.prototype.createElement = function (tagName) {
        var Special = specialElements[tagName.toLowerCase()];
        if (Special) {
            return new Special(tagName, this);
        }
        return new _Element['default'](tagName, this);
    };
    Document.prototype.createTextNode = function (text) {
        return new _Text['default'](text, this);
    };
    Document.prototype.createComment = function (text) {
        return new _Comment['default'](text, this);
    };
    Document.prototype.createDocumentFragment = function () {
        return new _DocumentFragment['default'](this);
    };
    Document.prototype.getElementsByTagName = function (name) {
        name = name.toUpperCase();
        var elements = [];
        var cur = this.firstChild;
        while (cur) {
            if (cur.nodeType === _Node['default'].ELEMENT_NODE) {
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
        return _Element['default'].prototype.getElementById.apply(this.documentElement, arguments);
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
    module.exports = Document;
});