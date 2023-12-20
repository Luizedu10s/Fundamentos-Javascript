// UMA FUNÇÃO ANONIMA É UMA FUNÇÃO SEM NOME, EXEMPLO:

const div = function (a, b){
    return a / b
}
console.log(div(10, 5))

// FUNÇÃO ANONIMA DENTRO DE UM OBJETO:

const pessoa = {
    falar(){
        console.log("Olá")
    },
    nome: "Luiz"
}
console.log(pessoa.nome)
pessoa.falar()