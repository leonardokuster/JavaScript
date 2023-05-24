const firstName = prompt('Informe o primeiro nome do recruta:')
const lastName = prompt('Informe o sobrenome do recruta:')
const campoEstudo = prompt('Informe o campo de estudo do recruta:')
const anoNascimento = prompt('Informe seu ano de nascimento:')

let idade = (new Date().getFullYear()) - Number(anoNascimento)

alert(
    'Recruta cadastrado com sucesso!\n' +
    'Nome completo: ' + firstName + ' ' + lastName + 
    '\nCampo de estudo: ' + campoEstudo+ 
    '\nIdade: ' + idade + ' anos.'
)


