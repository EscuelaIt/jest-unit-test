const { isEven, divide } = require('./../truthiness');

describe('Pruebas de isEven', () => {

  test('Debería ser true con números pares', () => {
    expect(isEven(10)).toBeTruthy();
    expect(isEven(12)).toBeTruthy();
    expect(isEven(14)).toBeTruthy();
    expect(isEven(8)).toBeTruthy();
  });

  test('Debería ser false con números impares', () => {
    expect(isEven(11)).toBeFalsy();
    expect(isEven(9)).toBeFalsy();
    expect(isEven(3)).toBeFalsy();
    expect(isEven(1)).toBeFalsy();
  });

});

describe('Pruebas de divide', () => {

  test('Debería dividir', () => {
    expect(divide(10, 2)).toEqual(5);
    expect(divide(8, 2)).toEqual(4);
    expect(divide(20, 2)).toEqual(10);
  });

  // test('Debería dividir con cero', () => {
  //   expect(divide(10, 0)).toBeNull();
  //   expect(divide(232, 0)).toBeNull();
  //   expect(divide(45, 0)).toBeNull();
  //   expect(divide(343, 0)).toBeNull();
  // });

  test('Debería lanzar una exp cuando el denonimador sea cero', () => {

    const func =  () => {
      return divide(232, 0);
    }

    expect(func).toThrow();
    expect(() => divide(232, 0)).toThrow();
    expect(() => divide(121, 0)).toThrow();
    expect(() => divide(343, 0)).toThrow();
    expect(() => divide(342, 0)).toThrow();
  });

});