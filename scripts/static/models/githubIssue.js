can.Model("Bitovi.OSS.GithubIssue", {
	model: function(data) {
		return {
			actor: data.actor,
			actorID: data.author.id,
			picture: data.props.origin_author_avatar_url,
			title: data.title,
			body: data.body,

			feed: data.feed,
			category: data.category,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: Bitovi.URL.BITHUB +  '?category=bug&order=upvotes&limit={limit}',
		dataType: 'json'
	}
}, { });