const { createArray } = require('./../array');

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));

describe('Pruebas de createArray', () => {

  test('Debería crear un array a partir de un string', () => {

    expect(createArray('Hola', '')).toContain('H');
    expect(createArray('Hola', '').length).toEqual(4);
    expect(createArray('10:08:12', ':')).toContain('10');
    expect(createArray('10:08:12', ':').length).toEqual(3);
  });

  test('Otras pruebas', () => {

    expect(createArray('123', '')).toContain('1');
    expect(createArray('123', '').length).toEqual(3);
  });
});

describe('Pruebas de createArray 2', () => {

  test('Debería crear un array a partir de un string', () => {

    expect(createArray('Hola', '')).toContain('H');
    expect(createArray('Hola', '').length).toEqual(4);
    expect(createArray('10:08:12', ':')).toContain('10');
    expect(createArray('10:08:12', ':').length).toEqual(3);
  });

  test('Otras pruebas', () => {

    expect(createArray('123', '')).toContain('1');
    expect(createArray('123', '').length).toEqual(3);
  });
});