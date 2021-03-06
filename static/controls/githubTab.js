define(["can/","./communityTab","can/construct/super/"], function(can, CommunityTab){

	return CommunityTab.extend('Bitovi.OSS.GithubTab', {
		defaults: {
			view: 'docs/static/templates/githubTab.mustache'
		}
	}, {
		init: function() {
			this._super();
	
			can.Mustache.registerHelper('truncateHash', function(hash) {
				return hash().substr(0, 6);
			});
		}
	});
});