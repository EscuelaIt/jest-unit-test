const { delay } = require('./../async');

describe('Pruebas de async', () => {

  test('Debería retornar true con then', () => {
    return delay(1000)
    .then((rta) => {
      expect(rta).toBeTruthy();
    })
  });

  test('Debería retornar true con async/await', async () => {
    const rta = await delay(1000);
    expect(rta).toBeTruthy();
  });
});