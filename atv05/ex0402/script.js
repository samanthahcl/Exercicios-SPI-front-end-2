function calcularSalarioDinamico() {
    let salarioInicial = prompt("Digite o salário inicial do funcionário (ex: 1000.00):");
    salarioInicial = parseFloat(salarioInicial.replace(',', '.')); // Garante que o valor seja um número, aceitando vírgula ou ponto.

    // Validação da entrada
    if (isNaN(salarioInicial) || salarioInicial <= 0) {
        alert("Entrada inválida. Por favor, digite um valor numérico válido maior que zero.");
        return;
    }
    
    let salario = salarioInicial;
    let aumento = 0.0015;
    let anoAtual = new Date().getFullYear();
    
    for (let ano = 1996; ano <= anoAtual; ano++) {
        if (ano === 1996) {
            salario = salarioInicial * (1 + 0.0015);
        } else {
            // A partir de 1997, o aumento dobra
            aumento *= 2;
            salario += salario * aumento;
        }
    }
    
    const resultado2 = document.getElementById("resultado2");
    resultado2.innerHTML = `<p>O salário atual do funcionário é: <strong>R$ ${salario.toFixed(2).replace('.', ',')}</strong></p>`;
}