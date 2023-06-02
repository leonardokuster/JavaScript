let player = document.getElementById('player')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
let vBoard = []



document.getElementById('startGame').addEventListener('click', function() {
    if (player1.value != '' && player2.value != '') {
        player.value = player1.value
    }
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

/*
function winner() {
    
    if (sq1 === 'X' && sq2 === 'X' && sq3 === 'X'){
        player.value = player1.value + 'ganhou!!!'
    }
    if (sq3 === 'X' && sq6 === 'X' && sq9 === 'X'){
        player.value = player1.value + 'ganhou!!!'
    }
    if (sq7 === 'X' && sq8 === 'X' && sq9 === 'X'){
        player.value = player1.value + 'ganhou!!!'
    }
    if (sq1 === 'X' && sq4 === 'X' && sq7 === 'X'){
        player.value = player1.value + 'ganhou!!!'
    }
    if (sq1 === 'X' && sq5 === 'X' && sq9 === 'X'){
        player.value = player1.value + 'ganhou!!!'
    }
    if (sq3 === 'X' && sq5 === 'X' && sq7 === 'X'){
        player.value = player1.value + 'ganhou!!!'
    }

    if (sq1 === 'O' && sq2 === 'O' && sq3 === 'O'){
        player.value = player2.value + 'ganhou!!!'
    }
    if (sq3 === 'O' && sq6 === 'O' && sq9 === 'O'){
        player.value = player2.value + 'ganhou!!!'
    }
    if (sq7 === 'O' && sq8 === 'O' && sq9 === 'O'){
        player.value = player2.value + 'ganhou!!!'
    }
    if (sq2 === 'O' && sq4 === 'O' && sq7 === 'O'){
        player.value = player2.value + 'ganhou!!!'
    }
    if (sq1 === 'O' && sq5 === 'O' && sq9 === 'O'){
        player.value = player2.value + 'ganhou!!!'
    }
    if (sq3 === 'O' && sq5 === 'O' && sq7 === 'O'){
        player.value = player2.value + 'ganhou!!!'
    }
}*/

function winner() {
    if (sq1.1.dataset.region)
}