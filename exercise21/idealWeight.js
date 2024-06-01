/*

    Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
    retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
    = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

*/
const prompt = require("prompt-sync")();

const idealWeight = (height, sex) => {

    if(sex === "Masc"){

        const idealWeightMasc = 72.7 * height - 58;
        console.log("----");
        console.log("Seu peso ideal, considerando seu gênero masculino é: ", idealWeightMasc.toFixed(2), "Kg");

    }else if(sex === "Fem"){

        const idealWeightFem = 62.1 * height - 44.7;
        console.log("----");
        console.log("Seu peso ideal, considerando seu gênero feminino é: ", idealWeightFem.toFixed(2), "Kg");

    }else{

        console.clear();
        console.log("ERROR! Não conseguimos identificar seu sexo! Tente novamente!");
        init();

    }

}

const init = () => {

    console.log("---- PESO IDEAL ---");
    console.log("1 - Masculino");
    console.log("2 - Feminino");
    console.log("-------------------");
    let option = parseInt(prompt("Informe seu gênero: ")); 
    let height = 0.00;
    switch(option){

        case 1:
            option = "Masc";
            height = parseFloat(prompt("Informe sua altura: "));
            idealWeight(height, option);
            break;

        case 2:
            option = "Fem";
            height = parseFloat(prompt("Informe sua altura: "));
            idealWeight(height, option);
            break;
        
        default:
            idealWeight(height, option);
            break;
    }

}

init();

