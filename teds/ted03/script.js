let aulas = parseInt(prompt("Digite o número de aulas do semestre: "));
let faltas = parseInt(prompt("Digite a quantidade de faltas do aluno: "));
let p1 = parseFloat(prompt("Digite a nota da primeira prova (P1): "));
let p2 = parseFloat(prompt("Digite a nota da segunda prova (P2): "));

let percentualPresenca = ((aulas - faltas) / aulas) * 100;
let media = (p1 + p2) / 2;

let recuperacao = null;
let situacao = "";

if (percentualPresenca < 75) {
    situacao = "Reprovado por falta";
} else {
    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5 && media < 7) {
        recuperacao = parseFloat(prompt("Digite a nota da prova de recuperação: "));
        let novaMedia = (media + recuperacao) / 2;
        if (novaMedia >= 5) {
            situacao = "Aprovado após recuperação";
        } else {
            situacao = "Reprovado após recuperação";
        }
    } else {
        situacao = "Reprovado por nota";
    }
}

console.log("Número de aulas do semestre: " + aulas);
console.log("Número de faltas do aluno: " + faltas);
console.log("Percentual de presença do aluno: " + percentualPresenca.toFixed(2) + "%");
console.log("Primeira nota (P1): " + p1);
console.log("Segunda nota (P2): " + p2);

if (recuperacao !== null) {
    console.log("Nota da recuperação: " + recuperacao);
}

console.log("Situação final do aluno: " + situacao);
