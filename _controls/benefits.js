can.Control('CanJSUS.Benefits', {
	defaults: {
		taglines: {
			'flexible': 'Take it anywhere. Designed to work with multiple libraries, plugins, and templating frameworks.',
			'powerful': 'Strong enough for high-power applications; simple enough to learn in a day.',
			'fast': 'Fastest framework in the west.'
		}
	}
}, {
	init: function() {
		this.state = new can.Observe({quality: 'flexible', tagline: this.options.taglines.flexible});
		this.element.html(can.view('../_templates/benefits.mustache', this.state));
	},
	'li click': function(el, ev) {
		this.state.attr({
			'quality': el.prop('class') || '',
			'tagline': this.options.taglines[el.prop('class')] || ''
		});
	}
});