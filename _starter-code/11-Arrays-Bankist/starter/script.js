'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }.`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    account => account.username === inputTransferTo.value
  );

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else {
    console.log('Transfer invalid');
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add Movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    // Clear inputs
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    inputCloseUsername.value = inputClosePin.value = '';

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE method - Returns a new array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE method - mutates the original array
// console.log(arr.splice(2));
// arr.splice(-1); // Deletes the last item in an array
// console.log(arr);
// Splice supports 2 paramters. The first being the index and the second being the count (num of items to delete)

// Reverse - mutates the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// Concat = Does not mutate original array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(arr);

// Join
// console.log(letters.join(' - '));

// at method - can replace the traditional bracket notation (arr[arr.length - 1], arr[0], etc.)
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr.at(-1));

// Works on strings too!
// console.log('stephen'.at(-1));

// forEach loops

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposted $${movement}.`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew $${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposted $${movement}.`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew $${Math.abs(movement)}`);
//   }
// });

// forEach with Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// Coding challenge 1
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = [...dogsJulia];
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy. 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Map method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSDFor = [];
// for (const mov of movements) {
//   movementsUSDFor.push(mov * eurToUsd);
// }

// const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDFor);
// console.log(movementsUSDArrow);

// const movementsDescriptions = movements.map(
//   (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} $${Math.abs(mov)}`
// );

// console.log(movementsDescriptions);

// console.log(accounts);

// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(deposits);
// console.log(withdrawals);

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) depositsFor.push(mov);
// }

// console.log(depositsFor);
// console.log(movements);

// Reduce - reduce has a new parameter in its callback function. The accumulator!
// accumulator -> snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// Maximum value

// const maximum = account1.movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, account1.movements[0]);

// console.log(maximum);

// Coding challenge #2

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce((acc, dog) => acc + dog, 0) / adults.length;
//   return average;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1);
// console.log(avg2);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// Pipeline
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov);

// console.log(totalDepositsUSD);

// Coding challenge 3

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(humanAges);
//   return humanAges;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// Find method

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// The includes method checks only for equality
// console.log(movements.includes(-130));

// SOME Method
// Checks if any item in an array meets a specified condition
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// EVERY Method
// Checks if all items in an array meet a specified condition
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// Flat method
// Moves items from nested arrays into the main array (only goes one level deep)
// Accepts a 'depth' argument flat(depth)
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// Flatmap method
// Combines flat with map
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// Sort method
// Mutates the original array

// Strings
// const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
// console.log(owners);
// console.log(owners.sort());
// console.log(owners);

// Numbers
// console.log(movements);

// Ascending order
// If a is greater than b, trigger a swap (return 1)
// If a is less than b, do not trigger a swap (return -1)

// movements.sort((a, b) => {
//   return a > b ? 1 : -1;
// });

// Drastically simplified
// movements.sort((a, b) => a - b);
// console.log(movements);

// Descending order
// If a is greater than b, do not trigger a swap (return -1)
// If a is less than b, trigger a swap (return 1)

// movements.sort((a, b) => b - a);
// console.log(movements);

// const arr = [1, 2, 3, 4, 5, 6, 7];

// Empty arrays and the fill method
// const x = new Array(7);
// console.log(x);

// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// Array.from (cleaner than using new Array(7) and filling it)
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const rolls = Array.from({ length: 100 }, (_, i) => {
//   return Math.floor(Math.random() * 20) + 1;
// });
// console.log(rolls);

// const rollsNoDupe = [...new Set(rolls)];
// console.log(rollsNoDupe);

// const ordered = rolls.sort((a, b) => a - b);
// console.log(ordered);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

// labelBalance.addEventListener('click', function () {
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   const uiText = movementsUI2.map(el =>
//     Number(el.textContent.replace('€', ''))
//   );
//   console.log(uiText);
// });

// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = arr1.slice();
// console.log(arr1 === arr2);
// console.log(arr2);

// Array methods practice

// Exercise 1: Calculate the total deposits in the whole application

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// Exercise 2: Calculate the number of deposits that are over $1,000

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// console.log(numDeposits1000);

// const numDeposits1000Reduce = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// // Why doesn't the ++ operator work when we wanted to increment the count variable from above?

// console.log(numDeposits1000Reduce);

// const numDeposits1000ReducePrefixed = accounts
// .flatMap(acc => acc.movements)
// .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000ReducePrefixed);

// Prefixed operator

// let a = 10;
// console.log(a++);

// ++ DOES increment the value, but it RETURNS the original value
// Swapping this to the prefixed variant (++a) will resolve the problem

// console.log(++a);

// Exercise 3: Let's overcomplicate things with reduce!

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       sum[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sum;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// Exercise 4: Title caser

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Coding challenge #4

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1.

// dogs.forEach(dog => {
//   dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
// });
// console.log(dogs);

// // 2.

// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(
//   dogSarah.curFood > dogSarah.recommendedFood
//     ? 'Too much food!'
//     : 'Too little food!'
// );

// // 3.

// const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
//   (owners, dog) => {
//     owners[
//       dog.curFood > dog.recommendedFood
//         ? 'ownersEatTooMuch'
//         : 'ownersEatTooLittle'
//     ].push(...dog.owners);
//     return owners;
//   },
//   { ownersEatTooMuch: [], ownersEatTooLittle: [] }
// );

// // 4.

// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much.`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little.`);

// // 5.

// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// // 6.

// const checkEatingOkay = dog =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;

// console.log(dogs.some(checkEatingOkay));

// // 7.

// console.log(dogs.filter(checkEatingOkay));

// // 8.

// const sortedDogs = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(sortedDogs);
