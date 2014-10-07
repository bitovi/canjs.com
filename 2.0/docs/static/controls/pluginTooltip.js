define(["can/","./tooltip","can/construct/super/"], function(can, Tooltip){

	return Bitovi.OSS.Tooltip.extend('Bitovi.OSS.PluginTooltip', {
	  defaults: {
	    view: 'guides/static/templates/pluginTooltip.mustache'
	  }
	}, {
	  init: function(el, options) {
	    this._super(el, options);
	  }
	});
});