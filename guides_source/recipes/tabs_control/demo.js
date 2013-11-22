var Tabs = can.Control.extend({
    // initialize widget
    init: function( el ) {
      
      // activate the first tab
      $( el ).children( 'li:first' ).addClass( 'active' );
      
      // hide the other tabs
      var tab = this.tab;
      this.element.children( 'li:gt(0)' ).each(function() {
        tab( $( this ) ).hide();
      });
    },
    
    // helper function finds the tab for a given li
    tab: function( li ) {
      return $( li.find( 'a' ).attr( 'href' ) );
    },
    
    // hides old active tab, shows new one
    'li click': function( el, ev ) {
      ev.preventDefault();
      this.tab( this.element.find( '.active' )
                    .removeClass( 'active' ) ).hide()
      this.tab( el.addClass( 'active' ) ).show();
    }
  });
  
  // adds the controller to the element
  new Tabs( '#tabs' );