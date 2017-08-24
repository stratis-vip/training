"use strict";
exports.__esModule = true;
var secondsInHour = 3600;
function testme() {
    console.log("test");
}
function updateAthlete(property, value) {
    console.log("property %s change to %s", property, value);
}
exports.updateAthlete = updateAthlete;
//calculate Bmi with weghit w (in Kgr) and height h (in meters)
function calculateBmi(w, h) {
    return w / (h * h);
}
exports.calculateBmi = calculateBmi;
;
