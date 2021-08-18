export class SistemaAutenticacao {
    //Método estático para efetuar uma versão básica de login
    /*Esse método é um exemplo de uma funcionalidade Duck Type, 
    onde não importa o tipo da váriavel que é chamada no parâmetro
    mas sim se ele possui a funcionalidade necessária, no caso, o método 'autenticar' */
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.eAutenticavel(autenticavel)) { //Chamada de método que checa se é possível autenticar essa pessoa
            return autenticavel.autenticar(senha); //Método que checa se a senha está correta, retorna 'true' ou 'false'
        }
        return false;        
    }

    //Método que checa se é possível efetuar a autenticação, retorna 'true' ou 'false'
    static eAutenticavel(autenticavel) { 
        return 'autenticar' in autenticavel && //Verifica se existe 'autenticar' na classe da instância que irá como parâmetro
                autenticavel.autenticar instanceof Function; //Verifica se 'autenticar' é um método
    }
}