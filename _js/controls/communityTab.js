can.Control('CanJSUS.CommunityTab', {
	defaults: {
		view: ''
	}
}, {
	init: function() {
		can.Mustache.registerHelper('formatDate', function(date) {
			return moment(date()).calendar();
		});

		this.element.html(can.view(this.options.view, this.options.state));
	}
});