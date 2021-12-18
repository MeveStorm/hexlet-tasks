/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const hasMatch = (object, keysSearch, objectToSearch) => {
  for (const key of keysSearch) {
    if (object[key] !== objectToSearch[key]) return false;
  }

  return true;
};

const findWhere = (arrayObject, objectToSearch) => {
  const keysSearch = Object.keys(objectToSearch);
  for (const object of arrayObject) {
    if (hasMatch(object, keysSearch, objectToSearch)) return object;
  }

  return null;
};

export default findWhere;
