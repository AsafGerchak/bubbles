// Smoooooooooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Doc ready!
$(function(){

	$('nav').on('click', function(){
		$('#menu1').toggleClass('open1');
		$('#menu2').toggleClass('open2');
		$('#menu3').toggleClass('open3');
		$('#menu4').toggleClass('open4');
	});

});