Bitovi.OSS.DownloadCustomizer('Bitovi.OSS.HeroDownloadCustomizer', {
	defaults: {
		view: 'templates/heroDownloadCustomizer.mustache'
	}
}, {
	init: function() {
		this._super();
		this.isOpen = false;
	},
	'.customize click': function(el, ev) {
		this.toggleFlyout();
		ev.stopPropagation();
	},
	'.customize-box click': function(el, ev) {
		ev.stopPropagation();
	},
	'{window} click': function(el, ev) {
		this.toggleFlyout(false);
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
	},
	toggleFlyout: function(open) {
		if(open === undefined) {
			this.isOpen = this.element.find('.customize').toggleClass('active').hasClass('active');
			this.element.find('.customize-box').toggle();
		} else if(open) {
			this.element.find('.customize').addClass('active');
			this.element.find('.customize-box').show();
			this.isOpen = true;
		} else {
			this.element.find('.customize').removeClass('active');
			this.element.find('.customize-box').hide();
			this.isOpen = false;
		}
	}
});