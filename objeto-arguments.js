const alunos = [
    {
        nome: "Iendis",
        nota1: 6,
        nota2: 5
    },
    {
        nome: "Giselle",
        nota1: 1,
        nota2: 9
    },
    {
        nome: "Gustavo",
        nota1: 3 ,
        nota2: 6
    }
]

/*function maprovaAluno(x,y){
    return ((x + y) / 2 >= 5);
}
let aprovaAluno = (x,y) => (x+y)/2 >= 5;
alunos.filter(x => aprovaAluno(x.nota1,x.nota2)).forEach(x => console.log(x.nome))*/

function verificador(x){
    for(let i = 0; i < x.length; i++){
        if (x.nota1 >= 5){
            return x.nome
        } else {}
    }
}
console.log(verificador(alunos))
