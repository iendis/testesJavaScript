function verificador(x){
    if(x >= 10) return "É maior ou igual a 10!"
    else{
        return "É menor que 10"
    }
}

function exemploTry(x){
    try{
        return verificador(x)
    }
    catch(x){
        console.log(x)
    }
    finally{
        console.log("Seu número é: ")
    }
}
console.log(exemploTry(1))