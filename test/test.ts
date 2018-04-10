import { expect } from 'chai';
import { Bitmask } from '../src';

describe('Impresion de valores', () => {
    let bitmask = new Bitmask(['hola','mundo']);
    it('Deberia retorar los valores', () => {
        const resultado = bitmask.valores;
        expect(resultado).to.deep.equal(['hola','mundo']);
    });

    it('Deberia retorar valores - mascaras', () => {
        const resultado = bitmask.mascaraInversa;
        expect(resultado).to.deep.equal({'hola':1, 'mundo': 2});
    });

    it('Deberia retorar mascaras - valores', () => {
        const resultado = bitmask.mascaras;
        expect(resultado).to.deep.equal({1:'hola', 2:'mundo'});
    });

});