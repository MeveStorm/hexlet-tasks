/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const get = (obj, path) => {
  let current = obj;
  for (const key of path) {
    if (Object.prototype.hasOwnProperty.call(current, key)) {
      current = current[key];
    } else return null;
  }
  return current;
};

export default get;
