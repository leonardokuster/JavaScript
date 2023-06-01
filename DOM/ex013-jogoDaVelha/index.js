let player = document.getElementById('player')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
let result = ''


document.querySelectorAll('.charType').forEach(function (pressBtn) {
    pressBtn.addEventListener('click', function(ev) {
        const button = ev.currentTarget
        if(button.innerText === ''){
            if(player.value === player1.value){
                button.innerText = 'X'
                button.classList.add('charX')
            } else if (player.value === player2.value) {
                button.innerText = 'O'
                button.classList.add('charO')
            } else {
                button.innerText = ''
            }
        }
    })
})

document.getElementById('resetGame').addEventListener('click', function() {
    location.reload()
})

document.getElementById('startGame').addEventListener('click', function() {
    player.value = player1.value
    
})

/*document.getElementById('startGame').addEventListener('click', function() {
    while(result != 'ganhou') {
        if(player.value = ''){
            player.value = player1.value
        }
        if(player.value = player1.value){
            player.value = player2.value
        }
    }
})
*/
