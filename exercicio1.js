alunos = [
    {
        nome: "Thor",
        mediaFinal: 10
    },
    {
        nome: "Kiara",
        mediaFinal: 4
    },
    {
        nome: "Boris",
        mediaFinal: 5
    }
]
/*function verificador(aluno){

    return aluno.mediaFinal >= 5;
}
alunos.filter(verificador).forEach(aluno => console.log(aluno.nome))*/

alunos.forEach(x =>{ if(x.mediaFinal >= 5)console.log(x.nome)})
