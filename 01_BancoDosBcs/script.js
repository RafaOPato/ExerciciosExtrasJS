// --- Variáveis de Inicialização ---
let nome = "rafa";
let saldo = 1000.00;
let senha = 1234;
let tentativas = 0;
let nomeDigitado;
let senhaDigitada;
let opcao;
let valor;
const formatarMoeda = (valor) => "R$ " + valor.toFixed(2).replace('.', ',');


while (tentativas < 3) {
    nomeDigitado = prompt("Digite seu nome:");

    if (nomeDigitado === null) break; 
    
    if (nomeDigitado === nome) {
        alert("Nome certo!");

        senhaDigitada = parseInt(prompt("Digite sua senha:"));
    
        if (isNaN(senhaDigitada)) {
            alert("Entrada de senha inválida.");
            tentativas++;
            continue;
        }

        if (senhaDigitada === senha) {
            alert("Acesso permitido!");

            do {
                let menu = "------ CAIXA ELETRONICO BANCO DOS BC-------\n";
                menu += "1 - Consultar Saldo\n";
                menu += "2 - Sacar\n";
                menu += "3 - Depositar\n";
                menu += "4 - Sair\n";
                menu += "Escolha uma opção:";

                opcao = parseInt(prompt(menu));

                if (isNaN(opcao)) {
                    alert("Opção inválida!");
                    continue;
                }

                switch (opcao) {
                    case 1:
                        alert(`Saldo atual: ${formatarMoeda(saldo)}`);
                        break;

                    case 2:
                        valor = parseFloat(prompt("Informe o valor para saque: R$ "));
                        if (isNaN(valor) || valor <= 0) {
                             alert("Valor de saque inválido.");
                        } else if (valor > saldo) {
                            alert("Saldo insuficiente!");
                        } else {
                            saldo -= valor;
                            alert("Saque realizado com sucesso!\nSaldo atual: " + formatarMoeda(saldo));
                        }
                        break;

                    case 3:
                        valor = parseFloat(prompt("Informe o valor para depósito: R$ "));
                         if (isNaN(valor) || valor <= 0) {
                             alert("Valor de depósito inválido!");
                        } else {
                            saldo += valor;
                            alert("Depósito realizado com sucesso!\nSaldo atual: " + formatarMoeda(saldo));
                        }
                        break;

                    case 4:
                        alert("Obrigado por usar nosso caixa eletrônico!");
                        break;

                    default:
                        alert("Opção inválida!");
                        break;
                }
            } while (opcao !== 4); 

            tentativas = 3; 
        } else {
            alert("Senha incorreta! Tente novamente.");
            tentativas++;
        }
    } else {
        alert("Nome Incorreto!");
        tentativas++;
    }
} 
if (tentativas === 3) {
    alert("Número máximo de tentativas excedido. Acesso bloqueado.");
}