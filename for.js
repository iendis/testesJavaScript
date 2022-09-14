/*function multiplicaPorDois(arr){
    let multiplicados = [];
    for(let i = 0 ;i < arr.length; i++ ) {
        multiplicados.push(arr[i] * 2);
    }
    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40]

console.log(multiplicaPorDois(meusNumeros))*/


/* separaNotasMaioresQue5(arr){
    let notasMaiores = [];
    for(let i = 0; i < arr.length ; i++){
        if(arr[i]>=5){
            notasMaiores.push(arr[i])
        }
    }
    return notasMaiores;
}
const notas = [10,5,2,3,4,8,9]
console.log(separaNotasMaioresQue5(notas))*/

/*function separaNotasMaioresQue5(notas){
    for(var cu of notas){
        if(cu >= 5){
            console.log(cu)
        }
    }
    return [];
}
const notas = [10,2,5,3,8,9,3,1]
console.log(separaNotasMaioresQue5(notas))*/

/*function separaNotasMaioresQue5(nums){
    if(nums>=5){
        console.log(nums)
    }
}
console.log([2,5,9].forEach(separaNotasMaioresQue5))*/

notas = [10,3,8,9,2,1];

notas.filter(notas => notas >=5 ).forEach(console.log(notas))


