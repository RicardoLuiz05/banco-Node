class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    pesquisar(cpf) {
        const buscador = this.clientes.find(cliente => cliente._cpf === cpf);
        return buscador;
    }
    remover(cpf) {
        const removerCliente = this.pesquisar(cpf);
        if (removerCliente) {
            const indiceCliente = this.clientes.indexOf(removerCliente);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    listar() {
        return this.clientes;
    }
}
