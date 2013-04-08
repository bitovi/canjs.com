CanJSUS.CommunityTab('CanJSUS.GithubTab', {
	defaults: {
		view: '../_templates/githubTab.mustache'
	}
}, {
	init: function() {
		this._super();

		can.Mustache.registerHelper('truncateHash', function(hash) {
			return hash().substr(0, 6);
		});
	}
});