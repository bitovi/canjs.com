<!--
@page changelog Changelog
@parent guides 5
-->

__2.3.27__ ( Sep 15 2016 )

- [Adding PhantomJS from NPM for a newer version](https://github.com/canjs/canjs/pull/2489)
- [updating core docs to use todo/{todoId} route template syntax](https://github.com/canjs/canjs/pull/2487)
- [Backporting parent-to-child compute syntax from can-stache-bindings](https://github.com/canjs/canjs/pull/2483)
- [Backporting stache binding fix for special values. #2370](https://github.com/canjs/canjs/pull/2481)


__2.3.26__ ( Aug 17 2016 )

- [Port can-observation changes for adds updateUntil for dynamic depths](https://github.com/canjs/canjs/pull/2453)
- [Making colons in keys work](https://github.com/canjs/canjs/pull/2450)
- [Fixed nested if-s and each helper in attributes](https://github.com/canjs/canjs/pull/2449)
- [update map.attr value name](https://github.com/canjs/canjs/pull/2448)


__2.3.25__ ( Aug 10 2016 )

- [Set readOnly property based on val](https://github.com/canjs/canjs/pull/2436)
- [Change propagation in a batch with late bindings - P(1) ~12](https://github.com/canjs/canjs/issues/2421)
- [Support svg camelCase elements.](https://github.com/canjs/canjs/pull/2420)
- [fix #1541 can.Component should show a warning if tag name is missing a hyphen](https://github.com/canjs/canjs/pull/2322)


__2.3.24__ ( May 19 2016 )

- [Pass list items to .sort(fn) and don&#39;t set the comparator](https://github.com/canjs/canjs/pull/2399)
- [Browserify build with stache is not working](https://github.com/canjs/canjs/issues/2397)
- [Properties with serialize: false should not be stringified](https://github.com/canjs/canjs/issues/2396)
- [Fixing error compiling cjs module with JSPM](https://github.com/canjs/canjs/pull/2394)
- [Fix mustache core mapping](https://github.com/canjs/canjs/pull/2390)


__2.3.23__ ( Apr 08 2016 )

- [Fixes #2343. calling simple helper now includes all arguments](https://github.com/canjs/canjs/pull/2363)
- [Stache promise support doesn&#39;t work with ES6 promises](https://github.com/canjs/canjs/issues/2359)
- [Cannot bind to event with a dash (e.g. &quot;-&quot;)](https://github.com/canjs/canjs/issues/2347)
- [Deprecate can.isDeferred. More accurate can.isPromise.](https://github.com/canjs/canjs/pull/2247)


__2.3.21__ ( Mar 18 2016 )

- [#each leaking memory in stache](https://github.com/canjs/canjs/issues/2332)
- [IE8: Stache renders radio buttons with incorrect value](https://github.com/canjs/canjs/issues/2324)
- [Infinite batch change in 2.3.20 causes out of order rendering](https://github.com/canjs/canjs/issues/2323)


__2.3.20__ ( Mar 08 2016 )

- [Make define properties work on can.List](https://github.com/canjs/canjs/pull/2313)
- [Create a CanSimpleDocument constructor](https://github.com/canjs/canjs/pull/2312)
- [Infinite batching](https://github.com/canjs/canjs/issues/2272)
- [Form reset won&#39;t work with two-way bindings on elements. w/ CanJS 2.3.15](https://github.com/canjs/canjs/issues/2249)


__2.3.19__ ( Mar 04 2016 )

- [Fast path scope computes can be unbound then rebound.](https://github.com/canjs/canjs/issues/2305)
- [Bugfix: elems must be an array for can.inserted()](https://github.com/canjs/canjs/pull/2298)
- [routeUrl helper, merge option not working](https://github.com/canjs/canjs/issues/2291)
- [Component fires `inserted` twice on append.](https://github.com/canjs/canjs/issues/2288)
- [Call expressions with hash expressions are called with args reversed.](https://github.com/canjs/canjs/issues/2243)


__2.3.18__ ( Mar 03 2016 )

- [Make getter / setter converter functions possible with stache helpers](https://github.com/canjs/canjs/issues/2299)
- [Fix uppercase html parsing](https://github.com/canjs/canjs/pull/2296)
- [Move where %root is added to a component’s initial viewModel data](https://github.com/canjs/canjs/pull/2282)
- [`Type` in a component’s VM doesn’t work correctly with lists](https://github.com/canjs/canjs/issues/2250)


__2.3.17__ ( Feb 19 2016 )

- [Documentation for can.Deferred reject is not correct](https://github.com/canjs/canjs/issues/2280)
- [Properties on a can.route.map are coerced to strings when they should not be](https://github.com/canjs/canjs/issues/2277)
- [can-value does not teardown binding](https://github.com/canjs/canjs/issues/2270)
- [Stache parser creating incorrect output](https://github.com/canjs/canjs/issues/2229)
- [console.log.apply not supported on IE11?](https://github.com/canjs/canjs/issues/2227)


__2.3.16__ ( Feb 16 2016 )

- [Documentation for can.List.unshift.apply is not correct](https://github.com/canjs/canjs/issues/2262)
- [Switch define docs to use new example version.](https://github.com/canjs/canjs/pull/2261)
- [Batched change notifies child component before parent stache binding](https://github.com/canjs/canjs/issues/2252)
- [../ looks up wrong property on maps](https://github.com/canjs/canjs/issues/2244)
- [can.Map constructor is observable](https://github.com/canjs/canjs/issues/2220)
- [Route/Map triggering too many changes](https://github.com/canjs/canjs/issues/2206)
- [{{#if}} statement within partial gets displayed outside partial](https://github.com/canjs/canjs/issues/2186)


__2.3.15__ ( Feb 15 2016 )

- [adds jquery as a dep](https://github.com/canjs/canjs/pull/2242)


__2.3.14__ ( Feb 05 2016 )

- [double get](https://github.com/canjs/canjs/pull/2239)
- [A trapped and &quot;not observed&quot; observed info object would still be observed.](https://github.com/canjs/canjs/pull/2236)
- [2190 canjs api update](https://github.com/canjs/canjs/pull/2232)
- [Define getters run twice. setVal is missing on first run.](https://github.com/canjs/canjs/issues/2230)
- [Batching/Binding Issue](https://github.com/canjs/canjs/issues/2223)
- [Fix `map.attr` with empty string.](https://github.com/canjs/canjs/pull/2219)
- [Set jQuery package version using Caret ](https://github.com/canjs/canjs/issues/2212)
- [2183 update guides](https://github.com/canjs/canjs/pull/2184)
- [@index is double wrapped compute object in mustache/stache helper in latest version (V2.3.8)](https://github.com/canjs/canjs/issues/2179)


__2.3.12/2.3.13__ ( Feb 01 2016 )

- [jquery 2.2 in peer deps not supported](https://github.com/canjs/canjs/issues/2207)
- [Keys aren&#39;t documented](https://github.com/canjs/canjs/issues/2202)
- [calling methods directly on an instance of a can.Map with can.compute.read](https://github.com/canjs/canjs/issues/2199)
- [Parser is not allowing anchor tags as child of inline elements](https://github.com/canjs/canjs/issues/2169)
- [can.viewModel mentioned in the navigation but not the root page contents](https://github.com/canjs/canjs/issues/2165)
- [Asynchronous virtual properties cause extra recomputes](https://github.com/canjs/canjs/issues/1915)
- [Child bindings are called before the parent in Stache](https://github.com/canjs/canjs/issues/1866)
- [Dynamic select menus don&#39;t live bind correctly](https://github.com/canjs/canjs/issues/1762)


__2.3.11__ ( Jan 21 2016 )

- [makes events fired as a result of a batch happen after any previous batches](https://github.com/canjs/canjs/pull/2203)
- [can.batch.afterPreviousEvents firing too late](https://github.com/canjs/canjs/issues/2198)
- [makes jQuery work without public buildFragment and overwritable domManip](https://github.com/canjs/canjs/pull/2177)
- [jQuery 2.2 compatible. ](https://github.com/canjs/canjs/issues/2176)


__2.3.10__ ( Jan 14 2016 )

- [Computes that are registered to be updated don&#39;t get updated if they are unbound](https://github.com/canjs/canjs/pull/2189)
- [nested switch statements cause a nodeList error](https://github.com/canjs/canjs/issues/2188)


__2.3.9__ ( Jan 11 2016 )

- [Partial defined by registerView throws error after element is modified](https://github.com/canjs/canjs/issues/2174)
- [stache system plugin needs nodeList](https://github.com/canjs/canjs/issues/2166)


__2.3.8__ ( Jan 04 2016 )

- [vdom innerHTML implementation should append a text node for script tags](https://github.com/canjs/canjs/issues/2156)
- [User DOM not found when rendering multiple &lt;content&gt;&#39;s as a result of a batched &quot;set&quot;](https://github.com/canjs/canjs/issues/2151)
- [option value as empty string are not selected with two way binding](https://github.com/canjs/canjs/issues/2147)
- [Sub expression as named parameter](https://github.com/canjs/canjs/issues/2140)
- [FF debugging functions conflicting with can.Map](https://github.com/canjs/canjs/issues/2069)
- [Dynamic select menus don&#39;t live bind correctly](https://github.com/canjs/canjs/issues/1762)


__2.3.7__ ( Dec 15 2015 )

- [Incorrect view model context with &lt;content/&gt;](https://github.com/canjs/canjs/issues/2137)
- [List replace with deferreds does not take into account stale/overtaken deferreds](https://github.com/canjs/canjs/issues/2136)
- [two-way binding bug regarding select dropdowns when value is set in inserted or init](https://github.com/canjs/canjs/issues/2134)
- [support backtrack path in export {^to-parent} bindings](https://github.com/canjs/canjs/issues/2132)
- [Inconsistent binding with &quot;with&quot; helper](https://github.com/canjs/canjs/issues/2129)
- [can.compute | NaN -&gt; NaN dispatches a change event](https://github.com/canjs/canjs/issues/2128)
- [{{(at)index}} doesn&#39;t work with arrays inside arrays](https://github.com/canjs/canjs/issues/2127)
- [Using a define getter breaks pushstate url updates.](https://github.com/canjs/canjs/issues/2105)
- [Wrong context inside &lt;content/&gt;](https://github.com/canjs/canjs/issues/2092)
- [expressions are caching Args computes in the wrong spots](https://github.com/canjs/canjs/issues/1971)
- [Dynamic select menus don&#39;t live bind correctly](https://github.com/canjs/canjs/issues/1762)


__2.3.6__ ( Dec 11 2015 )

- [Cannot read property &#39;pop&#39; of undefined ](https://github.com/canjs/canjs/issues/2121)
- [can.view.txt does not handle binding hookup on self-closing elements correctly](https://github.com/canjs/canjs/issues/2113)
- [%root property is serialized when can.Map instance is shared between a component viewModel and a can.route](https://github.com/canjs/canjs/issues/2080)


__2.3.5__ ( Dec 03 2015 )

- [Binding an undefined property to a component runs the setter](https://github.com/canjs/canjs/issues/2117)
- [Passing a function reference with @ runs it](https://github.com/canjs/canjs/issues/2116)


__2.3.4__ ( Dec 02 2015 )

- [Update each.js](https://github.com/canjs/canjs/pull/2114)
- [Stache leaks](https://github.com/canjs/canjs/pull/2111)
- [Stache removes attribute &quot;id&quot;  from input elements if value should be interpolated](https://github.com/canjs/canjs/issues/2110)
- [makes dynamic bindings work](https://github.com/canjs/canjs/pull/2108)
- [makes attributes that point to {} or {{}} work without enclosing quotes](https://github.com/canjs/canjs/pull/2107)
- [Dynamic bindings broken](https://github.com/canjs/canjs/issues/2106)
- [Update deprecated_models.md](https://github.com/canjs/canjs/pull/2104)
- [quotes around attributes](https://github.com/canjs/canjs/issues/2097)
- [deprecation warning not showing up](https://github.com/canjs/canjs/issues/2091)
- [Stache templates leak for various reasons](https://github.com/canjs/canjs/issues/2090)
- [can.each doesn&#39;t work if elements is missing `hasOwnProperty`](https://github.com/canjs/canjs/issues/1958)


__2.3.3__ ( Nov 30 2015 )

- [can.__isRecording observes doesn&#39;t understand can.__notObserve](https://github.com/canjs/canjs/issues/2099)
- [computes on Map prototypes are not readable by can.compute.read](https://github.com/canjs/canjs/issues/2098)
- [Live binding on a derived attribute breaks when it&#39;s removed from then added back to the page.](https://github.com/canjs/canjs/issues/2095)
- [Compute binding order](https://github.com/canjs/canjs/pull/2094)
- [Compute binding problem with setter](https://github.com/canjs/canjs/issues/2093)
- [elements and attributes doc](https://github.com/canjs/canjs/pull/2087)
- [Bug with conditional attribute](https://github.com/canjs/canjs/issues/2077)
- [%index doesn&#39;t work with can.Map values in master](https://github.com/canjs/canjs/issues/2067)
- [Rendering style tag with stache template](https://github.com/canjs/canjs/issues/2035)
- [Documentation Elements and Attributes](https://github.com/canjs/canjs/issues/2028)
- [The @index context should be skipped by `../`](https://github.com/canjs/canjs/issues/1554)


__2.3.2__ ( Nov 13 2015 )

- [adds warning for mismatched binding syntaxes](https://github.com/canjs/canjs/pull/2078)
- [Don&#39;t remove development code from development build.](https://github.com/canjs/canjs/pull/2070)
- [makes exporting function work, but not pretty](https://github.com/canjs/canjs/pull/2064)
- [Fix issue #1202 and &#39;unless&#39; helper](https://github.com/canjs/canjs/pull/2058)
- [Add navigator object to vdom global object - #2056](https://github.com/canjs/canjs/pull/2057)
- [Add navigator object to vdom](https://github.com/canjs/canjs/issues/2056)
- [Cannot export a component&#39;s prototype function to the references scope](https://github.com/canjs/canjs/issues/2051)
- [New 2-way bindings run setter twice with default values](https://github.com/canjs/canjs/issues/2049)
- [Added a setter for class attr to handle svg elements where className cann…](https://github.com/canjs/canjs/pull/2048)
- [Previous behavior restored for &quot;old&quot; two-way binding syntax](https://github.com/canjs/canjs/pull/2046)
- [All can-import tests are passing again](https://github.com/canjs/canjs/pull/2045)
- [Importing a template doesn&#39;t work with the new syntax](https://github.com/canjs/canjs/issues/2042)
- [Formalize two-way binding with selects.](https://github.com/canjs/canjs/issues/2027)
- [New bindings updating the scope when created](https://github.com/canjs/canjs/issues/2020)
- [Dead links](https://github.com/canjs/canjs/issues/2018)
- [svgEl.className is readOnly so live binding does not work](https://github.com/canjs/canjs/issues/2015)
- [stache does not update view with can.List and deep properties](https://github.com/canjs/canjs/issues/2007)
- [can.jquery.dev.js doesn&#39;t include dev parts of code](https://github.com/canjs/canjs/issues/2004)
- [After change of comparator @index in view stays the same for elements](https://github.com/canjs/canjs/issues/1962)
- [eq helper called twice](https://github.com/canjs/canjs/issues/1931)
- [Condition (helper) inside can-EVENT doesn&#39;t work](https://github.com/canjs/canjs/issues/1800)
- [Stache conditionals within custom attributes break in 2.3.0-pre.2](https://github.com/canjs/canjs/issues/1770)


__2.3.1__ ( Oct 29 2015 )

- [Make define part of the core](https://github.com/canjs/canjs/issues/2040)
- [global var &quot;GLOBALCAN&quot; fails](https://github.com/canjs/canjs/issues/2039)
- [Allow relative can-imports](https://github.com/canjs/canjs/pull/2038)
- [Replaced references to element.innerText in tests so that they pass i…](https://github.com/canjs/canjs/pull/2033)
- [references scopes are not available to bindings nested in components](https://github.com/canjs/canjs/issues/2029)
- [References of &#39;can&#39; not locally scoped in modules](https://github.com/canjs/canjs/issues/2022)
- [Adding scoped reference to &#39;can&#39;. Removing dependancy on Global &#39;can&#39;.](https://github.com/canjs/canjs/pull/2021)


__2.3.0__ ( Oct 23 2015 )

- [sort plugin: comparator set on init does not keep list sorted](https://github.com/canjs/canjs/issues/2006)
- [Stache #each teardown throws an error on observable functions](https://github.com/canjs/canjs/issues/2001)
- [New bindings do not always update the scope](https://github.com/canjs/canjs/issues/1996)
- [Binding docs](https://github.com/canjs/canjs/pull/1993)
- [adding routeUrl and routeCurrent](https://github.com/canjs/canjs/pull/1992)
- [merges binding logic](https://github.com/canjs/canjs/pull/1986)
- [Returning 0 from a helper displays nothing](https://github.com/canjs/canjs/issues/1985)
- [fixes a bug with deep methods like foo.bar() in bindings](https://github.com/canjs/canjs/pull/1982)
- [#each doesn&#39;t work with else](https://github.com/canjs/canjs/issues/1979)
- [Do not use pushstate routing on file:// protocol URLs](https://github.com/canjs/canjs/pull/1965)
- [Add support for drag-and-drop events in can.Component](https://github.com/canjs/canjs/issues/1955)
- [Operators and call expressions](https://github.com/canjs/canjs/pull/1946)
- [Can-event gets broken in production if method does not exist.](https://github.com/canjs/canjs/issues/1942)
- [can.isArray behaves differently using can.util.jquery vs can.util.domless](https://github.com/canjs/canjs/issues/1938)
- [Rename ~ helper](https://github.com/canjs/canjs/issues/1932)
- [Optimize sort plugin inserts (#1883)](https://github.com/canjs/canjs/pull/1927)
- [Missing Doc can.Deferred.prototype](https://github.com/canjs/canjs/issues/1890)
- [sub-expression methods that return data are broken](https://github.com/canjs/canjs/issues/1887)
- [slice and join are not observable](https://github.com/canjs/canjs/issues/1884)
- [Add ability to override can.route&#39;s batch with other batching implementations](https://github.com/canjs/canjs/pull/1882)
- [can/view/autorender doesn&#39;t import $.fn.viewModel](https://github.com/canjs/canjs/issues/1880)
- [Conditional &quot;readonly&quot; attribute does not work](https://github.com/canjs/canjs/issues/1874)
- [&quot;for&quot; attribute is &quot;htmlFor&quot; property](https://github.com/canjs/canjs/issues/1872)
- [Fixes #1862. Objects with addEventListener now bindable](https://github.com/canjs/canjs/pull/1868)
- [Add textarea example to can-value docs](https://github.com/canjs/canjs/issues/1867)
- [switch/case might not work when nested](https://github.com/canjs/canjs/issues/1857)
- [Pushstate should prevent default for javascript:// links](https://github.com/canjs/canjs/issues/1848)
- [stache expressions don&#39;t work right with parent context values](https://github.com/canjs/canjs/issues/1842)
- [Makes sure unbind is not call unnecessarily on can.Lists passed to can.view.live.list](https://github.com/canjs/canjs/pull/1836)
- [can.view.live.list unbinds from the list unnecessarily](https://github.com/canjs/canjs/issues/1835)
- [Stache subexpressions ](https://github.com/canjs/canjs/pull/1832)
- [Steal Stache plugin should provide module id and path to templates](https://github.com/canjs/canjs/issues/1817)
- [Create ~ helper for joining to the baseURL](https://github.com/canjs/canjs/issues/1816)
- [Pass options to helpers](https://github.com/canjs/canjs/pull/1815)
- [Pass parent scope helpers to helper&#39;s options](https://github.com/canjs/canjs/pull/1807)
- [Merges master into minor](https://github.com/canjs/canjs/pull/1805)
- [Parent helpers inside helper](https://github.com/canjs/canjs/issues/1783)
- [Live-list diffing](https://github.com/canjs/canjs/pull/1782)
- [Expand the Observables guide page](https://github.com/canjs/canjs/issues/1753)
- [Add screenshots to the 2.3 guides](https://github.com/canjs/canjs/issues/1749)
- [can.List filter should return lists of the same type](https://github.com/canjs/canjs/issues/1744)
- [Work-in-progress version of the new guides](https://github.com/canjs/canjs/pull/1741)
- [Observable promises is not documented](https://github.com/canjs/canjs/issues/1729)
- [Revert &quot;Use [.] to represent a template&#39;s viewModel&quot;](https://github.com/canjs/canjs/pull/1726)
- [Sort plugin excludes batchNum; Maybe fires unnecessary events](https://github.com/canjs/canjs/issues/1707)
- [Sort plugin evaluates insert index for batched events](https://github.com/canjs/canjs/issues/1706)
- [Sort plugin swaps equal value items](https://github.com/canjs/canjs/issues/1705)
- [Deprecate can.Map.prototype.COMPUTE-ATTR](https://github.com/canjs/canjs/issues/1703)
- [autorender system plugin should normalize the main](https://github.com/canjs/canjs/issues/1683)
- [Import view model](https://github.com/canjs/canjs/pull/1649)
- [Stache and Mustache registerSimpleHelper](https://github.com/canjs/canjs/pull/1646)
- [can-href](https://github.com/canjs/canjs/pull/1642)
- [can.view.href](https://github.com/canjs/canjs/pull/1641)
- [Document setting context of Stache data helper](https://github.com/canjs/canjs/pull/1640)
- [Changing context in a Stache template breaks the data helper](https://github.com/canjs/canjs/issues/1619)
- [{{#helper}} documentation examples are missing the &quot;#&quot;](https://github.com/canjs/canjs/issues/1535)
- [getHelper for can.stache and can.mustache should not require options](https://github.com/canjs/canjs/issues/1497)
- [Better docs on iterating performance of #section and #each.](https://github.com/canjs/canjs/issues/1488)
- [methods get arguments passed to them](https://github.com/canjs/canjs/issues/1473)
- [Dev Mode Warning on &quot;watch&quot; properties](https://github.com/canjs/canjs/issues/1437)
- [Proposal: `can-scope` for exporting scope into the surrounding context.](https://github.com/canjs/canjs/issues/1362)
- [can.view.attr won&#39;t trigger in can.mustache if no value is provided](https://github.com/canjs/canjs/issues/1353)
- [Documentation raises error 404 in can.route.map demo](https://github.com/canjs/canjs/issues/1294)
- [can.Compute as a prototype based can.compute](https://github.com/canjs/canjs/issues/1255)
- [Document how mustache tags handle lists](https://github.com/canjs/canjs/issues/1254)
- [Native CanJS Event Streams](https://github.com/canjs/canjs/issues/1218)
- [can.mustache #if renders __!!__ when value changes](https://github.com/canjs/canjs/issues/1151)
- [can.Model.models documentation unclear](https://github.com/canjs/canjs/issues/1129)
- [Mustache helper has no rendered output, if the output is 0.](https://github.com/canjs/canjs/issues/1109)
- [can-href link helper](https://github.com/canjs/canjs/issues/1103)
- [registerSimpleHelper](https://github.com/canjs/canjs/issues/1102)
- [Putting a can.compute on a Component scope throws](https://github.com/canjs/canjs/issues/1086)
- [define::set doc issues](https://github.com/canjs/canjs/issues/1047)
- [Mustache deferreds](https://github.com/canjs/canjs/pull/1031)
- [951 can model promises](https://github.com/canjs/canjs/pull/956)
- [{{#with}} Mustache helper pushes can.compute into Scope, breaks can.compute.read](https://github.com/canjs/canjs/issues/871)
- [can-value=&quot;.&quot; not working properly](https://github.com/canjs/canjs/issues/800)
- [Dev Warning : mutable values in can.Control.defaults](https://github.com/canjs/canjs/issues/704)
- [can.route.default](https://github.com/canjs/canjs/issues/672)
- [Live binding of not-yet-defined attr in a Component&#39;s template fails](https://github.com/canjs/canjs/issues/579)
- [can.route triggers event two times for setting nested object.](https://github.com/canjs/canjs/issues/269)
- [Make promises observable](https://github.com/canjs/canjs/issues/179)


__2.2.8/2.2.9__ ( Sep 11 2015 )

- [View bound to method breaks on re-evaluation](https://github.com/canjs/canjs/issues/1891)
- [fixed regression component control destructor](https://github.com/canjs/canjs/pull/1886)
- [Fix typo in default generator dependent property resolution logic](https://github.com/canjs/canjs/pull/1820)
- [attr.split() causes errors in IE10,11 in live.js on CanJS 2.2.6 when using jQuery](https://github.com/canjs/canjs/issues/1790)
- [Only attempt unbind when __bindEvents is defined](https://github.com/canjs/canjs/pull/1780)
- [can.Component events registered twice in 2.2.x](https://github.com/canjs/canjs/issues/1778)
- [can.map throws strings, not errors. ](https://github.com/canjs/canjs/issues/1773)
- [Handle a few sort plugin edge cases](https://github.com/canjs/canjs/pull/1718)


__2.2.7__ ( Jul 24 2015 )

- [can.compute change handler context should be the function not the can.Compute object](https://github.com/canjs/canjs/issues/1763)
- [Provide a getter and setter compute interface for non-map-like targets](https://github.com/canjs/canjs/issues/1719)
- [Unable to load canjs in node.js environment](https://github.com/canjs/canjs/issues/1711)
- [Makes scope.computeData listen to every observable in scope when value is not defined.](https://github.com/canjs/canjs/pull/1709)
- [&lt;select can-value=&quot;{value}&quot; with undefined value and option without value](https://github.com/canjs/canjs/issues/1679)
- [Conditional can-EVENT bindings don&#39;t work in stache](https://github.com/canjs/canjs/issues/1650)
- [Event handlers attached on Component&#39;s init (event) are not called. ](https://github.com/canjs/canjs/issues/1623)


__2.2.6__ ( May 20 2015 )

- [Fix calling define getters on map initialization](https://github.com/canjs/canjs/pull/1704)
- [Cleans up computes and fixes deep .attr calls.](https://github.com/canjs/canjs/pull/1696)
- [can/define with type: &#39;string&#39; given values of null or undefined returns &#39;null&#39; or &#39;undefined&#39;](https://github.com/canjs/canjs/issues/1693)
- [Mangled file in AMD builds](https://github.com/canjs/canjs/issues/1684)
- [Compute memory leak with nested properties](https://github.com/canjs/canjs/issues/1676)
- [can.Model.findAll should reject if parseModels returns a non-array `data` property.](https://github.com/canjs/canjs/issues/1662)
- [Cannot bind to future nested properties](https://github.com/canjs/canjs/issues/1657)
- [Check for vulnerability against iOS 8 object length bug](https://github.com/canjs/canjs/issues/1654)
- [can.stache helpers that rely on array replacement don&#39;t work, but work in can.mustache](https://github.com/canjs/canjs/issues/1652)
- [Helpers bind to nested properties differently in stache/mustache](https://github.com/canjs/canjs/issues/1651)
- [Cannot read value of property defined with &quot;get&quot; AND &quot;set&quot; methods ](https://github.com/canjs/canjs/issues/1648)
- [Use Function.prototype.bind if available](https://github.com/canjs/canjs/issues/1632)
- [Compute code gets inserted into DOM with Stache sometimes](https://github.com/canjs/canjs/issues/1617)
- [Problem with defines called out of order](https://github.com/canjs/canjs/issues/1519)
- [can.compute nested key behaviour inconsistency with map bindings](https://github.com/canjs/canjs/issues/1231)
- [bug with component that has an if inside an inverse tag](https://github.com/canjs/canjs/issues/1115)


__2.2.5__ ( Apr 22 2015 )

- [#each helper should use it&#39;s own NodeList](https://github.com/canjs/canjs/pull/1634)
- [Nested can.Component with &lt;content/&gt; tag causes detached DOM nodes](https://github.com/canjs/canjs/issues/1627)
- [Nested can.Component causes detached DOM nodes](https://github.com/canjs/canjs/issues/1625)
- [can.appendChild passed null el](https://github.com/canjs/canjs/issues/1621)
- [CanJS 2.2.4 can.List.replace() incorrect behavior](https://github.com/canjs/canjs/issues/1606)
- [allow comporator fn return any negative value](https://github.com/canjs/canjs/pull/1601)
- [can/map/define default behaviors with &quot;*&quot;](https://github.com/canjs/canjs/issues/1373)


__2.2.4__ ( Apr 03 2015 )

- [This makes list update sorting when comparator changes.](https://github.com/canjs/canjs/pull/1604)


__2.2.3__ ( Apr 03 2015 )

- [Fix AMD build, bring back can/util/library and can/util/can](https://github.com/canjs/canjs/pull/1600)
- [Stache sets up live-binding with plainJS objects and the section helper](https://github.com/canjs/canjs/issues/1598)
- [Autorender denormalizes typeModule in Steal production mode](https://github.com/canjs/canjs/issues/1595)
- [DOM appears to be held in memory in certain conditions with components rather than be destroyed](https://github.com/canjs/canjs/issues/1593)
- [#each causing duplicates](https://github.com/canjs/canjs/issues/1589)
- [Individual ready counters.](https://github.com/canjs/canjs/pull/1588)
- [Do not dispatch events during a set to a compute backed property.](https://github.com/canjs/canjs/pull/1587)
- [define getters throw two events](https://github.com/canjs/canjs/issues/1585)
- [autoload does not work with standalone build](https://github.com/canjs/canjs/issues/1582)
- [Prevents updating scope due to scope changes, avoiding an infinite loop problem.](https://github.com/canjs/canjs/pull/1580)
- [Batched Changes can create cycles in components two way bindings](https://github.com/canjs/canjs/issues/1579)
- [steal specific handling has been removed in 2.2.2 dists](https://github.com/canjs/canjs/issues/1577)
- [Makes sure promise observe data has a cid and the promise can be read from](https://github.com/canjs/canjs/pull/1573)
- [New promises are not rebound and can not read alternate properties on promises](https://github.com/canjs/canjs/issues/1572)
- [List#sort does not cause {{#each key}} to update](https://github.com/canjs/canjs/issues/1566)
- [component fire inserted event twice with zepto](https://github.com/canjs/canjs/issues/1564)
- [svg element inside stache template is not rendred correctly](https://github.com/canjs/canjs/issues/1327)


__2.2.2__ ( Mar 31 2015 )

- [makes can-EVENT arguments values instead of computes and functions](https://github.com/canjs/canjs/pull/1556)
- [Fixes section helper with lists](https://github.com/canjs/canjs/pull/1553)
- [View model docs cleanup](https://github.com/canjs/canjs/pull/1552)
- [can.stache and lists {{#data.items}} ](https://github.com/canjs/canjs/issues/1551)


__2.2.1__ ( Mar 24 2015 )

- [List.prototype.__set should not assume to create an array for indices out of bounds](https://github.com/canjs/canjs/issues/1548)
- [Prevents listening to events that happen while reading the compute](https://github.com/canjs/canjs/pull/1545)
- [v2.2.0 - The included `global.define` breaks UMD defs in other scripts](https://github.com/canjs/canjs/issues/1544)
- [cleans up can.Compute.read and adds template-obserbable promises](https://github.com/canjs/canjs/pull/1540)
- [Update components.md](https://github.com/canjs/canjs/pull/1532)
- [Adding viewModel to Components control instance](https://github.com/canjs/canjs/pull/1528)
- [Update the binding count correctly after calling removeEvent](https://github.com/canjs/canjs/pull/1527)
- [#1521 define map properties in the same order they&#39;re defined](https://github.com/canjs/canjs/pull/1526)
- [Problem with defines called out of order](https://github.com/canjs/canjs/issues/1519)

__2.2.0__ ( Mar 16 2015 )

- [Renaming and adding can.Component viewModel property.](https://github.com/canjs/canjs/pull/1512)
- [Set the context correctly when an async compute has a length of 1](https://github.com/canjs/canjs/pull/1506)
- [Typo (use of @params instead of @param) in can.Model&#39;s documentation ](https://github.com/canjs/canjs/issues/1496)
- [Added a note and some sample code illustrating relative can.view.Scope.attr lookups.](https://github.com/canjs/canjs/pull/1491)
- [Adds can.Compute, and &quot;compute&quot; type and setter / getter paring for define pugin](https://github.com/canjs/canjs/pull/1486)
- [can-value doesn&#39;t two way bind with a key value that has 0 and one values to a checkbox](https://github.com/canjs/canjs/issues/1478)
- [spaces around a key with `can-value` do not two way bind](https://github.com/canjs/canjs/issues/1477)
- [can-EVENT can not call intermediate functions before calling the final function](https://github.com/canjs/canjs/issues/1474)
- [can.fixture.store with objects does not work for .create](https://github.com/canjs/canjs/issues/1471)
- [can.Model resource is not creating &quot;destroy&quot; static method](https://github.com/canjs/canjs/issues/1469)
- [Don&#39;t change route if the only change would be prepending &quot;!&quot;](https://github.com/canjs/canjs/pull/1464)
- [Make RequireJS work with can.import](https://github.com/canjs/canjs/issues/1456)
- [Complete the Sort plugin](https://github.com/canjs/canjs/pull/1454)
- [Can attr set checkboxes](https://github.com/canjs/canjs/pull/1434)
- [add/remove events always give you back arrays](https://github.com/canjs/canjs/pull/1428)
- [Moved jquery out of travis.yml file and into devDependencies #1418](https://github.com/canjs/canjs/pull/1421)
- [can.route.setState doesn&#39;t deep clean the route](https://github.com/canjs/canjs/issues/1420)
- [travis.yml before_script](https://github.com/canjs/canjs/issues/1418)
- [Observable can/map/backup plugin](https://github.com/canjs/canjs/issues/1417)
- [removing bound scope properties on destroy](https://github.com/canjs/canjs/issues/1415)
- [CanJS can-value does not work for multi-select when options are rendered using Map](https://github.com/canjs/canjs/issues/1414)
- [Insert can.compute into can.Map](https://github.com/canjs/canjs/issues/1409)
- [Dev warning: custom tag is already defined](https://github.com/canjs/canjs/issues/1407)
- [{{#is}} and {{#eq}} helper](https://github.com/canjs/canjs/issues/1406)
- [can.List.prototype.sortIndexes is defined but not referenced](https://github.com/canjs/canjs/issues/1404)
- [A splice where can.List ends up exactly the same should not produce any events.](https://github.com/canjs/canjs/issues/1399)
- [#each doesn&#39;t work with null values that change to a can.List](https://github.com/canjs/canjs/issues/1398)
- [Memory leak in CanJS template/model](https://github.com/canjs/canjs/issues/1393)
- [can-autorender](https://github.com/canjs/canjs/issues/1390)
- [can.stache and can.mustache templates don&#39;t resolve partial names against the scope.](https://github.com/canjs/canjs/issues/1389)
- [can.stache will import components it depends on](https://github.com/canjs/canjs/issues/1387)
- [can.import](https://github.com/canjs/canjs/issues/1386)
- [getOwnPropertyDescriptor causes fatal error in IE8](https://github.com/canjs/canjs/issues/1378)
- [can/map/define default behaviors with &quot;*&quot;](https://github.com/canjs/canjs/issues/1373)
- [updating module names for builder](https://github.com/canjs/canjs/pull/1372)
- [booleanAttr for components](https://github.com/canjs/canjs/pull/1371)
- [Models with no id (undefined or null) are placed in model store](https://github.com/canjs/canjs/issues/1358)
- [can/map/define doesn&#39;t work more than one level deep.](https://github.com/canjs/canjs/issues/1346)
- [rename can.Component scope to context?](https://github.com/canjs/canjs/issues/1300)
- [can.List.prototype.sort is not working](https://github.com/canjs/canjs/issues/1265)
- [can-EVENT arguments](https://github.com/canjs/canjs/issues/1219)
- [{{prop}}CHECKED{{/prop}} doesn&#39;t work if someone manually changes input checked and then changes value elsewhere  (visible in TODOMVC)](https://github.com/canjs/canjs/issues/1201)
- [can-event doesn&#39;t pass extra arguments](https://github.com/canjs/canjs/issues/1195)
- [Default empty route event fires twice on page load](https://github.com/canjs/canjs/issues/1185)
- [can-event trows an error when inside #if block](https://github.com/canjs/canjs/issues/1182)
- [can.route - Allow changing the route (and URL) without saving to browser history](https://github.com/canjs/canjs/issues/1137)
- [Block level elements should be able to render inside anchor tags](https://github.com/canjs/canjs/issues/1134)
- [can.fixture has no way to allow AJAX calls to circumvent it, if necessary](https://github.com/canjs/canjs/issues/1131)
- [Sorting a List doesn&#39;t update in a template correctly](https://github.com/canjs/canjs/pull/1114)
- [can-EVENT removed in live bindings doesn&#39;t unbind](https://github.com/canjs/canjs/issues/1112)
- [Lexical semantics for can.Component](https://github.com/canjs/canjs/issues/1069)
- [Constructor names visible in debugger](https://github.com/canjs/canjs/issues/1000)
- [Fix `can.List` event docs, as well as an event ambiguity](https://github.com/canjs/canjs/issues/998)
- [new fixture store API is not documented](https://github.com/canjs/canjs/issues/987)
- [Improvement: can.list.pushAll and can.list.unshiftAll shortcuts](https://github.com/canjs/canjs/issues/984)
- [Replacing can.Map.List and can.List.Map](https://github.com/canjs/canjs/issues/897)
- [Ensure can-value bound input stay in sync with compute](https://github.com/canjs/canjs/pull/888)
- [can-value becomes out of sync when a compute rejects the new value](https://github.com/canjs/canjs/issues/887)
- [input with can-value keeps wrong value prevented with setter plugin](https://github.com/canjs/canjs/issues/872)
- [can.list.sort triggers event before sorting but none after](https://github.com/canjs/canjs/issues/828)
- [Improve can.scope and $.fn.scope code and add assignment support](https://github.com/canjs/canjs/pull/740)
- [Pass local helpers to sub templates.](https://github.com/canjs/canjs/issues/734)
- [can.batch.start/stop causes can.List with length&gt;1 to render last element twice](https://github.com/canjs/canjs/issues/680)
- [Advanced linking / setting of attribute values and computes](https://github.com/canjs/canjs/issues/646)
- [Live binding does not maintain the cursor position.](https://github.com/canjs/canjs/issues/356)

__2.1.4__ ( Nov 21 2014 )

- change: [Make can.Construct work with getter / setters (and super plugin)](https://github.com/canjs/canjs/issues/1337)
- change: [Update compute.read to also return constructor functions](https://github.com/canjs/canjs/pull/1332)
- change: [property for which no validations are defined throws an exception](https://github.com/canjs/canjs/pull/1323)
- change: [Reading from undefined values in scope. ](https://github.com/canjs/canjs/issues/1314)
- change: [Fixed function overwrite](https://github.com/canjs/canjs/pull/1309)
- change: [Using attrData.scope.compute as a setter throws an error if the getter hasn&#39;t been called](https://github.com/canjs/canjs/issues/1304)
- change: [Setting computes created with computeData will throw if set first](https://github.com/canjs/canjs/issues/1297)
- change: [Fix IE7 character access](https://github.com/canjs/canjs/pull/1289)
- change: [$.fn.scope undefined when using CommonJS](https://github.com/canjs/canjs/issues/1288)
- change: [Cannot read properties of can.Map inside a property&#39;s value method](https://github.com/canjs/canjs/issues/1284)
- change: [Removed madeMap and getMapFromObject from LazyMap since it&#39;s unused](https://github.com/canjs/canjs/pull/1281)
- change: [Dispatch correct arguments with can.List:splice if inserting and removing the same elements. ](https://github.com/canjs/canjs/issues/1277)
- change: [Inconsistent results when extending parsed can.Models](https://github.com/canjs/canjs/issues/1272)
- change: [scope objects with constructor function properties are treated as methods](https://github.com/canjs/canjs/issues/1261)
- change: [Mustache warning on helpers](https://github.com/canjs/canjs/issues/1257)
- change: [Extending a Model overwrites parseModels()](https://github.com/canjs/canjs/issues/1246)
- change: [Unused variable in can.Model](https://github.com/canjs/canjs/issues/1242)
- change: [Fixed Mustache getHelper() so that it doesn&#39;t need second argument](https://github.com/canjs/canjs/pull/1178)
- change: [can.route.map docs](https://github.com/canjs/canjs/issues/1152)
- change: [can.camelize and can.hyphenate not documented](https://github.com/canjs/canjs/issues/1147)
- change: [Issue: can.view(function, deferred, callback) does not work](https://github.com/canjs/canjs/issues/1139)
- change: [can.stache dosent render custom tags with Colon  &quot;:&quot;](https://github.com/canjs/canjs/issues/1108)
- change: [Documenting what new Model.List() does with no args passed](https://github.com/canjs/canjs/pull/1100)
- change: [Bug: can.List.splice(-1) causes JS exception inside binding framework](https://github.com/canjs/canjs/issues/1038)
- change: [can.Map code block cleanup and fix failure to render.](https://github.com/canjs/canjs/pull/1033)
- change: [can.view.preload breaks can.view.attr](https://github.com/canjs/canjs/issues/1032)
- change: [Fix rendering of &lt;col&gt; inside &lt;table&gt; in templates.](https://github.com/canjs/canjs/pull/1013)

__2.1.3__ ( Aug 25 2014 )

- change: [IE 8+10 fixes](https://github.com/canjs/canjs/pull/1212)
- change: [makes sure can.compute.read can read a final can.route value](https://github.com/canjs/canjs/pull/1177)
- change: [Allows maps passed to can.Map&#39;s constructor](https://github.com/canjs/canjs/pull/1175)
- change: [Makes can.route.current is observable ](https://github.com/canjs/canjs/pull/1173)
- change: [component does not update scope on id, class, and data-view-id attribute changes](https://github.com/canjs/canjs/pull/1172)
- change: [Prevent &#39;leaking reads&#39; on single bind computes](https://github.com/canjs/canjs/pull/1169)
- change: [can.Map constructor fails if passed another Map](https://github.com/canjs/canjs/issues/1166)
- change: [Incomplete documentation for can.List.prototype.filter](https://github.com/canjs/canjs/issues/1165)
- change: [can.Map method not become computable automatically](https://github.com/canjs/canjs/issues/1164)
- change: [can.route.current is not live-bindable](https://github.com/canjs/canjs/issues/1156)
- change: [setupSingleBindComputeHandlers leak temporary observables.](https://github.com/canjs/canjs/issues/1155)
- change: [can.compute.read should not call can.route](https://github.com/canjs/canjs/issues/1154)
- change: [Fix for #1132](https://github.com/canjs/canjs/pull/1150)
- change: [Fix for #1143](https://github.com/canjs/canjs/pull/1149)
- change: [Fixes compute.read with a Map wrapped in a compute](https://github.com/canjs/canjs/pull/1148)
- change: [Error when using a helper with 2 string arguments](https://github.com/canjs/canjs/issues/1143)
- change: [Simplifying and clarifying lazymap docs](https://github.com/canjs/canjs/pull/1138)
- change: [Documenting how to access Map properties containing a dot](https://github.com/canjs/canjs/pull/1136)
- change: [Fix the tabbing/spacing in the validation markdown files, and re-path th...](https://github.com/canjs/canjs/pull/1135)
- change: [Fix @typedef name to be dot-separated.](https://github.com/canjs/canjs/pull/1133)
- change: [Parse Error when a stache template contains SVG content](https://github.com/canjs/canjs/issues/1132)
- change: [test and fix #1079](https://github.com/canjs/canjs/pull/1130)
- change: [Fixes #1078 - add offset support to @index](https://github.com/canjs/canjs/pull/1107)
- change: [Fixes #1074 - Only call findAll once if argument is a deferred](https://github.com/canjs/canjs/pull/1106)
- change: [Document accessing attributes with dot in the name](https://github.com/canjs/canjs/issues/1101)
- change: [can.Construct passes original arguments to setup and fixes can.Model&#39;s setup accordingly](https://github.com/canjs/canjs/pull/1099)
- change: [Corrected pushstate tests and update can.test.route](https://github.com/canjs/canjs/pull/1098)
- change: [can.stache read function bug ](https://github.com/canjs/canjs/issues/1094)
- change: [Model.resource is not working with inherited classes](https://github.com/canjs/canjs/pull/1089)
- change: [Id and class attributes are not ignored in the route URL](https://github.com/canjs/canjs/issues/1079)
- change: [@index is not using offset param](https://github.com/canjs/canjs/issues/1078)
- change: [new Foo.List(Foo.findAll()) calls Foo.findAll twice ](https://github.com/canjs/canjs/issues/1074)
- change: [Store docs](https://github.com/canjs/canjs/pull/1035)
- change: [Multiple issues with Model](https://github.com/canjs/canjs/issues/1034)
- change: [can.LazyMap docs do not read clearly](https://github.com/canjs/canjs/issues/1010)

__2.1.2__ ( Jun 16 2014 )

- change: [Adds event target back for Map events](https://github.com/canjs/canjs/pull/1091)
- change: [Evaluate and cache text sections properly](https://github.com/canjs/canjs/pull/1083)
- change: [can.Map events Object missing target property](https://github.com/canjs/canjs/issues/1082)
- change: [Fix can.debounce and can.throttle context](https://github.com/canjs/canjs/pull/1073)
- change: [can.stache is returning incorrect values for DOM attributes](https://github.com/canjs/canjs/issues/1065)
- change: [Fixed incorrect scope for can/event&#39;s delegate and undelegate](https://github.com/canjs/canjs/pull/1055)
- change: [Warnings for map/define](https://github.com/canjs/canjs/pull/1054)
- change: [1050 component tagnames](https://github.com/canjs/canjs/pull/1053)
- change: [Regression in component naming](https://github.com/canjs/canjs/issues/1050)
- change: [Model destroyed bug](https://github.com/canjs/canjs/pull/1049)
- change: [Remove NodeLists from Stache](https://github.com/canjs/canjs/pull/1048)
- change: [#1019 Unless does not live bind](https://github.com/canjs/canjs/pull/1045)
- change: [Making routes not greedily consume slashes by default](https://github.com/canjs/canjs/pull/1044)
- change: [Map define warn](https://github.com/canjs/canjs/pull/1041)
- change: [calling reverse on a model list breaks its &quot;destroyed&quot; bindings](https://github.com/canjs/canjs/issues/1040)
- change: [can/event delegate/undelegate aren&#39;t using the correct scope](https://github.com/canjs/canjs/issues/1039)
- change: [Codeblocks styling in COMPUTE-ATTR](https://github.com/canjs/canjs/pull/1036)
- change: [nested component within an #if is not live bound](https://github.com/canjs/canjs/pull/1025)
- change: [{{#unless}} does not live bind](https://github.com/canjs/canjs/issues/1019)
- change: [#716 can.Model now warns the developer when no static properties are specified ](https://github.com/canjs/canjs/pull/1016)
- change: [fixes map unbind bug](https://github.com/canjs/canjs/pull/1015)
- change: [404 on can.view.Scope().readOptions docs](https://github.com/canjs/canjs/issues/1014)
- change: [Fix rendering of &lt;col&gt; inside &lt;table&gt; in templates.](https://github.com/canjs/canjs/pull/1013)
- change: [fix documentation for can.batch.stop](https://github.com/canjs/canjs/pull/1012)
- change: [can.stache performance](https://github.com/canjs/canjs/issues/1011)
- change: [Bug with conditionally nested components using stache](https://github.com/canjs/canjs/issues/967)
- change: [can.batch documentation is wrong](https://github.com/canjs/canjs/issues/802)
- change: [can.debounce keeps the context after being called the first time](https://github.com/canjs/canjs/issues/782)
- change: [Dev warning when can.Model is extended without static properties.](https://github.com/canjs/canjs/issues/716)

__2.1.1__ ( May 21 2014 )

- change: [404 on define example](https://github.com/canjs/canjs/issues/999)
- change: [Fixing define demo](https://github.com/canjs/canjs/pull/992)
- change: [Fixing up component and scope docs](https://github.com/canjs/canjs/pull/991)
- change: [Helpers are now passed into partials. Fixes #791.](https://github.com/canjs/canjs/pull/989)
- change: [can.mustache: {{else}} does not work for {{#unless}} block](https://github.com/canjs/canjs/issues/988)
- change: [Define demo broken in chrome](https://github.com/canjs/canjs/issues/986)
- change: [stache: Custom elements in IE8 contain a colon](https://github.com/canjs/canjs/pull/985)
- change: [Adding ability to mix can.event into can.Controls safely](https://github.com/canjs/canjs/pull/982)
- change: [Mixing in can/event conflicts with can.Control-based classes](https://github.com/canjs/canjs/issues/981)
- change: [added can parameter](https://github.com/canjs/canjs/pull/980)
- change: [adding tests for can.route.map](https://github.com/canjs/canjs/pull/979)
- change: [Scope docs](https://github.com/canjs/canjs/pull/977)
- change: [Component warn](https://github.com/canjs/canjs/pull/976)
- change: [add warning when component attribute is ignored](https://github.com/canjs/canjs/issues/975)
- change: [stache: Using {{else}} inside of an attribute](https://github.com/canjs/canjs/issues/974)
- change: [Misspelling in stache docs - differences from mustache](https://github.com/canjs/canjs/pull/973)
- change: [Upgrading html5shiv to 3.7.2](https://github.com/canjs/canjs/pull/970)
- change: [Stache conditionally nested components](https://github.com/canjs/canjs/pull/968)
- change: [Bug with conditionally nested components using stache](https://github.com/canjs/canjs/issues/967)
- change: [Bug with stache using view/bindings](https://github.com/canjs/canjs/issues/966)
- change: [Wrong context in serialize of can.map.define](https://github.com/canjs/canjs/issues/953)
- change: [Contributing clarification](https://github.com/canjs/canjs/pull/917)
- change: [can.Mustache: using local helpers inside partials](https://github.com/canjs/canjs/issues/791)

__2.1.0__ ( May 05 2014 )

- change: [fixes IE8](https://github.com/canjs/canjs/pull/963)
- change: [IE fixes](https://github.com/canjs/canjs/pull/955)
- change: [stache issue with steal and single quotes](https://github.com/canjs/canjs/issues/950)
- change: [Update component docs about passing in data via attributes](https://github.com/canjs/canjs/issues/947)
- change: [can.Mustache, can.EJS and can.view.mustache, can.view.ejs are depreicated](https://github.com/canjs/canjs/issues/935)
- change: [Finalize can.Map.define docs](https://github.com/canjs/canjs/issues/934)
- change: [Warning not using extend.](https://github.com/canjs/canjs/issues/932)
- change: [Adding guide for developing plugins](https://github.com/canjs/canjs/pull/929)
- change: [List promise documentation.](https://github.com/canjs/canjs/pull/925)
- change: [Mustache dev logging](https://github.com/canjs/canjs/pull/919)
- change: [can.Map.define](https://github.com/canjs/canjs/pull/913)
- change: [Makes can-value and can-EVENT work with {}](https://github.com/canjs/canjs/pull/908)
- change: [Fixes bugs with custom self-closing tags and empty custom tags.](https://github.com/canjs/canjs/pull/907)
- change: [{} works with can-value and can-click](https://github.com/canjs/canjs/issues/905)
- change: [Stache doesn&#39;t register correctly with steal](https://github.com/canjs/canjs/issues/898)
- change: [can.Mustache is converting a can.Model to a can.Map](https://github.com/canjs/canjs/issues/892)
- change: [can-value handling null in addition to undefined for select elements](https://github.com/canjs/canjs/issues/891)
- change: [can.view.live docs](https://github.com/canjs/canjs/issues/889)
- change: [Updates to recipes page](https://github.com/canjs/canjs/pull/885)
- change: [can.stache using ^ inside a tag throws an exception](https://github.com/canjs/canjs/issues/884)
- change: [Fix implementation of ./](https://github.com/canjs/canjs/issues/883)
- change: [can.stache won&#39;t render if self-closing content tag is used](https://github.com/canjs/canjs/issues/880)
- change: [Add &quot;./&quot; to mustache to denote selecting a property from current scope](https://github.com/canjs/canjs/pull/874)
- change: [can/event](https://github.com/canjs/canjs/pull/870)
- change: [Subclassed Model.List should inherit from their parent Model.List](https://github.com/canjs/canjs/pull/869)
- change: [Docco inline documentation](https://github.com/canjs/canjs/pull/868)
- change: [Adds computed attributes for can.List instances](https://github.com/canjs/canjs/pull/862)
- change: [Emit events for can.List.prototype.reverse](https://github.com/canjs/canjs/pull/860)
- change: [Fix inverse ^ to be able to use {{else}}](https://github.com/canjs/canjs/pull/859)
- change: [Adding test for #each with child sections](https://github.com/canjs/canjs/pull/858)
- change: [Remove all references from Model.List on model destroy.](https://github.com/canjs/canjs/pull/857)
- change: [Test for Mustache if sections removing all content](https://github.com/canjs/canjs/pull/856)
- change: [Update can.fixture request data with id](https://github.com/canjs/canjs/pull/854)
- change: [Settable can.computes](https://github.com/canjs/canjs/issues/824)
- change: [can.Map.prototype.define](https://github.com/canjs/canjs/issues/819)
- change: [batchNum issues](https://github.com/canjs/canjs/issues/815)
- change: [Change syntax for passing in template objects to Components to use `{}`](https://github.com/canjs/canjs/issues/814)
- change: [changing cross-binding comparison from === to ==](https://github.com/canjs/canjs/pull/813)
- change: [can-value when cross-bound with input value using === comparison](https://github.com/canjs/canjs/issues/811)
- change: [Restful behavior not fully implemented in can.fixture.store.findOne](https://github.com/canjs/canjs/issues/803)
- change: [Fix for calling removeAttr with number type (on lists)](https://github.com/canjs/canjs/pull/801)
- change: [Bug in log() method in can.view.Mustache](https://github.com/canjs/canjs/issues/797)
- change: [Added delegate/undelegate fallbacks to bind/unbind and fixed broken Zepto/Dojo delegate implementations](https://github.com/canjs/canjs/pull/760)
- change: [can.route crossbind to can.Map](https://github.com/canjs/canjs/issues/752)
- change: [Inverse ^if doesn&#39;t work correctly with an else](https://github.com/canjs/canjs/issues/751)
- change: [#each with nested #if not working as expected](https://github.com/canjs/canjs/issues/750)
- change: [Mustache live binding throws &quot;Cannot read property &#39;length&#39; of undefined&quot; in can.view.elements.after ](https://github.com/canjs/canjs/issues/744)
- change: [can.Model.List should extend an existing List](https://github.com/canjs/canjs/issues/736)
- change: [Dev warning when mustache doesn&#39;t find a helper](https://github.com/canjs/canjs/issues/726)
- change: [Recursive mustache template ends with &quot;Maximum call stack size exceeded&quot;](https://github.com/canjs/canjs/issues/723)
- change: [Dev warning when mustache doesn&#39;t find a variable](https://github.com/canjs/canjs/issues/720)
- change: [can.Components ignores attributes containing &quot;id&quot;](https://github.com/canjs/canjs/issues/693)
- change: [Adds a can.List promise plugin.](https://github.com/canjs/canjs/pull/688)
- change: [can.List.filter](https://github.com/canjs/canjs/issues/683)
- change: [Content not removed when it should be](https://github.com/canjs/canjs/issues/677)
- change: [defining &#39;can&#39; missing. setting it as a dependancy](https://github.com/canjs/canjs/pull/674)
- change: [Calling .fn() without arguments should forward scope by default](https://github.com/canjs/canjs/issues/658)
- change: [Path accessor to prevent walking up the scope](https://github.com/canjs/canjs/issues/645)
- change: [Observe attributes for #637](https://github.com/canjs/canjs/pull/641)
- change: [Attributes event API](https://github.com/canjs/canjs/issues/637)
- change: [can.view.tag and can.view.attr](https://github.com/canjs/canjs/issues/636)
- change: [2.1 API Changes](https://github.com/canjs/canjs/issues/635)
- change: [can.view returns a renderer function that returns a string](https://github.com/canjs/canjs/pull/608)
- change: [Added parseModels and parseModel to fix duplicate instances being created after create an update.](https://github.com/canjs/canjs/pull/571)
- change: [Added test to issue #560](https://github.com/canjs/canjs/pull/561)
- change: [can.Model#save: values for attributes not found in response are replaced with their defaults](https://github.com/canjs/canjs/issues/560)
- change: [Select with multiple-selection for can.view.bindings (i.e. two-way binding via can-value)](https://github.com/canjs/canjs/pull/551)
- change: [Update on can.Model&#39;s nested object throws error on recursive mustache template](https://github.com/canjs/canjs/issues/514)
- change: [can.Model: one URL property for REST resource](https://github.com/canjs/canjs/issues/501)
- change: [Adding wildcards to attributes plugin](https://github.com/canjs/canjs/pull/472)
- change: [Inconsistency when passing functions (e.g. descendants of can.Construct) to helpers.](https://github.com/canjs/canjs/issues/450)
- change: [Mustache - TypeError: Cannot read property &#39;childNodes&#39; of null ](https://github.com/canjs/canjs/issues/425)
- change: [Make can.extend&#39;s deep copy clone CanJS classes](https://github.com/canjs/canjs/issues/311)

__2.0.7__ ( Mar 26 2014 )

- change: [Configuration for AMD development build](https://github.com/canjs/canjs/pull/821)
- change: [2.0.6 dev errors](https://github.com/canjs/canjs/issues/817)
- change: [AMD dev build](https://github.com/canjs/canjs/issues/809)

__2.0.6__ ( Mar 14 2014 )

- change: [Allow type inference for fixture parameters.](https://github.com/canjs/canjs/pull/792)
- change: [Updating sourceURL syntax to use # instead of @](https://github.com/canjs/canjs/pull/789)
- change: [Changing typeof check to a check for apply (#681)](https://github.com/canjs/canjs/pull/787)
- change: [Nested component tags of same type throws an error](https://github.com/canjs/canjs/pull/780)
- change: [#773: Fixing date compare logic in can.Object.same.](https://github.com/canjs/canjs/pull/775)
- change: [Enable removeAttr on Map keys with dot](https://github.com/canjs/canjs/pull/774)
- change: [can.Object.same: compare logic is incorrect when it comes to dates](https://github.com/canjs/canjs/issues/773)
- change: [scanner.js error: Using //@ to indicate sourceURL pragmas is deprecated](https://github.com/canjs/canjs/issues/772)
- change: [Bug in sample code on http://canjs.com/ homepage](https://github.com/canjs/canjs/issues/749)
- change: [#713 cleanup can.Control, fixup contributing guide](https://github.com/canjs/canjs/pull/746)
- change: [can.computes that return nulls can be used with #each](https://github.com/canjs/canjs/issues/743)
- change: [can.fixture no longer says id 1 and id &quot;1&quot; are the same](https://github.com/canjs/canjs/issues/742)
- change: [Fixes `updated` callback to can.compute&#39;s on/off to simply need to be called.](https://github.com/canjs/canjs/pull/733)
- change: [compute signature not working](https://github.com/canjs/canjs/issues/732)
- change: [2.0.5 idOrUrl require.toUrl() change documented](https://github.com/canjs/canjs/pull/718)
- change: [can.view Breaking backward compatibility in v2.0.5 amd](https://github.com/canjs/canjs/issues/717)
- change: [confusing example for can.Control template data passing](https://github.com/canjs/canjs/issues/713)
- change: [Canjs not working in default android browser.](https://github.com/canjs/canjs/issues/681)
- change: [sourceURL comment in Scanner.prototype.scan() cause error on IE8](https://github.com/canjs/canjs/issues/679)

__2.0.5__ ( Feb 04 2014 )

- change: [fixes looking up @ and sets links to docco](https://github.com/canjs/canjs/pull/715)
- change: [Fixing truncation of special attribute (src and style) values containing &#39;=&#39;](https://github.com/canjs/canjs/pull/714)
- change: [Fixes IE in all browsers for all libraries](https://github.com/canjs/canjs/pull/712)
- change: [Fixes can.Map::compute to handle deeply nested properties](https://github.com/canjs/canjs/pull/711)
- change: [Live binding attribute in a truthy section does not work](https://github.com/canjs/canjs/pull/710)
- change: [Pluginify tests](https://github.com/canjs/canjs/pull/709)
- change: [Prevents attributes like can-click and can-value from being converted to scope properties](https://github.com/canjs/canjs/pull/708)
- change: [JSHints CanJS](https://github.com/canjs/canjs/pull/707)
- change: [Live binding attributes with no &#39;=&#39; does not work](https://github.com/canjs/canjs/pull/706)
- change: [Fixed the pushstate #652 test to ensure that it should pass in all libraries and phantomjs](https://github.com/canjs/canjs/pull/702)
- change: [Ignore attributes fix](https://github.com/canjs/canjs/pull/701)
- change: [Changing can.Control.route to match pushstate (#612)](https://github.com/canjs/canjs/pull/700)
- change: [Rewrote the pushstate #652 test for stability purposes](https://github.com/canjs/canjs/pull/699)
- change: [Fix for incorrect ignore attributes pattern](https://github.com/canjs/canjs/pull/694)
- change: [Development mode builds](https://github.com/canjs/canjs/pull/692)
- change: [Migrated the fix for can-value with radio buttons from bindings to elements](https://github.com/canjs/canjs/pull/691)
- change: [Fixing the test for pushstate #652](https://github.com/canjs/canjs/pull/690)
- change: [Moving can-value test and fixing IE7 radio button bug](https://github.com/canjs/canjs/pull/689)
- change: [#686 - Fix document.contains issue on Android](https://github.com/canjs/canjs/pull/687)
- change: [Android - document.contains](https://github.com/canjs/canjs/pull/686)
- change: [can.List.Map documentation](https://github.com/canjs/canjs/pull/675)
- change: [Suggested fix to broken attr behaviour](https://github.com/canjs/canjs/pull/671)
- change: [Fixes a memory leak with live binding.](https://github.com/canjs/canjs/pull/669)
- change: [Unexpected behaviour while using a Map](https://github.com/canjs/canjs/issues/667)
- change: [Live-Binding memory leak](https://github.com/canjs/canjs/issues/666)
- change: [Unescaped attributes](https://github.com/canjs/canjs/pull/664)
- change: [scope as Map constructors do not respect default &quot;@&quot; values](https://github.com/canjs/canjs/issues/657)
- change: [no doubled history states](https://github.com/canjs/canjs/pull/656)
- change: [Fixing variable format so it doesn&#39;t break Steal build](https://github.com/canjs/canjs/pull/654)
- change: [routed links must descend from pushstate root](https://github.com/canjs/canjs/pull/652)
- change: [util/zepto doesn&#39;t use $.fn.remove()](https://github.com/canjs/canjs/pull/651)
- change: [template files relative to requirejs baseUrl](https://github.com/canjs/canjs/pull/647)
- change: [exclude actual root from deparam](https://github.com/canjs/canjs/pull/644)
- change: [Partials within #each not working.](https://github.com/canjs/canjs/pull/643)
- change: [Undefined compute live bind fixes](https://github.com/canjs/canjs/pull/642)
- change: [2.0.4 Live @index still not working correctly](https://github.com/canjs/canjs/issues/640)
- change: [Broken live-binding with can.compute if compute is updated with a can.Construct](https://github.com/canjs/canjs/issues/638)
- change: [can.Mustache / can.view.Scope: Can&#39;t access static properties from an object&#39;s constructor.](https://github.com/canjs/canjs/pull/634)
- change: [#each on undefined attributes not working anymore in 2.0.4](https://github.com/canjs/canjs/pull/629)
- change: [can-value in checkboxes in IE7](https://github.com/canjs/canjs/pull/628)
- change: [can.computes with can.Map.prototype.attr() do not set up bindings](https://github.com/canjs/canjs/pull/626)
- change: [Changing can.Control.route selectors to match pushstate.js](https://github.com/canjs/canjs/pull/612)

__2.0.4__ ( Dec 23 2013 )

- change: [2.0.4 test fixes](https://github.com/canjs/canjs/pull/625)
- change: [Makes live safeStrings work](https://github.com/canjs/canjs/pull/624)
- change: [Working @index in mustache templates](https://github.com/canjs/canjs/pull/620)
- change: [Fixes nested components and `&lt;content&gt;` tags.](https://github.com/canjs/canjs/pull/619)
- change: [Fixes a problem with double inserted events](https://github.com/canjs/canjs/pull/618)
- change: [benchmark.js and minor performance improvements](https://github.com/canjs/canjs/pull/616)
- change: [Node lists rewrite](https://github.com/canjs/canjs/pull/615)
- change: [temporary fixed mustache index calculation with simple can.List when remove first item of list](https://github.com/canjs/canjs/pull/613)
- change: [Serialization](https://github.com/canjs/canjs/pull/611)
- change: [can.Component ATTR value is undefined when passing a function as a scope](https://github.com/canjs/canjs/issues/609)
- change: [restore will not remove properties that were added since the last backup](https://github.com/canjs/canjs/pull/607)
- change: [can.Mustache.safestring does not work with computed properties](https://github.com/canjs/canjs/issues/606)
- change: [Items pushed on lists don&#39;t get removed from the DOM in some cases](https://github.com/canjs/canjs/issues/605)
- change: [Functions globally defined when it shouldn&#39;t be](https://github.com/canjs/canjs/pull/604)
- change: [undefined list passed to {{#each}}](https://github.com/canjs/canjs/pull/602)
- change: [Added test for inserted event bug (live binding block)](https://github.com/canjs/canjs/pull/601)
- change: [Support Offline Testing](https://github.com/canjs/canjs/pull/600)
- change: [When using certain html-comments, can.view.Scanner does not recognize them correctly](https://github.com/canjs/canjs/pull/598)
- change: [teardownMap slows perfomance drastically](https://github.com/canjs/canjs/issues/595)
- change: [test for component content extension stack overflow bug](https://github.com/canjs/canjs/pull/594)
- change: [Split element classnames fails with {{#if}}](https://github.com/canjs/canjs/pull/592)
- change: [fixed an error that is caused by the timeout firing after the element has been removed from the DOM](https://github.com/canjs/canjs/pull/591)
- change: [Please add trailing slash support for can.route.pushstate](https://github.com/canjs/canjs/issues/588)
- change: [Overwrite can.Map.List.prototype.serialize to avoid infinite loops](https://github.com/canjs/canjs/pull/585)
- change: [Iterating over component data not as expected](https://github.com/canjs/canjs/issues/583)
- change: [can-value shows &quot;undefined&quot; if bound to undefined value](https://github.com/canjs/canjs/pull/580)
- change: [Maximum Call Stack Exceeded When Destroying a nested model](https://github.com/canjs/canjs/pull/476)
- change: [Individual test pages should run in CI as well](https://github.com/canjs/canjs/pull/446)

__2.0.3__ ( Nov 26 2013 )

- change: [fixes #577](https://github.com/canjs/canjs/pull/578)
- change: [Text live binding remains bound](https://github.com/canjs/canjs/issues/577)
- change: [fixes for #575 - non-component custom tags](https://github.com/canjs/canjs/pull/576)
- change: [Non component custom tag problems.](https://github.com/canjs/canjs/issues/575)
- change: [fixes for jQuery's inserted event and some quick inserted helpers](https://github.com/canjs/canjs/pull/574)
- change: [Component inserted event doesn't work with jQuery 1.10](https://github.com/canjs/canjs/issues/572)
- change: [fixes #568 and makes nulls render to empty string](https://github.com/canjs/canjs/pull/569)
- change: [Mustache loops do not print 0.](https://github.com/canjs/canjs/issues/568)
- change: [Observe builder update](https://github.com/canjs/canjs/pull/567)
- change: [Providing a can.Map constructor function to a component's scope does not work.](https://github.com/canjs/canjs/issues/563)
- change: [552 index calculation](https://github.com/canjs/canjs/pull/553)
- change: [@index is not calculated correctly when there are identical elements in the list](https://github.com/canjs/canjs/issues/552)
- change: [Inside the eventHandler this.scope is not set (as it's called on the scope itself)](https://github.com/canjs/canjs/pull/550)
- change: [Bower support, multiple jQuery versions](https://github.com/canjs/canjs/pull/529)

__2.0.2__ ( Nov 14 2013 )

- change: [cloning setter comptues](https://github.com/canjs/canjs/issues/547)
- change: [Event listeners leak in 2.0.1](https://github.com/canjs/canjs/issues/545)
- change: [can.VERSION for 2.0.1 says @EDGE rather than 2.0.1](https://github.com/canjs/canjs/issues/544)
- change: ['key' property breaks mustache helpers](https://github.com/canjs/canjs/pull/542)
- change: [component does not respect can.compute passed via attributes](https://github.com/canjs/canjs/issues/540)
- change: [Wrapping can.compute in can.Map breaks live-binding](https://github.com/canjs/canjs/issues/530)

__2.0.1__ ( Nov 12 2013 )

- change: [Fixes #538 helpers aren't called is data passed to the template happens ...](https://github.com/canjs/canjs/pull/541)
- change: [Update included plugins and release tasks](https://github.com/canjs/canjs/pull/539)
- change: [mustache: 'with' string is interpreted as with helper keyword](https://github.com/canjs/canjs/issues/538)
- change: [can.Component two way binding issues](https://github.com/canjs/canjs/issues/537)
- change: [New lines are not handled properly in special attributes](https://github.com/canjs/canjs/pull/535)
- change: [can.Control: {document} events are not working](https://github.com/canjs/canjs/issues/534)
- change: [&quot;{document} body click&quot; breaks in latest](https://github.com/canjs/canjs/pull/531)
- change: [pushstate() and preventDefault() were not working on default route becau...](https://github.com/canjs/canjs/pull/528)
- change: [Make $#domManip patch jq2.0-compatible](https://github.com/canjs/canjs/pull/526)
- change: [broken livebinding after replace can.Map property or remove property](https://github.com/canjs/canjs/issues/525)
- change: [fixes a problem with each not working if the whole list is replaced](https://github.com/canjs/canjs/pull/522)
- change: [can.Map stack exceeded on circular data structures](https://github.com/canjs/canjs/issues/521)
- change: [Fixes #512 #513, sees the glorious return of can.camelize and his trusty sidekick, can.hyphenate](https://github.com/canjs/canjs/pull/520)
- change: [List.join is not compute-able](https://github.com/canjs/canjs/issues/519)
- change: [Fix to multiple tags not necessarily having the right context. Close #515](https://github.com/canjs/canjs/pull/518)
- change: [avoids jQuery's event system when binding on observes which fixes #280](https://github.com/canjs/canjs/pull/517)
- change: [Implement can.Mustache.safeString](https://github.com/canjs/canjs/pull/516)
- change: [can.Component helpers context issue](https://github.com/canjs/canjs/issues/515)
- change: [can.camelize](https://github.com/canjs/canjs/issues/513)
- change: [can.Component template attributes name case](https://github.com/canjs/canjs/issues/512)
- change: [Makes attribute arguments passed to a component two way binding](https://github.com/canjs/canjs/pull/508)
- change: [Fix `Model.List.prototype.findAll()` in IE8.](https://github.com/canjs/canjs/pull/506)
- change: [Return a new can.compute every time (new can.view.Scope()).compute() is called](https://github.com/canjs/canjs/pull/505)
- change: [Mustache and EJS issues with attributes and truthy blocks](https://github.com/canjs/canjs/pull/504)
- change: [Handlebars {{#if}} losing scope of var](https://github.com/canjs/canjs/issues/503)
- change: [can.Model.List() updates its length after destoy() of one of its models only if it has bindings](https://github.com/canjs/canjs/issues/495)
- change: [can.Mustache doesn't support SafeString](https://github.com/canjs/canjs/issues/468)
- change: [can.Mustache: inconsistent behavior when updating nested attributes of an Observe](https://github.com/canjs/canjs/issues/441)
- change: [Support Handlebars @key and @index directives](https://github.com/canjs/canjs/issues/383)
- change: [Accessing a parent array property from within mustche](https://github.com/canjs/canjs/issues/378)
- change: [can.Observe binds for nested object. First time event trigger is only on top level object instead of nested one.](https://github.com/canjs/canjs/issues/280)

__2.0.0__ ( Nov 07 2013 )

- change: [Replacing lists live-binding](https://github.com/canjs/canjs/pull/502)
- change: [Fix destroy params](https://github.com/canjs/canjs/pull/499)
- change: [Special attribute binding](https://github.com/canjs/canjs/pull/498)
- change: [Fix Mustache binding lists in helpers](https://github.com/canjs/canjs/pull/496)
- change: [Certain HTML attributes need special live-binding](https://github.com/canjs/canjs/issues/494)
- change: [Destroy templates and attributes.](https://github.com/canjs/canjs/pull/492)
- change: [Fix some typo's in the documentation.](https://github.com/canjs/canjs/pull/489)
- change: [attr() not working in some cases in IE9](https://github.com/canjs/canjs/issues/488)
- change: [docs update: can.Object dependency for can.fixture](https://github.com/canjs/canjs/issues/487)
- change: [View renderer functions don't work with Deferreds](https://github.com/canjs/canjs/issues/486)
- change: [Issue: can.view.ejs(str) and can.view.ejs(id, str) return different responses](https://github.com/canjs/canjs/pull/485)
- change: [can.Mustache: #if sections are rendered twice when activated from live-binding](https://github.com/canjs/canjs/issues/477)
- change: [can.route.ready should not be called automatically](https://github.com/canjs/canjs/issues/475)
- change: [fixed issue #470 can.route default values are not working](https://github.com/canjs/canjs/pull/474)
- change: [can.route.ready called multiple times](https://github.com/canjs/canjs/pull/473)
- change: [Mustache two way helpers don't work as documented](https://github.com/canjs/canjs/issues/469)
- change: [Can't 2-way bind Array](https://github.com/canjs/canjs/issues/463)
- change: [Bower component does not work with steal](https://github.com/canjs/canjs/issues/459)
- change: [Live Binding Broken with Models with Nested Sub-models](https://github.com/canjs/canjs/issues/457)
- change: [String parameter not working as expected for: jQuery.fn.control / jQuery.fn.controls](https://github.com/canjs/canjs/pull/448)
- change: [error passing can.Observe.List to custom Mustache element helper](https://github.com/canjs/canjs/issues/438)
- change: [Wrong variable name in the Guide.](https://github.com/canjs/canjs/issues/431)
- change: [Model.destroy request params](https://github.com/canjs/canjs/issues/428)
- change: [Fixing can.ajax missing test for error handler with mootools](https://github.com/canjs/canjs/pull/421)
- change: [Fixing error that occurs when an item in an Observe.List contains a comp...](https://github.com/canjs/canjs/pull/419)
- change: [Observe#on](https://github.com/canjs/canjs/issues/394)
- change: [Array is skipped on serialize](https://github.com/canjs/canjs/issues/393)
- change: [`can.Mustache` live-binding on `can.route` attributes](https://github.com/canjs/canjs/issues/351)
- change: [create can.Component for custom tags](https://github.com/canjs/canjs/issues/327)
- change: [Feature/route to string](https://github.com/canjs/canjs/pull/306)
- change: [Default can.route.ready to false](https://github.com/canjs/canjs/issues/298)
- change: [Attributes automatic conversion to Map/Model specified type](https://github.com/canjs/canjs/pull/293)
- change: [can.route.pushstate mishandles hash fragments](https://github.com/canjs/canjs/issues/259)
- change: [Needed host check for pushstate.js](https://github.com/canjs/canjs/pull/249)
- change: [Support for rendering document fragments (returned from the renderer function) in the templates](https://github.com/canjs/canjs/pull/244)
- change: [Model.save: handle response data or return data in save callback](https://github.com/canjs/canjs/issues/236)
- change: [AMD Consistency](https://github.com/canjs/canjs/issues/211)
- change: [Extensionless views fail](https://github.com/canjs/canjs/pull/193)
- change: [can.Model.findAll promotes usage of XSS attack vector](https://github.com/canjs/canjs/issues/186)
- change: [Allow context change after element has been rendered](https://github.com/canjs/canjs/issues/180)
- change: [Make it easier to setup 2-way-binding and other interesting behaviors](https://github.com/canjs/canjs/issues/178)
- change: [Accessing attributes in Model destroy](https://github.com/canjs/canjs/issues/171)
- change: [mustache: support for backtrack path](https://github.com/canjs/canjs/issues/163)
- change: [Live-bound dynamic attributes don't get updated properly if they don't exist on initial execution](https://github.com/canjs/canjs/issues/157)
- change: [The can.Model.models arrayName should be configurable like observable's 'id' property](https://github.com/canjs/canjs/issues/128)
- change: [can.observe.delegate fails on compound selectors with wildcards](https://github.com/canjs/canjs/issues/119)

__1.1.8__ ( Sep 24 2013 )

- change: [can.Observe.List.Sort: fix for case when comparator is not a function](https://github.com/canjs/canjs/pull/481)
- change: [makeFindOne example cache error: http://canjs.com/docs/can.Model.makeFindOne.html](https://github.com/canjs/canjs/issues/471)
- change: [Two return statements in Mustache.getHelper](https://github.com/canjs/canjs/pull/465)
- change: [recommended syntax breaks can.route](https://github.com/canjs/canjs/issues/462)
- change: [Prevent infinite recursion on unbindAndTeardown when Observe's _bindings is undefined and Observe is self-referential](https://github.com/canjs/canjs/pull/461)
- change: [Catch only exceptions thrown by model[func]() (fix #454 and re #384)](https://github.com/canjs/canjs/pull/455)
- change: [CanJS Swallowing Errors](https://github.com/canjs/canjs/issues/454)

__1.1.7__ ( Jul 23 2013 )

- change: [can.Model.model attribute serialization fix](https://github.com/canjs/canjs/pull/449)
- change: [Build cleanup](https://github.com/canjs/canjs/pull/445)
- change: [.model should always serialize Observes](https://github.com/canjs/canjs/issues/444)
- change: [Preloaded recursive views fail to render their recursions](https://github.com/canjs/canjs/pull/439)
- change: [Use .attr() when evaluating errors in validations](https://github.com/canjs/canjs/pull/437)
- change: [can.compute error with can.Observe](https://github.com/canjs/canjs/pull/436)
- change: [Fix the bug where mustache each would fail if called with the empty list](https://github.com/canjs/canjs/pull/433)
- change: [Mustache's each fails with empty list](https://github.com/canjs/canjs/issues/432)
- change: [can.sub should return null if value is undefined or null](https://github.com/canjs/canjs/pull/429)
- change: [can.VERSION shows @EDGE but what about 2 years later?](https://github.com/canjs/canjs/issues/418)
- change: [can.compute-friendly validations](https://github.com/canjs/canjs/pull/410)
- change: [Test AMD builds](https://github.com/canjs/canjs/issues/409)
- change: [fixture based CRUD test fails in phantomjs](https://github.com/canjs/canjs/issues/408)
- change: [can.Model Fails Silently When Server Doesn't Return an Array for findAll](https://github.com/canjs/canjs/pull/384)

__1.1.6__ ( May 30 2013 )

- change: [Mustache doesn't read computed List.length correctly](https://github.com/canjs/canjs/issues/390)
- change: [Removing the semi-colon splitter in EJS transform, too unreliable #242](https://github.com/canjs/canjs/issues/389)
- change: [EJS transforming wasn't processing semi-colons properly within parentheses #242](https://github.com/canjs/canjs/issues/388)
- change: [Adds support for EJS shared blocks #242](https://github.com/canjs/canjs/issues/387)
- change: [. in helpers](https://github.com/canjs/canjs/issues/379)
- change: [1.1.6pre - something going wrong with can.computes() in Mustache templates](https://github.com/canjs/canjs/issues/376)
- change: [can.route references delegate but does not include it](https://github.com/canjs/canjs/issues/373)
- change: [Binding to an Observe.compute value is broken](https://github.com/canjs/canjs/issues/372)
- change: [Added validatesNumericalityOf to validations](https://github.com/canjs/canjs/issues/370)
- change: [Include can.Object in CanJS distribution](https://github.com/canjs/canjs/issues/368)
- change: [can.Map makes can.Deferred into an observable](https://github.com/canjs/canjs/issues/367)
- change: [Update sub to not break when str is undefined](https://github.com/canjs/canjs/issues/365)
- change: [List memory leak fix](https://github.com/canjs/canjs/issues/363)
- change: [Integrated incremental live lists](https://github.com/canjs/canjs/issues/361)
- change: [can.view.render update is sometimes `undefined`](https://github.com/canjs/canjs/issues/360)
- change: [Model.store and live bind does not handle same object initialized more times](https://github.com/canjs/canjs/issues/357)
- change: [Prevent errors if destroy is called multiple times on a Control instance](https://github.com/canjs/canjs/issues/352)
- change: [Outputting attribute and value containing '=' truncates the value (EJS &amp; Mustache)](https://github.com/canjs/canjs/issues/342)
- change: [can.sub fix remove param. Allow only to remove properties + tests](https://github.com/canjs/canjs/issues/341)
- change: [Can.string getNext function fix](https://github.com/canjs/canjs/issues/340)
- change: [Maximum Call Stack Exceeded When Destroying a nested model](https://github.com/canjs/canjs/issues/324)
- change: [Add VERSION property to CanJS Object](https://github.com/canjs/canjs/issues/316)
- change: [Better handling of null values in Mustache sections.](https://github.com/canjs/canjs/issues/307)
- change: [model override should work for create and update not just findone and findall](https://github.com/canjs/canjs/issues/301)
- change: [Download builder should include build version in output](https://github.com/canjs/canjs/issues/289)
- change: [Don't treat links to &quot;#&quot; as &quot;/&quot;](https://github.com/canjs/canjs/issues/285)
- change: [Run all tests also on pluginified files](https://github.com/canjs/canjs/issues/270)
- change: [Observable list's length attribute does not update with live binding using dot separated accessors](https://github.com/canjs/canjs/issues/267)
- change: [Twitter Bower component of CanJS](https://github.com/canjs/canjs/issues/252)
- change: [ejs files loose variables  after $.each loop](https://github.com/canjs/canjs/issues/242)

__1.1.5__ ( Mar 28 2013 )

- change: [Added Mustache.resolve to evaluate truthyness in a common way #333](https://github.com/canjs/canjs/issues/335)
- change: [Fixed incorrect passing of context stacks with partials in Mustache #288](https://github.com/canjs/canjs/issues/334)
- change: [Mustache {{#if}} does not correctly evaluate boolean value](https://github.com/canjs/canjs/issues/333)
- change: [deparam: parse params with remaining ampersand](https://github.com/canjs/canjs/issues/332)
- change: [Null objects within observes weren't working properly with Mustache sections #307](https://github.com/canjs/canjs/issues/329)
- change: [Mustache: Pass raw array data as the context instead of trying to resolve it #281](https://github.com/canjs/canjs/issues/328)
- change: [Allow to pass an array index to removeAttr in Observe and Observe.List](https://github.com/canjs/canjs/issues/325)
- change: [fixing no arg helpers](https://github.com/canjs/canjs/issues/322)
- change: [Mustache interpolation issues using Observes inside of an attribute tag](https://github.com/canjs/canjs/issues/321)
- change: [isObject is undefined ](https://github.com/canjs/canjs/issues/319)
- change: [Allow dots in Observe keys](https://github.com/canjs/canjs/issues/318)
- change: [data-view-id being rendered in tag closing](https://github.com/canjs/canjs/issues/317)
- change: [Execute startBatch callbacks](https://github.com/canjs/canjs/issues/315)
- change: [HTML comments with either an element callback (EJS) or a helper (Mustache) rendered incorrectly](https://github.com/canjs/canjs/issues/313)
- change: [Prevent leak from computes that have no bindings.](https://github.com/canjs/canjs/issues/310)
- change: [Treat &quot;--&quot; as delimiter of empty element](https://github.com/canjs/canjs/issues/303)
- change: [Fixing can.ajax with mootools](https://github.com/canjs/canjs/issues/300)
- change: [CanJS tries to parse JSON-map which contains a dot in the key](https://github.com/canjs/canjs/issues/296)
- change: [can.compute evaluations for the default Mustache handlers](https://github.com/canjs/canjs/issues/292)
- change: [can.Mustache: Array of objects passed as context to partials, breaks data helper and rendering.](https://github.com/canjs/canjs/issues/288)
- change: [adding greedy space to model url splitter](https://github.com/canjs/canjs/issues/284)
- change: [Fix for numeric inputs not living binding](https://github.com/canjs/canjs/issues/282)
- change: [Empty strings not handled properly](https://github.com/canjs/canjs/issues/281)
- change: [can.Control event delegation problem](https://github.com/canjs/canjs/issues/279)
- change: [fixing computes from converting type](https://github.com/canjs/canjs/issues/278)
- change: [can.view with Deferreds doesn't pass failures](https://github.com/canjs/canjs/issues/276)
- change: [HTML comments trip EJS rendering](https://github.com/canjs/canjs/issues/271)
- change: [can.Map.prototype.each overrides {{#each}} Mustache helper.](https://github.com/canjs/canjs/issues/258)
- change: [Any model with a &quot;.&quot; in the key name will cause observe.js _set() to throw and error](https://github.com/canjs/canjs/issues/257)
- change: [Item.List splice method does not convert inserted elements to Item type](https://github.com/canjs/canjs/issues/253)
- change: [Mustache: DOM exception when applying certain block patterns](https://github.com/canjs/canjs/issues/243)
- change: [Mustache: Interpolated values when iterating through an Observe.List fail if not surrounded by a DOM node](https://github.com/canjs/canjs/issues/153)

__1.1.4__ ( February 5, 2013 )

- fix: [Haschange binding and route ready for all libraries](https://github.com/canjs/canjs/pull/265)
- fix: [Get converters and .attr working the right way with nested objects](https://github.com/canjs/canjs/issues/264)
- fix: [CanJS/ejs table+tbody rendering of a list gives nested tbody items](https://github.com/canjs/canjs/pull/233)
- fix: [Mustache: Inconsistent treatment of function attributes](https://github.com/canjs/canjs/issues/231)
- fix: [EJS renders "@@!!@@" instead of Model data when a Deferred is passed into can.view that takes a long time to resolve](https://github.com/canjs/canjs/issues/230)
- fix: [Mustache: registered helpers do not create the context stack correctly](https://github.com/canjs/canjs/issues/228)
- fix: [Mustache: only the current context is passed to partials, instead of the full stack](https://github.com/canjs/canjs/issues/227)
- fix: [IE8 error when setting up observe list](https://github.com/canjs/canjs/pull/226)
- fix: [Resetting a live-bound `<textarea>` changes its value to `__!!__`](https://github.com/canjs/canjs/pull/223)
- fix: [hashchange binding still broken in mootools](https://github.com/canjs/canjs/issues/216)
- fix: [can.Mustache - with context lost in nested sections](https://github.com/canjs/canjs/issues/215)
- fix: [Enabled passing in helpers and partials to Mustache views](https://github.com/canjs/canjs/pull/214), ([1](https://github.com/canjs/canjs/pull/260))
- fix: [Make the resolved data available when using can.view](https://github.com/canjs/canjs/issues/209)
- fix: [.attr method doesn't merge nested objects](https://github.com/canjs/canjs/pull/207)
- fix: [Live binding on observe.lists nested in an observe doesn't work](https://github.com/canjs/canjs/issues/204)
- fix: [Attributes/Converters Issue](https://github.com/canjs/canjs/issues/174)
- fix: [Observe.List push/unshift doesn't fire when sort comparator is set](https://github.com/canjs/canjs/issues/170)
- fix: [Observe.List sort doesn't use custom method passed](https://github.com/canjs/canjs/issues/169)
- fix: [test&fix: null values crashing validations](https://github.com/canjs/canjs/pull/145)
- fix: [EJS rendering null value](https://github.com/canjs/canjs/pull/118)
- fix: [can.Map sort plugin doesn't trigger add events](https://github.com/canjs/canjs/issues/205)
- fix: [Observe.List sort plugin erroring on item removal](https://github.com/canjs/canjs/pull/88)
- fix: [Live binding on observe.lists nested in an observe doesn't work](https://github.com/canjs/canjs/issues/204)
- fix: [Observe.List sort doesn't use custom method passed](https://github.com/canjs/canjs/issues/169)
- add: [removeAttr can.Model attribute](https://github.com/canjs/canjs/pull/245)
- add: [Calling destroy on non persisted model](https://github.com/canjs/canjs/pull/181)
- add: [jQuery 1.9.x support](https://github.com/canjs/canjs/pull/237)
- add: [Mustache Helpers that accept computes and return an element should work](https://github.com/canjs/canjs/issues/254)

__1.1.3__ ( December 11, 2012 )

- fix: [Empty model displays __!!__ as input values](https://github.com/canjs/canjs/issues/196)
- fix: [Rendering models in tables produces different results than an equivalent observe](https://github.com/canjs/canjs/issues/202)
- fix: [`data` Mustache helper doesn't parse attribute properly](https://github.com/canjs/canjs/issues/200)
- fix: [Partial Mustache views assume the right parent tag for live-binding](https://github.com/canjs/canjs/commit/492a22f7655d1ff15c37b95213252c87a264fe3e)
- fix: [Mustache partials don't parse properly](https://github.com/canjs/canjs/issues/199)
- fix: [can.Control will fail to find $.event.special in a $.noConflict(true) scenario](https://github.com/canjs/canjs/issues/191)
- fix: [Nameless view renderers should return document fragment](https://github.com/canjs/canjs/issues/195)
- fix: [compute only updates once when a list's contents are replaced](https://github.com/canjs/canjs/commit/9cb47dfabba5dbe3bef161e6aae4a5ce2965ac49)
- add: [Updated jQuery hashchange plugin](https://github.com/canjs/canjs/pull/201)
- add: [Generate computes from an observe property](https://github.com/canjs/canjs/issues/203)
- add: [Add can.List.prototype.replace](https://github.com/canjs/canjs/issues/194)
- add: [Return resolved data models in view callback](https://github.com/canjs/canjs/issues/1log
83)

__1.1.2__ ( November 28, 2012 )

- fix: [Solve issue when stealing mustache templates](https://github.com/canjs/canjs/pull/175) - `can/view/mustache` returns `can` object now
- fix: [Controls shouldn't bind to templated events that contain undefined values](https://github.com/canjs/canjs/commit/e90bc56d9c1ec46ae01f084ccbcab43c9c611d0c)
- fix: [Resetting a form changes input values to __!!__](https://github.com/canjs/canjs/issues/166)
- fix: [Further AMD build improvements](https://github.com/canjs/canjs/issues/168)
- fix: [Strange conversion of nested arrays to Observe.List](https://github.com/canjs/canjs/issues/172)

__1.1.1__ ( November 19, 2012 )

- fix: [@@!!@@ Appears on Page With EJS and Table in non-IE Browsers](https://github.com/canjs/canjs/issues/156)
- fix: [can.deparam leaks to global scope](https://github.com/canjs/canjs/issues/152)
- fix: [nested attr() call on a model with List attributes blows away existing List](https://github.com/canjs/canjs/pull/160)
- add: [https://github.com/canjs/canjs/issues/162](https://github.com/canjs/canjs/issues/162)
- Improved AMD support, see [#155](https://github.com/canjs/canjs/issues/155)

__1.1.0__ ( November 13, 2012 )

 - add: [AMD module](#using_canjs-amd) support for each dependency ([#46](https://github.com/canjs/canjs/issues/46))

 - can.util
    - Updated jQuery to 1.8.2
    - Updated Zepto to 1.0rc1
    - Updated YUI to 3.7.3

 - can.Mustache
    - Added Mustache/Handlebars support with Live Binding

 - can.view
    - Changed [passing jQuery a node list instead of a fragment in View Modifiers](https://github.com/canjs/canjs/pull/131)

 - can.EJS
    - fix: [the way EJS handles multiple hookups in the same attribute](https://github.com/canjs/canjs/pull/134)
    - fix: [Nested Loops in EJS](https://github.com/canjs/canjs/issues/135)
    - fix: [can.EJS template rendering issue](https://github.com/canjs/canjs/issues/118)
    - fix: [multiline elements in EJS](https://github.com/canjs/canjs/pull/76)

 - can.route
    - fix: [hashchange binding with mootools broken](https://github.com/canjs/canjs/issues/124)

 - can.Control
    - add: [control does not listen to touchmove event on controller itself](https://github.com/canjs/canjs/issues/104)

 - can.Map
    - add: [List binding on .length of an object](https://github.com/canjs/canjs/issues/142)
    - fix: [validation error that incorrectly labels an attribute with a value of 0 as empty](https://github.com/canjs/canjs/pull/132)
    - add: [you can now pluralise event names to listen to matching events of that type (rather than firing a single event)](https://github.com/canjs/canjs/issues/122)
    - add: [compound sets now behave correctly](https://github.com/canjs/canjs/issues/119)
    - fix: [can.Map.delegate sets wrong event.currentTarget](https://github.com/canjs/canjs/issues/123)
    - add: [ability to assign object as attribute type in can.Map](https://github.com/canjs/canjs/issues/107)

 - can.Model
    - fix: [can.Model with attributes that are models gets corrupted when you call attr()](https://github.com/canjs/canjs/pull/141)
    - add: [missing dependency to can/model](https://github.com/canjs/canjs/pull/140)
    - Moved can/model/elements to can/map/elements and renamed `models` to `instances`
    - fix: [can.Model.List doesn't fire the change event on the expando properties ](https://github.com/canjs/canjs/issues/129)

__1.0.7__ (June 25nd 2012)

 - can.compute
      - Fixed a [global collision](https://github.com/jupiterjs/canjs/commit/7aea62462f3d8d7855f71ccdf16330e60d59f6fa) with `can.Control`.

 - Removed globals
      - Thanks [Daniel Franz](https://github.com/daniel-franz)!

__1.0.6__ (June 22nd 2012)

 - can.compute
      - Added a [computed value type object](https://github.com/jupiterjs/canjs/commit/8eb7847d410c840da38f4dd5157726e560d0a5f5) that can be used to represent several observe properties or a single static value.

 - can.ejs
      - Fixed problem with [trailing text](https://github.com/jupiterjs/canjs/commit/419248bf190febe5c3ccacb188e9c812e997278e) not being added to template.

__1.0.5__ (June 2nd 2012)

 - can.model
      - Added ability to [overwrite model crud operations](https://github.com/jupiterjs/canjs/commit/235097a46e45329d63da9b6d28a6c284c1b2a157) by defining a `make` prefixed static function, such as `makeFindAll`

 - can.EJS
      - [Fixed problem](https://github.com/jupiterjs/canjs/commit/4d4d31f12a57db1ff81f47fa0c8b4261d8133dbb) with nested block statements.

 - can.each
      - [Added optional third argument](https://github.com/jupiterjs/canjs/commit/bbd2ad5e38df90f0ebcc09a20f7ea216fe20bd72) that defines the context for the iterator function.

 - can/util/function
      - Added `can.defer` [method](https://github.com/jupiterjs/canjs/commit/64de5254ce8c284b20c3da487638497457152105) as an alias for `setTimeout(function(){}, 0)`.

 - can.view
      - Fixed `toId` [so it will work](https://github.com/jupiterjs/canjs/commit/19c9ca0f07b00afe3c99bf439c089948c46464a6) with both older and newer `steal` versions.

__1.0.4__ (May 22nd 2012)

 - Fixed plugin build process

__1.0.2__ (May 20th 2012)

 - Fixed breaking namespace issue.

__1.0.1__ (May 18th 2012)

 - can.util
     - fix: `can.each` now makes sure the [collection being iterated](https://github.com/jupiterjs/canjs/commit/c3016bc9d7075e5a31cc37576d944d9734457307) is not `undefined`

 - can.control
     - add: Redirect to another controller [method using a string](https://github.com/jupiterjs/canjs/commit/cab9b518ac0193431815ac0d34938f1168e45d5f)

 - can.model
     - fix: [Model instances in model store will be updated when `findAll` or `findOne` retrieves updated instances fixes](https://github.com/jupiterjs/canjs/commit/e4606906d37797d4ff551d1924d44f0c4d516fb7)
     - fix: Static methods such as `findOne` and `findAll` can [now be rejected](https://github.com/jupiterjs/canjs/commit/ff17833b52162348413ebdc47baaa389a90464f9). Thanks [roelmonnens](https://twitter.com/roelmonnens)!

 - can.route
    - add: Deliminating tokens now [configurable](https://github.com/jupiterjs/canjs/commit/ca98f8f2b781456a42866805e6f9879899dc38af)
    - fix: [Current route wins if all else equal](https://github.com/jupiterjs/canjs/commit/863f37cc3d34f52517050444e0b31b7d63d6c784)

__1.0__ (May 14st 2012)

 - [Registers itself as an AMD](https://github.com/jupiterjs/canjs/blob/master/util/exports.js) module if `define` is in the `window`

 - can.fixture
    - add: [a fixture plugin](https://github.com/jupiterjs/canjs/tree/5277f6f526cfa2514954d66e6f759ec73c47bf09)

 - can.util
    - add: [a util/function plugin](https://github.com/jupiterjs/canjs/commit/75e99f3b1545d4086ccdae259ccc87a3e8e7a018)

 - can.route
    - fix: [favor current route when matching](https://github.com/jupiterjs/canjs/commit/863f37cc3d34f52517050444e0b31b7d63d6c784)
    - fix: [uses defaults to match route better, and current route is not always selected](https://github.com/jupiterjs/canjs/commit/b0e59d287caba8fcb98871e4814b924588aef138)

__1.0 Beta 2__ (April 21st 2012)

 - can.util
    - change: [reverse argument order of can.each](https://github.com/jupiterjs/canjs/commit/234fd3b9eca18abdbc3fdbea114be6a818bfe6e3)
    - change/fix: [buildFragment returns non cached frag](https://github.com/jupiterjs/canjs/issues/33)
    - fix: [zepto's isEmptyObject was broke](https://github.com/jupiterjs/canjs/commit/7fe391f59a1f54e3f197f31e20276646f82e7f2e)
 - can.observe
    - feature: [recursive observes don't blow up](https://github.com/jupiterjs/canjs/issues/27)
    - change: [reverse argument order of can.each](https://github.com/jupiterjs/canjs/commit/234fd3b9eca18abdbc3fdbea114be6a818bfe6e3)
    - fix: [attr change events have old value](https://github.com/jupiterjs/canjs/commit/4081a9baf4441c1002467342baae3cdd885994c6)

 - can.model
    - fix: [findOne and findAll work with super](https://github.com/jupiterjs/canjs/commit/c93ae5478eea7fdb88fa6fc03211d81c8d4ca3bd)
    - fix: [model using custom id for store](https://github.com/jupiterjs/canjs/commit/14d05c29e71ed8c462ba49b740d9eb8e342d3c85)
    - fix: [destroy not working with templated id](https://github.com/jupiterjs/canjs/issues/32)

 - can.route
    - fix: a host of bugs in libaries other than jQuery because can.route was not properly tested in other libraries.
    - fix: can.param fixed in [dojo](https://github.com/jupiterjs/canjs/commit/77dfa012b2f6baa7dfb0fe84f2d62aeb5b04fc90),

__1.0 Beta 1__ (April 1st 2012)

Released!
