can.Control('Bitovi.OSS.Tooltip', {
  defaults: {
    view: ''
  }
}, {
  init: function(el, options) {
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