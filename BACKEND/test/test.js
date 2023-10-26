// test/test.js
const chai = require('chai');
const agregarMultimedia = require('../multimedia.js');  // Ruta al archivo con la función a probar

const expect = chai.expect;

describe('Función agregarMultimedia', function() {
  it('debería agregar un elemento a la colección', function() {
    const coleccion = [1, 2, 3];
    const elemento = 4;
    const resultado = agregarMultimedia(coleccion, elemento);

    expect(resultado).to.include(elemento);
  });

  it('debería devolver la colección actualizada', function() {
    const coleccion = ['imagen1.jpg', 'imagen2.jpg'];
    const elemento = 'imagen3.jpg';
    const resultado = agregarMultimedia(coleccion, elemento);

    expect(resultado).to.deep.equal(['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg']);
  });

  it('debería manejar diferentes tipos de elementos', function() {
    const coleccion = ['imagen1.jpg', 42, { nombre: 'video.mp4' }];
    const elemento = [1, 2, 3];
    const resultado = agregarMultimedia(coleccion, elemento);

    expect(resultado).to.deep.equal(['imagen1.jpg', 42, { nombre: 'video.mp4' }, [1, 2, 3]]);
  });
});

