/*!
 * CanJS - 2.3.14
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Sat, 06 Feb 2016 00:01:32 GMT
 * Licensed MIT
 */

/*can@2.3.14#view/stache/system*/
var stache = require('./stache.js');
var getIntermediateAndImports = require('./intermediate_and_imports.js');
var addBundles = require('./add_bundles.js');
function translate(load) {
    var intermediateAndImports = getIntermediateAndImports(load.source);
    return addBundles(intermediateAndImports.dynamicImports, load.name).then(function () {
        intermediateAndImports.imports.unshift('can/view/stache/mustache_core');
        intermediateAndImports.imports.unshift('can/view/stache/stache');
        intermediateAndImports.imports.unshift('module');
        return template(intermediateAndImports.imports, intermediateAndImports.intermediate);
    });
}
function template(imports, intermediate) {
    imports = JSON.stringify(imports);
    intermediate = JSON.stringify(intermediate);
    return 'define(' + imports + ',function(module, stache, mustacheCore){\n' + '\tvar renderer = stache(' + intermediate + ');\n' + '\treturn function(scope, options, nodeList){\n' + '\t\tvar moduleOptions = { module: module };\n' + '\t\tif(!(options instanceof mustacheCore.Options)) {\n' + '\t\t\toptions = new mustacheCore.Options(options || {});\n' + '\t\t}\n' + '\t\treturn renderer(scope, options.add(moduleOptions), nodeList);\n' + '\t};\n' + '});';
}
module.exports = { translate: translate };