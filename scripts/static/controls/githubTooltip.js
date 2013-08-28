Bitovi.OSS.Tooltip('Bitovi.OSS.GithubTooltip', {
  defaults: {
    view: 'guides/static/templates/githubTooltip.mustache'
  }
}, {
  init: function(el, options) {
    this._super(el, options);

    can.Mustache.registerHelper('truncateHash', function(hash) {
      return hash().substr(0, 6);
    });
  }
});