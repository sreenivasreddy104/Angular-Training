import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myArrays: Shape[] = []

let myShape = new Shape(4, 5);
let myCircle = new Circle(4, 5, 6);
let myRectangle = new Rectangle(1, 2, 3, 4);

myArrays.push(myShape);
myArrays.push(myCircle);
myArrays.push(myRectangle);

for (let myArray of myArrays) {
    console.log(myArray.getInfo());
}