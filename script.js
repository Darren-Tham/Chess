const board = document.getElementById('board')

const positions = {
    0: 'black_rook',
    1: 'black_knight',
    2: 'black_bishop',
    3: 'black_queen',
    4: 'black_king',
    5: 'black_bishop',
    6: 'black_knight',
    7: 'black_rook',
    56: 'white_rook',
    57: 'white_knight',
    58: 'white_bishop',
    59: 'white_queen',
    60: 'white_king',
    61: 'white_bishop',
    62: 'white_knight',
    63: 'white_rook',
}

function createIMG(name) {
    const img = document.createElement('img')
    img.src = `./assets/${name}.svg`
    img.alt = name
    return img
}

for (let i = 0; i < 64; i++) {
    const div = document.createElement('div')
    const row = Math.floor(i / 8)
    const col = Math.floor(i % 8)
    div.classList.add('cell', (row + col) % 2 === 0 ? 'white' : 'black')
    let img
    if (row === 1) img = createIMG('black_pawn')
    else if (row === 6) img = createIMG('white_pawn')
    else if (positions[i] !== undefined) img = createIMG(positions[i])
    if (img !== undefined) div.appendChild(img)
    board.appendChild(div)
}