import isObject from 'lodash/isObject.js';
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const cloneDeep = (obj) => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = isObject(value) ? cloneDeep(value) : value;
  }
  return newObj;
};

export default cloneDeep;
