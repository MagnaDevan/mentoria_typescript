const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} =  {
    nome:'André',
    idade: 26,
    profissao: 'pintor'
}

const paula: {nome:string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 30,
    profissao: 'desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: Number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome:'Vanessa',
    idade: 23,
    profissao: Profissao.Atriz
}

const maria: Pessoa = {
    nome:'Maria',
    idade: 20,
    profissao: Profissao.JogadoraDeFutebol
}

const jessica: Estudante = {
    nome:'Jessica',
    idade:32,
    profissao:Profissao.Desenvolvedora,
    materias:['Matematica aplicada', 'Programação']
}

const monica: Estudante = {
    nome:'Mônica',
    idade:32,
    materias:['Matematica aplicada', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista){
        console.log('-', item);
    }
}

listar(monica.materias);