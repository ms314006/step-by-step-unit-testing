const sum = (a, b) => a + b;

const expect = (actual) => ({
  toBe: (expected) => {
    if (actual !== expected) {
      throw new Error(actual);
    };
  },
  toBeNaN: () => {
    if (!isNaN(actual)) {
      throw new Error(actual);
    };
  },
});

const test = (title, assert) => {
  try {
    assert();
    console.log(`O ${title}`);
  } catch(e) {
    console.log(`X ${title} ${e}`);
  }
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
