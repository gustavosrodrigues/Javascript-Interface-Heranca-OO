import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
   
   constructor(cliente, agencia){
    super(0, cliente, agencia)
    ContaCorrente.numeroDeContas += 1; // Gera o número total de contas correntes criadas
    }

    // Método sacar do ContaCorrente, usa o _sacar pois ele adiciona uma taxa customizada
    sacar(valor){
        let taxa = 1.1;        
        return this._sacar(valor, taxa);
        //super._sacar(valor, taxa) também é válido nessa situação
    }

}
