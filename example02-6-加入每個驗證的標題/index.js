const sum = (a, b) => a + b;

const expect = (actual) => ({
  toBe: (expected) => {
    if (actual === expected) {
      console.log('正確！');
    } else {
      console.log('錯誤！');
    };
  },
  toBeNaN: () => {
    if (isNaN(actual)) {
      console.log('正確！');
    } else {
      console.log('錯誤！');
    };
  },
});

const test = (title, callback) => {
  console.log(title);
  callback();
}

test('以 1 和 3 執行 sum 會得到 4', () => {
  expect(sum(1, 3)).toBe(4);
})

test('以 1 和 3 執行 sum 會得到 4', () => {
  expect(sum(1, 3)).toBe(5);
})

test('NaN 會通過 toBeNaN', () => {
  expect(NaN).toBeNaN(NaN);
})
