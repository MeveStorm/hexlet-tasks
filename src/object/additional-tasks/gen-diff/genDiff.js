/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import _ from 'lodash';

const hasChanged = (obj1, obj2, key) => {
  if (obj1[key] === obj2[key]) return 'unchanged';
  return 'changed';
};

const hasDeleted = (obj1, obj2, key) => _.has(obj1, key) && !_.has(obj2, key);

const genDiff = (obj1, obj2) => {
  const build = {};
  const keys = Object.keys({ ...obj1, ...obj2 });

  for (const key of keys) {
    if (_.has(obj1, key) && _.has(obj2, key)) { // если ключ существует в обоих объектах
      build[key] = hasChanged(obj1, obj2, key); // проверяем был ли он изменен
    } else build[key] = hasDeleted(obj1, obj2, key) ? 'deleted' : 'added';
  }
  return build;
};

export default genDiff;
