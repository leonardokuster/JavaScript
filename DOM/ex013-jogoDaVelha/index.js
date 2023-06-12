let player = document.getElementById('player')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const boardRegions = document.querySelectorAll('.charType')


let sq1 = document.getElementById('sq1')
let sq2 = document.getElementById('sq2')
let sq3 = document.getElementById('sq3')
let sq4 = document.getElementById('sq4')
let sq5 = document.getElementById('sq5')
let sq6 = document.getElementById('sq6')
let sq7 = document.getElementById('sq7')
let sq8 = document.getElementById('sq8')
let sq9 = document.getElementById('sq9')



document.getElementById('startGame').addEventListener('click', function() {
    if (player1.value != '' && player2.value != '') {
        player.value = player1.value
    }
    boardRegions.forEach(function (element) {
        element.addEventListener('click', winner)
    })
})


document.querySelectorAll('.charType').forEach(function (pressBtn) {
    pressBtn.addEventListener('click', function(ev) {
        const button = ev.currentTarget
        if(button.innerText === ''){
            if (player.value === '') {
                button.innerText = ''
                return
            }
            if(player.value === player1.value){
                button.innerText = 'X'
                button.classList.add('charX')
                button.value = 'X'
                player.value = player2.value
                return
            } 
            if (player.value === player2.value) {
                button.innerText = 'O'
                button.classList.add('charO')
                button.value = 'O'
                player.value = player1.value
                return
            } 
        } else {
            player.value = 'O jogo empatou!'
        }
    })
})

document.getElementById('resetGame').addEventListener('click', function() {
    location.reload()
})

function winner() {

    if (sq1.value && sq1.value === sq2.value && sq1.value === sq3.value){
        if (sq1.value === 'X') {
            player.value = player1.value + ' ganhou!!!'
        } else if (sq1.value === 'O'){
            player.value = player2.value + ' ganhou!!!'
        }
    }
    if (sq3.value && sq3.value === sq6.value && sq3.value === sq9.value){
        if (sq3.value === 'X') {
            player.value = player1.value + ' ganhou!!!'
        } else if (sq3.value === 'O'){
            player.value = player2.value + ' ganhou!!!'
        }
    }
    if (sq7.value && sq7.value === sq8.value && sq7.value === sq9.value){
        if (sq7.value === 'X') {
            player.value = player1.value + ' ganhou!!!'
        } else if (sq7.value === 'O'){
            player.value = player2.value + ' ganhou!!!'
        }
    }
    if (sq1.value && sq1.value === sq4.value && sq1.value === sq7.value){
        if (sq1.value === 'X') {
            player.value = player1.value + ' ganhou!!!'
        } else if (sq1.value === 'O'){
            player.value = player2.value + ' ganhou!!!'
        }
    }
    if (sq1.value && sq1.value === sq5.value && sq1.value === sq9.value){
        if (sq1.value === 'X') {
            player.value = player1.value + ' ganhou!!!'
        } else if (sq1.value === 'O'){
            player.value = player2.value + ' ganhou!!!'
        }
    }
    if (sq3.value && sq3.value === sq5.value && sq3.value === sq7.value){
        if (sq3.value === 'X') {
            player.value = player1.value + ' ganhou!!!'
        } else if (sq3.value === 'O'){
            player.value = player2.value + ' ganhou!!!'
        }
    }
    if (sq4.value && sq4.value === sq5.value && sq4.value === sq6.value){
        if (sq4.value === 'X') {
            player.value = player1.value + ' ganhou!!!'
        } else if (sq4.value === 'O'){
            player.value = player2.value + ' ganhou!!!'
        }
    }
    if (sq2.value && sq2.value === sq5.value && sq2.value === sq8.value){
        if (sq2.value === 'X') {
            player.value = player1.value + ' ganhou!!!'
        } else if (sq2.value === 'O'){
            player.value = player2.value + ' ganhou!!!'
        }
    }
}