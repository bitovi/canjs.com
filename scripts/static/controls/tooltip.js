can.Control('Bitovi.OSS.Tooltip', {
  defaults: {
    view: ''
  }
}, {
  init: function(el, options) {
    can.Mustache.registerHelper('truncatePost', function(post) {
      var div = $('<div></div>').html(post()),
        text = div.text();
      /* Here's the 'smart' (ish?) way, but that's not how Bithub does it.
      return div[0].childNodes[0].nodeValue || div.children().first().text();
      */
      return text.substr(0, 200) + (text.length > 200 ? '...' : '');
    });

    var offset = this.options.relativeTo.offset();
    this.element.html(can.view(this.options.view, this.options.state))
      .addClass('has-tip')
      .appendTo(this.options.relativeTo.offsetParent());
    this.updateOffset();
  },
  '{document.body} click': function(el, ev) {
    if (!this.element.has( ev.target ).length && ev.target !== this.element[0] && ev.target !== this.options.relativeTo[0] ) {
      this.element.remove();
    }
  },
  '{window} resize': can.debounce(function(el, ev) {
    this.updateOffset();
  }, 100),

  '{relativeTo} click': function(el, ev) {
    return false;
  },

  updateOffset: function() {
    var offset = this.options.relativeTo.offset();
    this.element.offset({
      left: offset.left,// + (this.options.relativeTo.width() / 2),
      top: offset.top + this.options.relativeTo.height() + 15
    });
  }
});