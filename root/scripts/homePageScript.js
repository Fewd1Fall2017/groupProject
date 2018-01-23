  $(document).ready(function() {
        $('.circle').circleProgress({
    value: 0.6
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(893 * progress) + '<i></i>');
  });
  });
