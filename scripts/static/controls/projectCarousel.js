can.Control('Bitovi.OSS.ProjectCarousel', { 
  defaults: {
    view: 'guides/static/templates/projectCarousel.mustache'
  }
}, {
  init: function(el, options) {
    this.state = new can.Observe({});


    can.Mustache.registerHelper('truncatePost', function(post) {
      var div = $('<div></div>').html(post()),
        text = div.text();

      return text.substr(0, 400) + (text.length > 400 ? '...' : '');
    });

    Bitovi.OSS.App.findAll({limit: 300, size: 'canjscom'}).done(can.proxy(function(apps) {
      var len = apps.length;
      this.state.attr('length', len);
      var rowOne = apps.splice(0, (len / 2));
      this.state.attr('appRowOne', rowOne);
      this.state.attr('appRowTwo', apps);
      this.state.attr('current', {
        title: apps[0].title,
        body: apps[0].body,
        link: apps[0].link
      });

      this.element.html(can.view(this.options.view, this.state));

      this.current = this.element.find('li:first').addClass('current');
    }, this));
  },

  'a:not(.button) click': function(el, ev) {
    el = el.closest('li');

    if(this.tooltip && this.tooltip.element) {
      this.tooltip.element.remove();
    }
    
    this.tooltip = new Bitovi.OSS.ProjectTooltip('<div>', { 
      state: el.data('project'), 
      relativeTo: el
    });

    return false;
  },

  '.prev click' : function(el, ev) {
    this.move('left');
  },

  '.next click' : function(el, ev) {
    this.move('right');
  },

  move: function(direction) {
    var left = (direction === 'left' ? '+=' : '-=') + '242px',
      element = (direction === 'left' ? ':last' : ':first'),
      insert = direction === 'left' ? 'prepend' : 'append',
      self = this;

    if(this.animating) {
      return;
    }
    
    this.animating = true;
    this.element.find('.list').animate({
      left: left
    }, 500, function() {
      var $this = $(this),
        li = $this.find('li').filter(element);
      $this[insert](li).css('left', '');
      self.animating = false;
    });
  },

  showProject: function(el, ev) {
    var project = el.data('project'),
      self = this;

    if(!el.hasClass('current')) {
      this.element.find('.content').fadeOut(function() {
        self.current.removeClass('current');
        self.current = el.addClass('current');
        self.state.attr('current.title', project.title);
        self.state.attr('current.body', project.body);
        self.state.attr('current.link', project.link);
        $(this).fadeIn();
      });
    }
  }
})