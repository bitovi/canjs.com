define(["can/","./tooltip","can/construct/super/"], function(can, Tooltip){

	return Tooltip.extend('Bitovi.OSS.AppTooltip', {
	  defaults: {
	    view: 'guides/static/templates/appTooltip.mustache'
	  }
	}, {
	  init: function(el, options) {
	    this._super(el, options);
	  }
	});
	
});