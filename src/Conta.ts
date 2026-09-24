class Conta{
    private numero: number;
    private titular: string;

    constructor(numero: number, titular: string){
        this.numero = numero;
        this.titular = titular;
    }

    gerarNumeroConta():number{
        return Math.floor(Math.random() * 100000) + 1
    }
}

class ContaPF extends Conta{
    private cpf: number;
    constructor(cpf: number, numero: number, titular: string){
        super(numero, titular);
        this.cpf = cpf;
        
    }

}

class ContaPJ extends Conta{
    private cnpj: number;
    constructor(cnpj: number, numero: number, titular: string){
        super(numero, titular);
        this.cnpj = cnpj;
        
    }

}
