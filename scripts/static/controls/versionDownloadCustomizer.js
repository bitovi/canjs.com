var getBranchDownloads = function(){
	return can.map(can.grep(docConfig.versions || [], function(v){ return !!v.branch }), function(v){
		return {
			name : v.number,
			zipball_url : can.sub('https://github.com/bitovi/canjs/archive/{branch}.zip', v)
		}
	});
}

can.Control.extend('Bitovi.OSS.VersionDownloadCustomizer', {
	defaults : {
		view : 'docs/static/templates/versionDownloadCustomizer.mustache'
	}
}, can.extend({
	init: function() {
		this.leftDownloads = new can.List;
		this.rightDownloads = new can.List;
		this.isOpen = false;

		this.branchDownloads = getBranchDownloads();

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
		this.branchDownloads.push.apply(this.branchDownloads, data.data);

		var downloads = this.branchDownloads,
			length = downloads.length,
			half = Math.ceil(length / 2);

		this.leftDownloads.replace(downloads.slice(0, half));
		this.rightDownloads.replace(downloads.slice(half, length));
	}
}, DownloadCustomizerDropdown));
