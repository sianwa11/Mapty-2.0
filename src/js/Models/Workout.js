export default class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10); // Date workout was created

  constructor(coordinates, distance, duration) {
    this.coordinates = coordinates; // [lat, lng] after map clicked
    this.distance = distance; // in Km
    this.duration = duration; // in minutes

    this._calcCalories();
    this._calcSpeed();
    this._setDescription();
  }

  _calcCalories() {
    // Calculate calories here
  }

  _setDescription() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.description = `Running on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  _calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}
