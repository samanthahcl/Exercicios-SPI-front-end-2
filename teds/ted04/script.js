function iniciarAnalise() {
    const totalPessoas = 15;
    let maiorAltura = -Infinity;
    let menorAltura = Infinity;
    let somaAlturaMasculino = 0;
    let countMasculino = 0;
    let countFeminino = 0;

    // Loop para coletar dados das 15 pessoas
    for (let i = 1; i <= totalPessoas; i++) {
        // Coletar altura com validação
        let altura;
        let alturaValida = false;
        while (!alturaValida) {
            altura = prompt(`Pessoa ${i} de ${totalPessoas}: Digite a altura (em metros, ex: 1.75):`);
            if (altura === null) {
                document.getElementById("resultado").innerHTML = "Análise cancelada.";
                return;
            }
            if (!isNaN(altura) && parseFloat(altura) > 0) {
                altura = parseFloat(altura);
                alturaValida = true;
            } else {
                alert("Altura inválida. Digite um valor numérico positivo.");
            }
        }

        // Coletar gênero com validação
        let genero;
        let generoValido = false;
        while (!generoValido) {
            genero = prompt(`Pessoa ${i} de ${totalPessoas}: Digite o gênero (M para Masculino, F para Feminino):`);
            if (genero === null) {
                document.getElementById("resultado").innerHTML = "Análise cancelada.";
                return;
            }
            genero = genero.toUpperCase(); // Converte para maiúscula
            if (genero === 'M' || genero === 'F') {
                generoValido = true;
            } else {
                alert("Gênero inválido. Digite M ou F.");
            }
        }

        // Lógica para encontrar a maior e menor altura
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        if (altura < menorAltura) {
            menorAltura = altura;
        }

        // Lógica para contar e somar as alturas
        if (genero === 'M') {
            somaAlturaMasculino += altura;
            countMasculino++;
        } else if (genero === 'F') {
            countFeminino++;
        }
    }

    // Calcula a média de altura dos homens, se houver
    let mediaMasculino = 0;
    if (countMasculino > 0) {
        mediaMasculino = somaAlturaMasculino / countMasculino;
    }

    // Exibe os resultados na página HTML
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `
        <h3>Resultados da Análise:</h3>
        <ul>
            <li>Maior altura do grupo: <strong>${maiorAltura.toFixed(2)}m</strong></li>
            <li>Menor altura do grupo: <strong>${menorAltura.toFixed(2)}m</strong></li>
            <li>Média de altura das pessoas do gênero Masculino: <strong>${mediaMasculino.toFixed(2)}m</strong></li>
            <li>Número de pessoas do gênero Feminino: <strong>${countFeminino}</strong></li>
        </ul>
    `;
}