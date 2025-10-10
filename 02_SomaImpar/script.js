let contador = 0; 
let i;          

for (i = 1; i <= 300; i++) {
    if (i % 2 !== 0) {
        contador++;
    }
}

console.log("Quantidade de números ímpares de 1 a 300: " + contador);