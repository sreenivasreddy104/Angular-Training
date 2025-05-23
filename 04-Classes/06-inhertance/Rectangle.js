"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(_width, _lenght, theX, theY) {
        super(theX, theY);
        this._width = _width;
        this._lenght = _lenght;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get lenght() {
        return this._lenght;
    }
    set lenght(value) {
        this._lenght = value;
    }
    getInfo() {
        return super.getInfo() + `, width = ${this._width}, lenght = ${this._lenght}`;
    }
}
exports.Rectangle = Rectangle;
