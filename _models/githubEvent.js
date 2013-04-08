can.Model("CanJSUS.GithubEvent", {
	//TODO: remove models() once the Bithub API can filter
	models: function(list) {
		var models = list.data.filter(function(el) {
			return el.feed === 'github' && el.category === 'code';
		}).map(function(el) {
			return CanJSUS.GithubEvent.model(el);
		});

		return new can.Observe.List(models.slice(0, 3));
	},
	model: function(data) {
		return {
			actor: data.actor,
			actorID: data._author,
			picture: data.source_data.org.avatar_url,
			title: data.title,
			commits: data.source_data.payload.commits.map(function(el) {
				return {
					hash: el.sha,
					message: el.message
				}
			}),

			feed: data.feed,
			category: data.category,
			link: data.link,
			points: data.points,
			date: new Date(data.updated_ts.substring(0, data.updated_ts.length - 5) + 'Z')
		};
	},
	findAll: {
		url: 'http://bithub.com/api/events/?feed=github&category=code&order=origin_ts:desc&limit=3',
		dataType: 'json'
	}
}, { });