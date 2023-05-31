const body = document.querySelector('body')
const main = document.querySelector('main')
const header = document.querySelector('header')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ['(', ')', '/', '*', '+', '-', '%', '.', ' ', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0']

document.querySelectorAll('.charkey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function() {
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function (ev) {
    ev.preventDefault()

    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
}

document.getElementById('copyResult'). addEventListener('click', function() {
    
})

  
document.getElementById('switchBtn').addEventListener('click', function() {
    if (body.dataset.theme === 'dark') {
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        body.dataset.theme = 'light'
    } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        body.dataset.theme = 'dark'
    }
})