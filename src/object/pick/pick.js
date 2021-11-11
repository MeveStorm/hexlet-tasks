/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* Решение без использования _.has */
const isPropertiesSame = (key, properties) => {
  for (const property of properties) {
    if (key === property) {
      return true;
    }
  }
  return false;
};

const pick = (obj, properties) => {
  const result = {};

  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    if (isPropertiesSame(key, properties)) {
      result[key] = value;
    }
  }
  return result;
};

export default pick;
