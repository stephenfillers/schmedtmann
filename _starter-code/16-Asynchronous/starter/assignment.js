'use strict';

// Assignment 1

const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         Number(data.population) / 1000000
//       ).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
// `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
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

// const whereAmI = function (lat, lng) {
//   getLocationJSON(lat, lng, 'There was an issue during geocoding')
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

// whereAmI('52.508', '13.381');
// whereAmI('19.037', '72.873');
// whereAmI('-33.933', '18.474');

// Assignment 2

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imagesContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imagesContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error(`Image not found`));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// Assignment 3

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imagesContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imagesContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error(`Image not found`));
    });
  });
};

// const loadNPause = async function () {
//   let currentImg;
//   try {
//     currentImg = await createImage('img/img-1.jpg');
//     await wait(2);
//     currentImg.style.display = 'none';
//     currentImg = await createImage('img/img-2.jpg');
//     await wait(2);
//     currentImg.style.display = 'none';
//     currentImg = await createImage('img/img-3.jpg');
//     await wait(2);
//     currentImg.style.display = 'none';
//   } catch (err) {
//     console.log(err);
//   }
//   createImage;
// };

const loadAll = async function (imgArr) {
  console.log(imgArr);
  // const imgs = await imgArr.map(async img => {
  //   console.log(img);
  //   return await createImage(img);
  // });

  const imgs = await Promise.all(imgArr.map(img => createImage(img)));
  imgs.forEach(img => img.classList.add('parallel'));

  console.log(imgs);
};

const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

// loadNPause();
loadAll(imgArr);
