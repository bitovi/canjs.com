can.Model("CanJSUS.Chat", {
	//TODO: remove models() once the Bithub API can filter
	models: function(list) {
		var models = list.data.filter(function(el) {
			return el.category === 'chat';
		}).map(function(el) {
			return CanJSUS.ForumPost.model(el);
		});

		return new can.Observe.List(models.slice(0, 1));
	},
	model: function(data) {
		// The API's not returning plugins and apps yet, so this may
		// end up being innacurate.
		return {
			actor: data.actor,
			title: data.title,
			body: data.body,

			// I expect there to be some munging for the lines of chat here.
			// Right now, I'm going to expect them to end up like:
			// lines: [{ username: 'username', post: 'post' }]

			feed: data.feed,
			link: data.link,
			points: data.points,
			date: new Date(data.updated_ts.substring(0, data.updated_ts.length - 5) + 'Z')
		};
	},
	findAll: {
		// No idea if this is the right URL yet. 
		url: 'http://bithub.com/api/events/?category=chat&order=upvotes:desc&limit=1',
		dataType: 'json'
	}
}, { });