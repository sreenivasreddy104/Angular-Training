import { Shape } from "./Shape";

export class Rectangle extends Shape {

    calculateArea(): number {
        return this._width * this._lenght;
    }


    constructor(private _width: number, private _lenght: number, theX: number, theY: number) {
        super(theX, theY);
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get lenght(): number {
        return this._lenght;
    }
    public set lenght(value: number) {
        this._lenght = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width = ${this._width}, lenght = ${this._lenght}`
    }
}