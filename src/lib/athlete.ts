import { constants as cnst } from './consts';
import { sex, vo2maxClass } from './classes';
import fnc = require('./functions');
//var evn = require('./events');

class athlete {
    //WEIGHT
    private _weight: number = 75;
    get weight() {
        return this._weight;
    };
    set weight(x: number) {
        //x = newWeight a = this._weight just for saving keys :)
        let a: number = this._weight;
        if (a !== x && x > cnst.MINWEIGHT && x < cnst.MAXWEIGHT) {
            this._weight = x;
            fnc.updateAthlete(this, 'weight', x);
        }
    };

    //HEIGHT
    private _height: number = 1.73;
    get height() {
        return this._height;
    };
    set height(x: number) {
        let a: number = this._height;
        if (a !== x && x > cnst.MINHEIGHT && x < cnst.MAXHEIGHT) {
            this._height = x;
            fnc.updateAthlete(this, 'height', x);
        }
    };

    //bmi
    get bmi() {
        return fnc.calculateBmi(this._weight, this._height);
    };

    //SEX 
    private _sex: sex = sex.SEX_UNDEFINED;
    get sex() { return this._sex; };
    set sex(x: sex) {
        if (this._sex !== x) {
            this._sex = x;
            fnc.updateAthlete(this,'sex', x);
        }
    };

    //NAME 
    private _name: string = 'Ανώνυμος';
    get name() { return this._name; };
    set name(x: string) {
        if (this._name !== x && x.trim().length > 4 && x.trim() !== "") {
            this._name = x.trim();
            fnc.updateAthlete(this,'name', x);
        }
    };

    //age
    private _bday: Date = new Date('1971-10-21');
    get bday() {
        return this._bday;
    };
    set bday(x: Date) {
        //x must provided in form YYYY-MM-DD
        if (this._bday !== x) {
            this._bday = new Date(x);
            fnc.updateAthlete(this,'bday', x);
        }
    };
    get age() {
        let nowDate = new Date();
        let _age: number = 0;
        if (nowDate.getMonth() > this._bday.getMonth()) {
            _age += 1;
        }
        _age += nowDate.getFullYear() - this._bday.getFullYear() - 1;
        return _age;
    };

    //VO2MAX
    private _vo2max: vo2maxClass;
    get vo2max() {
        return this._vo2max;
    };
    set vo2max(x: vo2maxClass) {
        if (this._vo2max !== x) {
            this._vo2max = x;
            fnc.updateAthlete(this,'vo2max', x);
        }
    };
};

export  { athlete };
