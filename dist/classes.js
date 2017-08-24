"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var vo2maxClass = (function () {
    function vo2maxClass() {
        this._swimming = 20.0;
        this._bicycling = 21.0;
        this._running = 22.0;
    }
    Object.defineProperty(vo2maxClass.prototype, "running", {
        get: function () { return this._running; },
        set: function (x) {
            if (x !== this._running && x > 10 && x < 120 && x < consts_1.constants.MAXVO2MAX) {
                this._running = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(vo2maxClass.prototype, "bicycling", {
        get: function () { return this._bicycling; },
        set: function (x) {
            if (x !== this._bicycling && x > 10 && x < 120 && x < consts_1.constants.MAXVO2MAX) {
                this._bicycling = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(vo2maxClass.prototype, "swimming", {
        get: function () { return this._swimming; },
        set: function (x) {
            if (x !== this._swimming && x > 10 && x < 120 && x < consts_1.constants.MAXVO2MAX) {
                this._swimming = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    return vo2maxClass;
}());
exports.vo2maxClass = vo2maxClass;
