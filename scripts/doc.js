load('steal/rhino/rhino.js');

steal("documentjs", "steal/rhino/json.js", function (DocumentJS) {

	var cap = function(str){
		return str.substr(0,1).toUpperCase()+str.substr(1)
	}
	var documentTitle = function(){
		if(this.page.toLowerCase() == "index"){
			return "CanJS"
		}
		
		if(this.page !== "guides" && this.page !== "docs"){
			return cap(this.page)+" - CanJS"
		}
		
		var title = this.title || this.name;
		if(title){
			if(title === "Guides"){
				return cap(this.page)+ " - CanJS"
			} else if(title === "CanJS"){
				return "API - CanJS"
			}
			if(this.page === "docs"){
				return (this.name || this.title) + " - CanJS API"
			} else {
				return title+" - CanJS "+cap(this.page)
			}
		}
		return "CanJS"
	}

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
		},
		helpers: function(data, config, getCurrent, oldHelpers){
			return {
				documentTitle: documentTitle
			}
		}
		
	});
	
	var pkg = JSON.parse(readFile('./can/package.json'));
	var self = JSON.parse(readFile('./package.json'));
	var builder = JSON.parse(readFile('./can/builder.json'));

	DocumentJS('_guides',{
		"markdown": [ '_guides', 'can/changelog.md', 'can/contributing.md', 'can/license.md' ],
		"out": "guides",
		"parent": "guides",
		// "static": "documentjs/site/static",
		"root": '..',
		"package": pkg,
		"self": self,
		"builder": builder,
		"page": "guides", 
		// helpers: handlebarsHelpers,
		"url": {
			builderData: 'http://bitbuilder.herokuapp.com/canjs',
			builder: 'http://bitbuilder.herokuapp.com/can.custom.js',
			bithub: 'http://api.bithub.com/api/events/',
			cdn: '//canjs.com/release/'
		},
		"static" : "scripts/static",
		"templates": "scripts/templates",
		helpers: function(data, config, getCurrent, oldHelpers){
			return {
				sourceUrl: function(src){
					return "https://github.com/bitovi/canjs/wiki/"+src.replace(".md","").replace("_guides/","")
				},
				documentTitle: documentTitle
			}
		}
	});
	
});
