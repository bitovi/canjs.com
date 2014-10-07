define(["can/"], function(can){


	return can.Model.extend("Bitovi.OSS.ForumPost", {
		model: function(data) {
			return {
				actor: data.actor,
				title: data.title,
				body: data.body,
	
				feed: data.feed,
				link: data.url,
				points: data.upvotes,
				date: new Date(data.origin_ts)
			};
		},
		findAll: {
			url: docObject.urls.bithub + '?feed=forum&order=origin_ts:desc&limit={limit}',
			dataType: 'json'
		}
	}, { });

});