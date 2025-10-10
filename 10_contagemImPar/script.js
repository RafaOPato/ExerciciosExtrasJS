let i;
let numero;
let pares = 0;
let impares = 0;

for (i = 1; i <= 10; i++) {
    numero = parseInt(prompt("Digite o " + i + "º número:"));

    if (isNaN(numero)) {
        alert("Entrada inválida. Tente novamente.");
        i--;
        continue;
    }

    if (numero % 2 === 0) {
        pares = pares + 1;
    } else {
        impares = impares + 1;
    }
}

alert("Quantidade de números pares: " + pares);
alert("Quantidade de números ímpares: " + impares);