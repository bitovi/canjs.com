/*global module:false*/
module.exports = function (grunt) {
	var _ = grunt.util._;
	var path = require('path');
	var handlebarsHelpers = {
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

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		can: {
			pkg: grunt.file.readJSON('can/package.json'),
			path: 'can/'
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
		watch: {
			less: {
				files: ['_styles/*.less'],
				tasks: ['less']
			},
			docs: {
				files: '<%= generate.docs.src %>',
				tasks: ['docs']
			},
			pages: {
				files: ['<%= generate.docs.src %>', '_pages/*.mustache', '_layouts/*.mustache', '_docs/*.mustache'],
				tasks: ['docs']
			},
			guides: {
				files: ['_guides/*.md'],
				tasks: ['docs']
			}
		},
		generate: {
			options: {
				debug: true,
				layout: 'shared/_templates/page.mustache',
				docs: 'shared/_templates/docs.mustache',
				root: '',
				package: require(__dirname + '/can/package.json'),
				self: require(__dirname + '/package.json'),
				helpers: handlebarsHelpers,
				url: {
					builderData: 'http://bitbuilder.herokuapp.com/canjs',
					builder: 'http://bitbuilder.herokuapp.com/can.custom.js',
					bithub: 'http://api.bithub.com/api/events/',
					cdn: '//canjs.com/release/'
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
					'can/util/fixture/fixture.js'
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
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('can-compile');
	grunt.loadNpmTasks('documentjs');

	grunt.registerTask('development', ['watch:all']);
	grunt.registerTask('docs', ['clean', 'generate']);

	// Default task.
	grunt.registerTask('default', [ 'less', 'clean', 'generate' ]);

};
