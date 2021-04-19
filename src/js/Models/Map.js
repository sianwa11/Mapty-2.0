import { ZOOM_LEVEL } from "./../config.js";
import { WORKOUTS_ARRAY } from "./../config.js";

import workoutsView from "./../Views/workoutsView.js";

class Map {
  #map;

  constructor() {
    this._getPosition();
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
        alert("Could not get your current position");
      });
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(position);

    const coords = [latitude, longitude];

    // const mymap = L.map("map").setView(coords, ZOOM_LEVEL);
    this.#map = L.map("map").setView(coords, ZOOM_LEVEL);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._onHandlerMapClicked.bind(this));

    // Render markers
    WORKOUTS_ARRAY.forEach((workout) => {
      this.renderMarker(workout);
    });
  }

  _onHandlerMapClicked(mapE) {
    // console.log(mapE.latlng);

    const { lat, lng } = mapE.latlng;
    workoutsView.showForm(lat, lng);
  }

  renderMarker(workout) {
    L.marker(workout.coordinates)
      .addTo(this.#map)
      .bindPopup({
        maxWidth: 300,
        minWidth: 50,
        autoClose: false,
        closeOnClick: false,
        className: "popup",
      })
      .setPopupContent(`${workout.description}`)
      .openPopup();
    // .bindPopup();
  }

  moveTo(target) {
    // Moves the map to the specified targets coordinates
    this.#map.flyTo(target.coordinates, ZOOM_LEVEL);
  }
}

export default new Map();
