/* const init = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude } = pos.coords;
      const { longitude } = pos.coords;
      console.log(latitude, longitude);

      const coords = [latitude, longitude];
      console.log(coords);

      let mymap = L.map("map").setView(coords, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mymap);
    });
  }
};

init();
 */
