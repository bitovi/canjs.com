can.Control('CanJSUS.SocialStats', {
	defaults: {	}
}, {
	init: function() {
		this.state = new can.Observe({
			appsSubmitted: 0,
			recentCommits: 0,
			forumPosts: 0,
			ircPeople: 0,
			pluginsSubmitted: 0
		});
		this.element.html(can.view('templates/socialStats.mustache', this.state));

		// TODO: bithub API call here.
		// TODO: create helper so that plurals are correct.
	}
});