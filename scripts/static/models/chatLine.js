can.Model("Bitovi.OSS.ChatLine", {
	model: function(data) {
		return this._super({
			actor: data.actor,
			body: data.title,
			feed: data.feed,
			date: new Date(data.origin_ts)
		});
	},
	findAll: {
		url: Bitovi.URL.BITHUB + '?category=chat&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });
