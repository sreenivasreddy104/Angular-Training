"use strict";
class Customer {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get lastName() {
        return this._lastName;
    }
}
let customer = new Customer("Bandi", "Sreeni");
console.log(customer.firstName);
console.log(customer.lastName);
