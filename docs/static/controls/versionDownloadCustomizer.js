define(["can/",
	"./downloadCustomizer",
	"./downloadCustomizerDropdown",
	"can/construct/super/"], function(can, DownloadCustomizer,DownloadCustomizerDropdown){


	var getBranchDownloads = function(){
		return can.map(can.grep(docObject.versions || [], function(v){ 
			return typeof v.branch !== 'undefined' && v.branch !== 'master';
		}), function(v){
			return {
				name : v.number + '-pre',
				zipball_url : can.sub('https://github.com/bitovi/canjs.com/archive/{branch}.zip', v)
			};
		});
	};

	var parts = function(version){

		var numbers = [],
		last;
		version.replace(/\d+/g, function(d, index){
			last = index;
			numbers.push(+d);

		});

		var after = version.substr(last+(""+numbers[numbers.length-1]).length)

		if( last && after ) {
			numbers.push(after);
		}

		return numbers;
	};

	var sortVersions = function(versions){
		return versions.sort(function(a, b){

			var aParts = parts(a.name),
			bParts = parts(b.name);

			if( aParts[0] !== bParts[0] ) return aParts[0] - bParts[0];

			if( aParts[1] !== bParts[1] ) return aParts[1] - bParts[1];
			if( aParts[2] !== bParts[2] ) return aParts[2] - bParts[2];

			if(aParts[3] ) {
				return -1;
			} else if(bParts[3]){
				return 1;
			}

			return 0;

		});
	};

	return can.Control.extend('Bitovi.OSS.VersionDownloadCustomizer', {
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
				url: 'https://api.github.com/repos/bitovi/canjs.com/tags',
				success: $.proxy(this.renderResults, this)
			});
		},
		renderResults : function(data){
			this.branchDownloads.push.apply(this.branchDownloads, data.data);

			var downloads = sortVersions(this.branchDownloads).reverse(),
			length = downloads.length,
			half = Math.ceil(length / 2);

			this.leftDownloads.replace(downloads.slice(0, half));
			this.rightDownloads.replace(downloads.slice(half, length));
		}
	}, DownloadCustomizerDropdown));

});