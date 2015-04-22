/*global module:false*/
module.exports = function (grunt) {
	var platoJSHint = grunt.file.readJSON('default_jshintrc.json');

	var _ = grunt.util._;
	var path = require('path');
	var docjsConfig = require('./documentjs.json');
	var versions = docjsConfig.versions;
	var defaultVersion = docjsConfig.defaultVersion;
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

		documentjs: docjsConfig
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
	grunt.registerTask('default', [ 'docjs:default', 'docjs:2.3-pre' ]);

};
