class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    get _nome() {
        return this.nome;
    }
    set _nome(NovoNome) {
        this.nome = NovoNome;
    }
    get _cpf() {
        return this.cpf;
    }
    set _cpf(NovoCpf) {
        this.cpf = NovoCpf;
    }
    get _conta() {
        return this.conta;
    }
    set _conta(NovaConta) {
        this.conta = NovaConta;
    }
    toString() {
        return `Cliente: ${this.nome} 
        - CPF: ${this.cpf}`;
    }
}
