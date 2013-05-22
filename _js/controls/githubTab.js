Bitovi.OSS.CommunityTab('Bitovi.OSS.GithubTab', {
	defaults: {
		view: 'templates/githubTab.mustache'
	}
}, {
	init: function() {
		this._super();

		can.Mustache.registerHelper('truncateHash', function(hash) {
			return hash().substr(0, 6);
		});
	}
});