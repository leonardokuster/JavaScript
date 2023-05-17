/*
    Escreva um programa em JS que funcione como um conversor de medidas. programa deverá pedir por um valor em metros e entrão dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

    - milímetro (mm)
    - centímetro (cm)
    - decímetro (dm)
    - decâmetro (dam)
    - hectômetro (hm)
    - quilômetro (km)

    O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

    O programa também deve exibir uma mensagem de "Opção inválida" caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)
*/

const valor = prompt('Infome o valor em metros que deseja converter: ')
const opcao = prompt('Selecione a opção abaixo para qual deseja converter o valor: \na) Milímetro (mm)\nb) Centímetro (cm)\nc) Decímetro (dm)\nd) Decâmetro (dam)\ne) Hectômetro (hm)\nf) Quilômetro (km)')
let resultado = 0

switch (opcao) {
    case 'a':
        resultado = Number(valor) * 1000
        alert(`O resultado é ${resultado} mm`)
        break

    case 'b':
        resultado = Number(valor) * 100
        alert(`O resultado é ${resultado} cm`)
        break

    case 'c':
        resultado = Number(valor) * 10
        alert(`O resultado é ${resultado} dm`)
        break

    case 'd':
        resultado = Number(valor) / 10 
        alert(`O resultado é ${resultado} dam`)
        break

    case 'e':
        resultado = Number(valor) / 100
        alert(`O resultado é ${resultado} hm`)
        break

    case 'f':
        resultado = Number(valor) / 1000 
        alert(`O resultado é ${resultado} km`)
        break

    default:
        alert('Opção Inválida.')
}