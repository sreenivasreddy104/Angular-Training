import { Coath } from "./Coath";
import { CricketCoath } from "./CricketCoath";
import { GolfCoath } from "./GolfCoath";

let myCricketCoath = new CricketCoath();
let myGolfCoath = new GolfCoath();

let coaths: Coath[] = [];

coaths.push(myCricketCoath);
coaths.push(myGolfCoath);

for (let coath of coaths) {
    console.log(coath.getDailyWorkout());
}