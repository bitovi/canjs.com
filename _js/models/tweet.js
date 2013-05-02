can.Model("CanJSUS.Tweet", {
	model: function(data) {
		return {
			handle: data.actor,
			realName: ''/*data.source_data.user.name*/,
			picture: ''/*data.source_data.user.profile_image_url*/,
			body: data.title,

			feed: data.feed,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: 'http://api.bithub.com/api/events/?feed=twitter&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });