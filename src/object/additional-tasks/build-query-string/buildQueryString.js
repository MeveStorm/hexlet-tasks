/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const buildQueryString = (obj) => {
  const keys = Object.keys(obj).sort();
  const queryString = [];

  for (const key of keys) {
    queryString.push(`${key}=${obj[key]}`);
  }

  return queryString.join('&');
};

export default buildQueryString;
