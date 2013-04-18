can.Model("CanJSUS.ChatLine", {
	models: function(list) {
		var models = list.data.filter(function(el) {
			return el.category === 'chat';
		}).map(function(el) {
			return CanJSUS.ChatLine.model(el);
		});

		return new can.Observe.List(models.slice(0, 30)).reverse();
	},
	model: function(data) {
		return {
			actor: data.actor,
			body: data.title,
			feed: data.feed,
			date: new Date(data.updated_ts.substring(0, data.updated_ts.length - 5) + 'Z')
		};
	},
	findAll: {
		// No idea if this is the right URL yet. 
		url: 'http://bithub.com/api/events/?category=chat&order=upvotes:desc&limit=30',
		dataType: 'json'
	}
}, { });
