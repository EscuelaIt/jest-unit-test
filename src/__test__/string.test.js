const { reverseString } = require('./../string');

describe('Pruebas de reverseString', () => {

  test('Debería transformar un string al revez', () => {
    expect(reverseString('Hola')).toBe('aloH');
    expect(reverseString('Hola mundo')).toMatch(/odnum/);
    expect(reverseString()).toBeNull();
  });

});