import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
    }

    // Método sacar do ContaSalario, usa o _sacar pois ele adiciona uma taxa customizada
    sacar(valor) {
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    }

}