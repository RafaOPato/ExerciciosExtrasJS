let num = parseInt(prompt("Digite o número para ver a tabuada:"));
if (isNaN(num) || num === null) {
    alert("Entrada inválida. Por favor, digite um número.");
} else {
    let resultado;
    let saida = `Tabuada do ${num}:\n\n`;
    for (let i = 1; i <= 10; i++) {
        resultado = num * i;
        saida += `${num} x ${i} = ${resultado}\n`;
    }
    alert(saida);
}