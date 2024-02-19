 // Importa jsdom
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Configura jsdom
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
   });
});
beforeEach(function() {
  // Configura el DOM antes de cada prueba
  document.body.innerHTML = '<button id="botonAgregar">Agregar</button>';
  botonAgregar = document.getElementById('botonAgregar');
});
describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
   });
});
 


const {Repository,Activity} = require('../scripts/index');

