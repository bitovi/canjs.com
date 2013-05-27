(function($) {
	var initControls = function(mappings) {
		can.each(mappings, function(name, selector) {
			$(selector).each(function() {
				new Bitovi.OSS[name]($(this));
			});
		});
	}

	$(function() {
		Bitovi.OSS.initTwitterWidgets();
		initControls({
			'body.index #hero-download': 'HeroDownloadCustomizer',
			'body.index .benefits': 'Benefits',
			'body.index .social': 'SocialStats',
			'body.download .cdn': 'CDNChooser',
			'body.download .customize': 'DownloadCustomizer',
			'body.community .hero': 'CommunityTabs',
			'body.docs .sidebar': 'Menu',
			'body.docs .signature': 'ApiSignature',
			'body.docs': 'FrameHelper',
			'body.guides': 'FrameHelper',
			'body.docs .contents': 'ContentsList'
		});

		// Syntax highlighting
		$('pre code').each(function() {
			var el = $(this).parent();
			el.addClass('prettyprint');
			if(!el.hasClass('nolinenums')) {
				el.addClass('linenums');
			}
		});

		prettyPrint();
	});

	// feature-test for canvas
	var canvas = !!((document.createElement('canvas')).getContext);

	if(canvas) {
		// this needs to wait until everything is loaded.
		$(window).load(function() {

			// Grayscaling for our featured apps.
			Grayscale($('.carousel img'), 300);
		});
	}
})(jQuery);
