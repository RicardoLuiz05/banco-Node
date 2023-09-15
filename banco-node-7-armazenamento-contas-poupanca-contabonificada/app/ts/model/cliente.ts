class Cliente{

    private nome: string;
    private cpf: string;
    private conta: Conta;

    constructor(nome:string, cpf:string){
        this.nome = nome;
        this.cpf = cpf;
    }

    get _nome(){
        return this.nome;
    }

    set _nome(NovoNome:string){
        this.nome = NovoNome;
    }

    get _cpf(){
        return this.cpf;
    }

    set _cpf(NovoCpf:string){
        this.cpf = NovoCpf;
    }
    
    get _conta(){
        return this.conta;
    }

    set _conta(NovaConta:Conta){
        this.conta = NovaConta;
    }

    toString(): string {
        return `Cliente: ${this.nome} 
        - CPF: ${this.cpf}`;
    }



}