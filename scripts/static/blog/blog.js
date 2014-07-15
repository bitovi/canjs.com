steal('jquery', '../lib/prettify.js', function($){
	$('#gravatar').each(function(){
		var $this = $(this);
		$.getJSON('https://api.github.com/users/' + $this.attr('alt'), function(data){
			$this.attr('src', data.avatar_url).show();
		});
	});
})