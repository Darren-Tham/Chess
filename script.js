const board = document.getElementById('board')
for (let i = 0; i < 64; i++) {
    const div = document.createElement('div')
    div.classList.add('cell', (Math.floor(i / 8) + Math.floor(i % 8)) % 2 === 0 ? 'white' : 'black')
    if (Math.floor(i / 8) === 0 && Math.floor(i % 8) === 4) {
        const blackKing = document.getElementById('black-king')
        div.appendChild(blackKing)
    }
    board.appendChild(div)
}
