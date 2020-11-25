let map, map2;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.373052, lng: -121.873324 },
    zoom: 15,
  });
  map2 = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: 34.093719, lng: -118.125975 },
    zoom: 15,
  });

}
