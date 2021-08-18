import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//Simplifica a exibição
function display(...conteudo) {
    console.log(conteudo);
}

//Execução Principal
//Cliente e contas

const cliente1 = new Cliente("Ricardo", 11122233309);

const accCorrente = new ContaCorrente(cliente1, 1001);
accCorrente.depositar(500);
accCorrente.sacar(100);

const accPoupanca = new ContaPoupanca(50, cliente1, 1001);
accPoupanca.sacar(25);

const accSalario = new ContaSalario(cliente1, 1001);
accSalario.depositar(1300);
accSalario.sacar(300);

display(accPoupanca, accCorrente, accSalario);

//Funcionários

const gerente = new Gerente("Geraldo", 3000, 12334545600);
gerente.cadastrarSenha("123456");

const diretor = new Diretor("Astolfo", 5000, 32154687911);
diretor.cadastrarSenha("password");

cliente1.cadastrarSenha("123");

//'ValidaSenha' recebe a resposta de validação
const validaSenha1 = SistemaAutenticacao.login(gerente, "123456");
const validaSenha2 = SistemaAutenticacao.login(diretor, "password");
const validaSenha3 = SistemaAutenticacao.login(cliente1, "123");

display(validaSenha1, validaSenha2, validaSenha3);
