can.Model("CanJSUS.ForumPost", {
	//TODO: remove models() once the Bithub API can filter
	models: function(list) {
		var models = list.data.filter(function(el) {
			return el.feed === 'forums';
		}).map(function(el) {
			return CanJSUS.ForumPost.model(el);
		});

		return new can.Observe.List(models.slice(0, 3));
	},
	model: function(data) {
		return {
			actor: data.actor,
			title: data.title,
			body: data.body,

			feed: data.feed,
			link: data.link,
			points: data.points,
			date: new Date(data.updated_ts.substring(0, data.updated_ts.length - 5) + 'Z')
		};
	},
	findAll: {
		url: 'http://bithub.com/api/events/?feed=forums&order=origin_ts:desc&limit=3',
		dataType: 'json'
	}
}, { });