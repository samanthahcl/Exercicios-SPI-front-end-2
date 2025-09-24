var aulas = Number(prompt("Digite o número de aulas do semestre: "));
var faltas = Number(prompt("Digite o número de faltas do aluno: "));
var p1 = Number(prompt("Digite a nota da P1: "));
var p2 = Number(prompt("Digite a nota da P2: "));

var frequencia = ((aulas - faltas) / aulas) * 100;
var media = (p1 + p2) / 2;
var situacao = "";

if (frequencia < 75) {
    situacao = "Reprovado por faltas";
} else if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    var rec = Number(prompt("Digite a nota da recuperação:"));
    var final = (media + rec) / 2;
    if (final >= 5) {
        situacao = "Aprovado na recuperação";
    } else {
        situacao = "Reprovado na recuperação";
    }
} else {
    situacao = "Reprovado por nota";
}

alert(
    "Número de aulas: " + aulas +
    "\nFaltas: " + faltas +
    "\nFrequência: " + frequencia.toFixed(1) + "%" +
    "\nNota P1: " + p1 +
    "\nNota P2: " + p2 +
    "\nSituação final: " + situacao
);
