function repetir(x = String || Number, y = String || Number){
    let lista = []
    for(let i = 0; i < y; i++){
        lista.push(x)
    }
    console.log(lista)
}
repetir(7, 3)
repetir("Funfou!", 5)