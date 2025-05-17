"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myArrays = [];
let myShape = new Shape_1.Shape(4, 5);
let myCircle = new Circle_1.Circle(4, 5, 6);
let myRectangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
myArrays.push(myShape);
myArrays.push(myCircle);
myArrays.push(myRectangle);
for (let myArray of myArrays) {
    console.log(myArray.getInfo());
}
