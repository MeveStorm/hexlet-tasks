import _ from 'lodash';

const groupBy = (arrayObj, property) => {
  const cb = (acc, obj) => {
    const groupName = obj[property];
    if (!_.has(acc, groupName)) { // проверяем, есть ли данное свойство в аккумуляторе
      acc[groupName] = [];
    }
    acc[groupName].push(obj);
    return acc;
  };
  return arrayObj.reduce(cb, {});
};

export default groupBy;
