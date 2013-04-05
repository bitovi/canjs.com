can.Model('CanJSUS.Configuration', {
	configuration: null,
	// the configuration is not going to change,
	// and it's pretty much a singleton, so:
	findOne: function() {
		if(CanJSUS.Configuration.configuration === null) {
			CanJSUS.Configuration.configuration = $.ajax({
				url: 'http://bitbuilder.herokuapp.com/canjs',
				dataType: 'jsonp'
			});
		}

		return CanJSUS.Configuration.configuration;
	},
	model: function(data) {
		var libraries = [];
		can.each(data.configurations, function(library, id) {
			library.id = id;
			libraries.push(library);
		});
		
		var types = {};
		can.each(data.types, function(description, id) {
			types[id] = {
				id: id,
				description: description,
				modules: []
			};
		});

		can.each(data.modules, function(module, path) {
			module.id = CanJSUS.Configuration.pathToID(path);
			module.path = path;
			types[module.type].modules.push(module);
		});

		return {
			name: data.name,
			version: data.version,
			description: data.description,
			libraries: libraries,
			types: types,
			modules: data.modules
		};
	},
	pathToID: function(path) {
		return path.split('/').join('-').split('.').join('_');
	},
	idToPath: function(id) {
		return id.split('_').join('.').split('/').join('/');
	}
}, { });