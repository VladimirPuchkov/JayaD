$(window).bind('scroll',function(){
    parallax();
});

function parallax(){
    var par = $('.parallax');
   	par.children('div').each(function (index) {
    	$(this).attr('id', 'background-' + index);
		});

		par.children('div').children('img').each(function (index) {
    	$(this).attr('id', 'background-' + 0 + index);
		});

		var scrolling = $(window).scrollTop();
		par.children('div').each(function (index) {
			$(this).css('top',(0-(scrolling*0.25*(index+1)))+'px');
		});

}