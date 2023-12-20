function soma(){
    let soma = 0
    for(i in arguments){ // "ARGUMENTS" É UTILIZADO QUANDO VOCE NÃO REQUER PARAMETROS VISIVEIS NA FUNÇÃO.
        soma += arguments[i] // SOMA RECEBE OS PARAMETROS REPASSADOS DENTRO DO [I](INDICE) DA VARIAVEL SOMA.
    }
    return soma
}
console.log(soma(1, 2))
console.log(soma(4, 5, 3, 2))
console.log(soma("Olá", "usuário!"))