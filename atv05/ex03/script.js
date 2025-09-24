function analisarNumeros() {
    let n = parseInt(prompt("Quantos números você deseja inserir?"));
    
    // Valida a entrada de N
    if (isNaN(n) || n <= 0) {
        alert("Entrada inválida. Por favor, digite um número inteiro maior que zero.");
        return;
    }
    
    let menor, maior, soma = 0;
    
    // Loop para coletar os números
    for (let i = 0; i < n; i++) {
        let numero;
        let entradaValida = false;
        
        while (!entradaValida) {
            numero = prompt(`Digite o ${i + 1}º número:`);
            
            if (numero === null) {
                // Usuário cancelou
                document.getElementById("resultado").innerHTML = "Operação cancelada.";
                return;
            }
            
            // Valida se a entrada é um número
            if (!isNaN(numero) && numero.trim() !== "") {
                numero = parseFloat(numero);
                
                // Inicializa menor e maior com o primeiro número
                if (i === 0) {
                    menor = numero;
                    maior = numero;
                } else {
                    // Atualiza o menor e o maior
                    if (numero < menor) {
                        menor = numero;
                    }
                    if (numero > maior) {
                        maior = numero;
                    }
                }
                
                // Adiciona o número à soma
                soma += numero;
                entradaValida = true;
                
            } else {
                alert("Entrada inválida. Por favor, digite um número.");
            }
        }
    }
    
    // Exibe o resultado na página HTML
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `
        <p>O menor valor é: <strong>${menor}</strong></p>
        <p>O maior valor é: <strong>${maior}</strong></p>
        <p>A soma dos valores é: <strong>${soma.toFixed(2)}</strong></p>
    `;
}