var paint = false,
    counter = 0;
$('#panii')
  .mousedown(function(){
    paint = true;
  })
  .mouseup(function(){
    paint = false;
  })
  .mousemove(function(e){
    if(paint){
    W = $('#panii').width();
    H = $('#panii').height();
    x = e.pageX;
    y = e.pageY;
    X = Math.floor(x/W * 100);
    Y = Math.floor(y/H * 100);
    r = Math.floor(Math.random() * 90);
    counter = (counter < 360) ? counter+1 : 0;
    h = counter;
    //h = Math.floor((X+Y) * 360 / 200);
    $('#panii').append('<div class="postit" style="top:'+y+'px;left:'+x+'px;background:hsla('+h+',100%,50%,0.1);transform:rotate('+r+'deg)"></div>');
    }
  });
$('#reset').click(function(){
  $("#panii").empty();
});