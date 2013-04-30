can.Model("CanJSUS.ChatLine", {
	models: function(list) {
		var models = list.data.map(function(el) {
			return CanJSUS.ChatLine.model(el);
		});

		return new can.Observe.List(models).reverse();
	},
	model: function(data) {
		return {
			actor: data.actor,
			body: data.title,
			feed: data.feed,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: 'http://api.bithub.com/api/events/?category=chat&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });
