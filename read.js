(function( $ ) {
  $.fn.myPlugin = function() {
  
    this.scroll(function () { // if they reach the bottom let's naively assume they've read the page
      if(this.scrollTop() + this.height() == this.document.height())
        this.trigger('read');
    });

  };
})( jQuery );
