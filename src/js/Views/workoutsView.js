import Workout from "./../Models/Workout.js";

class WorkoutsView {
  #latitude;
  #longitude;

  _parentElement = document.querySelector(".workouts");
  _form = document.querySelector(".form");
  _distance = document.querySelector(".form__input--distance");
  _duration = document.querySelector(".form__input--duration");

  showForm(lat = undefined, lng = undefined) {
    this._form.classList.remove("hidden");
    this._distance.focus();

    this.#latitude = lat;
    this.#longitude = lng;
  }

  getData(handler) {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new Workout(
        [this.#latitude, this.#longitude],
        this._distance.value,
        this._duration.value
      );

      handler(data);
    });
  }

  showWorkout(workout) {
    const markup = `
    <li class="workout workout--running" data-id="1234567890">
      <h1 class="workout__title">Running on April 14</h2>
        <div class="workout__details">
          <span class="workout__icon">🏃‍♂️</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">nill</span>
          <span class="workout__unit">Kcal</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">nill</span>
          <span class="workout__unit">kph</span>
        </div>
    </li>
    `;

    this._clear(markup);
  }

  _clear(markup) {
    this._distance.value = this._duration.value = "";
    this._form.style.display = "none";
    this._form.classList.add("hidden");
    this._form.insertAdjacentHTML("afterend", markup);
    setTimeout(() => (this._form.style.display = "grid"), 1000);
  }
}

export default new WorkoutsView();
