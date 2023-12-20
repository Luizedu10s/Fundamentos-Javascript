const pai = {
    nome: 'João',
    corCabelo: 'Castanho',
    altura: 1.72
}
const filha = Object.create(pai) // aqui está criando um objeto novo, chamado filha, onde o protótipo dela é pai.
filha.nome = "Juliana"
filha.idade = 18
console.log(`Nome: ${filha.nome}, Idade: ${filha.idade}, Cor do cabelo: ${filha.corCabelo}`)
/* COR DE CABELO NÃO ESTÁ DEFINIDO NO OBJETO FILHA, POREM COMO O OBJETO PAI CONTÉM
E A FILHA TEM COMO PROTÓTIPO O PAI, ELA RECEBE E ENGLOBA ESSE CONCEITO DE HERANÇA.
*/

// PERCORRENDO AS CHAVES QUE ESTÃO NO OBJETO FILHA E AS QUE FORAM HERDADAS DO PAI.
for(let chave in filha){
    console.log(chave)
}

// VERIFICANDO SE A PROPRIEDADE É DO PRÓPRIO OBJETO, OU SE FOI HERDADO.
for(let chave in filha){
    filha.hasOwnProperty(key) ? 
        console.log(`É propria ${key}`) : console.log(`É herança: ${key}`)
}  // USANDO UM OPERADOR TERNÁRIO PARA FAZER A VERIFICAÇÃO.

