can.Model("CanJSUS.Tweet", {
	findAll: {
		url: 'http://bithub.com/events?where=category:tweet&sort=-origin_ts&limit=5&join=author',
		dataType: 'jsonp'
	}
}, { });