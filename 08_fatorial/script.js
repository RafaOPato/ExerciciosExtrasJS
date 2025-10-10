let n;
let i;
let fatorial;

n = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));
if (isNaN(n) || n === null) {
    alert("Entrada inválida.");
} 
else if (n < 0) {
    alert("Erro: não existe fatorial de número negativo.");
} 
else {
    let saida = ""; 
    if (n > 20) {
        alert("Número muito grande! O resultado pode não ser preciso devido aos limites de precisão do JavaScript.");
    }
    
    fatorial = 1; 
    saida += `${n}! = `; 
    for (i = n; i >= 1; i--) {
        fatorial = fatorial * i;
        if (i > 1) {
            saida += `${i} x `; 
        } else {
            saida += `${i} = `; 
        }
    }
    saida += fatorial;

    alert(saida);
}