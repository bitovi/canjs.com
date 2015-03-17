define(["can/"], function(can){


	return can.Model.extend("Bitovi.OSS.Tweet", {
		model: function(data) {
			return {
				handle: data.actor,
				realName: data.author.name,
				picture: data.props.origin_author_avatar_url,
				body: data.title,
	
				feed: data.feed,
				link: data.url,
				points: data.upvotes,
				date: new Date(data.origin_ts)
			};
		},
		findAll: {
			url: docObject.urls.bithub + '?feed=twitter&order=origin_ts:desc&tag=tweet&limit={limit}',
			dataType: 'json'
		}
	}, { });

});