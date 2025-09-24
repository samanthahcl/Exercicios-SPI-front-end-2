function calcularSalarioFixo() {
    let salario = 1000.00;
    let aumento = 0.0015; // 0,15%
    let anoAtual = new Date().getFullYear();
    
    for (let ano = 1996; ano <= anoAtual; ano++) {
        salario += salario * aumento;
        aumento *= 2; // Dobra o percentual do aumento para o próximo ano
    }
    
    const resultado1 = document.getElementById("resultado1");
    resultado1.innerHTML = `<p>O salário atual do funcionário é: <strong>R$ ${salario.toFixed(2).replace('.', ',')}</strong></p>`;
}