var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var Q = require('q');

var qfs = {
	writeFile: Q.denodeify(fs.writeFile),
	rename: Q.denodeify(fs.rename),
	unlink: Q.denodeify(fs.unlink)
};

module.exports = function(grunt) {
	grunt.registerMultiTask('dash-docset', "Creates the docset for Dash from CanJS's documentation.", function() {
		this.requires('shell:docjs');

		var done = this.async(),
			task = this;

		// Create the SQLite DB
		var dbPath = this.options().path + 'Contents/Resources/docSet.dsidx',
			db,
			qrun;

		qfs.unlink(dbPath).fin(function() {
			db = new sqlite3.Database(dbPath);
			qrun = Q.nbind(db.run, db);

			qrun('CREATE TABLE searchIndex(id INTEGER PRIMARY KEY, name TEXT, type TEXT, path TEXT);').then(function() {
				var searchData = grunt.file.readJSON(task.options().path + 'Contents/Resources/Documents/searchdata.json');

				var getType = function(props) {
					var type = null;

					switch(props.type) {
						case 'constructor':
							type = 'Constructor';
							break;
						case 'function':
							type = 'Function'; // maybe this should be Method?
							break;
						case 'property':
							type = 'Property';
							break;
						case 'typedef':
							if(props.name === 'can.util.bind') {
								type = null; // don't show this
							} else if(props.parent === 'can.events') {
								type = 'Event';
							} else {
								type = 'Type';
							}
							break;
						case 'page':
							if(/plugins$/.test(props.parent)) {
								type = 'Plugin';
							} else if(props.name === 'can.event') {
								type = 'Plugin';
							} else if(props.parent === 'guides') {
								type = 'Guide';
							} else if(props.parent === 'can.Mustache.pages') {
								type = 'Plugin';
							} else if(props.parent === 'can.stache.pages') {
								type = 'Plugin';
							} else {
								type = null; // do not show this in the docs
							}
							break;
						//case 'group':
						//case 'prototype':
						//case 'static':
						default:
							type = null; // do not show this in the docs
					}

					return type;
				};

				return Q.all(Object.keys(searchData).map(function(key) {
					var props = searchData[key];
					var opts = {
						$name: props.title || props.name,
						$type: getType(props),
						$path: (props.id === 0 ? 'index' : key) + '.html'
					};

					if(props.hide || opts.$type == null) {
						return;
					}

					grunt.verbose.writeln('Inserting ' + opts.$name + ' as type ' + opts.$type + ' at path ' + opts.$path + '.');
					return qrun("INSERT OR IGNORE INTO searchIndex(name, type, path) VALUES ($name, $type, $path);", opts);
				}).filter(function(elem) { return elem !== undefined; }));
			}).then(function() {
				db.close();
				done();
			}, function(err) {
				db.close();
				grunt.error('There was an SQLite error.');
				done(err);
			}).done();
		});

	});

	grunt.registerMultiTask('dash-infoplist', "Creates the Info.plist file for CanJS's documentation.", function() {
		this.requires('shell:docjs');

		var done = this.async();

		var plistPath = this.options().path + 'Contents/Info.plist';
		qfs.unlink(plistPath).fin(function() {
			// TODO: genericize the bundle name
			return qfs.writeFile(plistPath,
				['<?xml version="1.0" encoding="UTF-8"?>',
				'<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">',
				'<plist version="1.0">',
				'<dict>',
				'	<key>CFBundleIdentifier</key>',
				'	<string>canjs</string>',
				'	<key>CFBundleName</key>',
				'	<string>CanJS</string>',
				'	<key>DocSetPlatformFamily</key>',
				'	<string>canjs</string>',
				'	<key>isDashDocset</key>',
				'	<true/>',
				'</dict>',
				'</plist>'].join('\n')
			).then(function() {
				done();
			}, function(err) {
				grunt.error('Failed to write Info.plist file.', err);
				done(err);
			});
		});

	});

	grunt.registerMultiTask('dash-repath', "Renames the docset to the right name.", function() {
		this.requires('shell:docjs', 'dash-docset');
		fs.renameSync(
			this.options().containingFolder + 'docset',
			this.options().containingFolder + 'CanJS.docset'
		);
	});
};
