$(window).ready(function(){
	$('.fademe0').animate({'opacity':'1'}, 650);
	$(window).scroll(function(){
		$('.fademe').each(function(){
			var topObj = $(this).offset().top + $(this).outerHeight()/4;
			var bottomWin = $(window).scrollTop() + $(window).height();
			
			if (bottomWin > topObj) {
				$(this).animate({'opacity':'1'}, 650);
			}
		});
	});
});