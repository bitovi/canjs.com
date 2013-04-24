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
		watch: {
			less: {
				files: ['_styles/*.less'],
				tasks: ['less']
			},
			docs: {
				files: '<%= generate.docs.src %>',
				tasks: ['generate:docs']
			},
			js: {
				files: ['_js/**/*.js', '_js/**/*.mustache'],
				tasks: ['js']
			},
			pages: {
				files: ['_pages/*.mustache', '_layouts/*.mustache', '_docs/*.mustache'],
				tasks: ['generate:docs']
			},
			all: {
				files: ['_pages/*.mustache', '_layouts/*.mustache',
					'_docs/*.mustache', '_js/**/*.js', '_js/**/*.mustache',
					'<%= generate.docs.src %>', '_styles/*.less'],
				tasks: ['default']
			}
		},
		generate: {
			options: {
				folder: __dirname + '/../../canjs.us',
				debug: true,
				data: {
					package: require(__dirname + '/can/package.json')
				},
				docs: {
					parent: 'canjs',
					root: '../'
				}
			},
			docs: {
				src: ['can/can.md', 'can/construct/construct.md', 'can/construct/construct.js'],
				dest: '.'
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
	grunt.loadNpmTasks('documentjs');

	grunt.registerTask('js', [ 'cancompile', 'concat', 'uglify' ]);
	grunt.registerTask('development', ['watch:all']);

	// Default task.
	grunt.registerTask('default', [ 'cancompile', 'concat', 'uglify', 'less', 'generate' ]);

};
