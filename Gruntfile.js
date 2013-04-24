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
				tasks: ['docs']
			},
			js: {
				files: ['_js/**/*.js', '_js/**/*.mustache'],
				tasks: ['js']
			},
			pages: {
				files: ['<%= generate.docs.src %>', '_pages/*.mustache', '_layouts/*.mustache', '_docs/*.mustache'],
				tasks: ['docs']
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
				debug: true,
				data: {
					package: require(__dirname + '/can/package.json')
				},
				helpers: {
					makeTypesString: function (types) {
						if (types.length) {
							// turns [{type: 'Object'}, {type: 'String'}] into '{Object | String}'
							return '{' + types.map(function (t) {
								return t.type;
							}).join(' | ') + '}';
						} else {
							return '';
						}
					}
				}
			},
			guides: {
				options: {
					docs: {
						root: '../',
						parent: 'guides',
						out: 'guides/'
					}
				},
				src: ['_guides/*.md'],
				dest: '.'
			},
			docs: {
				options: {
					docs: {
						root: '../',
						ignore: function (data) {
							return data.hide || data.type === 'script' ||
								data.type === 'static' ||
								data.type === 'prototype';
						},
						parent: 'canjs',
						out: 'docs/'
					}
				},
				src: [
					'can/can.md',
					'can/construct/construct.md',
					'can/construct/construct.js',
					'can/observe/observe.md',
					'can/observe/observe.js',
					'can/model/model.md',
					'can/model/model.js',
					'can/control/control.md',
					'can/control/control.js'
				],
				dest: '.'
			}
		},
		clean: {
			docs: ['docs/'],
			guides: ['guides/']
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('can-compile');
	grunt.loadNpmTasks('documentjs');

	grunt.registerTask('js', [ 'cancompile', 'concat', 'uglify' ]);
	grunt.registerTask('development', ['watch:all']);
	grunt.registerTask('docs', ['clean', 'generate']);

	// Default task.
	grunt.registerTask('default', [ 'cancompile', 'concat', 'uglify', 'less', 'generate' ]);

};
