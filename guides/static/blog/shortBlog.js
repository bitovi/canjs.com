steal('can', './shortBlogList.mustache', function(can, template){
	return can.Control.extend({
	defaults: {
		pageSize: 5,
		feed: '_all'
	}
}, {
	init: function(el, options) {
		this.options.pageSize = can.compute(this.options.pageSize);
		can.Mustache.registerHelper('isDesignDevelopment', function(categories, options) {
			var singleCategory = '';
			can.each(categories(), function(category) {
				if(category == 'Design' || category == 'Development') {
					singleCategory = category;
					return false;
					
				}
			})
			return options.fn(singleCategory);
		});

		can.Mustache.registerHelper('isBlogLimit', function(pageSize, index, options) {
			if(pageSize() > index()) {
				return options.fn(this);
			}
			return '';
		});

		can.Mustache.registerHelper('dateFormat', function(date) {
			var monthArray = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			date = new Date(date());
			month = date.getMonth(),
			day = date.getDate(),
			suffix = 'th',
			mod = day % 10;

			if(mod == 1 && day !== 11) {
				suffix = 'st';
			}
			else if(mod == 2 && day !== 12) {
				suffix = 'nd';
			}
			else if(mod == 3 && day != 13) {
				suffix = 'rd';
			}
			else {
				suffix = 'th';
			}

			return monthArray[month] + ' ' + day + suffix + ', ' + date.getFullYear();
		});

		$.getJSON('/blog/json/' + this.options.feed + '.json', $.proxy(function(data) {
			this.options.blogList = new can.List(data);
			this.element.html(template({
				blogList: this.options.blogList,
				pageSize: this.options.pageSize
			}));
		}, this));

		return;
	}
});
})