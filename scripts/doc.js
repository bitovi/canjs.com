load('steal/rhino/rhino.js');

steal("documentjs", "steal/rhino/json.js", function (DocumentJS) {
	var pkg = JSON.parse(readFile('./can/package.json'));
	var self = JSON.parse(readFile('./package.json'));
	var builder = JSON.parse(readFile('./can/builder.json'));

	DocumentJS('scripts/doc.html',{
		"markdown": [ 'can' ],
		"out": "docs",
		"parent": "canjs",
		// "static": "documentjs/site/static",
		"root": '..',
		"package": pkg,
		"self": self,
		"builder": builder,
		// helpers: handlebarsHelpers,
		"url": {
			builderData: 'http://bitbuilder.herokuapp.com/canjs',
			builder: 'http://bitbuilder.herokuapp.com/can.custom.js',
			bithub: 'http://api.bithub.com/api/events/',
			cdn: '//canjs.com/release/'
		},
		// TODO move out (possibly make a flag or something)
		"layout": "shared/_templates/page.mustache",
		"docs": "shared/_templates/docs.mustache",
		"static" : "scripts/static",
		"templates": "scripts/templates",
		statics: {
			src: "_pages"
		}
	});
	
	var pkg = JSON.parse(readFile('./can/package.json'));
	var self = JSON.parse(readFile('./package.json'));
	var builder = JSON.parse(readFile('./can/builder.json'));

	DocumentJS('_guides',{
		"markdown": [ '_guides' ],
		"out": "guides",
		"parent": "guides",
		// "static": "documentjs/site/static",
		"root": '..',
		"package": pkg,
		"self": self,
		"builder": builder,
		// helpers: handlebarsHelpers,
		"url": {
			builderData: 'http://bitbuilder.herokuapp.com/canjs',
			builder: 'http://bitbuilder.herokuapp.com/can.custom.js',
			bithub: 'http://api.bithub.com/api/events/',
			cdn: '//canjs.com/release/'
		},
		"static" : "scripts/static",
		"templates": "scripts/templates"
	});
	
});
