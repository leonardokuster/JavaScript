/*
    Progama em JS que simula a fila de espera em um consultório médico. O programa inicia mostrando na tela um menu interativo contendo a lista de todos os pacientes que estão esperando atendimento em ordem, mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também permite escolher entre as opções de "Novo paciente", para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), "Encaminhar para Consulta", que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e "Sair". O programa só se encerra ao escolher a opção "Sair", caso contrário retorna ao menu.
*/

let fila = []
let opcao = ""

do {
    let pacientes = ""

    for (let i = 0; i < fila.length ; i++) {
        pacientes += (i + 1) + 'º - ' + fila[i] + '\n'
    }

    opcao = prompt(`Informe a opção desejada: \na) Novo Paciente \nb) Encaminhar para Consulta \nc) Sair \n\nPacientes aguardando atendimento: \n${pacientes}`)

    switch(opcao){
        case 'a':
            let novoPaciente = prompt('Informe o nome do paciente que deseja acrescentar a fila:')
            pacientes = fila.push(novoPaciente)
            break
        
        case 'b':
            let pacienteConsultado = fila.shift(pacientes)
            alert(`Paciente ${pacienteConsultado} encaminhado para consulta!`)
            break

        case 'c':
            alert('Encerrando sistema.')
            break
        
        default:
            alert('Opção inválida.')
    }

} while (opcao !== 'c')

