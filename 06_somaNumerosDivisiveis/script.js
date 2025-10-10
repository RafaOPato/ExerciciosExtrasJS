let i;
let soma = 0;

for (i = 1; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        soma = soma + i;
    }
}

console.log("A soma dos números divisíveis por 3 e 5 entre 1 e 1000 é: " + soma);