$(function(){
  var $range=$('#range'),
      $age = $('#age');

  console.log($range.val());
  $range.click=(function(){
      console.log('suu');
      $age.html($range.val());
  });
});
