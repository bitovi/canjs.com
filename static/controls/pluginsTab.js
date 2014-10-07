define(["can/","./communityTab","can/construct/super/"], function(can, CommunityTab){

	return CommunityTab.extend('Bitovi.OSS.PluginsTab', {
		defaults: {
			view: 'docs/static/templates/pluginsTab.mustache'
		}
	}, {
		init: function() {
			this._super();
		}
	});
});