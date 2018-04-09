"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../src/index");
describe('Impresion de valores', function () {
    var bitmask = new index_1.Bitmask(['hola', 'mundo']);
    it('Deberia retorar los valores', function () {
        var resultado = bitmask.valores;
        chai_1.expect(resultado).to.deep.equal(['hola', 'mundo']);
    });
    it('Deberia retorar valores - mascaras', function () {
        var resultado = bitmask.mascaraInversa;
        chai_1.expect(resultado).to.deep.equal({ 'hola': 1, 'mundo': 2 });
    });
    it('Deberia retorar mascaras - valores', function () {
        var resultado = bitmask.mascaras;
        chai_1.expect(resultado).to.deep.equal({ 1: 'hola', 2: 'mundo' });
    });
});
//# sourceMappingURL=test.js.map