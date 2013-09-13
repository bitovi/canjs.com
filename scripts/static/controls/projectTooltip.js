Bitovi.OSS.Tooltip('Bitovi.OSS.ProjectTooltip', {
  defaults: {
    view: 'guides/static/templates/projectTooltip.mustache'
  }
}, {
  init: function(el, options) {
    this.element.html(can.view(this.options.view, this.options.state))
      .addClass('has-tip project')
      .appendTo(document.body);
    console.log(this.options.position);
    this.element.position({
      of: this.options.relativeTo,
      my: 'left top',
      at: 'right top',
      // my: this.options.position.my,
      // at: this.options.position.at,
      collision: 'flip',
      within: document.body,
      using: function(position, data) {
        position.left += (data.horizontal === 'left' ? 10 : -50);

        $(this).css(position).find('.tooltip').addClass(data.horizontal);
      }
    })
  },
  'mouseleave': function(el, ev) {
    return false;
  }
});