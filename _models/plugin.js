can.Model("CanJSUS.Plugin", {
	//TODO: remove models() once the Bithub API can filter
	models: function(list) {
		var models = list.data.filter(function(el) {
			return el.category === 'app' || el.category === 'plugin';
		}).map(function(el) {
			return CanJSUS.ForumPost.model(el);
		});

		return new can.Observe.List(models.slice(0, 3));
	},
	model: function(data) {
		// The API's not returning plugins and apps yet, so this may
		// end up being innacurate.
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
		url: 'http://bithub.com/api/events/?category[]=app&category[]=plugin&category[]=article&order=upvotes:desc&limit=3',
		dataType: 'json'
	}
}, { });