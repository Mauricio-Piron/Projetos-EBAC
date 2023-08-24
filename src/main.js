"use strict";
const n1 = 25;
const n2 = 2;
// METÓDO 1
let multiplicaNumeros = (n1, n2) => n1 * n2;
console.log(n1 * n2);
// METÓDO 2
let multiplic = function (n1, n2) {
    return n1 * n2;
};
console.log(n1 * n2);
// ====================
// METÓDO 1
let saudacao = ['olá', 'Mauricio'];
console.log(saudacao);
const nomePessoa = "José";
// METÓDO 2
let saudacao2 = ['olá', { nomePessoa }];
console.log(saudacao);
// METÓDO 3
class Pessoa {
    constructor(nomePessoa) {
        this.nomePessoa = nomePessoa;
    }
    disOla() {
        return `olá ${this.nomePessoa}`;
    }
}
console.log(`olá ${nomePessoa}`);
