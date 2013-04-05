can.Model("CanJSUS.Article", {
	findAll: {
		url: 'http://bithub.com/events?where=category:article&sort=-upvotes&limit=3&join=author',
		dataType: 'jsonp'
	}
}, { });