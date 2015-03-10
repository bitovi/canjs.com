load('steal/rhino/rhino.js');

steal("documentjs", "steal","steal/rhino/json.js", function (DocumentJS, steal) {

	// ARGUMENT PROCESSING
	var forceBuild = false;
	var minifyBuild = true;
	var generateDocset = false;
	
	// convert args
	_args.forEach(function(arg){
		if(arg == "-forceBuild" || arg == "-f") {
			forceBuild = true
		}
		if(arg == "-concatonly" || arg == "-c"){
			minifyBuild = false;
		}

		if (arg === "-generateDocset" || arg === "-g") {
			generateDocset = true;
		}
	})
	
	// HELPER METHODS
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

	var docsetTitle = function() {
		return (this.name || this.title);
	};

	var copyCanJSTo = function(loc){
		var dest = new steal.URI(loc);
		if (!dest.exists()) {
			dest.mkdirs();
		}
		console.log("Copying CanJS files to "+dest)
		new steal.URI('can').copyTo(dest);
		
		try{
			new steal.URI(loc+"/.git").removeDir();
		} catch(e){
			new steal.URI(loc+"/.git").remove();
		}
		new steal.URI(loc+"/.gitattributes").remove();
		new steal.URI(loc+"/.gitignore").remove();
		new steal.URI(loc+"/node_modules").removeDir();
		new steal.URI(loc+"/test/pluginified").removeDir();
		new steal.URI(loc+"/dist").removeDir();
	}

	var copyStealTo = function(loc){
		var dest = new steal.URI(loc);
		if (!dest.exists()) {
			dest.mkdirs();
		}
		console.log("Copying Steal files to "+dest)
		new steal.URI('steal').copyTo(dest);
		
		try{
			new steal.URI(loc+"/.git").removeDir();
		} catch(e){
			new steal.URI(loc+"/.git").remove();
		}
		new steal.URI(loc+"/.gitattributes").remove();
		new steal.URI(loc+"/.gitignore").remove();
		// new steal.URI(loc+"/node_modules").removeDir();
		// new steal.URI(loc+"/test/pluginified").removeDir();
		// new steal.URI(loc+"/dist").removeDir();
	}

	var minorVersionOf = function(version){
		return version.split(".").slice(0,2).join(".");
	};
	

	// CONFIG PREPERATION

	var pkg = JSON.parse(readFile('./can/package.json')),
		self = JSON.parse(readFile('./package.json')),
		builder = JSON.parse(readFile('./can/builder.json')),
		versions = JSON.parse(readFile('./versions.json')),
		version = minorVersionOf(""+pkg.version),
		isCurrentVersion = false;
	
	// the master version is the current version
	for(var i =0 ; i < versions.length; i++){
		
		if(versions[i].branch == "master" &&  version == versions[i].number ){
			isCurrentVersion = true;
		} 
	}
	
	var urls = {
			builderData: 'http://bitbuilder.herokuapp.com/canjs',
			builder: 'http://bitbuilder.herokuapp.com/can.custom.js',
			bithub: 'http://bitovi.bithub.com/api/v1/events/',
			cdn: '//canjs.com/release/'
	},
		apiOptions = {
			"markdown": [ 'can' ],
			"markdownIgnore": /can\/guides/,
			"out": version+"/docs",
			"parent": "canjs",
			"root": '..',
			"package": pkg,
			"self": self,
			"builder": builder,
			// helpers: handlebarsHelpers,
			"url": urls,
			"layout": "shared/_templates/page.mustache",
			"docs": "shared/_templates/docs.mustache",
			"static" : "scripts/static",
			"templates": "scripts/templates",
			helpers: function(data, config, getCurrent, oldHelpers){
				return {
					docsetTitle: docsetTitle,
					documentTitle: documentTitle,
					isLatestVersion: function(options){
						return this.number == config.version ?
							options.fn(this) : options.inverse(this);
					},
					// if we are in /2.0.4/docs/can.Component.html,
					// we want links to download to be ../../download.html
					removeVersionUrl: function(url){
						// statics don't have a root
						if(config.isVersioned && this.root) {
							return "../../"+url;
						} else {
							if(this.root){
								return this.root + '/' + url;
							} else {
								return url;
							}
						}
					}
				}
			},
			forceBuild: forceBuild,
			minifyBuild: minifyBuild,
			versionsSrc: "../../versions.json",
			version: version,
			isVersioned: true,
			versions: versions
		},
		guidesOptions = {
			"markdown": [ 'can/guides', 'can/changelog.md', 'can/contributing.md', 'can/license.md' ],
			"out": version+"/guides",
			"parent": "guides",
			"root": '..',
			"package": pkg,
			"self": self,
			"builder": builder,
			"page": "guides", 
			"url": urls,
			"static" : "scripts/static",
			"templates": "scripts/templates",
			helpers: function(data, config, getCurrent, oldHelpers){
				return {
					sourceUrl: function(src){
						return "https://github.com/bitovi/canjs/wiki/"+src.replace(".md","").replace("_guides/","")
					},
					documentTitle: documentTitle,
					isLatestVersion: function(options){
						return this.number == config.version ?
							options.fn(this) : options.inverse(this);
					},
					removeVersionUrl: function(url){
						// statics don't have a root
						if(config.isVersioned && this.root) {
							return "../../"+url;
						} else {
							if(this.root){
								return this.root + '/' + url;
							} else {
								return url;
							}
						}
					}
				}
			},
			forceBuild: forceBuild,
			minifyBuild: minifyBuild,
			versionsSrc: "../../versions.json",
			version: version,
			isVersioned: true,
			versions: versions
		};
	
	
	// UPDATING FILES
	
	// clean versioned folder
	new steal.URI(version+"/can").removeDir();
	new steal.URI(version+"/docs").removeDir();
	new steal.URI(version+"/guides").removeDir();
	
	// Make versioned CanJS
	copyCanJSTo(version+"/can");
	
	// Make versioned API docs
	DocumentJS('scripts/doc.html', apiOptions);

	// Make versioned guides
	DocumentJS(null, guidesOptions);

	if (generateDocset) {
		// Remove the previous docset
		new steal.URI(version+"/docset").removeDir();

		// copy can and steal content to subdirectories of the docset package so that examples work without modification
		// TODO: it has to put can in two different locations which is silly.
		copyCanJSTo(version + '/docset/Contents/Resources/can');
		copyCanJSTo(version + '/docset/Contents/can');
		copyStealTo(version + '/docset/Contents/steal');
		new steal.File('stealconfig.js').copyTo(version + '/docset/Contents/stealconfig.js');

		// Produce API files compatible for Dash .docset output
		DocumentJS('scripts/doc.html', steal.extend(apiOptions, {
			out: version + "/docset/Contents/Resources/Documents",
			templates: "scripts/docset-templates"
		}));

		// Copy the Info.plist file into the right place
		new steal.File('Info.plist').copyTo(version + "/docset/Contents/Info.plist");

		// Copy the Favicon file into the right place inside the docset path
		new steal.File('canjs-logo-16x16.png').copyTo(version + "/docset/icon.png");
		new steal.File('canjs-logo-32x32.png').copyTo(version + "/docset/icon@2x.png");

		// ... and versioned guides for Dash
		DocumentJS(null, steal.extend(guidesOptions, {
			out: version + "/docset/Contents/Resources/Documents/Guides",
			templates: "scripts/docset-templates"
		}));
	}
		
	// if version is the last non-branch version, put in "docs" and "guides" 
	if( isCurrentVersion ) {
		print("\nWRITING CURRENT VERSION\n")
		// clear docs folder
		new steal.URI("docs").removeDir();
		// clear guides folder
		new steal.URI("docs").removeDir();
		
		// Make current API docs
		DocumentJS('scripts/doc.html', 
			steal.extend( apiOptions, {
				out: "docs",
				versionsSrc: "../versions.json",
				isVersioned: false,
				templates: "scripts/templates",
				statics: {
					src: "_pages"
				}
			}));
		// Make current guides
		DocumentJS(null, 
			steal.extend( guidesOptions, {
				out: "guides",
				versionsSrc: "../versions.json",
				templates: "scripts/templates",
				isVersioned: false,
			}));
		
		
	}
	
	
});
