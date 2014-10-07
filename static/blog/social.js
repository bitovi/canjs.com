steal('can', function(){
return can.Control.extend({
	defaults: {
		twitterHandle: 'bitovi',
		githubHandle: 'bitovi'
	}
},
{
	init: function(el, options) {
		// For now, link the author's name to their twitter profile, if there is one
		if (this.options.twitterHandle) {
			var twitterLink = $('<a/>').attr('href', 'http://www.twitter.com/' + this.options.twitterHandle);
			twitterLink.addClass('author').html(el.find('.author').html());
			el.find('.author').remove();
			twitterLink.insertAfter('.conjunction');
		}

		// We'll want to fetch the details from github for the profile stuff (name, gravatar)
		if (this.options.githubHandle) {
			$.getJSON('https://api.github.com/users/' + this.options.githubHandle, $.proxy(function(data) {
				el.find('.author').html(data.name);
				el.find('#gravatar').show()[0].src = data.avatar_url;
				el.find('#profile').removeClass('no-author-image');
			}, this));
		}
	}
});

})