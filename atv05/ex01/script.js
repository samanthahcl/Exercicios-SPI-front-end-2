function calcularCrescimento() {
    let popA = 80000;
    const taxaA = 0.03; // 3%
    let popB = 200000;
    const taxaB = 0.015; // 1.5%
    let anos = 0;
    
    // Loop para simular o crescimento anual
    while (popA < popB) {
        popA += popA * taxaA;
        popB += popB * taxaB;
        anos++;
    }
    
    // Exibindo o resultado na página HTML
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `Serão necessários **${anos}** anos para que a população do país A (aproximadamente ${parseInt(popA)}) ultrapasse ou iguale a população do país B (aproximadamente ${parseInt(popB)}).`;
}