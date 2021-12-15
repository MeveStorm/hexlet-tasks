/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const convert = (...dateArray) => {
  const result = [];
  for (const date of dateArray) {
    result.push(new Date(...date).toDateString());
  }
  return result;
};

export default convert;
