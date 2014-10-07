define(["can/"], function(can){

	return can.Control.extend('Bitovi.OSS.CommunityTab', {
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
});