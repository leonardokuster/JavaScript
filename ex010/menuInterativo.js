/*
    Escreva um programa em JS que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção "Encerrar". Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção "Encerrar". Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.
*/

let opcao = 0

do {
    opcao = prompt('Selecione abaixo a opção desejada: \na) Opção "a"\nb) Opção "b"\nc) Opção "c"\nd) Opção "d"\ne) Opção "e"')

    alert(`A opção selecionada foi a opção "${opcao}".`)
} while (opcao !== 'e')

alert('O sistema está sendo encerrado.')