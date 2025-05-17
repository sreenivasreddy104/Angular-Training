import { Shape } from "./Shape";

export class Circle extends Shape {

    calculateArea(): number {
        return Math.PI * Math.pow(this.redies, 2);
    }

    constructor(private theX: number, private theY: number, private _redies: number) {
        super(theX, theY);
    }

    public get redies(): number {
        return this._redies;
    }
    public set redies(value: number) {
        this._redies = value;
    }

    getInfo(): string {
        return super.getInfo() + `, redies = ${this._redies}`
    }
}