(function($) {
	can.route.ready(false);

	window.CanJSUS = window.CanJSUS || {};

	window.CanJSUS.initTwitterWidgets = function() {
		// replace the "Follow @canjs!" link with a little wiget with follower count.
		$('#twitter-wjs').remove();
		!function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (!d.getElementById(id)) {
				js = d.createElement(s);
				js.id = id;
				js.src = "//platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore(js, fjs);
			}
		}(document, "script", "twitter-wjs");
	};

	var initControl = function(selector, name) {
		var el = $(selector);
		if(el.length) {
			new CanJSUS[name](el);
		}
	}

	$(function() {
		CanJSUS.initTwitterWidgets();
		initControl('#hero-download', 'HeroDownloadCustomizer');
		initControl('.benefits', 'Benefits');
		initControl('.social', 'SocialStats');
		// initControl('.cdn', 'CDNChooser');
		// initControl('.customize', 'DownloadCustomizer');

		// Syntax highlighting for our example.
		Rainbow.color();

		// this needs to wait until everything is loaded.
		$(window).load(function() {
			// Grayscaling for our featured apps.
			Grayscale($('.carousel img'), 300);
		});
	});
})(jQuery);
