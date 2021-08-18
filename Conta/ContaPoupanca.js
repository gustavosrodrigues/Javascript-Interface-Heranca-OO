import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    static numeroDeContas = 0;

    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
        ContaPoupanca.numeroDeContas += 1; // Gera o número total de contas correntes criadas
    }

    // Método sacar do ContaPoupanca, usa o _sacar pois ele adiciona uma taxa customizada
    sacar(valor) {
        let taxa = 1.02;
        return this._sacar(valor, taxa);
    }
  
}