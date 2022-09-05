document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;
    if (handleMove(position)) {
        document.getElementById("result").innerHTML = playerTime; // Imprimindo na tela o vencedor da partida.
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
}

// Botão para reiniciar o jogo.
let restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => { // Quando o usuário clicar no botão dispara o evento click.
    let squares = document.getElementsByClassName("square"); // Pega todos os quadrados(divs) do jogo e coloca na variável squares.
    for (let i of squares) { // Lopping vai pegar todos os valores do array squares e colocar na variável i.
        i.innerHTML = ""; // Passando um valor vazio para cada posição e imprimindo na tela.
    };
    board = ['', '', '', '', '', '', '', '', '']; // 
    playerTime = 0;
    gameOver = false;

});