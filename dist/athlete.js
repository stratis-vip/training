"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var fnc = require("./functions");
//var evn = require('./events');
var athlete = (function () {
    function athlete() {
        //WEIGHT
        this._weight = 75;
        //HEIGHT
        this._height = 1.73;
        //SEX 
        this._sex = 0 /* SEX_UNDEFINED */;
        //NAME 
        this._name = 'Ανώνυμος';
        //age
        this._bday = new Date('1971-10-21');
    }
    Object.defineProperty(athlete.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (x) {
            //x = newWeight a = this._weight just for saving keys :)
            var a = this._weight;
            if (a !== x && x > consts_1.constants.MINWEIGHT && x < consts_1.constants.MAXWEIGHT) {
                this._weight = x;
                fnc.updateAthlete(this, 'weight', x);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(athlete.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (x) {
            var a = this._height;
            if (a !== x && x > consts_1.constants.MINHEIGHT && x < consts_1.constants.MAXHEIGHT) {
                this._height = x;
                fnc.updateAthlete(this, 'height', x);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(athlete.prototype, "bmi", {
        //bmi
        get: function () {
            return fnc.calculateBmi(this._weight, this._height);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(athlete.prototype, "sex", {
        get: function () { return this._sex; },
        set: function (x) {
            if (this._sex !== x) {
                this._sex = x;
                fnc.updateAthlete(this, 'sex', x);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(athlete.prototype, "name", {
        get: function () { return this._name; },
        set: function (x) {
            if (this._name !== x && x.trim().length > 4 && x.trim() !== "") {
                this._name = x.trim();
                fnc.updateAthlete(this, 'name', x);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(athlete.prototype, "bday", {
        get: function () {
            return this._bday;
        },
        set: function (x) {
            //x must provided in form YYYY-MM-DD
            if (this._bday !== x) {
                this._bday = new Date(x);
                fnc.updateAthlete(this, 'bday', x);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(athlete.prototype, "age", {
        get: function () {
            var nowDate = new Date();
            var _age = 0;
            if (nowDate.getMonth() > this._bday.getMonth()) {
                _age += 1;
            }
            _age += nowDate.getFullYear() - this._bday.getFullYear() - 1;
            return _age;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(athlete.prototype, "vo2max", {
        get: function () {
            return this._vo2max;
        },
        set: function (x) {
            if (this._vo2max !== x) {
                this._vo2max = x;
                fnc.updateAthlete(this, 'vo2max', x);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return athlete;
}());
exports.athlete = athlete;
;
