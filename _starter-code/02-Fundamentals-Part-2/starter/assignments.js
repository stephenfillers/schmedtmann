// 'use strict';

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const dolphinsAverage = calcAverage(44, 23, 71);
// const koalasAverage = calcAverage(65, 54, 49);

// const dolphinsAverage2 = calcAverage(85, 54, 41);
// const koalasAverage2 = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`The Dolphins (${avgDolphins} vs ${avgKoalas}) win! 🏆`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`The Koalas (${avgKoalas} vs ${avgDolphins}) win! 🏆`);
//     } else {
//         console.log("Sorry, no one wins!");
//     }
// }

// checkWinner(dolphinsAverage, koalasAverage);
// checkWinner(dolphinsAverage2, koalasAverage2);

// function callTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [callTip(bills[0]), callTip(bills[1]), callTip(bills[2])];
// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(tips, totals);


// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}).`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}).`);

// }

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
};

console.log(bills, tips, totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));