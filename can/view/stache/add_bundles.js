/* globals Promise */
steal("@loader", "can/util/can.js", function(loader, can){

	// Given a module name normalize it and add it to the loader.bundle array.
	return function(dynamicImports, parentName) {
		if(!dynamicImports.length) {
			return Promise.resolve();
		}

		// In the build the "main" loader is the localLoader
		var localLoader = loader.localLoader || loader;
		var bundle = localLoader.bundle;
		if(!bundle) {
			bundle = localLoader.bundle = [];
		}

		var bundleNormalizes = [];
		can.each(dynamicImports, function(moduleName){
			var bundleNormalize = loader.normalize(moduleName, parentName)
				.then(function(moduleName){
					if(!~bundle.indexOf(moduleName)) {
						bundle.push(moduleName);
					}
				});

			bundleNormalizes.push(bundleNormalize);
		});

		return Promise.all(bundleNormalizes);
	};

});
