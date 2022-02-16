import _ from 'lodash';

const groupBy = (arrayObj, property) => {
  const cb = (acc, obj) => {
    if (!_.has(acc, obj[property])) { // проверяем, есть ли данное свойство в аккумуляторе
      acc[obj[property]] = [];
    }
    acc[obj[property]].push(obj);
    return acc;
  };
  return arrayObj.reduce(cb, {});
};

export default groupBy;
