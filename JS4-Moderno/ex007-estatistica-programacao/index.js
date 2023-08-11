// Média Aritmética Simples
// Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores.

const mediaSimples = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`Média aritmética simples: ${mediaSimples(1,2,3,4,5,6,7,8,9,10)}`)

// Média Aritmética Ponderada
// Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.

const mediaPonderada = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
} // weight ?? 1 considera valor 1 se não existir um weight 

console.log(`Média Ponderada: ${mediaPonderada(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 },
  )}`)

// Mediana
// Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.

const mediana = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b) // ordena em ordem crescente
    const middle = Math.floor(orderedNumbers.length / 2) // pega o número inteiro mais próximo, ex: 2.2 será 2; 2.7 será 3
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return mediaSimples(firstMedian, secondMedian)
}

console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${mediana(15, 14, 8, 7, 3)}`)


// Moda
// Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.

const moda = (...numbers) => {
    // [ [n, qtd], [n, qtd], [n, qtd] ]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length // retorna a quantidade que esse número foi reproduzido
    ])
    quantities.sort((a, b) => b[1] - a[1]) // coloca em ordem decrescente as quantidades
    return quantities[0][0] // retorna a primeira posição que é a que mais se repete
}

console.log(`Moda: ${moda(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)