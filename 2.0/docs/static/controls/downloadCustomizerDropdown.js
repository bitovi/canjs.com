define(["can/","jquery"], function(can, $){

	return {
	    '.customize click': function(el, ev) {
	        this.toggleFlyout();
	        ev.stopPropagation();
	    },
	    '.customize-box click': function(el, ev) {
	        ev.stopPropagation();
	    },
	    '{window} click': function(el, ev) {
	        this.toggleFlyout(false);
	    },
	    toggleFlyout: function(open) {
	        if(open === undefined) {
	            this.isOpen = this.element.find('.customize').toggleClass('active').hasClass('active');
	            open = this.isOpen;
	        }
	
	        if(open) {
	            this.element.find('.customize').addClass('active');
	            var customizeBox = this.element.find('.customize-box').show();
	
	            // make customizeBox the right width
	            customizeBox.width(this.element.width() - (parseInt(customizeBox.css('padding-left'), 10) + parseInt(customizeBox.css('padding-right'), 10)));
	
	            this.isOpen = true;
	        } else {
	            this.element.find('.customize').removeClass('active');
	            this.element.find('.customize-box').hide();
	            this.isOpen = false;
	        }
	    }
	};
});
