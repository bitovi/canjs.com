define(["can/","./tooltip","can/construct/super/"], function(can, Tooltip){

	return Tooltip.extend('Bitovi.OSS.GithubTooltip', {
	  defaults: {
	    view: 'guides/static/templates/githubTooltip.mustache',
	    placement: 'right'
	  }
	}, {
	  init: function(el, options) {
	    this._super(el, options);
	
	    can.Mustache.registerHelper('truncateHash', function(hash) {
	      return hash().substr(0, 6);
	    });
	  }
	});
});