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
		this.state = new can.Observe({selectedTab: 'flexible', tagline: this.options.taglines.flexible});
		this.element.html(can.view('../_templates/benefitTabs.mustache', this.state));
		this._switchBenefit($('li[data-benefit=' + this.state.selectedTab + ']', this.element));
	},
	'li mouse': '_switchBenefit',
	'li click': '_switchBenefit',
	_switchBenefit: function(el) {
		this.state.attr({
			'selectedTab': can.data(el, 'benefit') || '',
			'tagline': this.options.taglines[can.data(el, 'benefit')] || ''
		});

		$('li', this.element).removeClass('active');
		el.addClass('active');

	}
});