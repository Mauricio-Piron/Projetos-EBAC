const n1 = 25;
const n2 = 2;

// METÓDO 1
let multiplicaNumeros = (n1: number, n2: number): number => n1 * n2
console.log(n1 * n2);

// METÓDO 2
let multiplic = function(n1: number , n2:number) {
    return n1 * n2
}
console.log(n1 * n2);

// ====================

// METÓDO 1
let saudacao: [ola: string , nome: string] = ['olá' , 'Mauricio']
console.log(saudacao)

const nomePessoa = "José"

// METÓDO 2
let saudacao2 = ['olá' , {nomePessoa}]
console.log(saudacao)

// METÓDO 3
class Pessoa {
    nomePessoa: string;

    constructor(nomePessoa: string) {
        this.nomePessoa = nomePessoa;
    }
    disOla(): string {
        return `olá ${this.nomePessoa}`;
    }
}
console.log(`olá ${nomePessoa}`);
