define(["can/"], function(can){

var __imageUrl = function(url){
  var arr = url.split('/');
  arr[arr.length - 1] = "232x147_" + arr[arr.length - 1];
  return arr.join('/');
};

return can.Model.extend("Bitovi.OSS.App", {
  parseModel: function(data) {
    return {
      title: data.title,
      picture: __imageUrl(data.original_image_url),
      body: data.body,
      link: data.url.indexOf('http') === -1 ? 'http://' + data.url : data.url
    };
  },
  findAll: function(data){
  	return $.ajax({
	    url: docObject.urls.bithub + '?category=app&order=upvotes:desc',
	    dataType: 'json',
	    data: data
	  }).then(function(response){
	  	var withImage = [];
	  	$.each(response.data, function(i, item){
	  		if(item.original_image_url) {
	  			withImage.push(item);
	  		}
	  	});
	  	return withImage;
	  });
  }
}, { });

});