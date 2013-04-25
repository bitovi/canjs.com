var path = require('path');

/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		can: {
			pkg: grunt.file.readJSON('can/package.json'),
			path: 'can/'
		},
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
					'_js/lib/moment.js', '_js/lib/prettify.js', '_js/models/*.js',
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
					},
					downloadUrl: function(download) {
						// TOOO make builder URL configurable
						return 'http://bitbuilder.herokuapp.com/can.custom.js?plugins=' + download;
					},
					sourceUrl: function(src, type, line) {
						var pkg = grunt.config('can.pkg'),
							relative = path.relative(grunt.config('can.path'), src),
							hash = type !== 'page' && type !== 'constructor' ? '#L' + line : '';
						return pkg.repository.github + '/tree/v' + pkg.version + '/' + relative + hash;
					},
					testUrl: function(test) {
						// TODO we know we're in the docs/ folder for test links but there might
						// be a more flexible way for doing this
						return '../' + test;
					}
				}
			},
			guides: {
				options: {
					docs: {
						root: '../',
						parent: 'guides',
						page: 'guides',
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
						page: 'docs',
						out: 'docs/'
					}
				},
				src: [
					'can/can.md',
					'can/util/util.md',
					'can/util/util.js',
					'can/construct/construct.md',
					'can/construct/construct.js',
					'can/observe/observe.md',
					'can/observe/observe.js',
					'can/model/model.md',
					'can/model/model.js',
					'can/control/control.md',
					'can/control/control.js',
					'can/route/route.md',
					'can/route/route.js',
					'can/view/view.md',
					'can/view/view.js'
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
	grunt.registerTask('default', [ 'cancompile', 'concat', 'uglify', 'less', 'clean', 'generate' ]);

};
