const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (r) {
  const forecasts = [];

  for (let i = 0; i < r.length; i++) {
    const dayCount = i + 1;
    const currentTemp = r[i];

    if (i === 0) {
      forecasts.push(`... ${currentTemp}°C in ${dayCount} days`);
    } else if (i === r.length - 1) {
      forecasts.push(`${currentTemp}°C in ${dayCount} days ...`);
    } else {
      forecasts.push(`${currentTemp}°C in ${dayCount} days`);
    }
  }
  return forecasts.join(' ... ');
};

console.log(printForecast(data2));
