/* UM OBJETO EM JAVASCRIPT É UMA COLEÇÃO
DE CHAVE E VALOR */

/* Exemplo */

const idadepessoa = {"Gabriel": 18, "Jonas": 21} /* ENTRE CHAVES */
console.log(idadepessoa)

/* OUTRO EXEMPLO */

const pessoa = {}
pessoa.nome = "Jonas"
pessoa.idade = 18
pessoa.altura = 1.82
console.log(`Segue os dados do objeto pessoa
`, pessoa)

/* OBJETO CARRO */

const garagem = {
    nome: "Ford car",
    marca: "Ford",
    cavalos: 120
}
console.log("O objeto garagem tem este carro", garagem)
console.log(typeof garagem)