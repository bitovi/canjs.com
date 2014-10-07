define(["can/","./communityTab","can/construct/super/"], function(can, CommunityTab){

	return CommunityTab.extend('Bitovi.OSS.TwitterTab', {
		defaults: {
			view: 'docs/static/templates/twitterTab.mustache'
		}
	}, {
		init: function() {
			this._super();
		}
	});
});