define(["can/","./communityTab","can/construct/super/"], function(can, CommunityTab){

	return CommunityTab.extend('Bitovi.OSS.MeetupsTab', {
		defaults: {
			view: 'docs/static/templates/meetupsTab.mustache'
		}
	}, {
		init: function() {
			this._super();
		}
	});
});