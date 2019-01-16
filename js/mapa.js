// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -33.450069174954685, lng: -70.68682662590027};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 19, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
}
    