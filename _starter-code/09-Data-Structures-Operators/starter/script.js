'use strict';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri ', 'sat ', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Old method of adding an object to an object
  // openingHours: openingHours,

  // ES6 method of adding an object to an object
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//////////////////////////////////////////////////////////////////////
// Destructuring Objects
//////////////////////////////////////////////////////////////////////

// Destructuring using default property names

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Destructuring using custom variable names

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values (with a custom variable name added in for starterMenu)

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// Because we want to continue using a and b as variable names, we can't redefine them with let or const
// In JavaScript, you can't start a new line with curly braces, so you have to wrap them in parenthesis

// ({ a, b } = obj);
// console.log(a, b);

// Nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Destructuring into function parameters by passing in an object

// restaurant.orderDelivery({
//   time: '20:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

//////////////////////////////////////////////////////////////////////
// Destructuring Arrays
//////////////////////////////////////////////////////////////////////

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables without destructuring
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching variables with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//////////////////////////////////////////////////////////////////////
// Spread operator '...'
//////////////////////////////////////////////////////////////////////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArray = [1, 2, ...arr];
// console.log(newArray);

// These two produce the same results, but spread makes it easier
// console.log(...newArray);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Spread works on all iterables.
// Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str];
// console.log(letters, '', 'S.');

// Real-world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy);
// console.log(restaurant);

//////////////////////////////////////////////////////////////////////
// Rest Pattern and Parameters
//////////////////////////////////////////////////////////////////////

// Destructuring

// Arrays
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// Functions

// Function with rest operator
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
//   return sum;
// };

// add(2, 3, 4, 6);

// Function with spread operator
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('Mushrooms', 'Peppies', 'olives', 'slugs', 'snails');

//////////////////////////////////////////////////////////////////////
// Short Circuiting (&& and ||)
//////////////////////////////////////////////////////////////////////

// console.log('--- OR ---');

// Using short circuiting with OR

// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// Using a ternary operator
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('--- AND ---');

// Using short circuiting with AND

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'Spinach');
// }

// const pizza = restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');

//////////////////////////////////////////////////////////////////////
// Nullish Coalescing Operator
//////////////////////////////////////////////////////////////////////

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish = null and undefined, not 0 or ' '
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//////////////////////////////////////////////////////////////////////
// Logical Assignment Operators
//////////////////////////////////////////////////////////////////////

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// Using short circuiting
// rest1.numberGuests = rest1.numGuests || 10;
// rest2.numberGuests = rest2.numGuests || 10;
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);

// Using logical assignment operators
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);

// Using logical nullish assignment operators
// Accounts for properties having an intentional value of 0
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

//////////////////////////////////////////////////////////////////////
// The for-of loop
//////////////////////////////////////////////////////////////////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// Leveraging destructuring in a for-of loop and using entries() to track the index
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:`, el);
// }

// console.log([...menu.entries()]);

//////////////////////////////////////////////////////////////////////
// Enhanced object literals
//////////////////////////////////////////////////////////////////////

// See openingHours above
// console.log(restaurant.openingHours);

// You can omit the 'function' keyword in object methods (see order() above)
// You can now compute key names, not just values
// console.log(openingHours);

//////////////////////////////////////////////////////////////////////
// Optional chaining
//////////////////////////////////////////////////////////////////////

// Older way
// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// ES2020 way - optional chaining
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri ', 'sat ', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}.`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// // const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];
// console.log(users[0]?.name ?? 'User array empty');

//////////////////////////////////////////////////////////////////////
// Looping over objects
//////////////////////////////////////////////////////////////////////

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// Property KEY / VALUE Pairs
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

//////////////////////////////////////////////////////////////////////
// Sets
//////////////////////////////////////////////////////////////////////

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// ordersSet.clear();

// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// A good use case for Sets is to remove duplicates from arrays
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staff);
// console.log(staffUnique);

// console.log(new Set(staff).size);
// console.log(new Set('stephenfillers').size);

//////////////////////////////////////////////////////////////////////
// Maps
//////////////////////////////////////////////////////////////////////

// const rest = new Map();

// Note: The set value returns a value
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('closed', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// Map iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(question.get(answer === question.get('correct')));

// Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

//////////////////////////////////////////////////////////////////////
// Strings: Part 1
//////////////////////////////////////////////////////////////////////

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// String methods always return a new string. Strings are primitives and are therefore immutable.
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat 😅');
//   } else console.log('You got lucky! 😃');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// Why does a primitive have methods? JavaScript converts the primitive to an object:
// console.log(new String('Jonas'));
// console.log(typeof new String('Jonas'));

//////////////////////////////////////////////////////////////////////
// Strings: Part 2
//////////////////////////////////////////////////////////////////////

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix capitalization in name
// const passenger = 'jOnAs'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// const fixCapitalization = function (name) {
//   const nameLower = name.toLowerCase();
//   return name[0].toUpperCase() + nameLower.slice(1);
// };

// console.log(fixCapitalization('sTEpHen'));

// Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// Replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// Practice Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food, and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//////////////////////////////////////////////////////////////////////
// Strings: Part 3
//////////////////////////////////////////////////////////////////////

// Split

// console.log('a+very+nice+string'.split('+'));
// console.log('Stephen Fillers'.split(' '));

// const [firstName, lastName] = 'Stephen Fillers'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const namesUpper = [];
//   for (const n of name.toLowerCase().split(' ')) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   return namesUpper.join(' ');
// };

// console.log(capitalizeName('jessica ann smith davis'));
// console.log(capitalizeName('stephen fillers'));

// Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(40, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(40, '+'));

// const maskCreditCard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(12345647));
// console.log(maskCreditCard(1234564784561354));
// console.log(maskCreditCard('1234564784561354'));

// Repeat
// const message2 = 'Bad weather... All departures delayed...    ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(13);

//////////////////////////////////////////////////////////////////////
// String Methods practice
//////////////////////////////////////////////////////////////////////

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  let [type, from, to, time] = flight.split(';');
  type = type.replaceAll('_', ' ').trim();
  type = type.startsWith('Delayed') ? `⚠️ ${type}` : type;
  time = time.replace(':', 'h');

  const output = `${type} from ${getCode(from)} to ${getCode(
    to
  )} (${time})`.padStart(45);
  console.log(output);
}
