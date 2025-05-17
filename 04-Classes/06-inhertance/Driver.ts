import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(4, 5);
let myCircle = new Circle(4, 5, 6);
let myRectangle = new Rectangle(1, 2, 3, 4);

console.log(myShape.getInfo());
console.log(myCircle.getInfo());
console.log(myRectangle.getInfo());