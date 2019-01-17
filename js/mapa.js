// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -33.449725877092554, lng: -70.68698197603226};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 19, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
}
    