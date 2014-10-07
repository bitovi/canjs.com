steal('can','./blogList.mustache',  function(can, template){
// Simple throttle...
can.throttle = function(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

return can.Control.extend({
	defaults: {
		pageSize: can.compute(10),
	}
}, {
	init: function(el, options) {
		can.Mustache.registerHelper('isFirst', function(index, options) {
			if(index() == 0) {
				return options.fn(this);
			}
			return '';
		});

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

		can.Mustache.registerHelper('hasMorePosts', function(pageSize, blogList, options) {
			if(pageSize() < blogList.attr('length')) {
				return options.fn(this);
			}
			return '';
		})
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

		$.getJSON('/blog/json/_all.json', $.proxy(function(data) {
			this.options.blogList = new can.List(data);
			this.element.html(template({
				blogList: this.options.blogList,
				pageSize: this.options.pageSize
			}));
		}, this));

		return;
	},
	'{can.route} tag': function(route, ev, tag) {
		$('.blog-nav .active').removeClass('active');
		$('a[href="#!tag/' + tag + '"]').addClass('active')

		$.getJSON('/blog/json/' + tag + '.json', $.proxy(function(data) {
			can.batch.start();
			this.options.pageSize(10);
			this.options.blogList.replace(data);
			can.batch.stop();
		}, this));
	},

	'{window} scroll': 'scroll',

	scroll: function(el, ev) {
		if(this.options.pageSize() >= this.options.blogList.attr('length')) {
			$(window).unbind('scroll');
		}
		can.throttle(function() {
			if($(window).scrollTop() >= $(document).height() - $(window).height() - 500) {
				this.options.pageSize(this.options.pageSize() + 10);
			}
		}, 1000, this)();
	},

	'.more click': function(el, ev) {
		this.options.pageSize(this.options.pageSize() + 10);
	}
});

})