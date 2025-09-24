function calcularCirculo() {
    let raio;
    let entradaValida = false;

    // Loop para garantir que a entrada seja um número válido
    while (!entradaValida) {
        raio = prompt("Digite o raio do círculo:");
        
        if (raio === null) {
            // Usuário cancelou a operação
            document.getElementById("resultado").innerHTML = "Operação cancelada.";
            return;
        }

        // Validação da entrada: verifica se é um número e se é positivo
        if (!isNaN(raio) && raio.trim() !== "" && parseFloat(raio) >= 0) {
            raio = parseFloat(raio);
            entradaValida = true;
        } else {
            alert("Entrada inválida. Por favor, digite um número positivo.");
        }
    }
    
    // Constante para o valor de PI
    const PI = Math.PI;

    // Cálculo da área e do perímetro
    const area = PI * (raio * raio);
    const perimetro = 2 * PI * raio;
    
    // Exibindo o resultado na página HTML
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `
        <p>Dados do Círculo com raio **${raio}**:</p>
        <p>Área: **${area.toFixed(2)}**</p>
        <p>Perímetro: **${perimetro.toFixed(2)}**</p>
    `;
}