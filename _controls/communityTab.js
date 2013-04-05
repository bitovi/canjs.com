can.Control('CanJSUS.CommunityTab', {
	defaults: {
		view: ''
	}
}, {
	init: function() {
		this.state = new can.Observe({});
		this.element.html(can.view(this.options.view), this.state);
	}
});