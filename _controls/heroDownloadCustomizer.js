CanJSUS.DownloadCustomizer('CanJSUS.HeroDownloadCustomizer', {
	defaults: {
		view: '../_templates/heroDownloadCustomizer.mustache'
	}
}, {
	'.customize click': function(el, ev) {
		this.element.find('.customize-box').toggle();
	},
});