abstract class Conta{
    protected readonly numero: number;
    protected titular: string;
    protected saldo: number;

    constructor(titular: string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldo = 0;
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPF extends Conta{
    private cpf: number;
    constructor(cpf: number, titular: string){
        super(titular);
        this.cpf = cpf;  
    }

    public depositar(valor: number): void{
        if(valor <=0 || valor > 1000){
            console.log("Este valor não pode ser depositado! Informe o valor entre R$ 1 á R$1000");
        }else{
            this.saldo += valor;
            console.log(`Deposito de R$ ${valor} foi realizado com sucesso!`)
        }
    }

    public sacar(valor: number): void{
        if(valor > this.saldo || valor <= 0){
            console.log("Este valor não pode ser sacado!");
        }else{
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso!`);
        }
    }

    public imprimir():void{
        console.log("----------------------------")
        console.log("Pessoa Fisíca");
        console.log(`Titular: ${this.titular} | Conta: ${this.numero} | Saldo: ${this.saldo} | CPF: ${this.cpf}`);
        console.log("----------------------------")
    }
}
class ContaPJ extends Conta{
    private cnpj: number;
    constructor(cnpj: number, titular: string){
        super(titular);
        this.cnpj = cnpj;
    }

    public depositar(valor: number): void{
        if(valor <=0 || valor > 10000){
            console.log("Este valor não pode ser depositado! Informe o valor entre R$ 1 á R$10000");
        }else{
            this.saldo += valor;
            console.log(`Deposito de R$ ${valor} foi realizado com sucesso!`)
        }
    }

    public sacar(valor: number): void{
        if(valor > this.saldo || valor <= 0){
            console.log("Este valor não pode ser sacado!");
        }else{
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso!`);
        }
    }

    public imprimir():void{
        console.log("----------------------------")
        console.log("Pessoa Juridica");
        console.log(`Titular: ${this.titular} | Conta: ${this.numero} | Saldo: ${this.saldo} | CNPJ: ${this.cnpj}`);
        console.log("----------------------------")
    }

}

const pessoa1 = new ContaPF(1234, "Virissimo");
const pessoa2 = new ContaPJ(112233, "Miguel");

pessoa1.depositar(50);
pessoa1.imprimir();
pessoa1.sacar(-1);
pessoa1.sacar(60);
pessoa1.sacar(50);
pessoa1.sacar(60);
pessoa1.imprimir();

pessoa2.depositar(50);
pessoa2.imprimir();
pessoa2.sacar(-1);
pessoa2.sacar(60);
pessoa2.sacar(50);
pessoa2.sacar(60);
pessoa2.imprimir();
