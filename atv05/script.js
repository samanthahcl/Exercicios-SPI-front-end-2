// 1) Crescimento Populacional
function crescimentoPopulacional() {
    let popA = 80000;
    const taxaA = 0.03;
    let popB = 200000;
    const taxaB = 0.015;
    let anos = 0;

    while (popA < popB) {
        popA += popA * taxaA;
        popB += popB * taxaB;
        anos++;
    }

    console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
    console.log(`População de A após ${anos} anos: ${Math.round(popA)} habitantes.`);
    console.log(`População de B após ${anos} anos: ${Math.round(popB)} habitantes.`);
}

// 2) Pares e Ímpares
function contarParesImpares() {
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < 10; i++) {
        const numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log(`Quantidade de números pares: ${pares}`);
    console.log(`Quantidade de números ímpares: ${impares}`);
}

// 3) Maior, Menor e Soma
function calcularValores() {
    const n = parseInt(prompt("Quantos números você deseja inserir?"));
    let menor = Infinity;
    let maior = -Infinity;
    let soma = 0;

    for (let i = 0; i < n; i++) {
        const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        if (numero < menor) {
            menor = numero;
        }
        if (numero > maior) {
            maior = numero;
        }
        soma += numero;
    }

    console.log(`Menor valor: ${menor}`);
    console.log(`Maior valor: ${maior}`);
    console.log(`Soma dos valores: ${soma}`);
}

// 4) Aumento Salarial
function calcularSalario() {
    let salario = 1000;
    let aumentoPercentual = 0.0015;

    for (let ano = 1996; ano <= new Date().getFullYear(); ano++) {
        salario += salario * aumentoPercentual;
        if (ano >= 1997) {
            aumentoPercentual *= 2;
        }
    }
    console.log(`O salário atual do funcionário é: R$ ${salario.toFixed(2)}`);
}

function calcularSalarioUsuario() {
    let salarioInicial = parseFloat(prompt("Informe o salário inicial do funcionário (ex: 1000):"));
    let salario = salarioInicial;
    let aumentoPercentual = 0.0015;

    for (let ano = 1996; ano <= new Date().getFullYear(); ano++) {
        salario += salario * aumentoPercentual;
        if (ano >= 1997) {
            aumentoPercentual *= 2;
        }
    }
    console.log(`O salário atual do funcionário é: R$ ${salario.toFixed(2)}`);
}

// 5) Área e Perímetro do Círculo
function calcularCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo:"));
    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;

    console.log(`Área do círculo: ${area.toFixed(2)}`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
}

// 6) Retorno de Investimento
function calcularInvestimento() {
    const capital = parseFloat(prompt("Informe o capital inicial (C):"));
    const tempo = parseInt(prompt("Informe o tempo em meses (t):"));
    const juros = parseFloat(prompt("Informe a taxa de juros mensal (i), em percentual:")) / 100;

    const montante = capital * Math.pow((1 + juros), tempo);

    console.log(`O retorno do investimento (montante) é: R$ ${montante.toFixed(2)}`);
}