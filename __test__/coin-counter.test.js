import coinCounter from '../src/js/coin-counter.js';

describe('coinCounter', () => {

  // write the test to see if the output number is equal to the input number
  test('should return input number', () => {
    const change = coinCounter(4.99);
    expect(change).toEqual(4.99);
  });
});

