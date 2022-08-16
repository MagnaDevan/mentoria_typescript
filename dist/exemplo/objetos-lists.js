"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'André',
    idade: 26,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 30,
    profissao: 'desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Atriz
};
const maria = {
    nome: 'Maria',
    idade: 20,
    profissao: Profissao.JogadoraDeFutebol
};
const jessica = {
    nome: 'Jessica',
    idade: 32,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica aplicada', 'Programação']
};
const monica = {
    nome: 'Mônica',
    idade: 32,
    materias: ['Matematica aplicada', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(monica.materias);
//# sourceMappingURL=objetos-lists.js.map