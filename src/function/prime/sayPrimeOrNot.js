/* eslint-disable no-console */

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const sayPrimeOrNot = (num) => console.log(isPrime(num));

export default sayPrimeOrNot;
