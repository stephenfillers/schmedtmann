// Challenge 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`The ${this.make} has accelerated to ${this.speed} km/h.`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(
//     `The ${this.make} has braked and is now traveling at ${this.speed} km/h.`
//   );
// };

// const bmw = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.accelerate();

// Mercedes.accelerate();
// Mercedes.brake();
// Mercedes.accelerate();
// Mercedes.accelerate();

// Challenge 2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} has accelerated to ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(
      `The ${this.make} has braked and is now traveling at ${this.speed} km/h.`
    );
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// const bmw = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.accelerate();

// Mercedes.accelerate();
// Mercedes.brake();
// Mercedes.accelerate();
// Mercedes.accelerate();

// bmw.speedUS = 30;
// console.log(bmw);
// console.log(bmw.speedUS);

// Challenge 3

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(
//     `Your ${this.make}'s battery has been charged to ${this.charge}%.`
//   );
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `The ${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%.`
//   );
// };

// const electricCar = new EV('Tesla', 120, 23);
// electricCar.chargeBattery(90);

// electricCar.accelerate();
// electricCar.accelerate();
// electricCar.accelerate();
// electricCar.accelerate();
// electricCar.accelerate();
// electricCar.brake();

// Challenge 4
class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
    console.log(
      `Your ${this.make}'s battery has been charged to ${this.#charge}%.`
    );
    return this;
  };

  accelerate = function () {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `The ${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%.`
    );
    return this;
  };
}

const tesla = new EVCl('Tesla', 120, 25);
tesla.accelerate().accelerate().brake().chargeBattery(50);
