class Cliente{

    private nome: string;
    private cpf: string;
    private conta: Conta;

    constructor(nome:string, cpf:string, conta:Conta){
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
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


}