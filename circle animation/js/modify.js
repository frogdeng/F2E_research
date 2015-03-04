
$(function(){
	

	var $win = $(this),
		winWidth = $win.width(), 
		winHeight = $win.height(),
		slideWidth = $('.slider').width(),
		top_blockWidth = $('.top_block').width()


/*dropdown menu*/		
	$('#Product').hover(function(){
		$('.dropdown').stop().animate({
			height: winHeight
		}, 500)

		$('.wrapper').stop().animate({
			opacity: .4
		})

	
	},function(){
		$('.dropdown').stop().animate({
			height: 0
		})

		$('.wrapper').stop().animate({
			opacity: 1
		}, 100)
	})	


/*
	if(slideWidth < 1020){

		$(".top_block").css({
			left:  winWidth - top_blockWidth- 150
	 	})

	}

*/	



	



});







