{
    /* EXEMPLO: */
var listadefrutas = ["Maçã", "Banana", "Abacate"] /* aray ou lista com frutas */
console.log(listadefrutas) /* imprimindo os valores que estão na lista*/
console.log("O índice 0 é", listadefrutas[0]) /* Mostrando o índice 0 da lista ou "Array" */
}

{
    /* EXEMPLO: */
var telefones = [8375554, 5645645643, 511646]
console.log(telefones)
console.log("O índice 0 é:", telefones[0]) /* Mostrando o índice 0 da lista ou "Array" */
}

{
    /* EXEMPLO: */
var itens = ["BANANA", 63748734, "MAÇÃ", true, 1.56] /* LISTA HETEROGENEA, COM DADOS, NUMBER, STRING E BOOLEAN. */
console.log(itens)
}

{
    /* MÉTODO lenght assim como o len() do python, ele vai retornar a quantidade de itens dentro de um array */

    /* EXEMPLO */
    console.log(`
        A QUANTIDADE DE ITENS EM CADA LISTA/ARRAY: listadefrutas, telefones e itens É:
    `)
    console.log(listadefrutas.length)
    console.log(telefones.length)
    console.log(itens.length)
}

{
    /* PARA ADICIONAR ITENS EM UMA LISTA/ARRAY, DIFERENTE DO PYTHON QUE USAMOS APPEND() NO JS É O push() */

    /* EXEMPLO */
    const frutas = []
    console.log('Os itens adicionados foram os seguintes: ')
    frutas.push("Banana")
    frutas.push("Maçã")
    frutas.push("Uva")
    console.log(frutas)
}

{
    /* OUTRO MEIO É O DE DELETAR ITENS DE UMA LISTA/ARRAY USANDO O COMANDO DELETE */

    /* EXEMPLO: */
    var numeros = [1, 2, 3, 4, 5]
    console.log("A sua lista/array antes do comando 'delete' era: ", numeros)
    delete numeros[0]
    console.log("A sua lista/array depois do comando 'delete' é: ", numeros)
    console.log(typeof numeros)
}