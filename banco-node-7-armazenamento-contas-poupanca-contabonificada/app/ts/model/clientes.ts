class Clientes{
    private clientes: Array<Cliente>;

    constructor(){
        this.clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    pesquisar(cpf: string): Cliente{
        const buscador = this.clientes.find(
            cliente => cliente._cpf === cpf
        );
        return buscador;
    }

    remover(cpf:string): void {
        const removerCliente = this.pesquisar(cpf);
        if(removerCliente) {
            const indiceCliente = this.clientes.indexOf(removerCliente);
            if (indiceCliente > -1){
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }
}