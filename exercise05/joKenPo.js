/*

    Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

*/

const prompt = require('prompt-sync')();

const gameMenu = () => {

    console.log("------- JO KEN PO! -------");
    console.log("1 - Pedra");
    console.log("2 - Papel");
    console.log("3 - Tesoura");
    console.log("--------------------------");

}

const gameOptions = () => {

    let moveOption = parseInt(prompt("Qual o seu movimento: "));
    let play = "";

    switch(moveOption){

        case 1:
            play = "Pedra";
            startGame(play);
            break;
        
        case 2:
            play = "Papel";
            startGame(play);
            break;

        case 3:
            play = "Tesoura";
            startGame(play);
            break;

        default:
            console.clear();
            console.log("Jogada Inválida! Tente Novamente!");
            gameMenu();
            gameOptions();
            break;
    }

}

const gameResult = (playerMove, randomMove) => {

    console.log("---------- Começando Partida! ----------");

    setTimeout(() => console.log("JO.."), 1000);
    setTimeout(() => console.log("KEN.."), 2000);
    setTimeout(() => {

        console.log("PO!");
        console.log("---------- RESULTADO ----------");
        console.log("Jogador: ", playerMove, " x ", "Oponente: ", randomMove);

    }, 3000);

}

const startGame = (playerMove) => {

    const randomPlay = ["Pedra", "Papel", "Tesoura"];

    let drawnPosition = Math.floor(Math.random() * randomPlay.length);

    let randomMove = randomPlay[drawnPosition];

    if(playerMove === randomMove){

        gameResult(playerMove, randomMove);
        setTimeout(() => console.log("Resultado: EMPATE!"), 3000);

    }else if(playerMove !== randomMove){
        
        if(playerMove === "Pedra" && randomMove === "Tesoura"){
            
            gameResult(playerMove, randomMove);
            setTimeout(() => console.log("Resultado: VENCEU!"), 3000);

        }else if( playerMove === "Papel" && randomMove === "Pedra"){

            gameResult(playerMove, randomMove);
            setTimeout(() => console.log("Resultado: VENCEU!"), 3000);

        }else if(playerMove === "Tesoura" && randomMove === "Papel"){

            gameResult(playerMove, randomMove);
            setTimeout(() => console.log("Resultado: VENCEU!"), 3000);

        }else{

            gameResult(playerMove, randomMove);
            setTimeout(() => console.log("Resultado: PERDEU!"), 3000);

        }

    }   

}

gameMenu();
gameOptions();

