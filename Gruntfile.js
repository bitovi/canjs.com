/*global module:false*/
module.exports = function (grunt) {
	var platoJSHint = grunt.file.readJSON('default_jshintrc.json');

	var _ = grunt.util._;
	var path = require('path');

	var versions = {
		"1.1" : {
			"source": "git://github.com/bitovi/canjs#1.1-legacy",
			"sites": {
				"docs": {
					"glob": {
						"ignore": ["guides/*.md","{node_modules,bower_components}/**/*", "lib/**/*"]
					},
					"parent" : "canjs"
				},
				"guides": {
					"glob": {
						"pattern": "{guides/*.md,*.md}"
					},
					"parent": "guides"
				}
			}
		},
		"2.0" : {
			"source": "https://github.com/bitovi/canjs#a6a933de0f0e0b0b53970a0c6961b59554b270ac",
			"sites": {
				"docs": {
					"glob": {
						"ignore": ["guides/*.md","lib/**/*"]
					},
					"parent" : "canjs"
				},
				"guides": {
					"glob": {
						"pattern": "{guides/*.md,*.md}"
					},
					"parent": "guides"
				}
			}
		},
		"2.1" : "git://github.com/bitovi/canjs#664214f77031591bb2b59375cb31b4e7a5dd9fae",
		"2.2": { "source": "git://github.com/bitovi/canjs#master", "npmInstall": ["steal@0.7.X","jquery@^1.11.0", "steal-qunit@0.0.2"] }
	};
	var defaultVersion = "2.2";
	var versionsNames = Object.keys(versions);


	var doccoConfig = function(){
		var config = {};
		_.each(versions, function(value, versionNumber){

			var path = (versionNumber !== defaultVersion ? versionNumber+"/" : "");

			config[versionNumber] = {
				options: {
					dst: path+'docco',
					layout: 'parallel',
					css: 'scripts/docco.css'
				},
				files : [
					{
						src : [
							'component/**/*.js',
							'compute/**/*.js',
							'construct/**/*.js',
							'control/**/*.js',
							'list/**/*.js',
							'map/**/*.js',
							'model/**/*.js',
							'observe/**/*.js',
							'route/**/*.js',
							'util/**/*.js',
							'view/**/*.js',
							'!util/dojo/dojo-1.8.1.js',
							'!util/dojo/nodelist-traverse.js',
							'!**/*_test.js'
						],
						expand : true,
						cwd : path+"can/"
					}
				]
			};
		});
		return config;
	};

	var platoConfig = function(){
		var config = {};
		_.each(versions, function(value, versionNumber){

			var path = (versionNumber !== defaultVersion ? versionNumber+"/" : "");
			var files = [
				path+'can/component/**/*.js',
				path+'can/compute/**/*.js',
				path+'can/construct/**/*.js',
				path+'can/control/**/*.js',
				path+'can/list/**/*.js',
				path+'can/map/**/*.js',
				path+'can/model/**/*.js',
				path+'can/observe/**/*.js',
				path+'can/route/**/*.js',
				path+'can/util/**/*.js',
				path+'can/view/**/*.js',
				'!**/dojo-1.8.1.js',
				'!**/nodelist-traverse.js',
				'!**/*_test.js',
				'!**/spec/specs/*.js'
			];

			config[versionNumber] = {
				options : {
					jshint : platoJSHint,
					title : "CanJS Source",
					exclude : /bower_components\|dist\|docs\|guides\|lib\|node_modules\|src\|examples\|dojo\-\|demos/
				},
				files: {

				}
			};
			config[versionNumber].files[path+"plato"] = files;
		});
		return config;
	};
	var cleanConfig = function(){
		var config = {};

		_.each(versions, function(value, versionNumber){
			var path = (versionNumber !== defaultVersion ? versionNumber+"/" : "");
			config[versionNumber] = [
				process.cwd() + '/'+path+"can",
				process.cwd() + '/'+path+"guides",
				process.cwd() + '/'+path+"docs",
				process.cwd() + '/'+path+"docco"
			];
			config[versionNumber+"-removeGitIgnore"] = [process.cwd() + '/'+path+"can/.gitignore"];
		});
		return config;
	};

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		docco: doccoConfig(),
		plato: platoConfig(),
		/*'dash-docset': {
			dist: {
				options: {
					path: process.cwd() + '/' + minor + '/docset/',
					docsURL: 'http://canjs.com/' + minor + '/docs/'
				}
			}
		},
		'dash-infoplist': {
			dist: {
				options: {
					path: process.cwd() + '/' + minor + '/docset/'
				}
			}
		},
		'dash-repath': {
			dist: {
				options: {
					containingFolder: process.cwd() + '/' + minor + '/'
				}
			}
		},*/
		clean: cleanConfig(),

		documentjs: {
			"versions": versions,
			"defaultVersion" : defaultVersion,
			"siteDefaults": {
				"ignoreTemplateRender": true,
				"parent" : "canjs",
				"templates" : "theme/templates",
				"static": "theme/static",
				"pageConfig": {
					"urls": {
						"builderData": "http://bitbuilder.herokuapp.com/canjs",
						"builder": "http://bitbuilder.herokuapp.com/can.custom.js",
						"bithub": "http://bitovi.bithub.com/api/v1/events/",
						"cdn": "//canjs.com/release/",
						"github":"https://github.com/bitovi/canjs.com"
					},
					"versions": [
						{"branch": "master","number": "2.1"},
						{"number": "2.0"},
						{"number": "1.1"}
					],
					"defaultDownloadVersion": "2.2.5"
				},
				"versionsSelectText" : "CanJS v<%= version %>",
				"tags": "theme/tags"
			},
			"defaultDest" : "./can",
			"versionDest" : "./<%=version%>/can",
			"sites": {
				"pages" : {
					"dest" : ".",
					"glob" : "_pages/*.mustache",
					"parent" : "home"
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-docco2');
	grunt.loadNpmTasks('grunt-plato');
	grunt.loadNpmTasks('grunt-jsbeautifier');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('documentjs');
	grunt.loadTasks("tasks");

	var subTasks = ['docco:dev'];
	//if(versionMap[minor].branch === "master") {
	//	subTasks.push("docco:latest");
	//}
	var all = ["documentjs:pages"];
	_.each(versions, function(value, versionNumber){
			all.push('docjs:'+versionNumber)
			grunt.registerTask('docjs:'+versionNumber,
				['clean:'+versionNumber,
				 'documentjs:'+versionNumber,
				 'docco:'+versionNumber,
				 'plato:'+versionNumber,
				 'clean:'+versionNumber+"-removeGitIgnore"]);

	});
	grunt.registerTask('docjs:default',
				['docjs:'+defaultVersion]);
	grunt.registerTask('docjs:all', all);
	//grunt.registerTask('platoit',['documentjs:'+defaultVersion,'plato:'+defaultVersion]);

	//grunt.registerTask('doccoit',subTasks);

	//grunt.registerTask('docjs', ['clean', 'documentjs:'+minor, 'doccoit', 'dash-docset', 'dash-repath']);

	// Default task.
	grunt.registerTask('default', [ 'docjs:default' ]);

};
