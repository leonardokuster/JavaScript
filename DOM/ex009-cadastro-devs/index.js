/*
function createLabel (text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput (id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}
*/

const button = document.getElementById('addNewTechnology')
const form = document.getElementById('devForm')
const devs = []

addNewTechnology.addEventListener('click', function (ev) {
    ev.preventDefault()

    const newRow = document.createElement('li')

    const tecnologyLabel = document.createElement('label')
    tecnologyLabel.innerText = "Nome da tecnologia: "
    const tecnologyInput = document.createElement('input')
    tecnologyInput.type = 'text'
    tecnologyInput.name = 'tecnology'
    tecnologyLabel.appendChild(tecnologyInput)

    const experienceTimeLabel = document.createElement('label')
    experienceTimeLabel.innerText = "Tempo de Experiência: "

    const experienceInput1 = document.createElement('input')
    experienceInput1.type = 'radio'
    experienceInput1.name = 'experience'
    experienceInput1.id = 'experience1'
    experienceInput1.value = '0-2 anos'
    const experienceLabel1 = document.createElement('label')
    experienceLabel1.innerText = "0-2 anos"

    const experienceInput2 = document.createElement('input')
    experienceInput2.type = 'radio'
    experienceInput2.name = 'experience'
    experienceInput2.id = 'experience1'
    experienceInput2.value = '3-4 anos'
    const experienceLabel2 = document.createElement('label')
    experienceLabel2.innerText = "3-4 anos"

    const experienceInput3 = document.createElement('input')
    experienceInput3.type = 'radio'
    experienceInput3.name = 'experience'
    experienceInput3.id = 'experience1'
    experienceInput3.value = '5+ anos'
    const experienceLabel3 = document.createElement('label')
    experienceLabel3.innerText = "5+ anos"

    experienceLabel1.appendChild(experienceInput1)
    experienceLabel2.appendChild(experienceInput2)
    experienceLabel3.appendChild(experienceInput3)

    const removeRow = document.createElement('button')
    removeRow.type = 'button'
    removeRow.innerText = 'Remover'
    removeRow.addEventListener('click', function() {
        stackInputs.removeChild(newRow)
    })

    newRow.append(tecnologyLabel, experienceTimeLabel, experienceLabel1, experienceLabel2, experienceLabel3, removeRow)

    stackInputs.append(newRow)
})



