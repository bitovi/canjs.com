can.Model("CanJSUS.Plugin", {
	//TODO: remove models() once the Bithub API can filter
	models: function(list) {
		var models = list.data.map(function(el) {
			return CanJSUS.ForumPost.model(el);
		});

		return new can.Observe.List(models);
	},
	model: function(data) {
		// The API's not returning plugins and apps yet, so this may
		// end up being innacurate.
		return {
			actor: data.actor,
			title: data.title,
			body: data.body,

			feed: data.feed,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: 'http://www.bithub.com/api/events/?category=article|app|plugin&order=upvotes:desc&limit={limit}',
		dataType: 'json'
	}
}, { });