Реализуйте функцию `takeOldest()`, которая принимает на вход список пользователей и возвращает самых взрослых. 
Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице. 
Экспортируйте данную функцию по умолчанию.

### Пример использования

```js
const users = [
{ name: 'Tirion', birthday: 'Nov 19, 1988' },
{ name: 'Sam', birthday: 'Nov 22, 1999' },
{ name: 'Rob', birthday: 'Jan 11, 1975' },
{ name: 'Sansa', birthday: 'Mar 20, 2001' },
{ name: 'Tisha', birthday: 'Feb 27, 1992' },
{ name: 'Chris', birthday: 'Dec 25, 1995' },
];

takeOldest(users);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];
```