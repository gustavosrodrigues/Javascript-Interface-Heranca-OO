import { Cliente } from "../Cliente.js";
export class Conta{  
    
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if (this.constructor == Conta) { //Essa é a maneira de impedir a instaciação da classe 'Conta', já que ela é uma classe abstrata
            throw new Error("Você não deveria instanciar um objeto do tipo 'Conta'.")
        }
    }

    //encapsulmentos dos atributos
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


    // Método abstrato para sacar, deve ser reimplementado nas classes filhas
    sacar(valor){
        throw new Error(`Método 'sacar' não foi devidamente alterado.` );
    }

    // Método privado para sacar, é utilizado para criar taxas de saque customizadas
    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        throw new Error('Saldo insuficiente.');
    }

    //Método para depósitos, irá adicionar ao valor do saldo caso o depósito seja maior que '0'
    depositar(valor){
        if(valor <= 0)
        {
            throw new Error('O valor do depósito deve ser maior que 0.');
        } 
        this._saldo += valor;           
    }

    //Método para transferir valores de uma conta para outra, usa a combinação de saque e depósito
    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}