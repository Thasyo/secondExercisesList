/*

     Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
    principal são iguais a 1 e os demais são nulos.

*/

const identityMatrix = [];

for(let i = 0; i < 7; i++){
    const line = [];
    for(let j = 0; j < 7; j++){
        if(i === j){
            line.push(1);
        }else{
            line.push(0);
        }
    }
    identityMatrix.push(line);
}

identityMatrix.forEach(line => console.log(line.join(' ')));
