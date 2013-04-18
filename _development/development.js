$(function() {
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

	window.CanJSUS.init = {
		'index': function() {
			CanJSUS.initTwitterWidgets();
			new CanJSUS.HeroDownloadCustomizer($('#hero-download'));
			new CanJSUS.Benefits($('.benefits'));
			new CanJSUS.SocialStats($('.social'));

			// Syntax highlighting for our example.
			Rainbow.color();

			console.log('index');
		},
		'community': function() {
			new CanJSUS.CommunityTabs($('.hero'));

			console.log('community');
		},
		'download': function() {
			new CanJSUS.CDNChooser($('.cdn'));
			new CanJSUS.DownloadCustomizer($('.customize'));

			console.log('download');
		}
	};

	var Development = can.Control({
		defaults: {
			layout: '../_layouts/default.mustache',
			pages: '../_pages/',
			link: {
				index: '#!index',
				guides: '#!guides',
				docs: '#!docs',
				community: '#!community',
				download: '#!download'
			},
			classes: {
				index: 'home',
				guides: 'guides',
				docs: 'api',
				community: 'community',
				download: 'download'
			}
		}
	},{
		init: function() {
			this.state = new can.Observe({
				link: this.options.link
			});
			this.element.html(can.view(this.options.layout, this.state));
		},

		':type route': function(data) {
			var type = data.type.split('/')[0];
			if(type !== this.type) {
				this.type = type;
				this.state.attr('content', can.view.render(this.options.pages + type + '.mustache', {}));
				$('body').prop('className', this.options.classes[type]);
				CanJSUS.init[type] && CanJSUS.init[type].apply();
			}
		},

		route: function() {
			can.route.attr('type', 'index');
		}
	});

	new Development('body');

	can.route.ready(true);
});
