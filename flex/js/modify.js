
$(function(){
	
	var $submenu = $('.submenu')
	$submenu.hide()
		

	$(".menu_desktop ul li").hover(function(){

		var $this= $(this),
			$submenu = $this.find('.submenu')
		$submenu.stop().slideDown(300);


	},function(){
		var $this= $(this),
			$submenu = $this.find('.submenu')
		$submenu.stop().slideUp(300);

	});










});






