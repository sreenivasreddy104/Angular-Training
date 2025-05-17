"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(theX, theY, _redies) {
        super(theX, theY);
        this.theX = theX;
        this.theY = theY;
        this._redies = _redies;
    }
    get redies() {
        return this._redies;
    }
    set redies(value) {
        this._redies = value;
    }
    getInfo() {
        return super.getInfo() + `, redies = ${this._redies}`;
    }
}
exports.Circle = Circle;
