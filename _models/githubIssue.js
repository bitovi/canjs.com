can.Model("CanJSUS.GithubIssue", {
	//TODO: remove models() once the Bithub API can filter
	models: function(list) {
		var models = list.data.filter(function(el) {
			return el.feed === 'github' && el.category === 'bug';
		}).map(function(el) {
			return CanJSUS.GithubIssue.model(el);
		});

		return new can.Observe.List(models.slice(0, 3));
	},
	model: function(data) {
		return {
			actor: data.actor,
			actorID: data._author,
			picture: data.source_data.org.avatar_url,
			title: data.title,
			body: data.body,

			feed: data.feed,
			category: data.category,
			link: data.link,
			points: data.points,
			date: new Date(data.updated_ts.substring(0, data.updated_ts.length - 5) + 'Z')
		};
	},
	findAll: {
		url: 'http://bithub.com/api/events/?feed=github&category=bug&order=origin_ts:desc&limit=3',
		dataType: 'json'
	}
}, { });