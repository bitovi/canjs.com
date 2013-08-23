can.Model("Bitovi.OSS.Article", {
  model: function(data) {
    // The API's not returning plugins and apps yet, so this may
    // end up being innacurate.
    data.date = new Date(data.origin_ts);
    data.link = data.url;
    data.points = data.upvotes;
    return data;
  },
  findAll: {
    url: Bitovi.URL.BITHUB + '?category=article&order=upvotes:desc&limit={limit}',
    dataType: 'json'
  }
}, { });