'use strict';

// Strict mode helps to catch and display errors in our logs
// Misspelling the hasDriversLicense variable would normally fail silently.
// Strict mode catches this and errors out. 

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive!');

// Strict mode also prevents us from using protected variable names

// const interface = 'Audio';
// const private = 534;
// const if = 23;

// function logger() {
//     console.log('My name is Stephen');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);


// Function declaration
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }
// const age1 = calcAge1(1991);

// Function expression
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }
// const age2 = calcAge2(1991);

// Arrow functions
// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age1, age2, age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1991, 'Stephen'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired. 🥳`);
//         return -1;
//     }    
// }

// console.log(yearsUntilRetirement(1991, 'Stephen'));
// console.log(yearsUntilRetirement(1886, 'John'));

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const stephen = ['Stephen', 'Fillers', 2022 - 1991,];

// Exercise
// const calcAge = function(birthYear) {
//     return 2022 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add Elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove Elements
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);
// const shifted = friends.shift();
// console.log(friends);
// console.log(shifted);

// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Boberto'));

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
// }

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])


// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, LastName, age and friends');

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log(`We don't have that information about Jonas`);
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';

// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function() {
//         // console.log(this);
//         this.age = 2037 - this.birthYear;
//         return this.age
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// }

// // console.log(jonas.calcAge());

// // console.log(jonas.age);
// // console.log(jonas.age);
// // console.log(jonas.age);
// console.log(jonas.getSummary());

// for (let rep = 1; rep <= 100; rep++) {
//     console.log(`Lifting weights repitition ${rep} 🏋🏼`);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {

//     // Reading an array
//     // console.log(jonasArray[i], typeof jonasArray[i]);

//     // Filling types array
//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2022 - years[i]);
// }

// console.log(ages);

// continue and break
// console.log('---ONLY STRINGS---')
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== 'string') continue;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log('---BREAK WITH NUMBER---')
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === 'number') break;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`Starting exercise ${exercise}`);
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weights repitition ${rep} 🏋🏼`)
//     }
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repitition ${rep} 🏋🏼`);
//     rep++;
// }

// let dice = Math.floor(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.floor(Math.random() * 6) + 1;
// }

// console.log(`Congrats, you rolled a ${dice}`);