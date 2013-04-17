can.Control('CanJSUS.CDNChooser', {
	defaults: {
		version: '',
		libraries: [],
		selectedLibrary: ''
	}
}, {
	init: function() {
		this.options = new can.Observe(this.options);
		
		var self = this;
		CanJSUS.Configuration.findOne().done(function(config) {
			self.options.libraries.attr(config.libraries);
			self.options.attr('version', config.version);
			self.element.find('select').change();
		});

		this.element.html(can.view('../_templates/cdnChooser.mustache', this.options));
	},
	'select change': function(el, ev) {
		this.options.attr('selectedLibrary', el.val());
	}
});