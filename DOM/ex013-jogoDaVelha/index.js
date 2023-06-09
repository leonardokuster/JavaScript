let player = document.getElementById('player')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const boardRegions = document.querySelectorAll('#tictactoe')
let vBoard = []

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
        }
    })
})

document.getElementById('resetGame').addEventListener('click', function() {
    location.reload()
})

function winner() {

    if (sq1 && sq1 === sq2 && sq1 === sq3){
        if (sq1 === 'X') {
            player.value = player1.value + 'ganhou!!!'
        } else if (sq1 === 'O'){
            player.value = player2.value + 'ganhou!!!'
        }
    }
    if (sq3 && sq3 === sq6 && sq3 === sq9){
        if (sq3 === 'X') {
            player.value = player1.value + 'ganhou!!!'
        } else if (sq3 === 'O'){
            player.value = player2.value + 'ganhou!!!'
        }
    }
    if (sq7 && sq7 === sq8 && sq7 === sq9){
        if (sq7 === 'X') {
            player.value = player1.value + 'ganhou!!!'
        } else if (sq7 === 'O'){
            player.value = player2.value + 'ganhou!!!'
        }
    }
    if (sq1 && sq1 === sq4 && sq1 === sq7){
        if (sq1 === 'X') {
            player.value = player1.value + 'ganhou!!!'
        } else if (sq1 === 'O'){
            player.value = player2.value + 'ganhou!!!'
        }
    }
    if (sq1 && sq1 === sq5 && sq1 === sq9){
        if (sq1 === 'X') {
            player.value = player1.value + 'ganhou!!!'
        } else if (sq1 === 'O'){
            player.value = player2.value + 'ganhou!!!'
        }
    }
    if (sq3 && sq3 === sq5 && sq3 === sq7){
        if (sq3 === 'X') {
            player.value = player1.value + 'ganhou!!!'
        } else if (sq3 === 'O'){
            player.value = player2.value + 'ganhou!!!'
        }
    }
    if (sq4 && sq4 === sq5 && sq4 === sq6){
        if (sq4 === 'X') {
            player.value = player1.value + 'ganhou!!!'
        } else if (sq4 === 'O'){
            player.value = player2.value + 'ganhou!!!'
        }
    }
    if (sq2 && sq2 === sq5 && sq2 === sq8){
        if (sq2 === 'X') {
            player.value = player1.value + 'ganhou!!!'
        } else if (sq2 === 'O'){
            player.value = player2.value + 'ganhou!!!'
        }
    }
}



/*
function getWinRegions() {
    const winRegions = []
    if (vBoard[1][1] && vBoard[1][1] === vBoard[1][2] && vBoard[1][1] === vBoard[1][3])
      winRegions.push("1.1", "1.2", "1.3")
    if (vBoard[2][1] && vBoard[2][1] === vBoard[2][2] && vBoard[2][1] === vBoard[2][3])
      winRegions.push("2.1", "2.2", "2.3")
    if (vBoard[3][1] && vBoard[3][1] === vBoard[3][2] && vBoard[3][1] === vBoard[3][3])
      winRegions.push("3.1", "3.2", "3.3")
    if (vBoard[1][1] && vBoard[1][1] === vBoard[2][1] && vBoard[1][1] === vBoard[3][1])
      winRegions.push("1.1", "2.1", "3.1")
    if (vBoard[1][2] && vBoard[1][2] === vBoard[2][2] && vBoard[1][2] === vBoard[3][2])
      winRegions.push("1.2", "2.2", "3.2")
    if (vBoard[1][3] && vBoard[1][3] === vBoard[2][3] && vBoard[1][3] === vBoard[3][3])
      winRegions.push("1.3", "2.3", "3.3")
    if (vBoard[1][1] && vBoard[1][1] === vBoard[2][2] && vBoard[1][1] === vBoard[3][3])
      winRegions.push("1.1", "2.2", "3.3")
    if (vBoard[1][3] && vBoard[1][3] === vBoard[2][2] && vBoard[1][3] === vBoard[3][1])
      winRegions.push("1.3", "2.2", "3.1")
    return winRegions
  }
*/
