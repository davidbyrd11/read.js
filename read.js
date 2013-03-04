(function ($) {

  var start = +new Date();

  $.fn.read = function () {
    $(window).scroll(function () {

      var st = $(window).scrollTop(),
          wh = $(window).height(),
          dh = document.height;

      if (st + wh == dh) {
        $(window).trigger('read');
        var elapsed =  (+new Date() - start) / 1000;
        console.log('User has been on the page for ' + elapsed + ' seconds.');
      }
    });
    

  };
}) (jQuery);