console.log("--- Manipulação de Arrays ---");

const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
console.log("Array original:", nomes);
console.log("Terceiro nome:", nomes[2]);

nomes.push("Fernanda");
nomes.unshift("Gustavo");
console.log("Array com nomes adicionados:", nomes);

nomes.pop();
console.log("Array com último nome removido:", nomes);

const numeros = [2, 4, 6, 8];
const numerosDobrados = numeros.map(numero => numero * 2);
console.log("Array original de números:", numeros);
console.log("Array de números dobrados (usando map):", numerosDobrados);

const maisNumeros = [1, 3, 5, 7, 9];
const numerosMaioresQueCinco = maisNumeros.filter(numero => numero > 5);
console.log("Array de números para filtrar:", maisNumeros);
console.log("Array com números maiores que 5 (usando filter):", numerosMaioresQueCinco);