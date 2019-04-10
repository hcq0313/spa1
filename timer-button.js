/* export $timerBtn */
var $timerBtn=(function(){
  var n=6;
  var init=function(){
  var $container=$('.main');
  var DOM='<input class="timer-button" type="button" value="同意(6s)" disabled>';
  $container.html(DOM);
  /*
  var $timerBtn=$('<input type="button" value="同意(6s) disabled">');
  var $timerBtn.appendTo($container);
  */
  var $btnAgree = $('input[type="button"]');
  var $btnAgree=$container.find('.timer-button');
  /*
  $btnAgree.css({
    'font-size':'1.2e,',
    'height':'60px',
    'width':'200px'
  })
  */
  var timer = window.setInterval(function(){
    n--;
    if(n==0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');
    }else{
      $btnAgree.val('同意('+n+'s)');
    }
  },1000);

  $btnAgree.click(function(){
    alert('SPA!10-timer-button task!')
  });
}
  return {init:init}
}());
