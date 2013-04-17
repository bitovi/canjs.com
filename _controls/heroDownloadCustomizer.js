CanJSUS.DownloadCustomizer('CanJSUS.HeroDownloadCustomizer', {
	defaults: {
		view: '../_templates/heroDownloadCustomizer.mustache'
	}
}, {
	'.customize click': function(el, ev) {
		el.toggleClass('active');
		this.element.find('.customize-box').toggle();
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
});