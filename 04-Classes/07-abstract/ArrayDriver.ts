import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myArrays: Shape[] = []

let myCircle = new Circle(4, 5, 6);
let myRectangle = new Rectangle(1, 2, 3, 4);

myArrays.push(myCircle);
myArrays.push(myRectangle);

for (let myArray of myArrays) {
    console.log(myArray.calculateArea());
}