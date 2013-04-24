/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			dist: {
				src: [ '_js/lib/can.custom.js', '_js/lib/grayscale.js',
					'_js/lib/moment.js', '_js/lib/rainbow.js',
					'_js/lib/language/*.js', '_js/models/*.js',
					'_js/controls/*.js', '_js/views.production.js', '_js/app.js' ],
				dest: 'resources/production.js'
			}
		},
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'resources/production.min.js'
			}
		},
		less: {
			development: {
				options: {
					compress: true
				},
				files: {
					"resources/styles.css": "_styles/styles.less"
				}
			}
		},
		cancompile: {
			dist: {
				src: ['_js/templates/*.mustache'],
				out: '_js/views.production.js'
			}
		},
		generate: {
			options: {
				folder: __dirname + '/../../canjs.us',
				data: {
					package: require(__dirname + '/../../../can/package.json')
				},
				docs: {
					parent: 'canjs',
					root: '../'
				}
			},
			all: {
				src: ['can/can.md'],
				options: {
					x: 'y'
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('can-compile');

	grunt.loadTasks('../tasks');

	// Default task.
	grunt.registerTask('default', [ 'cancompile', 'concat', 'uglify', 'less' ]);

};
