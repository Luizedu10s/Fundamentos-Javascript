// FORMA LITERAL
function hello(nome){console.log(`Olá ${nome}`)} // <== FUNÇÃO COM PARAMETRO
hello("Luiz")
hello(10)
hello(true)
// OUTRO EXEMPLO 
// SOMA DE DOIS NÚMEROS INTEIROS
function soma(a, b){console.log("A soma é: ", a + b)}
soma(4, 5)
// VOCE PODE ARMAZENAR EM UMA VARIÁVEL
const funcao1 = function ola(){console.log("Hello World!")}
funcao1()
const functions = [function hello(){ console.log("Hello!") }, function div(a, b){ return a / b}]
console.log(functions[0]) // EXECUTANDO A FUNÇÃO QUE ESTÁ DENTRO DO ARRAY
console.log(functions[1](10, 5)) // EXECUTANDO COM PARAMETROS 
// ARMAZENAR DENTRO DE UM OBJETO TAMBÉM É UM MEIO
const pessoa = {
    nome: 'Luiz',
    falar: function say(){ return `Olá meu nome é ${nome} !`}
}
console.log(pessoa.nome)
console.log(pessoa.falar)
// FUNÇÃO QUE CALCULA AREA
function area(altura, largura){
    const area = altura * largura
    if(area >= 20){console.log('A area excede os limites!')}
    else{console.log(`A area corresponde a ${area}`)}
}
area(4, 3)