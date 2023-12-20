// CRIANDO UM OBJETO
const jogador = new Object // VARIÁVEL CONSTANTE QUE USO PARA CRIAR UM OBJETO "JOGADOR".
// DANDO ATRIBUTOS E SEUS RESPECTIVOS VALORES.
jogador.nome = 'Luiz' 
jogador.idade = 18
jogador.overal = 71
// jogador['nome'] = 'Jonas' // MUDANDO O NOME DINAMICAMENTE ATRAVES DA CHAVE ESPECIFICA.
console.log(jogador)
jogador.nome = 'Jonas' // MUDANDO O NOME DO JOGADOR DIRETO NA CHAVE

// DELETANDO DADOS DE UM OBJETO
delete jogador.idade
delete jogador.overal
console.log(jogador)

