function Conta(cliente){  //Abstração 
    this.cliente = cliente;

    this.mensagem =  function () {
        console.log(`Seja bem vindo a sua conta ${this.cliente} `)
    };
}

function ContaCorrente(cliente, numeroContaC, saldoC) { //herança classe Conta 
    this.cliente = cliente;
    this.numeroContaC = numeroContaC;
    this.saldoC = saldoC;

    Conta.call(this, cliente )
}   

function ContaPoupanca(cliente, numeroContaP, saldoP){ //herança classe Conta 
    this.cliente = cliente;
    this.numeroContaP = numeroContaP;
    this.saldoP = saldoP;

    Conta.call(this, cliente)
}
const cliente = new Conta("Aparecida" , "753697");

const ContaCorrente1 = new ContaCorrente("Mauricio", "12345", "5000") 
const ContaPoupanca1 = new ContaPoupanca ("Mauricio", "54321", "1000");
const ContaCorrente2 = new ContaCorrente("José", "147258", "1000");
const ContaPoupanca2 = new ContaPoupanca("José", "258147", "5000");

console.log(cliente);

console.log(ContaCorrente1);
ContaCorrente1.mensagem();
console.log(ContaPoupanca1);
ContaPoupanca1.mensagem()

console.log(ContaCorrente2);
ContaCorrente2.mensagem();
console.log(ContaPoupanca2);
ContaPoupanca2.mensagem()
