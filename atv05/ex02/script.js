function contarNumeros() {
    let pares = 0;
    let impares = 0;
    
    // Loop para pedir 10 números
    for (let i = 0; i < 10; i++) {
        let numero;
        let entradaValida = false;
        
        while (!entradaValida) {
            numero = prompt(`Digite o ${i + 1}º número inteiro:`);
            
            // Verifica se a entrada é um número e se é um número inteiro
            if (numero !== null && numero.trim() !== "" && !isNaN(numero) && Number.isInteger(parseFloat(numero))) {
                numero = parseInt(numero);
                entradaValida = true;
            } else {
                alert("Entrada inválida. Por favor, digite um número inteiro.");
            }
        }
        
        // Verifica se o número é par ou ímpar
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    
    // Exibindo o resultado na página HTML
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `
        <p>A quantidade de números pares é: <strong>${pares}</strong></p>
        <p>A quantidade de números ímpares é: <strong>${impares}</strong></p>
    `;
}