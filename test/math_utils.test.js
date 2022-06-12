const math = require('../src/math_utils');

test('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
});

test('adds 5 + 6 + 10 to equal 21', () =>{
    expect(math.sum(5, 6, 10)).toBe(21);
});