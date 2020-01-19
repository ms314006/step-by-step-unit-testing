const sum = require('../sum.js');

test('以 1 和 3 執行 sum 會得到 4', () => {
  expect(sum(1, 3)).toBe(4);
});
