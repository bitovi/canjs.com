can.Model("CanJSUS.App", {
	findAll: {
		url: 'http://bithub.com/events?where=category:plugin&sort=-upvotes&limit=3&join=author',
		dataType: 'jsonp'
	}
}, { });