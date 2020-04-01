var $dlgGoto=(function(){
   var cfg ={
      container:'body',
      num:       6,
      title:     '同意',
      onClick:   null
    };

   var $dlg=$('<input class="timer-button" type="button" disabled>');

function show(conf){
  //1.Dom dr

  $(cfg.container).append($dlg);
  $.extend(cfg,conf);
  num=cfg.num;

 $dlg.click(cfg.onClick); 

}
return{
  show:show
}
}());

