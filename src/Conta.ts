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

