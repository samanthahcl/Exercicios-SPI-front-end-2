function calcularMontante() {
    let capital;
    let taxaJuros;
    let tempo;
    
    // Função auxiliar para validar a entrada do usuário
    function obterValor(mensagem, validarPositivo = true) {
        let valor;
        let entradaValida = false;
        while (!entradaValida) {
            valor = prompt(mensagem);

            if (valor === null) {
                // Usuário cancelou
                return null;
            }

            valor = parseFloat(valor.replace(',', '.'));
            
            if (isNaN(valor) || (validarPositivo && valor <= 0)) {
                alert("Entrada inválida. Por favor, digite um número válido e positivo.");
            } else {
                entradaValida = true;
            }
        }
        return valor;
    }
    
    // Coleta dos valores usando a função auxiliar
    capital = obterValor("Digite o capital inicial (C):");
    if (capital === null) return;
    
    taxaJuros = obterValor("Digite a taxa de juros mensal em percentual (i):", false); // Juros pode ser 0
    if (taxaJuros === null) return;
    
    tempo = obterValor("Digite o tempo do investimento em meses (t):");
    if (tempo === null) return;
    
    // Converte a taxa de juros de percentual para decimal
    const taxaDecimal = taxaJuros / 100;
    
    // Calcula o montante usando a fórmula: M = C * (1+i)^t
    const montante = capital * Math.pow((1 + taxaDecimal), tempo);
    
    // Exibe o resultado formatado na página
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `
        <h3>Detalhes do Investimento:</h3>
        <p>Capital Inicial (C): **R$ ${capital.toFixed(2).replace('.', ',')}**</p>
        <p>Taxa de Juros (i): **${taxaJuros.toFixed(2).replace('.', ',')}% ao mês**</p>
        <p>Tempo (t): **${tempo} meses**</p>
        <hr>
        <h3>Resultado:</h3>
        <p>O montante final (M) é de: **R$ ${montante.toFixed(2).replace('.', ',')}**</p>
    `;
}