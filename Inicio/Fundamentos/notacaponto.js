const lst = []
lst.push("Jonas")
console.log(lst)

// OBJETO PESSOA
let pessoa = {
    nome: [],
    idade: [],
    altura: []
}

pessoa.nome.push("Luiz") // ADICIONANDO ITENS AO OBJETO E A CHAVE NOME.
pessoa.idade.push(18) // ADICIONANDO ITENS AO OBJETO E A CHAVE IDADE.
pessoa.altura.push(1.72) // ADICIONANDO ITENS AO OBJETO E A CHAVE ALTURA.

console.log(pessoa["nome"]) // ACESSANDO VALOR DA CHAVE NO ARRAY
console.log(pessoa["idade"]) // ACESSANDO VALOR DA CHAVE NO ARRAY
console.log(pessoa["altura"]) // ACESSANDO VALOR DA CHAVE NO ARRAY
