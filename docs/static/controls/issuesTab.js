define(["can/","./communityTab","can/construct/super/"], function(can, CommunityTab){

	return CommunityTab.extend('Bitovi.OSS.IssuesTab', {
		defaults: {
			view: 'docs/static/templates/issuesTab.mustache'
		}
	}, {
		init: function() {
			this._super();
		}
	});
});