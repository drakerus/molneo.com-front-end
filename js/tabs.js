(function($) {
 $(function() {

   $('ul.tabs').each(function() {
     $(this).find('li').each(function(i) {
       $(this).click(function(){
         $(this).addClass('current').siblings().removeClass('current')
           .parents('div.section').find('div.box-tabs').eq(i).fadeIn(150).siblings('div.box-tabs').hide();
       });
     });
   });

})
})(jQuery)