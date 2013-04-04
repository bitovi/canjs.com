can.Control('CanJSUS.DownloadCustomizer', {
	defaults: {
		seperateFiles: true,
		minified: false,
		configuration: new can.Observe({}),
		view: '../_templates/downloadCustomizer.mustache'
	}
}, {
	init: function() {
		var self = this;
		CanJSUS.Configuration.findOne().done(function(config) {
			self.options.configuration.attr(config);
		});

		this.element.html(can.view(this.options.view, this.options));
	},
	'button click': function(el, ev) {
		// initiate download
	}

});