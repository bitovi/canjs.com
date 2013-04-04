can.Control('CanJSUS.DownloadCustomizer', {
	defaults: {
		minified: false,
		configuration: new can.Observe({}),
		view: '../_templates/downloadCustomizer.mustache'
	}
}, {
	init: function() {
		this.checkAlls = {};
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
			this.checkAlls[can.data(el, 'module').type] = false;

			if(this.isDependedOnBy[el.val()]) {
				// uncheck depended-on-cies
				can.each(this.isDependedOnBy[el.val()], function(dependedOn) {
					$('#' + CanJSUS.Configuration.pathToID(dependedOn)).prop('checked', false).change();
				});
			}
		}
	},
	'.all change': function(el, ev) {
		this.checkAlls[can.data(el, 'type')] = el.prop('checked');

		can.each(this.options.configuration.types[can.data(el, 'type')].modules, function(module) {
			var check = $('#' + CanJSUS.Configuration.pathToID(module.id))
			if(! check.prop('disabled')) {
				check.prop('checked', el.prop('checked')).change();
			}
		});
	},
	'input[name=library] change': function(el, ev) {
		if(el.prop('checked')) {
			var self = this;
			can.each(this.options.configuration.modules, function(module) {
				var disallowed = module.configurations && module.configurations.indexOf(el.prop('id')) < 0;
				var check = $('#' + module.id);
				check
					.prop('disabled', disallowed)
					.prop('checked', disallowed ? false : check.prop('checked') || self.checkAlls[module.type]).change();
			});
		}
	}

});