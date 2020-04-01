$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal = $('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area'),
      $msg=$('#width-validation-message');
$btnCal.click(function(){
  if(!validate('#width') || !validate('#height')) return;

  var w=Number($width.val()),
     h=Number($height.val());

  var p=Math.round(2*(w+h)*Math.pow(10,4))/Math.pow(10,4);
      a=Math.round(w*h*Math.pow(10,4))/Math.pow(10,4);
      $perimeter.val(p);
      $area.val(a);
});

function validate(field){
  //var DOM error message
  var $data = $(field),
      $msg = $(field+'-validation-message');
  //validate null
  if($data.val()===''){
    $msg.html('不能为空！');
    $data.select();
    return false;
  }
  //validate number
  
   if(!/^-?(0|[1-9]\d*)(\.\d*)?[eE][+-]?\d+)?$/.test($data.val())){
    $msg.html('不能为空！');
    $data.select();
    return false;
  }i  
  //dalidate >0
   if(Number($data.val())<0){
    $msg.html('数值必须大于零');
    $data.select();
    return false;
  }
  
  
  
  
  //prompt error message
  //return false;
  return true;
}
})
