import _ from 'lodash';

const takeOldest = (users, num = 1) => {
  const usersSortAge = _.sortBy(users, [function (item) {
    return Date.parse(item.birthday);
  }]);
  return usersSortAge.slice(0, num);
};

export default takeOldest;
