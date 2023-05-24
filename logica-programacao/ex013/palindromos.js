/*
    Escreva um programa em JS que seja capaz de identificar se uma palavra é palíndromo. Um palíndromo é uma palavra que lida de trás pra frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada a palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.
*/

const palavra = prompt('Informe uma palavra para verificação de palíndromo:')
let inverso = ""

for (let i = palavra.length - 1; i >= 0 ; i--) {
    inverso += palavra[i]
}

if (palavra === inverso) {
    alert(`${palavra} é um palíndromo!`)
} else {
    alert(`A palavra informada é "${palavra}", seu inverso é "${inverso}". \nPortanto não é um palíndromo!`)
}

