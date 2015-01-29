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

	if ($('nav').css('width') == '200px') {
			$('#menu1').removeClass('drop1');
			$('#menu2').removeClass('drop2');
			$('#menu3').removeClass('drop3');
			$('#menu4').removeClass('drop4');
		} else if ($('nav').css('width') == '110px') {
			$('#menu1').removeClass('open1');
			$('#menu2').removeClass('open2');
			$('#menu3').removeClass('open3');
			$('#menu4').removeClass('open4');
		}

	$('nav').on('click', function(){
		if ($('nav').css('width') == '200px') {
			$('#menu1').toggleClass('open1').removeClass('drop1');
			$('#menu2').toggleClass('open2').removeClass('drop2');
			$('#menu3').toggleClass('open3').removeClass('drop3');
			$('#menu4').toggleClass('open4').removeClass('drop4');
		} else if ($('nav').css('width') == '110px') {
			$('#menu1').toggleClass('drop1').removeClass('open1');
			$('#menu2').toggleClass('drop2').removeClass('open2');
			$('#menu3').toggleClass('drop3').removeClass('open3');
			$('#menu4').toggleClass('drop4').removeClass('open4');
		}
	});

});