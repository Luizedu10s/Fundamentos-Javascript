// PRIMEIRA ESTRATÉGIA PARA GERAR VALOR PADRÃO EM PARAMEROS DE FUNÇÕES
function soma(a, b, c){
    a = a || 1 // CASO O PARAMETRO NÃO SEJA PASSADO, PODE EXISTIR UM VALOR JA ESTABELECIDO.
    b = b || 1 // CASO O PARAMETRO NÃO SEJA PASSADO, PODE EXISTIR UM VALOR JA ESTABELECIDO.
    c = c || 1 // CASO O PARAMETRO NÃO SEJA PASSADO, PODE EXISTIR UM VALOR JA ESTABELECIDO.
    return a + b + c
}
console.log(soma())

// SEGUNDA ESTRATÉGIA
function soma2(a, b, c){
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2("t", 2, 4))

// TERCEIRO EXEMPLO
function soma3(a = 1, b = 1, c = 1){ // VALOR PADRÃO PRÉ DEFINIDO
    return a + b + c
}
console.log(soma3(1, 3))