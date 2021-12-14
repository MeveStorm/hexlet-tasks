import _ from 'lodash';

const average = (...num) => {
  const quantity = num.length;
  const avg = quantity === 0 ? null : _.sum(num) / quantity;
  return avg;
};

export default average;
