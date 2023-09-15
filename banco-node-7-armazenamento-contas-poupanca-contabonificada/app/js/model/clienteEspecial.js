class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf);
        this.dependentes = new Array();
    }
    get _dependentes() {
        return this.dependentes;
    }
    set _dependentes(novosDependentes) {
        this.dependentes = novosDependentes;
    }
}
