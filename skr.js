function PERMUTAÇÃO(N){
    if(N > 1){
        return (N - 1) * N;
    }
    else{
        return 1
    }
}

var N = 9
var resultado = PERMUTAÇÃO(N);

console.log(resultado)


