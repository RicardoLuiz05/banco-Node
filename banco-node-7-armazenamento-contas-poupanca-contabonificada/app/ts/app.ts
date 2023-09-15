let clienteController = new ClienteController();
let clientes = new Clientes();

clienteController.listar();

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

const ricardo = new Cliente('Ricardo', '123');
console.log('cliente '+ ricardo._nome +' criado');
const alic = new Cliente('Alic', '321');
console.log('cliente '+ alic._nome +' criado');
const caio = new Cliente('Caio', '111');
console.log('cliente '+ caio._nome +' criado');

ricardo._conta = c1;
console.log('cliente '+ ricardo._nome +' agora possui a conta ' + c1.numero);

alic._conta = c2;
console.log('cliente '+ alic._nome +' agora possui a conta ' + c2.numero);

caio._conta = cb1;
console.log('cliente '+ caio._nome +' agora possui a conta ' + cb1.numero);

clientes.inserir(ricardo);
clientes.inserir(alic);
clientes.inserir(caio);
clientes.remover('111');
console.log('cliente '+ caio._nome +' foi removido');


