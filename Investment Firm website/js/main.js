// Map
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 27.17933, lng: 85.189198 },
    zoom: 16,
  });
}

// Sticky menu opacity (vanila js)
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 70, //-70 px from top of hash
      },
      800 // scroll time in ms
    );
  }
});
