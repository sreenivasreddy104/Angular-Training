"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoath_1 = require("./CricketCoath");
const GolfCoath_1 = require("./GolfCoath");
let myCricketCoath = new CricketCoath_1.CricketCoath();
let myGolfCoath = new GolfCoath_1.GolfCoath();
let coaths = [];
coaths.push(myCricketCoath);
coaths.push(myGolfCoath);
for (let coath of coaths) {
    console.log(coath.getDailyWorkout());
}
