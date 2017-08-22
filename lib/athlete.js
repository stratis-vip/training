var cnst = require('./consts');
var fnc = require('./functions');
//var evn = require('./events');

var athlete = {
    //WEIGHT
    _weight: 75,
    get weight() {
        return this._weight;
    },
    set weight(x) {
        //x = newWeight a = this._weight just for saving keys :)
        var a=this._weight;
        if (a !== x && x > cnst.MINWEIGHT && x < cnst.MAXWEIGHT){ 
            this._weight = x;
						fnc.updateAthlete('weight', x);
        }
    },

    //HEIGHT
    _height: 1.73,
    get height() {
        return this._height;
    },
    set height(x) {
       var  a = this._height;
        if (a !== x && x > cnst.MINHEIGHT && x < cnst.MAXHEIGHT){
            this._height = x;
						fnc.updateAthlete('height', x);
        }
    },
    
    //bmi
    get bmi() {
        return fnc.calculateBmi(this._weight, this._height);
    },

    _sex: cnst.SEX_UNDEFINED,

    //SEX 
    get sex() { return this._sex; },
    set sex(x) { 
						if (this._sex !== x){
							this._sex = x;
							fnc.updateAthlete('sex',x);
						}
		},

    //NAME 
    _name: 'Ανώνυμος',
    get name() {return this._name;},
    set name(x) {
        if (this._name !==x && x.trim().length > 4 && x.trim() !== ""){
            this._name = x.trim();
						fnc.updateAthlete('name',x);
        }
    },

    //age
    _bday : new Date('1971-10-21'),
    get bday(){
        return this._bday;
    },
    set bday(x){
        //x must provided in form YYYY-MM-DD
        if (!isNaN(Date.parse(x)) && this._bday !== x){
            this._bday = new Date(x);
						fnc.updateAthlete('bday',x);
        }
    },
    get age(){
        var nowDate = new Date();
        var _age=0;
        if (nowDate.getMonth() > this._bday.getMonth()){
            _age +=1;
        }
        _age += nowDate.getFullYear() - this._bday.getFullYear()-1; 
        return _age;
    },

    //VO2MAX
    _vo2max: {running:null, bicycling:null,swimming:null},
    get vo2max(){
        return this._vo2max;
    },
    set vo2max(x){
						if (this._vo2max !== x ){
										this._vo2max = x;
						}
    }

};

module.exports = athlete;
