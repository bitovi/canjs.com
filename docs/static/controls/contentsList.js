define(["can/"], function(can){

	return can.Control.extend("Bitovi.OSS.ContentsList", {
		init: function() {
			var sections = [];
	
			this.collectSignatures().each(function(ix) {
				var h2 = $('h2', this);
				this.id = 'sig' + ix;
				//this.id = encodeURIComponent(h2.text());
				sections.push({id: this.id, text: h2.text()});
			});
	
			this.collectHeadings().each(function(ix) {
				var el = $(this);
				this.id = 'section' + ix;
				//this.id = encodeURIComponent(el.text());
				sections.push({id: this.id, text: el.text()});
			});
	
			this.element.html(can.view(
				'docs/static/templates/contentsList.mustache',
				{sections: sections},
				{encode: function() { return encodeURIComponent(this); }}
			));
	
			if(window.location.hash.length) {
				var id = window.location.hash.replace('#', ''),
					anchor = document.getElementById(id);
	
				if(anchor) {
					anchor.scrollIntoView(true);
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
});