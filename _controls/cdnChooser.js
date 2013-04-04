can.Control('CanJSUS.CDNChooser', {
	defaults: {
		libraries: [{
			id: 'jquery',
			description: 'jQuery',
			isDefault: true
		}],
		selectedLibrary: 'jquery'
	}
}, {
	init: function() {
		this.options = new can.Observe(this.options);
		
		var self = this;
		CanJSUS.Configuration.findOne().done(function(config) {
			self.options.libraries.attr(config.libraries);
		});

		this.element.html(can.view('../_templates/cdnChooser.mustache', this.options));
	},
	'select change': function(el, ev) {
		this.options.attr('selectedLibrary', el.val());
	}
});