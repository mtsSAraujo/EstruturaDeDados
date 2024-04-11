let palavra = "Complicado demais cara"
let pilha = [] 
let elemento
for(let i =0; i<palavra.length; i++){
    elemento = palavra[i]
    pilha.push(elemento)
}

let palavraInvertida = []
let contador = pilha.length
let pilhaInvertida = []
invertePalavras(pilha, contador, pilhaInvertida)
console.log(pilhaInvertida)
let vetorPalavras = [...pilhaInvertida[0], ...pilhaInvertida[1], ...pilhaInvertida[2]]
console.log(vetorPalavras)

/* for(let j = pilha.length-1; elemento != " "; j--){
    elemento = pilha.pop()
    palavraInvertida.push(elemento)
    console.log(palavraInvertida)
    contador --
    if(contador>0 && elemento == " "){

    }
} */

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


