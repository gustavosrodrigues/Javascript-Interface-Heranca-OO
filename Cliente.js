export class Cliente{

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
        this._senha;        
    }     

    //Gera uma nova senha para o cliente, recriada pois ele não herda de funcionário
    cadastrarSenha(senha) {
        this._senha = senha;
    }

    //Checa se o valor do parâmetro é igual ao atributo 'senha' do cliente
    autenticar(senha) {
        return senha == this._senha;
    }
}