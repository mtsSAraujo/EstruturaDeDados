/* function invertePalavra(palavra){
    let i = 0;
    let elemento = palavra[i];
    let tam = palavra.length;
    let tam2;
    let pilha = []
    let pilhaInvertida = []
    while(tam>0){
        while(palavra[i] != " " && tam>0){
            console.log(palavra[i])
            pilha.push(palavra[i])
            i++
        }
        tam2 = pilha.length
        while(tam2>0){
            pilhaInvertida.push(pilha.pop())
            tam2--
        }
        console.log(tam)
    }
    return pilhaInvertida
} */

function invertePalavra(palavra){
    let i = 0;
    let pilha = []
    let letra
    let fraseInvertida = ""
    while(i < palavra.length){
        while(palavra[i] != " " && i<palavra.length){
            pilha.push(palavra[i])
            i++
        }
        while(pilha.length != 0){
            letra = pilha.pop()
            fraseInvertida += letra
        }
        i++
        if(i < palavra.length){
            fraseInvertida += " "
        }
    }
    return fraseInvertida
}


let palavra = "Ta feito jaqueline ;)"
let fraseInvertida = invertePalavra(palavra)
console.log(fraseInvertida)
