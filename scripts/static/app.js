steal("jquery","jquery-ui.js", "can","can/construct/super", "can/util/function").then("./lib/lib.js","./models/models.js","./controls/controls.js")
.then(function() {
	Bitovi.OSS.initTwitterWidgets = function() {
		if($('.twitter-follow-button').length) {
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
		}
	};

	Bitovi.OSS.redrawFont = function() {
		var style = $('<style>:before,:after{content:none !important}</style>');
		$('head').append(style);

		window.setTimeout(function() {
			style.remove();
		}, 0);
	};

	
	// Based on https://github.com/jaubourg/ajaxHooks/blob/master/src/ajax/xdr.js
	if ( window.XDomainRequest && !jQuery.support.cors ) {
		jQuery.ajaxTransport(function( s ) {
			if ( s.crossDomain && s.async ) {
				if ( s.timeout ) {
					s.xdrTimeout = s.timeout;
					delete s.timeout;
				}
				var xdr;
				return {
					send: function( _, complete ) {
						function callback( status, statusText, responses, responseHeaders ) {
							xdr.onload = xdr.onerror = xdr.ontimeout = xdr.onprogress = jQuery.noop;
							xdr = undefined;
							jQuery.event.trigger( "ajaxStop" );
							complete( status, statusText, responses, responseHeaders );
						}
						xdr = new XDomainRequest();
						xdr.open( s.type, s.url );
						xdr.onload = function() {
							var status = 200;
							var message = xdr.responseText;
							var r = JSON.parse(xdr.responseText);
							if (r.StatusCode && r.Message) {
								status = r.StatusCode;
								message = r.Message;
							}
							callback( status , message, { text: message }, "Content-Type: " + xdr.contentType );
						};
						xdr.onerror = function() {
							callback( 500, "Unable to Process Data" );
						};
						xdr.onprogress = function() {};
						if ( s.xdrTimeout ) {
							xdr.ontimeout = function() {
								callback( 0, "timeout" );
							};
							xdr.timeout = s.xdrTimeout;
						}
						xdr.send( ( s.hasContent && s.data ) || null );
					},
					abort: function() {
						if ( xdr ) {
							xdr.onerror = jQuery.noop();
							xdr.abort();
						}
					}
				};
			}
		});
	}
	
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
			'#hero-download': 'HeroDownloadCustomizer',
			'.benefits': 'Benefits',
			'.social': 'SocialStats',
			'.cdn': 'CDNChooser',
			'.download .customize': 'DownloadCustomizer',
			'.communityTabs': 'CommunityTabs',
			'.sidebar': 'Menu',
			'.project-carousel': 'ProjectCarousel',
			'.article-carousel': 'ArticleCarousel'
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
});