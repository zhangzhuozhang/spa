$(function(){
    window.onhashchange = function(){
        var $block = $('.main'),
               strHash = window.location.hash,
               color = strHash.substring(3,strHash.length);
        
        $block.css({
            'backgroung-color':color
        })
    }
})