const n1 = prompt('Insira um número: ')
const n2 = prompt('Insira um segundo número: ')

let soma = Number(n1) + Number(n2)
let subtracao = Number(n1) - Number(n2)
let multiplicacao = Number(n1) * Number(n2)
let divisao = Number(n1) / Number(n2)

alert(
    'Os números inseridos foram ' + n1 + ' e ' + n2 +
    '\nO valor da soma é: ' + soma +
    '\nO valor da subtração é: ' + subtracao + 
    '\nO valor da multiplicação é: ' + multiplicacao + 
    '\nO valor da divisão é: ' + divisao
)