const alunos = [
{
    nome: "Boris",
    nota: 3,
},
{
    nome: "Thor",
    nota: 10
},
{
    nome: "Kiara",
    nota: 2
}
]

/*function alunosAprovados(arr){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){
        const { nota, nome} = arr[i];

        if(nota>=5){
            aprovados.push(nome)
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos))*/
alunos.filter(x => x.nota>=5).forEach( x => console.log(x.nome))
