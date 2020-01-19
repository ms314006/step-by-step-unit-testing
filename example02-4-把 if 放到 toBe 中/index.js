const sum = (a, b) => a + b;

const expect = (actual) => ({
  toBe: (expected) => {
    if (actual === expected) {
      console.log('正確！');
    } else {
      console.log('錯誤！');
    };
  },
});

expect(sum(1, 3)).toBe(4);
