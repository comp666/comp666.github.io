$(document).ready(function(){
	$('li').hover(function(){
		$(this).find('ul>li').stop(true,true).fadeToggle(400);
		});
	});
	
	
	/* Visit my website @ www.miukimiu.com *
I was searching for a solution to show my portfolio. I just wanted to show small thumbs of my work dnd some info about it.
Be free to fork it and improve it.
*/

var more = $('.item-buttons .more');
var cancel = $('.cancel');

more.click(function () {
  //alert('ok');
  $(this).parent().parent().find('.info').show();
  //$('.info').show();
});

cancel.click(function () {
  //alert('ok');
  $(this).parent().hide();
});

