var $timerButton=(function(){
   var cfg ={
      container:'body',
      num:       6,
      title:     '同意',
      onClick:   null
    },
    num,
    timer;

function show(conf){
  //1.Dom dr
  var cfg ={
      container:'body',
      num:       6,
      title:     '同意',
      onClick:   null
    },
    num,
    timer;

   var $btn=$('<input class="timer-button" type="button" disabled>');

  $(cfg.container).append($btn);
  $.extend(cfg,conf);
  num=cfg.num;

  $btn.val(cfg.title+'('+cfg.num+'s)');
  
timer = setInterval(function(){
  num--;
  if(num == 0){
    clearInterval(timer);
    $btn.val(cfg.title);
    $btn.removeAttr('disabled');
  }else{
    $btn.val(cfg.title+'('+num+'s)')
  }
},1000);

 $btn.click(cfg.onClick); 

}
return{
  show:show
}
}());

//不用 page load event
//
//封装成对象，有几种方案
//1.全局对象字面量，不完全是面向对象，不包括私有方法
//var timerBin={
//show :function()
//}
//2.工厂函数,一个函数返回值是一个简单对象
//var timerBtn = function(){
//return {
//   show:function(){}
//  }
//}
//3.构造函数,function TimerBtn(){
//var tb=new TimerBtn();
//}
