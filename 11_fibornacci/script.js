let n;
let i;
let a;
let b;
let proximo;

n = parseInt(prompt("Digite a quantidade de números da sequência de Fibonacci:"));

if (isNaN(n) || n === null || n <= 0) {
    alert("Entrada inválida. Por favor, digite um número inteiro positivo.");
} else {
    a = 0;
    b = 1;
    let saida = "Sequência de Fibonacci: ";

    if (n >= 1) {
        saida += a;
    }

    if (n >= 2) {
        saida += ", " + b;
    }

    for (i = 3; i <= n; i++) {
        proximo = a + b;
        saida += ", " + proximo;
        a = b;
        b = proximo;
    }

    alert(saida);
}