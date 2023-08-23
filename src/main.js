const alunos = [
    {
        nome: 'José', nota: 9
    },
    {
        nome: 'João', nota: 3
    },
    {
        nome: 'Maria', nota: 4
    },
    {
        nome: 'Fernanda', nota: 8
    },
    {
        nome: 'Marcelo', nota: 6
    }

];

const filtrarAlunos = (alunos) => {
    return alunos.filter(alunos => alunos.nota >= 6);
}

const alunosAprovados = filtrarAlunos(alunos);

console.log(alunosAprovados);

