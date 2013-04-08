can.Control('CanJSUS.CommunityTabs', {
	defaults: {
		tabControls: {
			'forums': CanJSUS.ForumsTab,
			'irc': CanJSUS.IRCTab,
			'plugins': CanJSUS.PluginsTab,
			'twitter': CanJSUS.TwitterTab,
			'issues': CanJSUS.IssuesTab,
			'github': CanJSUS.GithubTab
		}
	}
}, {
	init: function() {
		// get data for all six tabs up front
		// this way, it doesn't call for the data every time a tab switches.
		this.state = new can.Observe({});
		var self = this;

		CanJSUS.ForumPost.findAll().done(function(posts) {
			self.state.attr('forumPosts', posts);
		});
		// Missing counts for forum categories
		CanJSUS.Chat.findAll().done(function(chats) {
			self.state.attr('chats', chats);
		});
		CanJSUS.Plugin.findAll().done(function(plugins) {
			self.state.attr('plugins', plugins);
		});
		// Missing counts for plugins/apps/articles
		CanJSUS.Tweet.findAll().done(function(tweets) {
			self.state.attr('tweets', tweets);
		});
		CanJSUS.GithubIssue.findAll().done(function(issues) {
			self.state.attr('issues', issues);
		});
		CanJSUS.GithubEvent.findAll().done(function(commits) {
			self.state.attr('commits', commits);
		});
		// Missing follower counts for github

		this.element.html(can.view('../_templates/communityTabs.mustache', {}));
		this._switchTab('forums');
	},
	//'li mouseenter': '_switchTab',
	'li click': function(el, ev) {
		this._switchTab(el.prop('class'));
	},
	_switchTab: function(selectedTab) {
		var tabControl = this.options.tabControls[selectedTab];
		new tabControl($('.content > .container'), {state: this.state});
	}
});