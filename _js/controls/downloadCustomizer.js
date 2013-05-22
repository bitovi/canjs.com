can.Control('Bitovi.OSS.DownloadCustomizer', {
	defaults: {
		minified: false,
		configuration: null,
		view: 'templates/downloadCustomizer.mustache'
	}
}, {
	init: function() {
		this.options = new can.Observe(this.options);
		this.isDependedOnBy = {};
		this.checkAlls = {};
		
		var self = this;
		Bitovi.OSS.Configuration.findOne().done(function(config) {
			self.isDependedOnBy = self._collectDependedOn(config);
			self.options.attr('configuration', config);
			can.each(config.types, function(obj, type) {
				self.element.find('[name=' + type + ']:checkbox:first').change();
			});
		});

		this.element.append(can.view(this.options.view, this.options, {
			versionNumber: function(version) {
				return version() ? version() : '';
			}
		}));
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
				$('#' + Bitovi.OSS.Configuration.pathToID(dependency)).prop('checked', true).change();
			});

			if(! $('[name=' + el.prop('name') + ']:checkbox:enabled:not(:checked)').length) {
				$('#' + el.prop('name')).prop('checked', true);
			}
		} else {
			$('.all[data-type=' + can.data(el, 'module').type + ']').prop('checked', false);
			this.checkAlls[can.data(el, 'module').type] = false;

			if(this.isDependedOnBy[el.val()]) {
				// uncheck depended-on-cies
				can.each(this.isDependedOnBy[el.val()], function(dependedOn) {
					$('#' + Bitovi.OSS.Configuration.pathToID(dependedOn)).prop('checked', false).change();
				});
			}
		}
	},
	'.all change': function(el, ev) {
		this.checkAlls[can.data(el, 'type')] = el.prop('checked');

		can.each(this.options.configuration.types[can.data(el, 'type')].modules, function(module) {
			var check = $('#' + Bitovi.OSS.Configuration.pathToID(module.id))
			if(! check.prop('disabled')) {
				check.prop('checked', el.prop('checked')).change();
			}
		});
	},
	'input[name=configuration] change': function(el, ev) {
		if(el.prop('checked')) {
			this._libraryChanged(el.prop('id'));
		}
	},
	_libraryChanged: function(libraryID) {
		var self = this;
		can.each(this.options.configuration.modules, function(module) {
			var disallowed = !!(module.configurations && module.configurations.indexOf(libraryID) < 0);
			var check = $('#' + module.id);
			check
				.closest('tr').toggleClass('inactive', disallowed).end()
				.prop('disabled', disallowed)
				.prop('checked', disallowed ? false : check.prop('checked') || self.checkAlls[module.type]).change();
		});
		can.each(this.options.configuration.types, function(obj, type) {
			self.element.find('[name=' + type + ']:checkbox:first').change();
		});
	}

});