/*
    Escreva um programa em JS que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
*/

const carro1 = prompt('Insira o nome do primeiro veículo:')
let vel1 = prompt('Insira sua velocidade (km/h): ')

const carro2 = prompt('Insira o nome do segundo veículo:')
let vel2 = prompt('Insira sua velocidade (km/h): ')

if (vel1 > vel2){
    alert('O primeiro veículo, chamdo de ' + carro1 + ' é mais rápido.')
} else if (vel1 < vel2){
    alert('O segundo veículo, chamdo de ' + carro2 + ' é mais rápido.')
} else {
    alert('Os dois veículos possuem a mesma velocidade.')
}