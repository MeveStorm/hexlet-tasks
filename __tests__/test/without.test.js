import _ from 'lodash';

test('without', () => {
  expect(_.without([1, 2, 3, 4], 1, 3)).toEqual([2, 4]);
  expect(_.without([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(_.without([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  expect(_.without([], 1)).toEqual([]);
});
