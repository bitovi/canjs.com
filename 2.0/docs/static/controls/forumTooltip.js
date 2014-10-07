define(["can/","./tooltip","can/construct/super/"], function(can, Tooltip){

	return Tooltip.extend('Bitovi.OSS.ForumTooltip', {
	  defaults: {
	    view: 'guides/static/templates/forumTooltip.mustache',
	    placement: 'right'
	  }
	}, {
	  init: function(el, options) {
	    this._super(el, options);
	  }
	});
});