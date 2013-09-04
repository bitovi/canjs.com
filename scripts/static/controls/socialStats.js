can.Control('Bitovi.OSS.SocialStats', {}, {
	init: function() {
		this.state = new can.Observe({});
		this.modelState  = new can.Observe({});
		this.element.html(can.view('docs/static/templates/socialStats.mustache', this.state, {
			plural: function(word, count) {
				// if we ever get an irregular plural (like 'people') we'll have to special-case.
				return count === 1 ? word : word + 's';
			}
		}));

		Bitovi.OSS.ActivitySummary.findOne().done(can.proxy(function(summary) {
			this.state.attr(summary);
		}, this));

		Bitovi.OSS.Plugin.findAll({category: 'article', limit: 6}).done(can.proxy(function(articles) {
			this.modelState.attr('articles', articles);
		}, this));

		Bitovi.OSS.Plugin.findAll({category: 'app', limit: 6}).done(can.proxy(function(apps) {
			this.modelState.attr('apps', apps);
		}, this));

		Bitovi.OSS.Plugin.findAll({category: 'plugin', limit: 6}).done(can.proxy(function(plugins) {
			this.modelState.attr('plugins', plugins);
		}, this));

		Bitovi.OSS.ForumPost.findAll({limit: 6}).done(can.proxy(function(posts) {
			this.modelState.attr('forumPosts', posts);
		}, this));

		Bitovi.OSS.GithubEvent.findAll({limit: 6}).done(can.proxy(function(commits) {
			this.modelState.attr('commits', commits);
		}, this));
	},

	'a mouseenter': function(el, ev) {
		var tooltip = el.data('tooltip');
		if(this.tooltip && this.tooltip.element) {
			this.tooltip.element.remove();
		}
		el.parent().addClass('active');
		this.tooltip = new Bitovi.OSS[tooltip + 'Tooltip']('<div>', {state: this.modelState, relativeTo: el.parent()});	

		this.tooltip.on('destroyed', can.proxy(function() {
			this.element.find('.active').removeClass('active');
		}, this));
		
		return false;
	}
});