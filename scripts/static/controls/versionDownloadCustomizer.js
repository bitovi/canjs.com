can.Control.extend('Bitovi.OSS.VersionDownloadCustomizer', {
	defaults : {
		view : 'docs/static/templates/versionDownloadCustomizer.mustache'
	}
}, can.extend({
	init: function() {
		this.leftDownloads = new can.List;
		this.rightDownloads = new can.List;
		this.isOpen = false;

		this.element.find('#version-download-customizer').replaceWith(can.view(this.options.view, {
			leftDownloads : this.leftDownloads,
			rightDownloads : this.rightDownloads
		}));

		$.ajax({
			dataType: "jsonp",
			url: 'https://api.github.com/repos/bitovi/canjs/tags',
			success: $.proxy(this.renderResults, this)
		});
	},
	renderResults : function(data){
		var downloads = data.data,
			length = downloads.length,
			half = parseInt(length / 2, 10);

		this.leftDownloads.replace(downloads.slice(0, half));
		this.rightDownloads.replace(downloads.slice(half, length));
	}
}, DownloadCustomizerDropdown));
