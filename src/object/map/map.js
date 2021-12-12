import crc32 from 'crc-32';

/* eslint-disable no-param-reassign */
const make = () => [];

const getHashKey = (key) => {
  const hash = crc32.str(key);
  return Math.abs(hash) % 1000;
};

const hasCollision = (data, checkedKey) => data !== undefined && checkedKey !== data[0];

const set = (map, key, value) => {
  const index = getHashKey(key);
  const existedData = map[index];

  if (hasCollision(existedData, key)) {
    return false;
  }
  map[index] = [key, value];
  return true;
};

const get = (map, key, defaultValue = null) => {
  const index = getHashKey(key);
  const existedData = map[index];
  const [, value] = existedData || [];
  const hasNotExistedData = existedData === undefined;

  if (hasNotExistedData || hasCollision(existedData, key)) {
    return defaultValue;
  }
  return value;
};

export { make, set, get };
