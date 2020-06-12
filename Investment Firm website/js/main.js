var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 27.17933, lng: 85.189198 },
    zoom: 16,
  });
}
