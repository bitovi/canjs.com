can.Model("Bitovi.OSS.App", {
  model: function(data) {
    return {
      title: data.title,
      picture: data.image_url,
      body: data.body,
      link: data.url.indexOf('http') === -1 ? 'http://' + data.url : data.url
    };
  },
  findAll: {
    url: Bitovi.URL.BITHUB + '?category=app&order=upvotes:desc&limit={limit}&size={size}',
    dataType: 'json'
  }
}, { });