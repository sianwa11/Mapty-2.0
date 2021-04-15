// Imports here
import { WORKOUTS_ARRAY } from "./config.js";

import mapView from "./Models/Map.js";
import workoutView from "./Views/workoutsView.js";

import workoutsView from "./Views/workoutsView.js";

const addData = function (data) {
  console.log(data);

  // add data onto some state
  WORKOUTS_ARRAY.push(data);

  // render popup on map
  mapView.renderMarker(data);

  // show workout
  workoutView.showWorkout(data);
};

const handleMoveTo = function (target) {
  // Move to map
  mapView.moveTo(target);
};

const init = function () {
  workoutsView.getData(addData);
  workoutsView.workoutElClicked(handleMoveTo);
};

// Initialization of the application
init();
