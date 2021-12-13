"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(type, sound) {
        this._type = type;
        this._sound = sound;
    }
    Object.defineProperty(Animal.prototype, "type", {
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "sound", {
        get: function () {
            return this.sound;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
