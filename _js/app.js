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

	var initControls = function(mappings) {
		can.each(mappings, function(name, selector) {
			var el = $(selector);
			if(el.length) {
				new CanJSUS[name](el);
			}
		});
	}

	$(function() {
		CanJSUS.initTwitterWidgets();
		initControls({
			'.index #hero-download': 'HeroDownloadCustomizer',
			'.index .benefits': 'Benefits',
			'.index .social': 'SocialStats',
			'.download .cdn': 'CDNChooser',
			'.download .customize': 'DownloadCustomizer',
			'.community .hero': 'CommunityTabs'
		});
		// Syntax highlighting for our example.
		Rainbow.color();
	});

	// this needs to wait until everything is loaded.
	$(window).load(function() {
		// Grayscaling for our featured apps.
		Grayscale($('.carousel img'), 300);
	});
})(jQuery);
