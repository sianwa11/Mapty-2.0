export default class Workout {
  id = new Date();
  date = (Date.now() + "").slice(-10); // Date workout was created

  constructor(coordinates, distance, duration) {
    this.coordinates = coordinates; // [lat, lng] after map clicked
    this.distance = distance; // in Km
    this.duration = duration; // in minutes

    this._calcCalories();
  }

  _calcCalories() {
    // Calculate calories here
  }
}
