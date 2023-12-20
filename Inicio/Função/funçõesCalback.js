const produ = ["Mercedes", "Bmw", "Honda"]

function imprimir(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
}
produ.forEach(imprimir) // forEach() É UMA FUNÇÃO PARA ARRAY QUE, VAI PERCORRER CADA ITEM E MOSTRAR O INDICE E O ITEM DO ARRAY.
