const sum = (a, b) => a + b;

const expect = (actual, expected) => {
  if (actual === expected) {
    console.log('正確！');
  } else {
    console.log('錯誤！');
  };
}

expect(sum(1, 3), 4);
