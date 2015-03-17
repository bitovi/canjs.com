define(["can/"], function(can){

	return can.Control.extend('Bitovi.OSS.ArticleCarousel', { 
	  defaults: {
	    view: 'guides/static/templates/articleCarousel.mustache',
	    index: 0
	  }
	}, {
	  init: function(el, options) {
	    this.state = new can.Observe({});
	
	    
	    can.Mustache.registerHelper('formatDate', function(date) {
	      return moment(date()).calendar();
	    });
	
	    Bitovi.OSS.Article.findAll({limit: 6}).done(can.proxy(function(articles) {
	      this.state.attr('articles', articles);
	      this.state.attr('current', {
	        title: articles[0].title,
	        body: articles[0].body,
	        link: articles[0].link
	      });
	
	      this.element.html(can.view(this.options.view, this.state));
	
	      this.element.addClass('loaded');
	
	      this.current = this.element.find('.item').hide().eq(this.options.index).show();
	      this.slideTo(this.options.index);
	      this.cycle();
	    }, this));
	  },
	
	  '.buttons li click': function(el, ev) {
	    this.slideTo(el.index());
	  },
	
	  cycle: function() {
	    clearInterval(this.rotateIntervalID);
	    this.rotateIntervalID = setInterval(can.proxy(function() {
	      this.next();
	    }, this), 5000);
	  },
	
	  prev: function() {
	    var index = this.current.index() - 1;
	
	    index = index == 0 ? this.element.find('.item').length - 1 : index;
	    this.slideTo(index);
	  },
	
	  next: function() {
	    var index = this.current.index() + 1;
	
	    index = index % this.element.find('.item').length;
	    this.slideTo(index);
	  },
	
	  slideTo: function(index) {
	    var position = (this.current.width() * -index),
	      buttons = this.element.find('.buttons li');
	
	
	    if(this.animating) {
	      return;
	    }
	
	    this.sliding = true;
	    buttons.removeClass('current').eq(index).addClass('current');
	    this.current.fadeOut(can.proxy(function() {
	      this.current = this.element.find('.list li').eq(index).fadeIn(can.proxy(function() {
	        this.animating = false;
	      }, this));
	    }, this))
	    // this.element.find('.list').animate({
	    //   left: position
	    // }, 500, can.proxy(function() {
	    //   this.current = this.element.find('.list li').eq(index);
	    //   this.animating = false;
	    // }, this));
	
	    this.cycle();
	  },
	
	  destroy: function() {
	    this.clearInterval(this.rotateIntervalID);
	    this._super();
	  }
	});
	
});