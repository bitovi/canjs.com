can.Control('CanJSUS.Benefits', {
	defaults: {
		taglines: {
			'flexible': 'Use it anywhere. Works with your libraries, plugins, and templates.',
			'powerful': 'Strong enough for high-power applications. Simple enough to learn in a day.',
			'fast': 'Sleek, lightweight, and responsive: exactly what it says on the can.'
		}
	}
}, {
	init: function() {
		this.state = new can.Observe({selectedTab: 'flexible', tagline: this.options.taglines.flexible});
		this.element.html(can.view('../_templates/benefitTabs.mustache', this.state));
		this._switchBenefit($('li[data-benefit=' + this.state.selectedTab + ']', this.element));
	},
	'li mouseover': '_switchBenefit',
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