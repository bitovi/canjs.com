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
	
	grunt.registerTask('overwrite-docco-css', 'Overwites doccos css', function () {
		grunt.file.copy("scripts/docco.css", minor+"/docco/docco.css");
		
		if(versionMap[minor].branch === "master") {
			grunt.file.copy("scripts/docco.css", "docco/docco.css");
		}
	})
	
		
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
				src: [
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
					'!util/dojo/dojo-1.8.1.js', '!util/dojo/nodelist-traverse.js','!**/*_test.js',
					'!can/map/list/list.js',
					'!can/model/list/list.js'
				],
				options: {
					output: minor+'/docco/'
				}
			},
			latest: {
				src: [
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
					'!util/dojo/dojo-1.8.1.js', '!util/dojo/nodelist-traverse.js','!**/*_test.js',
					'!can/map/list/list.js',
					'!can/model/list/list.js'
				],
				options: {
					output: 'docco/'
				}
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
					'plato/src': '<%= docco.dev.src %>',
				}
			},
			tests : {
				options : {
					jshint : grunt.file.readJSON('can/.jshintrc'),
					title : "CanJS Tests",
					exclude : /node_modules/
				},
				files: {
					'plato/tests': '**/*_test.js',
				}
			}

		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-docco');
	grunt.loadNpmTasks('grunt-plato');
	grunt.loadNpmTasks('grunt-jsbeautifier');
	
	var subTasks = ['docco:dev'];
	if(versionMap[minor].branch === "master") {
		subTasks.push("docco:latest")
	}
	subTasks.push("overwrite-docco-css");
	
	
	grunt.registerTask('doccoit',subTasks);
	
	

	// Default task.
	grunt.registerTask('default', [ 'doccoit' ]);

};
