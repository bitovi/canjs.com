define(["can/"], function(can){

	return can.Control.extend('Bitovi.OSS.ApiSignature', {}, {
		'h2 click': function(el, ev) {
			this.element.toggleClass('collapsed');
		}
	});

});