import { Funcionario } from "./Funcionario.js";

//Classe 'Diretor' herda atributos e métodos da classe 'Funcionário'
export class Diretor extends Funcionario{
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);
        this._bonificacao = 2; //Valor customizado da bonificação
    }
}