

document.querySelectorAll('.charType').forEach(function (pressBtn) {
    pressBtn.addEventListener('click', function() {
        const value = pressBtn.dataset.value
        input.value += value
    })
})

document.getElementById('resetGame').addEventListener('click', function() {
    input.value = ''
})