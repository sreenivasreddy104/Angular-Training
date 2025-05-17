class Customer {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value
    }

    get lastName(): string {
        return this._lastName
    }
}


let customer = new Customer("Bandi", "Sreeni");
console.log(customer.firstName);
console.log(customer.lastName);
