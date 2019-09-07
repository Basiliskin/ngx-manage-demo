export class Person {
    persionID : string;
    fullName : string;
    cityID : number;
}
export class Car {
    carID : string;
    carType : string;
    gearType : number;
}

export class PersonCar {
    constructor(
        public persion_id : string,
        public car_id : string
    ){}
}
