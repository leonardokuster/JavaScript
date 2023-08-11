/*
    Escreva um programa em JS que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.
*/

let saldo = prompt('Qual a quantidade inicial de dinheiro disponível? ')
let opcao = 0
let qntAdicionar = 0

do {
    opcao = prompt(`Seu saldo é de ${saldo} reais.\n\nSelecione a opção desejada:\na) Adicionar dinheiro\nb) Remover dinheiro\nc) Finalizar sessão. `)

    if (opcao == 'a'){
        qntAdicionar = prompt('Qual quantidade deseja adicionar?')
        saldo = Number(saldo) + Number(qntAdicionar)
    } if (opcao == 'b') {
        qntAdicionar = prompt('Qual quantidade deseja remover?')
        saldo = Number(saldo) - Number(qntAdicionar)
    }

} while(opcao !== 'c')