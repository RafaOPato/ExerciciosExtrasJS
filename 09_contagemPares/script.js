let i;
let soma = 0;

for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        soma = soma + (i * i);
    }
}

console.log("A soma dos quadrados dos números pares de 1 a 50 é: " + soma);