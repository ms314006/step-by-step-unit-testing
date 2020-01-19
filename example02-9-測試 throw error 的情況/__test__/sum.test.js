const sum = require('../sum.js');

test('以 1 和 3 執行 sum 會得到 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('以 string 執行 sum 會丟出錯', () => {
  const expected = 'The parameter type is not number!';

  const actual = () => { sum('1', 1); };

  expect(actual).toThrowError(expected);
});
