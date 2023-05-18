/*
    Programa em JS que simula um baralho de cartas. O programa inicia mostrando na tela um menu interativo contendo as cartas que estão atualmente no baralho e as opções de "Adicionar uma carta", "Puxar uma carta" e "Sair". Ao escolher "Adicionar uma carta", o programa pergunta o nome da carta e a adiciona no topo do baralho. Ao escolher "Puxar uma carta", o programa retira a carta do topo do baralho e mostra na tela o nome da carta puxada. O programa só é encerrado ao escolher a opção "Sair", caso contrário volta ao menu.
*/

let baralho = []
let opcao = ""

do {
    let cartas = ""

    for (let i = 0; i < baralho.length; i++) {
        cartas += '- ' + baralho[i] + '\n'
    }

    opcao = prompt(`Selecione a opção desejada: \na) Adicionar uma carta \nb) Puxar uma carta \nc) Sair \n\nAs cartas que estão atualmente no baralho são: \n${cartas}\n`)

    switch(opcao) {
        case 'a':
            const cartaAdicionada = prompt('Informe o nome da carta')
            baralho.push(cartaAdicionada)
            break
        
        case 'b':
            const cartaRemovida = baralho.pop(cartas)
            if (!cartaRemovida) {
                alert('Não há nenhuma carta no baralho.')
            } else {
                alert(`A carta removida foi ${cartaRemovida}`)
            }
            break

        case 'c':
            alert('Encerrando sistema.')
            break
            
        default:
            alert('Opção inválida.')
    }

} while (opcao !== 'c')
