// const COUNTRY = "United States";
// const CONTINENT = "North America";
// let population = 330;
// const IS_ISLAND = false;
// const LANGUAGE = "English";

// console.log("Country:", COUNTRY, typeof COUNTRY);
// console.log("Continent:", CONTINENT, typeof CONTINENT);
// console.log("Population:", population, typeof population);
// console.log("Is an island?:", IS_ISLAND, typeof IS_ISLAND);
// console.log("Language:", LANGUAGE, typeof LANGUAGE);


// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;
// let markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

// let markMass = 87;
// let markHeight = 1.7526;
// let johnMass = 85;
// let johnHeight = 1.76;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;
// let markHigherBMI = markBMI > johnBMI;

// console.log(markBMI);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage =  (88 + 91 + 110) / 3;

// if (dolphinsAverage === koalasAverage) {
//     console.log("It's a tie")
// } else if (dolphinsAverage > koalasAverage) {
//     console.log(`The Dolphins (${dolphinsAverage}) defeat the Koalas (${koalasAverage})!`)
// } else {
//     console.log(`the Koalas (${koalasAverage}) defeat the Dolphins (${dolphinsAverage})!`)
// }

// const dolphinsAverageBonus1 = (97 + 112 + 101) / 3;
// const koalasAverageBonus1 =  (109 + 95 + 123) / 3;

// if (dolphinsAverageBonus1 >= 100 && dolphinsAverageBonus1 === koalasAverageBonus1) {
//     console.log("It's a tie")
// } else if (dolphinsAverageBonus1 >= 100 && dolphinsAverageBonus1 > koalasAverageBonus1) {
//     console.log(`The Dolphins (${dolphinsAverageBonus1}) defeat the Koalas (${koalasAverageBonus1})!`)
// } else if (koalasAverageBonus1 >= 100 && koalasAverageBonus1 > dolphinsAverageBonus1) {
//     console.log(`the Koalas (${koalasAverageBonus1}) defeat the Dolphins (${dolphinsAverageBonus1})!`)
// }

// const dolphinsAverageBonus2 = (97 + 112 + 101) / 3;
// const koalasAverageBonus2 =  (109 + 95 + 106) / 3;

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);