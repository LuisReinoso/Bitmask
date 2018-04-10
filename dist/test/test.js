"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe('Impresion de valores', () => {
    let bitmask = new src_1.Bitmask(['hola', 'mundo']);
    it('Deberia retorar los valores', () => {
        const resultado = bitmask.valores;
        chai_1.expect(resultado).to.deep.equal(['hola', 'mundo']);
    });
    it('Deberia retorar valores - mascaras', () => {
        const resultado = bitmask.mascaraInversa;
        chai_1.expect(resultado).to.deep.equal({ 'hola': 1, 'mundo': 2 });
    });
    it('Deberia retorar mascaras - valores', () => {
        const resultado = bitmask.mascaras;
        chai_1.expect(resultado).to.deep.equal({ 1: 'hola', 2: 'mundo' });
    });
});
//# sourceMappingURL=test.js.map