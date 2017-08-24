"use strict";
exports.__esModule = true;
var consts_1 = require("./consts");
var vo2maxClass = (function () {
    function vo2maxClass() {
        this._swimming = 20.0;
        this._bicycling = 21.0;
        this._runnning = 22.0;
    }
    Object.defineProperty(vo2maxClass.prototype, "running", {
        get: function () { return this._runnning; },
        set: function (x) {
            if (x !== this._runnning && x > 10 && x < 120 && x < consts_1.constants.MAXVO2MAX) {
                this._runnning = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(vo2maxClass.prototype, "bicycling", {
        get: function () { return this._bicycling; },
        set: function (x) {
            if (x !== this._runnning && x > 10 && x < 120 && x < consts_1.constants.MAXVO2MAX) {
                this._runnning = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(vo2maxClass.prototype, "swimming", {
        get: function () { return this._swimming; },
        set: function (x) {
            if (x !== this._runnning && x > 10 && x < 120 && x < consts_1.constants.MAXVO2MAX) {
                this._runnning = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    return vo2maxClass;
}());
exports.vo2maxClass = vo2maxClass;
