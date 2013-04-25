can.Control('CanJSUS.ApiSearch', {
	defaults: {
		searchData: 'searchdata.json',
		menu: 'templates/apiSearch.mustache'
	},

	menuTree: function (data, root) {
		can.each(data, function(current, index, arr) {
			var parent = _.find(arr, function(value) {
				return value.name === current.parent;
			});

			if(parent) {
				parent.children = parent.children || [];
				parent.children.push(current);
			}
		});

		return _.find(copies, function(current) {
			return current.name == root;
		});
	}
}, {
	init: function(el, options) {
		this.state = new can.Observe({
			searchTerm: options.searchTerm
		});
	},

	markMatches: function(search) {
		var traverse = function(children) {
			var anyMatches = false;
			can.each(children, function(child) {
				var matches = false;
				if(child.children) {
					matches = traverse(child.children);
				} else {
					// Only check for actual matches on leaf nodes
					matches = search.test(child.name) || search.test(child.title);
				}

				child.attr('matches', matches);

				if(matches) {
					anyMatches = true;
				}
			});

			return anyMatches;
		}

		traverse(this.root.children);

		return this.root;
	},

	'.search keypress': function(el, ev) {
		console.log(el.val());
	}
});
