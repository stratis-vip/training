const secondsInHour = 3600;

function roundToTwo(num){
    return +(Math.round(num + "e+2")  + "e-2");
}

function testme(){
    console.log("test");
}

module.exports.roundToTwo = roundToTwo;

module.exports.bmi = function(a,b){
    return roundToTwo(a/(b * b));
};

//calculate Bmi with weghit w (in Kgr) and height h (in meters)
module.exports.calculateBmi = function(w,h){
	return w/(h * h);
};
