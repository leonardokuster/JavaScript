/*
    Escreva um programa em JS que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.
*/

const turista = prompt('Olá, turista! Qual seu nome? ')
let pergunta = confirm('Você já visitou alguma cidade?')
let cidades = ''
let quantidade = 0

while(pergunta === true){
    let cidade = prompt('Infome o nome da cidade visitada: ')
    cidades += `\n - ${cidade} \n`
    quantidade ++
    pergunta = confirm('Você visitou alguma outra cidade?')
}

alert(
    `O ${turista} visitiou ${quantidade} cidades.\nDas quais são: ${cidades}`
)