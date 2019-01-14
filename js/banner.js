$(function() {
  let timer;
  let index = 0;
  let imgWidth = $('.banner_lists li').width();
  setTime();
  function setTime() {
    timer = setInterval(function() {
     countLeft(imgWidth,index);
     styleOfCircle(index);
      index++;
      if(index == 4){
        index = 0;
      }
    },1000);
  }

  $('.banner_circle li').mouseenter(function() {
    clearInterval(timer);
    $(this).css('backgroundColor','#ff4902').siblings('li').css('backgroundColor','#fff');
    index = $(this).index();
    countLeft(imgWidth,index);
    setTime();
  });

  $('.arrow-left').click(function() {
    clearInterval(timer);
    setTime();
    index -= 1;
    if(index < 0){
      index = 3;
    }
    countLeft(imgWidth,index);
    styleOfCircle(index);
  });

  $('.arrow-right').click(function() {
    clearInterval(timer);
    setTime();
    index += 1;
    if(index == 4){
      index = 0;
    }
    countLeft(imgWidth,index);
    styleOfCircle(index);
  });
});

function countLeft(imgWidth,index) {
  let leftWidth = -imgWidth*index;
  $('.banner_lists').css('left',leftWidth+'px');
}

function styleOfCircle(index) {
  $('.banner_circle li').eq(index).css('backgroundColor','#ff4902').siblings('li').css('backgroundColor','#fff');
}
