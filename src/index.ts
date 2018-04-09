import { has } from 'lodash';

class Bitmask {
  private _numeroMascaras: number;
  private _mascaras: any;
  private _mascarasInversa: any;
  private _valores: string[];

  constructor(valores: string[]| string) {
    this._numeroMascaras = 0;
    this._mascaras = {};  // numero - mascara -> string - valor
    this._mascarasInversa = {}; // string-valor -> numero-mascara
    this._valores = [];

    if (Array.isArray(valores)) {
        this.agregarValores(valores);
    } else {
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
  public agregarValor(valor: string): number {
    const nuevaMascara = Math.pow(2, this._numeroMascaras);
    this._mascaras[nuevaMascara] = valor; // mascara -> valor
    this._mascarasInversa[valor] = nuevaMascara; // valor -> mascara
    this._valores.push(valor);
    this._numeroMascaras = this._numeroMascaras + 1;
    return nuevaMascara;
  }

  /**
   * Itera valores para agregarlos a la mascara/mascara inversa
   * agrega a la lista de valores y aumenta el numero de mascaras
   *
   * @param {number[]} valores
   * @returns arreglo con las mascaras ingresadas
   * @memberof Bitmask
   */
  public agregarValores(valores: string[]): number[] {
    const mascaras: number[] = [];
    valores.forEach(valor => mascaras.push(this.agregarValor(valor)));
    return mascaras;
  }

  /**
   * Averigua si tiene un valor en el arreglo de valores
   *
   * @param {string} valor Valor a se buscado en el arreglo
   * @returns verdadero si se encuentra en el arreglo sino falso
   * @memberof Bitmask
   */
  public hasValor(valor: string): boolean {
    return this._valores.indexOf(valor) !== -1;
  }

  /**
   * Averigua la mascara para un determinado valor
   *
   * @param {string} valor valor a determinar su mascara
   * @returns {(number|undefined)} numero de mascara o sino indefinido
   * @memberof Bitmask
   */
  public getMascaraParaUnValor(valor: string): number | undefined {
    let mascara = 0;

    if (has(this._mascarasInversa, valor)) {
      return this._mascarasInversa[valor];
    }

    return undefined;
  }

  /**
   * Calcula la mascara para cuando esta presentes los valores
   *
   * @param {string[]} valores valores a verificar
   * @returns {number}  numero mascara para esos valores
   * @memberof Bitmask
   */
  public getMascarasParaValores(valores: string[]): number {
    let mascara = 0;

    // TODO: Validar que siempre esten los valores
    valores.forEach(valor => {
      if (has(this._mascarasInversa, valor)) {
        mascara = mascara + this._mascarasInversa[valor];
      }
    });

    return mascara;
  }

  /**
   * Retornar los valores incluidos en una mascara
   *
   * @param {number} mascara numero de mascara
   * @returns {string[]} valores incluidos en la mascara
   * @memberof Bitmask
   */
  public getValoresApartirDeMascara(mascara: number): string[] {
    if (mascara === -1) {
        mascara = Math.pow(2, this._numeroMascaras) - 1;
    }

    const valores = [];

    for (const key in this._mascaras) {
        if (this._mascaras.hasOwnProperty(key)) {
            // Operacion AND, si es mayor valor existe en esa mascara
            if ((mascara & parseInt(key)) > 0) {
                valores.push(this._mascaras[key]);
            }
        }
    }

    return valores;
  }

  get valores() {
      return this._valores;
  }

  get mascaras() {
      return this._mascaras;
  }

  get mascaraInversa() {
      return this._mascarasInversa;
  }
}

export {Bitmask};