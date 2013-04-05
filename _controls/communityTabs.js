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
		this.element.html(can.view('../_templates/communityTabs.mustache', {}));
		this._switchTab('forums');
	},
	//'li mouseenter': '_switchTab',
	'li click': function(el, ev) {
		this._switchTab(el.prop('class'));
	},
	_switchTab: function(selectedTab) {
		var tabControl = this.options.tabControls[selectedTab];
		new tabControl($('.content > .container'));
	}
});