const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('The parameter type is not number!');
  }
  return a + b;
};

module.exports = sum;
