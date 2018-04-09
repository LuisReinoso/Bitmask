"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Bitmask = /** @class */ (function () {
    function Bitmask(valores) {
        this._numeroMascaras = 0;
        this._mascaras = {}; // numero - mascara -> string - valor
        this._mascarasInversa = {}; // string-valor -> numero-mascara
        this._valores = [];
        if (Array.isArray(valores)) {
            this.agregarValores(valores);
        }
        else {
            this.agregarValor(valores);
        }
    }
    /**
     * Agrega un elemento los objetos de mascara/mascara inversa
     * almacena el valor y aumenta el numero de mascaras
     *
     * @param {string} valor Valor a ser almacenado en las mascaras
     * @returns {number} numero mascara correspondiente al nuevo elemento
     * @memberof Bitmask
     */
    Bitmask.prototype.agregarValor = function (valor) {
        var nuevaMascara = Math.pow(2, this._numeroMascaras);
        this._mascaras[nuevaMascara] = valor; // mascara -> valor
        this._mascarasInversa[valor] = nuevaMascara; // valor -> mascara
        this._valores.push(valor);
        this._numeroMascaras = this._numeroMascaras + 1;
        return nuevaMascara;
    };
    /**
     * Itera valores para agregarlos a la mascara/mascara inversa
     * agrega a la lista de valores y aumenta el numero de mascaras
     *
     * @param {number[]} valores
     * @returns arreglo con las mascaras ingresadas
     * @memberof Bitmask
     */
    Bitmask.prototype.agregarValores = function (valores) {
        var _this = this;
        var mascaras = [];
        valores.forEach(function (valor) { return mascaras.push(_this.agregarValor(valor)); });
        return mascaras;
    };
    /**
     * Averigua si tiene un valor en el arreglo de valores
     *
     * @param {string} valor Valor a se buscado en el arreglo
     * @returns verdadero si se encuentra en el arreglo sino falso
     * @memberof Bitmask
     */
    Bitmask.prototype.hasValor = function (valor) {
        return this._valores.indexOf(valor) !== -1;
    };
    /**
     * Averigua la mascara para un determinado valor
     *
     * @param {string} valor valor a determinar su mascara
     * @returns {(number|undefined)} numero de mascara o sino indefinido
     * @memberof Bitmask
     */
    Bitmask.prototype.getMascaraParaUnValor = function (valor) {
        var mascara = 0;
        if (lodash_1.has(this._mascarasInversa, valor)) {
            return this._mascarasInversa[valor];
        }
        return undefined;
    };
    /**
     * Calcula la mascara para cuando esta presentes los valores
     *
     * @param {string[]} valores valores a verificar
     * @returns {number}  numero mascara para esos valores
     * @memberof Bitmask
     */
    Bitmask.prototype.getMascarasParaValores = function (valores) {
        var _this = this;
        var mascara = 0;
        // TODO: Validar que siempre esten los valores
        valores.forEach(function (valor) {
            if (lodash_1.has(_this._mascarasInversa, valor)) {
                mascara = mascara + _this._mascarasInversa[valor];
            }
        });
        return mascara;
    };
    /**
     * Retornar los valores incluidos en una mascara
     *
     * @param {number} mascara numero de mascara
     * @returns {string[]} valores incluidos en la mascara
     * @memberof Bitmask
     */
    Bitmask.prototype.getValoresApartirDeMascara = function (mascara) {
        if (mascara === -1) {
            mascara = Math.pow(2, this._numeroMascaras) - 1;
        }
        var valores = [];
        for (var key in this._mascaras) {
            if (this._mascaras.hasOwnProperty(key)) {
                // Operacion AND, si es mayor valor existe en esa mascara
                if ((mascara & parseInt(key)) > 0) {
                    valores.push(this._mascaras[key]);
                }
            }
        }
        return valores;
    };
    Object.defineProperty(Bitmask.prototype, "valores", {
        get: function () {
            return this._valores;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bitmask.prototype, "mascaras", {
        get: function () {
            return this._mascaras;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bitmask.prototype, "mascaraInversa", {
        get: function () {
            return this._mascarasInversa;
        },
        enumerable: true,
        configurable: true
    });
    return Bitmask;
}());
exports.Bitmask = Bitmask;
//# sourceMappingURL=index.js.map