can.Model("Bitovi.OSS.GithubEvent", {
	model: function(data) {
		return {
			actor: data.actor,
			actorID: data.author.id,
			picture: data.props.origin_author_avatar_url,
			title: data.title,
			commits: data.children ? data.children.map(function(el) {
				return {
					hash: el.props.sha,
					message: el.source_body
				}
			}) : [],
			feed: data.feed,
			category: data.category,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: Bitovi.URL.BITHUB + '?category=code&order=origin_ts:desc&limit={limit}&tag=canjs',
		dataType: 'json'
	}
}, { });