var Benchmark = require("benchmark");

var suites = [];

steal.done().then(function(){
	suites.forEach(function(suite, i){
		suite.on('cycle', function(event) {
		  console.log(String(event.target));
		});
		var next = suites[i+1];
		if(next) {
			suite.on('complete', function(){
				console.log("SUITE", next.name);
				next.run({ 'async': true, 'queued': true });
			});
		}
		
		if(i === 0) {
			setTimeout(function(){
				console.log("SUITE", suite.name);
				suite.run({ 'async': true, 'queued': true });
			},1);
			
		}
	});
});

module.exports = {
	suite: function(name){
		var suite = new Benchmark.Suite(name);
		suites.push(suite);
		return suite;
	}
};
