import _ from 'lodash';

const fill = (mainObj, fieldName, copyObj) => {
  const newObj = fieldName.length === 0 ? copyObj : _.pick(copyObj, fieldName);
  return Object.assign(mainObj, newObj);
};

export default fill;
