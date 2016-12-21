;(function($){
	"use strict";
 
var tabs = $('.ba-game__tabs'),
	content =$('.ba-game__content');

	tabs.on('click', 'li', function(){
		$(this).addClass('ba-active');

		tabs.children('li').not($(this)).removeClass('ba-active');

		var order = $(this).index();

		content.children('div').removeClass('ba-show');
		content.children('div').eq(order).addClass('ba-show');
		
	});


})(jQuery);
