class Cliente {
    constructor(nome, cpf, conta) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
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
}
