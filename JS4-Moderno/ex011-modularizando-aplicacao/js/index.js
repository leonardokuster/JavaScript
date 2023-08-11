const main = document.querySelector('main')
const header = document.querySelector('header')
const input = document.getElementById('input')

import calculate from "./calculate.js"
import copyClipboard from "./copyClipboard.js"
import themeSwitcher from "./themeSwitcher.js"
import { handleButtonPress, clearValue, handleTyping } from "./keyHandlers.js"


document.querySelectorAll('.charkey').forEach(handleButtonPress)

document.getElementById('clear').addEventListener('click', clearValue)

input.addEventListener('keydown', handleTyping)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyResult'). addEventListener('click', copyClipboard)

document.getElementById('switchBtn').addEventListener('click', themeSwitcher)