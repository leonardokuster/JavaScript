/*
Escreva um programa em JS que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
*/

const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += (indice) + '. '
        textoFinal += vaga.nome
        textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
        return textoFinal
    }, '')

    if (vagasEmTexto){
        alert(vagasEmTexto)
    } else {alert('Nenhuma vaga cadastrada.')}
}


function criarVaga() {
    const nome = prompt('Informe o nome da vaga:')
    const descricao = prompt('Informe sua descrição:')
    const dataLimite = prompt('Informe a data limite: (DD/MM/AAAA)')

    const confirmacao = confirm(`Deseja confirmar as informações fornecidas? \nNome da Vaga: ${nome} \nDescrição: ${descricao} \nData Limite: ${dataLimite}`)

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert('Vaga criada com sucesso.')
    } else {alert('Voltando ao menu.')} 

}


function visualizarVaga() {
    const indice = prompt('Informe o índice da vaga que deseja visualizar:')
    const vaga = vagas[indice]

    if (indice >= vagas.length || indice < 0) {
        alert('Valor não encontrado.')
        return
    }

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + '\n - ' + candidato
    }, '')

    alert(`Vaga nº: ${indice} \nNome: ${vaga.nome} \nDescrição: ${vaga.descricao} \nData limite: ${vaga.dataLimite} \nQuantidade de candidatos inscritos: ${vaga.candidatos.length} \nNome dos candidatos: ${candidatosEmTexto}, `)
}


function cadastrarCandidato() {
    const candidato = prompt('Informe o nome do candidato:')
    const indice = prompt('Informe o índice da vaga')
    const vaga = vagas[indice]

    const confirmacao = confirm(`Deseja inscrever o ${candidato} na vaga nº: ${indice}? \nNome do Vaga: ${vaga.nome} \nDescrição: ${vaga.descricao} \nData Limite: ${vaga.dataLimite}`)
    
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert('Candidato cadastrado com sucesso.')
    } else {alert('Voltando ao menu.')} 
}


function excluirVaga() {
    const indice = prompt('Informe o índice da vaga')
    const vaga = vagas[indice]
    const confirmacao = confirm(`Deseja realmente excluir a vaga ${indice}? \nNome: ${vaga.nome} \nDescrição: ${vaga.descricao} \nData limite: ${vaga.dataLimite}`)
    if (confirmacao){
        vagas.splice(indice, 1) 
        alert('Vaga excluída com sucesso.')
    } else {alert('Voltando ao menu.')} 
}


function exibirMenu() {
    return prompt('Selecione a opção desejada: \n\na) Listar vagas disponíveis \nb) Criar uma nova vaga \nc) Visualizar uma vaga \nd) Inscrever um candidadto em uma vaga \ne) Excluir uma vaga \nf) Sair')
}

function executarPrograma() {
    let opcao = ''
    do {
        opcao = exibirMenu()

        switch(opcao) {
            case 'a':
                listarVagas()
                break

            case 'b':
                criarVaga()
                break

            case 'c':
                visualizarVaga()
                break

            case 'd':
                cadastrarCandidato()
                break

            case 'e':
                excluirVaga()
                break

            case 'f':
                alert('Encerrando sistema.')
                break

            default:
                alert('Opção Inválida.')
        }

    } while (opcao !== 'f')
}

executarPrograma()
