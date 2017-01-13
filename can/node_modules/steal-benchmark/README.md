# steal-benchmark

Runs  [Benchmark.js] suites, in order, after all [StealJS](http://stealjs.com) modules have loaded. 


## Install

> npm install steal-benchmark --save-dev

## Use

`import`, `require`, or use `define` to load the `"steal-benchmark"` dependency.

It provides a `suite(name)` method that returns a [Benchmark.Suite](http://benchmarkjs.com/docs#Suite).
This is the same as calling `new Benchmark.Suite(name)` except the suite will 
queued to run after all modules have been loaded.

Example:

```
var b = require("steal-benchmark");

b.suite("A")
	.add("a1", function(){
		/o/.test('Hello World!');
	})
	.add("a2", function(){
		 'Hello World!'.indexOf('o') > -1;
	});

b.suite("B")
	.add("b1", function(){
		!!'Hello World!'.match(/o/);
	})
	.add("b2", function(){
		 'Hello World!'.indexOf('o') > -1;
	});
```
