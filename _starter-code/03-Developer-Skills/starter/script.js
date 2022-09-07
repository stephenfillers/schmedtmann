// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// if (x === 23) {
//   console.log(23);
// }

// const test = hello => hello;

// console.log(test(88));

// const temparatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temparatures2 = [18, 7, 2, 9, 22, 14, 1, 'error', 6, 4, 11, 30, -10];

// const calcTempAmplitute = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     let currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;

//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log('Max:', max, 'Min:', min);
//   return max - min;
// };

// const amplitude = calcTempAmplitute(temparatures1, temparatures2);
// console.log('The amplitude is:', amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celsius',
//     // value: Number(prompt('Degrees celsius')),
//     value: 10,
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

//Using a debugger
// const calcTempAmplituteBug = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     let currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;

//     debugger;
//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log('Max:', max, 'Min:', min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplituteBug([3, 5, 1], [9, 4, 5]);
// console.log('The amplitude is:', amplitudeBug);
