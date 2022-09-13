document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
});

function timedText() {
    let mensagem = document.getElementById("mensagens");
    setTimeout(function(){ mensagem.innerHTML="Ei, o jogo já começou" }, 20000);
    setTimeout(function(){ mensagem.innerHTML="Quem será que vai vencer" }, 50000);
    setTimeout(function(){ mensagem.innerHTML="Esse jogo esta disputado" }, 150000);
};

function handleClick(event) {
    let square = event.target;
    let position = square.id;
    if (handleMove(position)) {

        let players = localStorage.getItem("players");
        players = JSON.parse(players);
        document.getElementById("mensagem").innerHTML = "Fim de jogo!";
        if (players == null) { // Mostrando o vencedor na tela.
            document.getElementById("result").innerHTML = playerTime;
        } else {
            if (playerTime == 0) { 
                document.getElementById("result").innerHTML = players[0];
            } else {
                document.getElementById("result").innerHTML = players[1];
            };
        };
    };
    updateSquare(position);
};

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
};

// Botão para reiniciar o jogo.
let restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => { // Quando o usuário clicar no botão dispara o evento click.
    let mensagem = document.getElementById("mensagem");
    let result = document.getElementById("result");  // Pega o valor do resultado e joga na variável result.
    let squares = document.getElementsByClassName("square"); // Pega todos os quadrados(divs) do jogo e coloca na variável squares.
    for (let i of squares) { // Lopping vai pegar todos os valores do array squares e colocar na variável i.
        i.innerHTML = ""; // Passando um valor vazio para cada posição e imprimindo na tela.
    };
    mensagem.innerHTML = "";
    board = ['', '', '', '', '', '', '', '', '']; // 
    playerTime = 0;
    gameOver = false;
    result = document.getElementById("result");
    result.innerHTML = "";
});

function namesSave() { // Botão para salvar os nomes dos jogadores.
    let playerO = document.getElementById("playerO").value; // Pegando o valor do input do jogador O.
    let playerX = document.getElementById("playerX").value; // Pegando o valor do input do jogador X.

    let players = [playerO, playerX] // Adicionando os dois jogadores em um array.
    localStorage.setItem("players", JSON.stringify(players)); // Transformando os nomes dentro do array em strings, e depois adicionando ao localStorage.
};

function namesDelet() { // Botão para deletar os nomes dos jogadores.
    localStorage.removeItem("players"); // Remove os valores do localStorage.

    let playerO = document.getElementById("playerO"); // Pega o valor do input player O e coloca na variável playerO.
    let playerX = document.getElementById("playerX"); // Pega o valor do input player X e coloca na variável playerX.

    playerO.setAttribute("placeholder", "Digite seu nome jogador O"); // Coloca a frase do placeholder no input player O.
    playerX.setAttribute("placeholder", "Digite seu nome jogador X"); // Coloca a frase do placeholder no input X.
};

function verificarJogador() { // Método onload para verificar se existe jogadores.
    let players = localStorage.getItem("players"); // Pega os jogadores do localStorage e coloca na variável players.

    if (players == null) { // Se players estiver vázio não faz nada.

    } else {  // Se não estiver com valor
        players = JSON.parse(players); // Transforma os jogadores do array em objeto, e coloca na variável players.
        let playerO = document.getElementById("playerO"); // Pega o valor do input player O e coloca na variável playerO.
        let playerX = document.getElementById("playerX"); // Pega o valor do input player X e coloca na variável playerX.

        playerO.setAttribute("placeholder", players[0]); // Coloca o nome do jogador O no placeholder.
        playerX.setAttribute("placeholder", players[1]); // Coloca o nome do jogador X no placeholder.
    };
};

