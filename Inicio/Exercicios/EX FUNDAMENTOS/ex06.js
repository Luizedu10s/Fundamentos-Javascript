function inverso(x = Boolean || Number){
    if(typeof(x) == Boolean){
        console.log(!x)
    }else if(typeof(x) == Number){
        console.log(!x)
    }else{
        console.log(`
            Parâmetro do tipo booleano ou número esperados, mas o tipo do parâmetro é ${typeof(x)}.
        `)
    }
}

inverso(1)