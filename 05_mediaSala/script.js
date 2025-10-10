let qtdAlunos;
let mediaAluno;
let soma;
let mediaSala;
let i;

qtdAlunos = parseInt(prompt("Digite a quantidade de alunos (mínimo 5):"));

if (isNaN(qtdAlunos) || qtdAlunos === null) {
    alert("Entrada inválida.");
} 
else if (qtdAlunos < 5) {
    alert("Erro: é necessário pelo menos 5 alunos.");
} 
else {
    soma = 0; 
    for (i = 1; i <= qtdAlunos; i++) {
        mediaAluno = parseFloat(prompt(`Digite a média do aluno ${i}:`));
        if (isNaN(mediaAluno) || mediaAluno < 0) {
            alert("Média inválida. Tentativa cancelada.");
            i--; 
            continue; 
        }
        soma = soma + mediaAluno;
    }
 
    mediaSala = soma / qtdAlunos;
    alert(`A média da sala foi: ${mediaSala.toFixed(2)}`);

    if (mediaSala >= 6) {
        alert("A média da sala é MAIOR ou IGUAL a 6.");
    } 
    else {
        alert("A média da sala é MENOR que 6.");
    }
}