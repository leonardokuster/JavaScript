/*
- Escalar um jogador
    
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

    Dica: lembrando que é possível acessar o texto de um input através da propriedade value.
*/


function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const shirtNumber = document.getElementById('shirtNumber').value

    const confirmation = confirm(`Deseja confirmar o jogador ${name} na posição ${position}?`)

    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = `player- ${shirtNumber}`
        playerItem.innerText = `${name}, camisa ${shirtNumber} - Posição ${position}`
        teamList.appendChild(playerItem)


        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('shirtNumber').value = ''
    }

}

function removePlayer() {
    const shirtNumber = document.getElementById('shirtNumberToRemove').value
    const playerToRemove = document.getElementById(`player- ${shirtNumber}`)

    const confirmation = confirm(`Deseja realmente remover o ${playerToRemove.innerText}?`)

    if (confirmation) {
        document.getElementById('teamList').removeChild(playerToRemove)
        // playerToRemove.remove()    -> também funciona, porque remove o nó todo
        
        document.getElementById('shirtNumberToRemove').value = ''
    }
}