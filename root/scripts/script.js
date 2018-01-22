$(document).ready(function(){
   $(".card").flip({
  axis: 'x',
  trigger: 'hover',
  reverse: true
});
        $('#accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    });
    
});
