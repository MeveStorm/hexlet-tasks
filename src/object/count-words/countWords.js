/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import _ from 'lodash';

const countWords = (text) => {
  const result = {};
  const words = _.words(text.toLowerCase());
  for (const world of words) {
    result[world] = (result[world] ?? 0) + 1;
  }
  return result;
};
export default countWords;
