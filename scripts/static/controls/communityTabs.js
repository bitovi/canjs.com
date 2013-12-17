can.Control('Bitovi.OSS.CommunityTabs', {
	defaults: {
		tabControls: {
			'forums': 'ForumsTab',
			'irc': 'IRCTab',
			'plugins': 'PluginsTab',
			'twitter': 'TwitterTab',
			'issues': 'IssuesTab',
			'github': 'GithubTab',
			'meetups': 'MeetupsTab'
		}
	}
}, {
	init: function() {
		// get data for all six tabs up front
		// this way, it doesn't call for the data every time a tab switches.
		this.state = new can.Observe({});
		var self = this;

		Bitovi.OSS.ForumPost.findAll({limit: 6}).done(function(posts) {
			self.state.attr('forumPosts', posts);
		});
		// Missing counts for forum categories
		Bitovi.OSS.ChatLine.findAll({limit: 30}).done(function(lines) {
			self.state.attr('lines', lines);
		});
		Bitovi.OSS.Plugin.findAll({category: 'article|app|plugin', limit: 6}).done(function(plugins) {
			self.state.attr('plugins', plugins);
		});
		// Missing counts for plugins/apps/articles
		Bitovi.OSS.Tweet.findAll({limit: 10}).done(function(tweets) {
			self.state.attr('tweets', tweets);
		});
		Bitovi.OSS.GithubIssue.findAll({limit: 3}).done(function(issues) {
			self.state.attr('issues', issues);
		});
		Bitovi.OSS.GithubEvent.findAll({limit: 3}).done(function(commits) {
			self.state.attr('commits', commits);
		});
		// Missing follower counts for github

		self.state.attr('meetupCities',[
				{ name: "Boston", image: "city-boston.jpg", url: "http://www.meetup.com/CanJS-Boston/" },
				{ name: "Chicago", image: "city-chicago.jpg", url: "http://www.meetup.com/CanJS-Chicago" },
				{ name: "Dallas", image: "city-dallas.jpg", url: "http://www.meetup.com/CanJS-Dallas/" },
				{ name: "Ft. Lauderdale", image: "city-fortlauderdale.jpg", url: "http://www.meetup.com/CanJS-Fort-Lauderdale/" },
				{ name: "Los Angeles", image: "city-losangeles.jpg", url: "http://www.meetup.com/CanJS-LA" },
				{ name: "New York", image: "city-newyork.jpg", url: "http://www.meetup.com/CanJS-NYC" },
				{ name: "Phoenix", image: "city-phoenix.jpg", url: "http://www.meetup.com/CanJS-Phoenix" },
				{ name: "Raleigh-Durham", image: "city-raleighdurham.jpg", url: "http://www.meetup.com/canjs-raleigh-durham" },
				{ name: "San Francisco", image: "city-sanfran.jpg", url: "http://www.meetup.com/CanJS-San-Francisco" },
				{ name: "Seattle", image: "city-seattle.jpg", url: "http://www.meetup.com/CanJS-Seattle/" },
				{ name: "Zagreb, Croatia", image: "city-zagreb.jpg", url: "http://www.meetup.com/CanJS-Zagreb/" }]);

		this.element.html(can.view('docs/static/templates/communityTabs.mustache', {}));

		can.route.ready();
	},
	//'li mouseenter': '_switchTab',
	'li click': function(el, ev) {
		can.route.attr('type', el.prop('class'));
	},
	':type route': function(data) {
		this._switchTab(data.type);
	},
	_switchTab: function(selectedTab) {
		this.element
			.find('li').removeClass('active')
			.filter('.' + selectedTab).addClass('active');
		var tabControl = this.options.tabControls[selectedTab];
		console.log(Bitovi.OSS[tabControl]);
		new Bitovi.OSS[tabControl]($('.content > .container'), {state: this.state});
	}
});