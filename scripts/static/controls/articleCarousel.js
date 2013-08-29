can.Control('Bitovi.OSS.ArticleCarousel', { 
  defaults: {
    view: 'guides/static/templates/articleCarousel.mustache',
    index: 0
  }
}, {
  init: function(el, options) {
    this.state = new can.Observe({});

    Bitovi.OSS.Article.findAll({limit: 6}).done(can.proxy(function(articles) {
      this.state.attr('articles', articles);
      this.state.attr('current', {
        title: articles[0].title,
        body: articles[0].body,
        link: articles[0].link
      });

      this.element.html(can.view(this.options.view, this.state));

      this.current = this.element.find('.item').eq(this.options.index);

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


    if(this.sliding) {
      return;
    }

    this.sliding = true;
    buttons.removeClass('current').eq(index).addClass('current');
    this.element.find('.list').animate({
      left: position
    }, 500, can.proxy(function() {
      this.current = this.element.find('.list li').eq(index);
      this.sliding = false;
    }, this));

    this.cycle();
  },

  destroy: function() {
    this.clearInterval(this.rotateIntervalID);
    this._super();
  }
})