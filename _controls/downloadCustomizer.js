can.Control('CanJSUS.DownloadCustomizer', {
	defaults: {
		seperateFiles: true,
		minified: false,
		configuration: new can.Observe({}),
		view: '../_templates/downloadCustomizer.mustache'
	}
}, {
	init: function() {
		this.isDependedOnBy = {};

		var self = this;
		CanJSUS.Configuration.findOne().done(function(config) {
			self.isDependedOnBy = self._collectDependedOn(config);
			self.options.configuration.attr(config);
		});

		this.element.html(can.view(this.options.view, this.options));
	},
	_collectDependedOn: function(config) {
		var isDependedOnBy = {};
		can.each(config.modules, function(module, path) {
			can.each(module.dependencies, function(dependency) {
				if(! isDependedOnBy[dependency]) {
					isDependedOnBy[dependency] = [];
				}

				isDependedOnBy[dependency].push(path);
			});
		});

		return isDependedOnBy;
	},
	'input.module[type=checkbox] change': function(el, ev) {
		if(el.prop('checked')) {
			// also check dependencies
			can.each(can.data(el, 'module').dependencies, function(dependency) {
				$('#' + CanJSUS.Configuration.pathToID(dependency)).prop('checked', true).change();
			});
		} else {
			$('.all[data-type=' + can.data(el, 'module').type + ']').prop('checked', false);

			if(this.isDependedOnBy[el.val()]) {
				// uncheck depended-on-cies
				can.each(this.isDependedOnBy[el.val()], function(dependedOn) {
					$('#' + CanJSUS.Configuration.pathToID(dependedOn)).prop('checked', false).change();
				});
			}
		}
	},
	'.all change': function(el, ev) {
		can.each(this.options.configuration.types[can.data(el, 'type')].modules, function(module) {
			$('#' + CanJSUS.Configuration.pathToID(module.id)).prop('checked', el.prop('checked')).change();
		});
	}

});