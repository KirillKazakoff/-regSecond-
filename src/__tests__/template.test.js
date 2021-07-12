import Validator from '../js/app';

test('empty value', () => {
    const check = () => Validator.transformNumbers('');
    expect(check).toThrow('empty value');
});

test.each([
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
])('.add($#) rus number check', (str, expected) => {
    const result = Validator.transformNumbers(str);
    expect(result).toBe(expected);
});

test('china number check', () => {
    const checkStr = '+86 000 000 0000';
    const result = Validator.transformNumbers(checkStr);
    expect(result).toBe('+860000000000');
});
