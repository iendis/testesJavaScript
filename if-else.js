/*function numeroPositivo(num){
    let resultado;
    
    if(num<0){
        resultado = false;
    } else{
        resultado = true;
    }
    
    return resultado;
}

console.log(numeroPositivo(-1))*/
 

function numeroPositivo(num){
    const ehNegativo = num < 0;
    const maiorQue10 = num > 10;

    if(num===0){
        return "Esse numero é igual a 0"
    }

    if(ehNegativo){
        return "Esse numero é negativo!"
    } else if(!ehNegativo && maiorQue10){
        return "Esse numero é positivo e maior que 10!"
    }
    return "Esse numero é positivo!"
}

function getAnimal(id) {
    switch(id) {
        case 1:
            return "Boris";
            case 2:
                return "Kiara"
                case 3:
                    return "Thor";
                    default:
                        return "Xokito";
    }
}

function exemploWhile() {
    let num = 0

    while(num<=5){
        console.log(num);
        num++;
    }
}

console.log(numeroPositivo(0))

console.log(getAnimal(1))

console.log(exemploWhile())