let currentPlayer = 'X';

function makeMove(button) {
    if (button.innerText === '') {
        button.innerText = currentPlayer;
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateCurrentPlayerText();
    }
}

function updateCurrentPlayerText() {
    const playerText = currentPlayer === 'X' ? 'Giocatore 1' : 'Giocatore 2';
    document.getElementById('currentPlayer').innerText = playerText;
}