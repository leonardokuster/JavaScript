/*
    Escreva um programa em JS que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.
*/

let valorDigitado = prompt('Informe o número a ser utilizado nos cálculos de multiplicação:')
let multiplicacao = 0
let resultado = " "

for(let i = 1; i <= 20; i++){
    multiplicacao = Number(valorDigitado) * i
    resultado += ` ${multiplicacao};`
}


alert(`O resultado da multiplicação pelo número ${valorDigitado} escolhido é igual a:\n${resultado}`)