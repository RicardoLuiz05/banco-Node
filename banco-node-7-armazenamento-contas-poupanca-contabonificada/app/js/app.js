let contaController = new ContaController();
let clientes = new Clientes();
contaController.listar();
const c1 = new Conta('1', 100);
const c2 = new Conta('2', 100);
const c3 = new Conta('3', 100);
const c4 = new Conta('4', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
const ricardo = new Cliente('Ricardo', '123', c1);
const alic = new Cliente('Alic', '321', c2);
const caio = new Cliente('Caio', '111', c3);
clientes.inserir(ricardo);
clientes.inserir(alic);
clientes.inserir(caio);
clientes.remover('111');