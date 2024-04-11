function invertePalavras(pilha, contador, pilhaInvertida){
    let elemento
    let palavraInvertida = []
    for(let j = pilha.length-1; elemento != " "; j--){
        elemento = pilha.pop()
        palavraInvertida.push(elemento)
        contador --
        if(contador>0 && elemento == " "){
            palavraInvertida.pop()
            palavraInvertida.unshift(" ")
            invertePalavras(pilha, contador, pilhaInvertida)
            pilhaInvertida.push(palavraInvertida)
        }
        else if(contador == 0){
            pilhaInvertida.push(palavraInvertida)
            return
        }
    }
}

function inserirVetor(pilhaInvertida, vetorPalavras){
    let valorPopado;
    for(let i=0; i<pilhaInvertida.length; i++){
        valorPopado = pilhaInvertida.pop()
        if(i == pilhaInvertida.length){
            vetorPalavras.push(valorPopado)
            break
        }
        else{
            inserirVetor(pilhaInvertida, vetorPalavras)
            vetorPalavras.push(valorPopado)
        }
    }
    return vetorPalavras
}

let palavra = "será que funciona mesmo?"
if(palavra == ""){
    console.log("Não há nenhuma frase digitada")
}
else{
    let pilha = [] 
    let elemento
    for(let i =0; i<palavra.length; i++){
        elemento = palavra[i]
        pilha.push(elemento)
    }
    let contador = pilha.length
    let pilhaInvertida = []
    console.log("Entrada: " + palavra)
    invertePalavras(pilha, contador, pilhaInvertida)
    let vetorPalavras = []
    vetorPalavras = inserirVetor(pilhaInvertida, vetorPalavras)
    console.log("Saida: " + vetorPalavras.toString().replace(/,/g, ""))
}