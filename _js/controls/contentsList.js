can.Control("CanJSUS.ContentsList", {
	init: function() {
		var sections = [];

		this.collectSignatures().each(function(ix) {
			var h2 = $('h2', this);
			sections.push({id: 'sig' + ix, text: h2.text()});
			this.id = 'sig' + ix;
			//sections.push(h2.text());
			//this.id = encodeURIComponent(h2.text());
		});

		this.collectHeadings().each(function(ix) {
			var el = $(this);
			sections.push({id: 'section' + ix, text: el.text()});
			this.id = 'section' + ix;
			//sections.push(el.text());
			//this.id = encodeURIComponent(el.text());
		});

		this.element.html(can.view(
			'templates/contentsList.mustache',
			{sections: sections},
			{encode: function() { return encodeURIComponent(this); }}
		));

		if(window.location.hash.length) {
			var anchor = $(window.location.hash);
			if(anchor.length) {
				anchor[0].scrollIntoView(true);
			}
		}
	},
	collectSignatures: function() {
		return $('.content .signature');
	},
	collectHeadings: function() {
		return $('.content .comment h2');
	}
});