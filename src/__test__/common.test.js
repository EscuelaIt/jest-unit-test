const { sum, createPerson } = require('./../common');

describe('Pruebas de sum', () => {

  test('Debería sumar', () => {
    // Arrange + Act
    const rta = sum(5,3);
    // Assert
    expect(rta).toBe(8);
    expect(sum(10,10)).toBe(20);
    expect(sum(2,5)).toBe(7);
    expect(sum(5,2)).toBe(7);
  });

  test('Debería ser mayor que', () => {
    expect(sum(10,10)).toBeGreaterThanOrEqual(20);
  });
});

describe('Pruebas de createPerson', () => {

  test('Debería crear un obj persona a partir de parámetros', () => {
    const obj = createPerson('Nicolas', 26);
    expect(obj).toStrictEqual({name: 'Nicolas', age: 26});
  });
});