Bitovi.OSS.DownloadCustomizer('Bitovi.OSS.HeroDownloadCustomizer', {
	defaults: {
		view: 'docs/static/templates/heroDownloadCustomizer.mustache'
	}
}, can.extend({
	init: function() {
		this._super();
		this.isOpen = false;
	},
	'.download click': function(el, ev) {
		this.toggleFlyout(false);
	},
	'select[name=configuration] change': function(el, ev) {
		this._libraryChanged(el.val());
	},
	_libraryChanged: function(libraryID) {
		var self = this;
		can.each(this.options.configuration.modules, function(module) {
			var disallowed = !!(module.configurations && module.configurations.indexOf(libraryID) < 0);
			var check = $('#' + module.id);
			check
				.closest('li').toggleClass('inactive', disallowed).end()
				.prop('disabled', disallowed)
				.prop('checked', disallowed ? false : check.prop('checked') || self.checkAlls[module.type]).change();
		});
	}
}, DownloadCustomizerDropdown));
