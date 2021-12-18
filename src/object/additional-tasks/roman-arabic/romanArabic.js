/* eslint no-restricted-syntax: [off, ForOfStatement] */

const roman = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

const romanEntries = Object.entries(roman).reverse();

const keySearchRoman = (num) => {
  const keys = Object.keys(roman);
  let result = 0;
  for (const key of keys) {
    if (key > num) return result;
    result = key;
  }
  return result;
};

const keySearchArabic = (num) => {
  for (const [key, value] of romanEntries) {
    if (num.startsWith(value)) {
      return key;
    }
  }
  return null;
};

const toRoman = (num) => {
  let numArabic = num;
  let result = '';

  while (numArabic !== 0) {
    const key = keySearchRoman(numArabic);
    result += roman[key];
    numArabic -= key;
  }

  return result;
};

const isTranslationArabicCorrect = (num, answer) => num === toRoman(answer);

const toArabic = (num) => {
  let result = 0;
  let numRoman = num;

  while (numRoman.length !== 0) {
    const key = keySearchArabic(numRoman);
    if (key === null) return false;
    result += Number(key);
    numRoman = numRoman.slice(roman[key].length);
  }
  if (!isTranslationArabicCorrect(num, result)) return false;
  return result;
};

export { toRoman, toArabic };
