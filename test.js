alert('Bem Vindo ao site');
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 25;
let saldoDisponivel = 100;


let chute = prompt('qual o seu nome?');

if(chute == nome){
    alert('Correto');
}else{
    alert ('Erro! Preencha todos os campos');
}


let numero = prompt ('qual a sua idade?')

if(numero >= 18){
    alert('pode tirar a habilitação')
}else
    alert('Erro! Preencha todos os campos')



let vendas = prompt ('fale seu numero de vendas');

if(vendas == numeroDeVendas){
    alert('Certo')
}else 
    alert ('Erro! Preencha todos os campos')




let saldo = prompt ('qual e o seu saldo')

if(saldo == saldoDisponivel){
    alert('Certo')
}else 
    alert ('Erro! Preencha todos os campos')
