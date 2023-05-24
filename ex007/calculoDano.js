/*
    Cálculo de Dano:
    Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dado causado baseado nas seguintes regras:

    - Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
    - Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
    - Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

    Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
*/

const atacante = prompt('Insira o nome do personagem que irá atacar: ')
const ataque = prompt('Informe seu ataque: ')

const defensor = prompt('Insira o nome do personagem que irá defender: ')
let qntvida = prompt('Insira sua quantidade de pontos de vida: ')
const defesa = prompt('Informe seu poder de defesa: ')
const escudo = confirm('Ele possui escudo?')
let dano = 0
let resultado = 0

if (ataque > defesa && escudo == false) {
    dano = Number(ataque) - Number(defesa)
    resultado = Number(qntvida) - dano
} else if (ataque > defesa && escudo == true) {
    dano = (Number(ataque) - Number(defesa)) /2
    resultado = Number(qntvida) - dano
} else if (ataque <= defesa) {
    dano = 0
    resultado = Number(qntvida) - dano
}

alert(
    `A quantidade de dano causado pelo atacante ${atacante} no defensor ${defensor} corresponde a ${dano}. Com isso, ${defensor} possui uma quantidade de vida equivalente a ${resultado}`
)