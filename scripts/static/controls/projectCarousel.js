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

    Bitovi.OSS.App.findAll({limit: 10, size: 'canjscom'}).done(can.proxy(function(apps) {
      console.log(apps);
      this.state.attr('apps', apps);
      this.state.attr('current', {
        title: apps[0].title,
        body: apps[0].body,
        link: apps[0].link
      });

      this.element.html(can.view(this.options.view, this.state));

      this.element.find('.carousel').scrollbox({
        direction: 'h',
        switchItems: 1,
        distance: 200,
        delay: 5
      });

      this.current = this.element.find('li:first').addClass('current');
    }, this));
  },

  '.carousel moving': function(el, ev, direction) {
    var index = direction == 'forward' ? 1 : 0;

    this.showProject(el.find('li:eq(' + index + ')'), ev);
  },

//  'li mouseenter': 'showProject',

  'a click': function(el, ev) {
    el = el.closest('li');
    this.showProject(el, ev);
    return false;
  },

  '.prev click' : function(el, ev) {
    this.element.find('.carousel').trigger('backward');
  },

  '.next click' : function(el, ev) {
    this.element.find('.carousel').trigger('forward');
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