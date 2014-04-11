/*global module:false*/
module.exports = function (grunt) {
	
	var _ = grunt.util._;
	var path = require('path');


	var canPkg = grunt.file.readJSON('can/package.json'),
		minor = canPkg.version.split(".").slice(0,2).join("."),
		versions = grunt.file.readJSON('versions.json'),
		versionMap = {};
		
	versions.forEach(function(version){
		versionMap[version.number] = version;
	});
	
		
	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		can: {
			pkg: grunt.file.readJSON('can/package.json'),
			path: 'can/'
		},
		docco: {
			dev: {
				options: {
					dst:  minor+'/docco',
					layout : 'parallel',
					css : 'scripts/docco.css'
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
						cwd : "can/"
					}
				]
			},
			latest: {
				options: {
					dst:  'docco/',
					layout : 'parallel',
					css : 'scripts/docco.css'
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
						cwd : "can/"
					}
				]
			}
		},
		plato: {
			src : {
				options : {
					jshint : grunt.file.readJSON('can/.jshintrc'),
					title : "CanJS Source",
					exclude : /bower_components\|dist\|docs\|guides\|lib\|node_modules\|src\|examples\|dojo\-\|demos/
				},
				files: {
					'plato/src': [
						'can/component/**/*.js',
						'can/compute/**/*.js',
						'can/construct/**/*.js',
						'can/control/**/*.js',
						'can/list/**/*.js',
						'can/map/**/*.js',
						'can/model/**/*.js',
						'can/observe/**/*.js',
						'can/route/**/*.js',
						'can/util/**/*.js',
						'can/view/**/*.js',
						'!util/dojo/dojo-1.8.1.js',
						'!util/dojo/nodelist-traverse.js',
						'!**/*_test.js'
					]
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
	
	var subTasks = ['docco:dev'];
	if(versionMap[minor].branch === "master") {
		subTasks.push("docco:latest")
	}

	grunt.registerTask('doccoit',subTasks);

	// Default task.
	grunt.registerTask('default', [ 'doccoit' ]);

};
