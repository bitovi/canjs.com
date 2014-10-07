define(["can/","./tooltip","can/construct/super/"], function(can, Tooltip){

	return Tooltip.extend('Bitovi.OSS.ArticleTooltip', {
	  defaults: {
	    view: 'guides/static/templates/articleTooltip.mustache'
	  }
	}, {
	  init: function(el, options) {
	    this._super(el, options);
	  }
	});
});