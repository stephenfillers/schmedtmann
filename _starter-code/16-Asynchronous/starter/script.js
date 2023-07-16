'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        Number(data.population) / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           Number(data.population) / 1000000
//         ).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');

// const getCountryAndNeighborData = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbor country (2)
//     const neighbor = data.borders?.[0];
//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.response);

//       // Render country 2
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighborData('canada');

//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

// const request = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/portugal'
// );
// console.log('The request', request);

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg} (${response.status})`);
//     }

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);

//       // Country 2
//       const neighbor = data[0].borders?.[0];
//       console.log(neighbor);
//       if (!neighbor) throw new Error('No neighbor found!');

//       return getJSON(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`,
//         'Country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

// Promise.resolve('Resolve promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.75) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 500);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second elapsed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds elapsed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds elapsed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 second elapsed');
//   });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('rejected')).catch(x => console.error(x));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(new Error(err))
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const getLocationJSON = function (lat, lng, errorMsg = 'Something went wrong') {
//   return fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=857731901911233897292x114268`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg}, (${response.status})`);
//     }

//     return response.json();
//   });
// };

// const getCountryJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(errorMsg);
//     }

//     return response.json();
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       console.log('Pos', pos);
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return getLocationJSON(lat, lng, 'There was an issue during geocoding');
//     })
//     .then(data => {
//       if (data.success === false) {
//         throw new Error(`${data.error.message}`);
//       }
//       console.log(`Your are in ${data.city}, ${data.country}`);
//       console.log('The data', data);
//       return getCountryJSON(
//         `https://countries-api-836d.onrender.com/countries/alpha/${data.prov}`,
//         "Can't find that country"
//       );
//     })
//     .then(data => {
//       console.log('The country data', data);
//       renderCountry(data);
//     })
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(err);
//     })
//     .finally(function () {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', whereAmI);

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const position = await getPosition();
//     const { latitude: lat, longitude: lng } = position.coords;

//     const geoCodeResponse = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=857731901911233897292x114268`
//     );

//     if (!geoCodeResponse.ok) {
//       throw new Error('Something went wrong with your coordinates');
//     }

//     const geoCodeData = await geoCodeResponse.json();

//     const countryResponse = await fetch(
//       `https://countries-api-836d.onrender.com/countries/name/${geoCodeData.country}`
//     );

//     if (!countryResponse.ok) {
//       throw new Error('Something went wrong with your location');
//     }
//     const [countryData] = await countryResponse.json();
//     renderCountry(countryData);

//     return `You are in ${geoCodeData.city}, ${geoCodeData.country}`;
//   } catch (err) {
//     renderError(`Something went wrong (${err.message})`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1: Getting your location');
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   console.log('1: Getting your location');

//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}`);
//   }
//   console.log('3: Finished getting location');
// })();

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('Portugal', 'Germany', 'Austria');

// Promise.race

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/egypt`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/mexico`),
//   ]);

//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://countries-api-836d.onrender.com/countries/name/tanzania`),
//   timeout(5),
// ])
//   .then(data => console.log(data[0]))
//   .catch(err => console.error(err));

// Promise.allSettled

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ]).then(data => console.log(data));

// Promise.any [ES2021]

Promise.any([
  Promise.resolve('Successful promise'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(data => console.log(data))
  .catch(err => console.error(err));
