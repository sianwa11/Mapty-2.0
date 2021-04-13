// Imports here

/**
 *
 */
const loadMap = function () {
  // If navigator exists render map
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude } = pos.coords;
      const { longitude } = pos.coords;
      console.log(pos);

      const coords = [latitude, longitude];

      const mymap = L.map("map").setView(coords, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mymap);
    });
  }

  // Render error Message if it fails
};

const init = function () {
  loadMap();
};

// Initialization of the application
init();
