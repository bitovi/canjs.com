can.Control('Bitovi.OSS.ThinCommunityTabs', {
  defaults: {
    tabControls: {
      'articles': 'ThinArticlesTab',
      'plugins': 'ThinPluginsTab',
      'forums': 'ThinForumsTab',
      'github': 'ThinGithubTab'
    }
  }
}, {
  init: function() {
    // get data for all six tabs up front
    // this way, it doesn't call for the data every time a tab switches.
    this.state = new can.Observe({});
    var self = this;

    Bitovi.OSS.Article.findAll({limit: 6}).done(function(articles) {
      self.state.attr('articles', articles);
    });
    Bitovi.OSS.ForumPost.findAll({limit: 6}).done(function(posts) {
      self.state.attr('forumPosts', posts);
    });
    Bitovi.OSS.Plugin.findAll({category: 'plugin', limit: 6}).done(function(plugins) {
      self.state.attr('plugins', plugins);
    });
    Bitovi.OSS.GithubEvent.findAll({limit: 6}).done(function(commits) {
      self.state.attr('commits', commits);
    });
    // Missing follower counts for github

    this.element.html(can.view('guides/static/templates/thinCommunityTabs.mustache', {}));

    this._switchTab(this.element.find('li:first').prop('class'));
  },
  //'li mouseenter': '_switchTab',
  'li click': function(el, ev) {
    this._switchTab(el.prop('class'));
  },
  _switchTab: function(selectedTab) {
    this.element
      .find('li').removeClass('active')
      .filter('.' + selectedTab).addClass('active');
    var tabControl = this.options.tabControls[selectedTab];
    new Bitovi.OSS[tabControl]($('.thin-tabs .container'), {state: this.state});
  }
});