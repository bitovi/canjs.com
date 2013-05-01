can.Mustache.registerHelper('makeHref', function(src) {
	return src().replace(/ /g, "_")
		.replace(/&#46;/g, ".")
		.replace(/&gt;/g, "_gt_")
		.replace(/\*/g, "_star_")
		.replace(/\//g, "|") + '.html';
});

can.Control('CanJSUS.ApiSearch', {
	defaults: {
		parent: 'canjs',
		searchData: 'searchdata.json',
		view: 'templates/apiSearch.mustache',
		emptyText: 'Nothing found...'
	},

	menuTree: function (data, root) {
		var find = function(items, callback) {
			for(var key in items) {
				if(items.hasOwnProperty(key) && callback(items[key])) {
					return items[key];
				}
			}

			return null;
		}

		can.each(data, function(current, index, arr) {
			var parent = find(arr, function(value) {
				return value.name === current.parent;
			});

			if(parent) {
				parent.children = parent.children || [];
				parent.children.push(current);
			}
		});

		return find(data, function(current) {
			return current.name == root;
		});
	}
}, {
	init: function(el, options) {
		this.state = new can.Observe({
			searchTerm: options.searchTerm
		});

		can.ajax({
			url: this.options.searchData,
			dataType: 'json'
		}).then(can.proxy(function(result) {
			this.searchData = new can.Observe(this.constructor.menuTree(result, this.options.parent));

			this.element.append(can.view(this.options.view, {
				menu: this.searchData
			}));

			this.element.find('.search-results').hide();
		}, this));
	},

	markMatches: function(search) {
		var traverse = function(children) {
			var anyMatches = false;
			can.each(children, function(child) {
				var matches = false,
					rx = new RegExp(search, 'gim');

				if(child.children) {
					matches = traverse(child.children);
				}

				matches = matches || (rx.test(child.name) || rx.test(child.title));

				child.attr('matches', matches);

				if(matches) {
					anyMatches = true;
				}
			});

			return anyMatches;
		}

		traverse(this.searchData.children);

		return this.searchData;
	},

	toggleResults: function(state) {
		var reverse = state == 'show' ? 'hide': 'show';
		this.element.find('.api')[reverse]().end().find('.search-results')[state]();
	},

	search: function(text) {
		this.markMatches(text);
		if(!this.element.find('.search-results li').length) {
			this.element.find('.search-results').append('<li class="empty">' + this.options.emptyText + '</li>');
		} else {
			this.element.find('.search-results li.empty').remove();
		}
	},

	'.search input keyup': function(el) {
		var value = el.val();
		if(value.length > 1) {
			this.toggleResults('show');
			this.search(value.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"));
		} else {
			this.toggleResults('hide');
		}
	},

	'li.active > a click': function(el, ev) {
		ev.preventDefault();
	},

	'li.active click': function(el, ev) {
		el.toggleClass('collapsed');
	}
});
