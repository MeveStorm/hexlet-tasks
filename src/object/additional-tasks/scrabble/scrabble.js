import _ from 'lodash';

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const scrabble = (str, word) => {
  const objStr = _.countBy(str);
  const objWordEntries = Object.entries(_.countBy(word.toLowerCase()));

  for (const [key, value] of objWordEntries) {
    const isNotLetter = objStr[key] === undefined;
    if (objStr[key] < value || isNotLetter) {
      return false;
    }
  }

  return true;
};

export default scrabble;
