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
				src: [ '_js/lib/can.custom.js', '_js/lib/can.object.js', '_js/lib/can.fixture.js',
					   '_js/lib/grayscale.js', '_js/lib/moment.js', '_js/lib/prettify.js',
					   '_js/models/*.js', '_js/controls/*.js',
					   '_js/views.production.js', '_js/app.js' ],
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
			guides: {
				files: ['_guides/*.md'],
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
				debug: false,
				layout: '_templates/page.mustache',
				docs: '_templates/docs.mustache',
				root: '',
				package: require(__dirname + '/can/package.json'),
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
					downloadUrl: function(download, isPlugin) {
						if(isPlugin) {
							download = 'plugins=' + download;
						}
						// TOOO make builder URL configurable
						return 'http://bitbuilder.herokuapp.com/can.custom.js?' + download;
					},
					sourceUrl: function(src, type, line) {
						var pkg = grunt.config('can.pkg'),
							relative = path.relative(grunt.config('can.path'), src),
							hash = type !== 'page' && type !== 'constructor' && line ? '#L' + line : '';
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
					root: '../',
					parent: 'guides',
					page: 'guides',
					enableSearch: false
				},
				src: ['_guides/*.md', 'can/changelog.md', 'can/contributing.md', 'can/license.md'],
				dest: 'guides/'
			},
			docs: {
				options: {
					root: '../',
					parent: 'canjs',
					page: 'docs',
					enableSearch: true
				},
				src: [
					'can/can.md',
					'can/construct/construct.md',
					'can/construct/construct.js',
					'can/construct/proxy/proxy.md',
					'can/construct/super/super.md',
					'can/observe/observe.md',
					'can/observe/observe.js',
					'can/observe/attributes/attributes.md',
					'can/observe/attributes/attributes.js',
					'can/observe/backup/backup.md',
					'can/observe/backup/backup.js',
					'can/observe/delegate/delegate.js',
					'can/observe/delegate/delegate.md',
					'can/observe/setter/setter.md',
					'can/observe/setter/setter.js',
					'can/observe/validations/validations.md',
					'can/observe/validations/validations.js',
					'can/observe/compute/compute.js',
					'can/model/model.md',
					'can/model/model.js',
					'can/control/control.md',
					'can/control/control.js',
					'can/control/route/route.md',
					'can/control/plugin/plugin.md',
					'can/control/plugin/plugin.js',
					'can/route/route.md',
					'can/route/route.js',
					'can/view/view.md',
					'can/view/view.js',
					'can/view/ejs/ejs.md',
					'can/view/ejs/ejs.js',
					'can/view/mustache/doc/*.md',
					'can/view/mustache/mustache.js',
					'can/view/modifiers/modifiers.md',
					'can/view/modifiers/modifiers.js',
					'can/util/util.md',
					'can/util/util.js',
					'can/util/fixture/fixture.md',
					'can/util/fixture.js'
				],
				dest: 'docs/'
			},
			statics: {
				src: ['_pages/*.mustache'],
				dest: '.'
			}
		},
		clean: {
			docs: ['<%= generate.docs.dest %>'],
			guides: ['<%= generate.guides.dest %>'],
			statics: ['*.html']
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
