  $(document).ready(function() {
        var waypoint = new Waypoint({
  element: document.getElementById('trigger'),
  handler: function() {
    $('.circle').circleProgress({
    value: 0.87,
    size: 200,
        thickness: 21,
    fill: {
      gradient: ["#e5007d", "#ab3e8f", "#5e4e9c"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(893 * progress) + '<i></i>');           
  });
  },
})
        
function ItemFadeIn(selector) {
    var items = $(selector);
    var index = 0;

    function next() {
        if (index < items.length) {
            items.eq(index++).fadeIn(1000, next);
        }
    }
    next();
}

ItemFadeIn(".item");  
    
  });

