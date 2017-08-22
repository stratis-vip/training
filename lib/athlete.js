// import useful functions 
var f = require('./functions.js');

//import constants
var constants = require("./consts.js");

// this object will hold the metrics of athlete
var Athlete  =(function(){
//properties
    var weight;
    var height;
    var bmi;
	var sex = constants.SEX_UNDEFINED;
	var name;
//TODO
		//name
		//activities {}
		//sex
		//age
		//vo2 {}
		//statistics {}


    function Athlete(w,h)
    {
        if (w !== 0 ){
			this.setWeight(w);
		}
		if (h !== 0 ){
	        this.setHeight(h);
		}
    }

    Athlete.prototype.getWeight = function(){
        return weight;
    };

    Athlete.prototype.setWeight = function(newWeight){
        if (weight != newWeight && newWeight > constants.MINWEIGHT && newWeight < constants.MAXWEIGHT){
            weight = newWeight;
			if (height > 0 ){
				 bmi = f.calculateBmi(weight,height);
			}
            return true;
        }
        return false;
    };    

	Athlete.prototype.setHeight = function(newHeight){
        if (newHeight > 3) { 
			newHeight = newHeight / 100; 
		}
        if (height != newHeight && newHeight > constants.MINHEIGHT && newHeight < constants.MAXHEIGHT){
        	height = newHeight;
            if (height > 0 ){
				bmi = f.calculateBmi(weight, height);
			}
			return true;
        }
		return false;
	};

    Athlete.prototype.getHeight = function(){
        return height;
    };

    Athlete.prototype.getBmi = function(){
		return bmi;
	};    

	Athlete.prototype.getSex=function(){
		return sex;
	};

	Athlete.prototype.setSex=function(newSex){
		if (newSex !== sex && newSex !== constants.SEX_UNDEFINED && newSex > 0 && newSex <= constants.SEX_FEMAL  ){
			sex=newSex;
			return true;
		}
		return false;
	};
    return Athlete;    
})();

module.exports = Athlete;
