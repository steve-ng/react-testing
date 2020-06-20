import Calculator from './Calculator';

test('simple example to match value', () => {
  const answer = 100;
  expect(answer).toEqual(100);
});

test('sum should add 2 input', () => {
    const result = Calculator.sum(1, 2);
    expect(result).toEqual(3);
})

test('multiply should multiply input', () => {
    const result = Calculator.multiply(1, 2)
    expect(result).toEqual(2);
})