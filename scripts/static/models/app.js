var __imageUrl = function(url){
  var arr = url.split('/');
  arr[arr.length - 1] = "232x147_" + arr[arr.length - 1];
  return arr.join('/');
}

can.Model("Bitovi.OSS.App", {
  model: function(data) {
    return {
      title: data.title,
      picture: __imageUrl(data.original_image_url),
      body: data.body,
      link: data.url.indexOf('http') === -1 ? 'http://' + data.url : data.url
    };
  },
  findAll: {
    url: Bitovi.URL.BITHUB + '?category=app&order=upvotes:desc&limit={limit}&size={size}',
    dataType: 'json'
  }
}, { });