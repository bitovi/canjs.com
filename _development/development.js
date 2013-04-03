$(function() {
	can.route.ready(false);

	var Development = can.Control({
		defaults: {
			layout: '../_layouts/default.mustache',
			pages: '../_pages/',
			link: {
				index: '#!index',
				guides: '#!guides',
				docs: '#!docs',
				community: '#!community',
				download: '#!download'
			}
		}
	},{
		init: function() {
			this.state = new can.Observe({
				link: this.options.link
			});
			this.element.html(can.view(this.options.layout, this.state));
		},

		':type route': function(data) {
			this.state.attr('content', can.view.render(this.options.pages + data.type + '.mustache', {}));
		},

		route: function() {
			can.route.attr('type', 'index');
		}
	});

	new Development('body');

	can.route.ready(true);
});
