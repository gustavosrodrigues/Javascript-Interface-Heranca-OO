import { Funcionario } from "./Funcionario.js";

//Classe 'Gerente' herda atributos e métodos da classe 'Funcionário'
export class Gerente extends Funcionario{
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);
        this._bonificacao = 1.1; //Valor customizado da bonificação
    }
}