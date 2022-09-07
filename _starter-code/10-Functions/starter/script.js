'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // Old, ES5 way of setting default values
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// You can skip a default parameter by setting it to undefined
// createBooking('LH123', undefined, 25);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// Higher order functions that accept callbacks
// Callbacks are functions that we don't call ourselves. Functions call them!

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
// const high5 = function () {
//   console.log('🖐🏼');
// };

// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// Functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Stephen');

// Challenge: Rewrite the above as an arrow function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hello')('Jonas');

// Call and apply methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LM',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// const book = lufthansa.book;

// Results in an error
// book(23, 'Sarah Williams');

// Call method

/* 
The call() method calls the function with a given 'this' value and arguments provided individually.
*/

// book.call(eurowings, 23, 'Sarah Williams');
// book.call(lufthansa, 421, 'Stephen Fillers');
// book.call(swiss, 110, 'Briana Fillers');

// Apply method

/* 
Same as the call method, but takes an array of arguments rather than individual arguments.
The apply method isn't used as much anymore because you can simply spread an array.
*/

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// // vs
// book.call(swiss, ...flightData);

// console.log(eurowings);
// console.log(lufthansa);
// console.log(swiss);

// Bind method

/*
The bind() method creates a new function that, when called, has its this keyword set to the provided value.
*/

// book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);

// bookEW23('Stephen Fillers');

// With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// In an event handler, the 'this' keyword always points to the element in which the handler is attached
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// With the bind method, here's what this function really looks like:
// const addVAT = value => value + value * 0.23

// console.log(addVAT(200));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// Immediately invoked function expressions (IIFE)

// Lets write this function as IIFE
// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// IIFE (phonetically 'iffy')
// (function () {
//   console.log('This will never run again');
// const isPrivate = 23;
// })();

// console.log(isPrivate);

// (() => console.log('This will also never run again. Arrow function version'))();

// Closures
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

/*
// Formal Definition
A closure is the closed-over variable environment of the execution context 
in which a function was created, even after that execution context is gone.

// Informal Definition
A closure gives a function access to all the variables of its parent function,
even after that parent function has returned. The function keeps a reference to
its outer scope, which preserves the scope chain throughout time.

// Even less formal
A closure makes sure that a function doesn't lose connection to variables that
existed at the function's birth place.

// Even less formal than that
A closure is like a backpack that a function carries around wherever it goes. 
This backpack has all the variables that were present in the environment where
the function was created.

*/

// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// // Reassigning f function
// h();
// f();

// Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers.`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);
