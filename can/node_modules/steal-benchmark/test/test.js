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
