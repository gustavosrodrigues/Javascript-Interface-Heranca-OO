export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1; //Valor padrão da bonificação
        this._senha;
    }

    //Checa se o valor do parâmetro é igual ao atributo 'senha' do funcionário
    autenticar(senha) {
        return senha == this._senha;
    }

    //Gera uma nova senha para o funcionário
    cadastrarSenha(senha) {
        this._senha = senha;
    }
}