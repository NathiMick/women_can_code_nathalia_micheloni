const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function criaPares(meuArray) {
    
    for (let index = 0; index < meuArray.length; index++) {
        
        if (meuArray[index] % 2 == 0 ) {
            console.log(`Valor contido na posição ${index} do Array é o valor ${meuArray[index]} um número PAR!`);

            
        }
        
    }
    
}

criaPares(valoresNum)