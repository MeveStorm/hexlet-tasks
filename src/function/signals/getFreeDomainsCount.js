import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const getFreeDomainsCount = (emails) => emails
  .map((email) => email.split('@')[1])
  .filter((email) => freeEmailDomains.includes(email))
  .reduce((acc, email) => ({ ...acc, [email]: (get(acc, email) ?? 0) + 1 }), {});

export default getFreeDomainsCount;
