can.Control('CanJSUS.HeroDownload', {
	defaults: {
		separateFiles: true,
		minified: false,
		// David says that we'll eventually get these dynamically populated, but for now:
		core: [
			{ name: 'can.Construct', id: 'canConstruct', checked: true },
			{ name: 'can.Observe', id: 'canObserve', checked: true },
			{ name: 'can.Model', id: 'canModel', checked: true },
			{ name: 'can.view', id: 'canView', checked: true },
			{ name: 'can.EJS', id: 'can.EJS', checked: true },
			{ name: 'can.Control', id: 'canControl', checked: true },
			{ name: 'can.route', id: 'canRoute', checked: true }
		],
		plugins: [
			{ name: 'can.Mustache', id: 'canMustache', checked: false },
			{ name: 'can.Construct', id: 'canConstruct', checked: false },
			{ name: 'can.Construct', id: 'canConstruct', checked: false },
			{ name: 'can.Observe', id: 'canObserve', checked: false },
			{ name: 'can.Observe', id: 'canObserve', checked: false },
			{ name: 'can.Observe', id: 'canObserve', checked: false },
			{ name: 'can.Observe', id: 'canObserve', checked: false },
			{ name: 'can.Observe', id: 'canObserve', checked: false },
			{ name: 'can.Control', id: 'canControl', checked: false },
			{ name: 'View modifiers', id: 'viewModifiers', checked: false }
		]
	}
}, {
	init: function() {
		this.element.html(can.view('../_templates/heroDownload.mustache', this.options));
	},
	'.customize click': function(el, ev) {
		this.element.find('.customize-box').toggle();
	},
	'button click': function(el, ev) {
		// initiate download
	},

});