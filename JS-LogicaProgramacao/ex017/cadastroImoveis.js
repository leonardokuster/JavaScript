/*
    Escreva um programa em JS que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

    - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
    - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
    - O menu deve ter a opção de salvar um imóvel.
    - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
        - Nome do proprietário
        - Quantidade de quartos
        - Quantidade de banheiros
        - Se possui garagem
    - O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

let opcao = ''
let imovel = []

do {
    opcao = prompt(`Quantidade de imóveis cadastrados: ${imovel.length} \n\nSelecione uma das opções abaixo: \na) Cadastrar um novo imóvel. \nb) Mostrar todos os imóveis cadastrados. \nc) Sair.`)

    switch(opcao) {
        case 'a':
            const cadastro = {}
            cadastro.nome = prompt('Informe o nome do proprietário do imóvel:')
            cadastro.qntquarto = prompt('Informe a quantidade de quartos')
            cadastro.qntbanheiro = prompt('Informe a quantidade de banheiros')
            cadastro.garagem = confirm('O imóvel possui garagem?')
            if (cadastro.garagem == true){
                cadastro.garagem = 'Sim'
            } else {cadastro.garagem = 'Não'}

            const confirmacao = confirm(
                `Deseja salvar esse imóvel? \nNome do proprietário: ${cadastro.nome} \nQuantidade de quartos: ${cadastro.qntquarto} \nQuantidade de banheiros: ${cadastro.qntbanheiro} \nPossui garagem? ${cadastro.garagem}`
            )

            if (confirmacao){
                imovel.push(cadastro)
            } else {alert('Voltando ao menu.')}
            break


        case 'b':
            if (imovel != 0) {
                for (i = 0; i < imovel.length; i++){
                    alert(`Imóvel ${i + 1} \nNome do proprietário: ${imovel[i].nome} \nQuantidade de quartos: ${imovel[i].qntquarto} \nQuantidade de banheiros: ${imovel[i].qntbanheiro} \nPossui garagem? ${imovel[i].garagem}`)
                }
            } else {
                alert('Não há nenhum imóvel cadastrado atualmente.')
            }
            break

        case 'c':
            alert('Encerrando programa.')
            break

        default:
            alert('Opção inválida.')
    }

} while (opcao !== 'c')