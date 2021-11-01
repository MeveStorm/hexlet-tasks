/* eslint-disable import/prefer-default-export, prefer-const */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const getMax = (array) => {
  if (array.length === 0) return null;
  let [max, ...restArray] = array;
  for (const num of restArray) {
    if (num > max) max = num;
  }
  return max;
};

export { getMax };
// END
