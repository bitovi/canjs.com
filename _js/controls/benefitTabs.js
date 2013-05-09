can.Control('CanJSUS.Benefits', {
	defaults: {
		tabs: {
			flexible: {
				className: 'flexible',
				title: 'Flexible',
				tagline: 'Works with jQuery, Dojo, Mootools, YUI, and Zepto. Reuse your existing templates.',
				link: 'guides/Why.html#Flexible'
			},
			powerful: {
				className: 'powerful',
				title: 'Powerful',
				tagline: 'Packs in everything you need to build your app. And you can learn it in a day.',
				link: 'guides/Why.html#Powerful'
			},
			fast: {
				className: 'fast',
				title: 'Fast',
				tagline: 'Sleek, responsive, and only 36K: exactly what it says on the can.',
				link: 'guides/Why.html#Fast'
			}
		}
	}
}, {
	init: function() {
		this.state = new can.Observe({tabs: this.options.tabs, selectedTab: this.options.tabs.powerful});
		this.element.html(can.view('templates/benefitTabs.mustache', this.state, {
			makeTabs: function(tabs, options) {
				var out = '';
				can.each(tabs().attr(), function(val, key) {
					out += options.fn(val);
				});
				return out;
			}
		}));
		this._switchBenefit('powerful');
	},
	'li mouseover': function(el, ev) {
		console.log(el.data('benefit'));
		this._switchBenefit(el.data('benefit'));
	},
	_switchBenefit: function(benefit) {
		this.state.attr('selectedTab', this.options.tabs[benefit]);

		$('li', this.element).removeClass('active');
		$('li[data-benefit=' + benefit + ']', this.element).addClass('active');

	}
});