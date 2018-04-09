declare class Bitmask {
    private _numeroMascaras;
    private _mascaras;
    private _mascarasInversa;
    private _valores;
    constructor(valores: string[] | string);
    /**
     * Agrega un elemento los objetos de mascara/mascara inversa
     * almacena el valor y aumenta el numero de mascaras
     *
     * @param {string} valor Valor a ser almacenado en las mascaras
     * @returns {number} numero mascara correspondiente al nuevo elemento
     * @memberof Bitmask
     */
    agregarValor(valor: string): number;
    /**
     * Itera valores para agregarlos a la mascara/mascara inversa
     * agrega a la lista de valores y aumenta el numero de mascaras
     *
     * @param {number[]} valores
     * @returns arreglo con las mascaras ingresadas
     * @memberof Bitmask
     */
    agregarValores(valores: string[]): number[];
    /**
     * Averigua si tiene un valor en el arreglo de valores
     *
     * @param {string} valor Valor a se buscado en el arreglo
     * @returns verdadero si se encuentra en el arreglo sino falso
     * @memberof Bitmask
     */
    hasValor(valor: string): boolean;
    /**
     * Averigua la mascara para un determinado valor
     *
     * @param {string} valor valor a determinar su mascara
     * @returns {(number|undefined)} numero de mascara o sino indefinido
     * @memberof Bitmask
     */
    getMascaraParaUnValor(valor: string): number | undefined;
    /**
     * Calcula la mascara para cuando esta presentes los valores
     *
     * @param {string[]} valores valores a verificar
     * @returns {number}  numero mascara para esos valores
     * @memberof Bitmask
     */
    getMascarasParaValores(valores: string[]): number;
    /**
     * Retornar los valores incluidos en una mascara
     *
     * @param {number} mascara numero de mascara
     * @returns {string[]} valores incluidos en la mascara
     * @memberof Bitmask
     */
    getValoresApartirDeMascara(mascara: number): string[];
    readonly valores: string[];
    readonly mascaras: any;
    readonly mascaraInversa: any;
}
export { Bitmask };
