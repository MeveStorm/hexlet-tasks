import _ from 'lodash';

const takeOldest = (users, num = 1) => {
  const usersSortAge = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return usersSortAge.slice(0, num);
};

export default takeOldest;
