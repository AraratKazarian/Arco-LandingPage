function slowScroll (id) {
    var offset = 0;
        $('html, body').animate ({
          scrollTop: $(id).offset ().top - offset
        }, 1000);
    return false;
}

function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 4
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: ' '
    });
  }

var $btnTop = $('.btn-top')
$(window).on('scroll' , function(){
    if($(window).scrollTop()>=100){
        $btnTop.fadeIn();
    }
    else{
        $btnTop.fadeOut();
    }
})

$btnTop.on('click' , function(){
    $('html,body').animate({scrollTop:0},1000)
})