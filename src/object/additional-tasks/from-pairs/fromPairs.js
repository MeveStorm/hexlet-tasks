/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const fromPairs = (objectValues) => {
  const obj = {};

  for (const [key, value] of objectValues) {
    obj[key] = value;
  }

  return obj;
};

export default fromPairs;
