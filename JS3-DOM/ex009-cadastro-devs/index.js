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

const addNewTechnology = document.getElementById('addNewTechnology')
const form = document.getElementById('devForm')
const devs = []
let inputRows = 0

addNewTechnology.addEventListener('click', function (ev) {

    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const tecnologyLabel = document.createElement('label')
    tecnologyLabel.innerText = "Nome da tecnologia: 
    const tecnologyInput = document.createElement('input')
    tecnologyInput.type = 'text'
    tecnologyInput.name = 'tecnology'
    tecnologyLabel.appendChild(tecnologyInput)

    //const tecnologyLabel = createLabel('Nome da tecnologia: ', 'tecnology-' + rowIndex)
    //const tecnologyInput = createInput('tecnology-' + rowIndex, null, 'tecnology')

    
    const experienceTimeLabel = document.createElement('label')
    experienceTimeLabel.innerText = "Tempo de Experiência: "

    //const experienceTimeLabel = createLabel('Experiência: ')

    const experienceInput1 = document.createElement('input')
    experienceInput1.type = 'radio'
    experienceInput1.name = 'experience-' + rowIndex
    experienceInput1.id = 'experience1-' + rowIndex + '.1'
    experienceInput1.value = '0-2 anos'
    const experienceLabel1 = document.createElement('label')
    experienceLabel1.innerText = "0-2 anos"

    //const experienceInput1 = createInput('experience1-' + rowIndex + '.1', '0-2 anos', 'experience-' + rowIndex, 'radio')
    //const experienceLabel1 = createLabel('0-2 anos', 'experience1-' + rowIndex + '.1')

    const experienceInput2 = document.createElement('input')
    experienceInput2.type = 'radio'
    experienceInput2.name = 'experience-' + rowIndex
    experienceInput2.id = 'experience2-' + rowIndex + '.2'
    experienceInput2.value = '3-4 anos'
    const experienceLabel2 = document.createElement('label')
    experienceLabel2.innerText = "3-4 anos"

    const experienceInput3 = document.createElement('input')
    experienceInput3.type = 'radio'
    experienceInput3.name = 'experience-' + rowIndex
    experienceInput3.id = 'experience3-' + rowIndex + '.3'
    experienceInput3.value = '5+ anos'
    const experienceLabel3 = document.createElement('label')
    experienceLabel3.innerText = "5+ anos"

    const removeRow = document.createElement('button')
    removeRow.type = 'button'
    removeRow.innerText = 'Remover'
    removeRow.addEventListener('click', function() {
        stackInputs.removeChild(newRow)
    })

    newRow.append(tecnologyLabel, experienceTimeLabel, experienceInput1, experienceLabel1, experienceInput2, experienceLabel2, experienceInput3, experienceLabel3, removeRow)

    stackInputs.append(newRow)
})


form.addEventListener('submit', function (ev) {
    ev.preventDefault()
  
    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')
  
    let technologies = []
    inputRows.forEach(function (row) {
      // #rowId input[name="tecnology"]
      const tecnology = document.querySelector('#' + row.id + ' input[name="tecnology"]').value
      const experienceTime = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
      technologies.push({ name: tecnology, exp: experienceTime })
    })
  
    const newDev = { fullname: fullnameInput.value, technologies: technologies }
    devs.push(newDev)
    alert('Dev cadastrado com sucesso!')
  
    fullnameInput.value = ''
    inputRows.forEach(function (row) {
      row.remove()
    })
  
    console.log(devs)
  })