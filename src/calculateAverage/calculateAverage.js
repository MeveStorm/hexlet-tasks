/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const calculateAverage = (arrayTemperature) => {
  let sum = 0;
  if (arrayTemperature.length === 0) return null;
  for (const temperature of arrayTemperature) {
    sum += temperature;
  }
  return sum / arrayTemperature.length;
};

export default calculateAverage;
