can.Control("CanJSUS.ContentsList", {
	init: function() {
		var sections = [];

		this.collectSignatures().each(function() {
			var h2 = $('h2', this);
			sections.push(h2.text());
			this.id = encodeURIComponent(h2.text());
		});

		this.collectHeadings().each(function() {
			var el = $(this);
			sections.push(el.text());
			this.id = encodeURIComponent(el.text());
		});

		this.element.html(can.view(
			'templates/contentsList.mustache',
			{sections: sections},
			{encode: function() { return encodeURIComponent(this); }}
		));
	},
	collectSignatures: function() {
		return $('.content .signature');
	},
	collectHeadings: function() {
		return $('.content .comment h2');
	}
});