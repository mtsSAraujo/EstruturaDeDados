// Se achar um correspondente, ou seja, uma chave que abre a chave que esta fechando encontrada, a função chama recursão passando o vetor novo, sem a dupla de chaves que se completam, 
// se nao achar correspondente, a função retorna false e o vetor nao se altera
function empilhaEVerificaSePode(vetor){
    let pilha = []
    let tam = vetor.length
    let correspondente, indiceCorrespondente;
    if(tam == 0){
        return true
    }
    let parada = vetor[0]
    let i = 0
    while(parada != "]" && parada != "}" && parada != ")"){
        pilha.push(parada)
        i++
        parada = vetor[i]
        if(i >= tam){
            break;
        }
    }
    if(parada == "}"){
        while(correspondente != "{" && pilha.length > 0){
            correspondente = pilha.pop()
            indiceCorrespondente = pilha.length
        }
        if(pilha.length == 0 && correspondente != "{"){
            return false
        }
        else{
            vetor.splice(i, 1)
            vetor.splice(indiceCorrespondente, 1)
            empilhaEVerificaSePode(vetor)
        }
    }
    else if(parada == "]"){
        while(correspondente != "[" && pilha.length > 0){
            correspondente = pilha.pop()
            indiceCorrespondente = pilha.length
        }
        if(pilha.length == 0 && correspondente != "["){
            return false
        }
        else{
            vetor.splice(i, 1)
            vetor.splice(indiceCorrespondente, 1)
            empilhaEVerificaSePode(vetor)
        }
    }
    else if(parada == ")"){
        while(correspondente != "(" && pilha.length > 0){
            correspondente = pilha.pop()
            indiceCorrespondente = pilha.length
        }
        if(pilha.length == 0 && correspondente != "("){
            return false
        }
        else{
            vetor.splice(i, 1)
            vetor.splice(indiceCorrespondente, 1)
            empilhaEVerificaSePode(vetor)
        }
    }
    else{
        return false
    }

}

function printaResultado(teste){
    empilhaEVerificaSePode(teste)
    if(teste.length == 0){
        console.log("True")
    }
    else{
        console.log("False")
    }
}


let testeTrue = '(({[()]))}'
testeTrue = testeTrue.split('')
let testeTrue2 = "{()[][][[]]}"
testeTrue2 = testeTrue2.split('')
let testeTrue3 = "()"
testeTrue3 = testeTrue3.split('')
let testeFalse = "([))"
testeFalse = testeFalse.split('')
let testeFalse2 = "[][()()()}"
testeFalse2 = testeFalse2.split('')
let testeFalse3 = "[[[]"
testeFalse3 = testeFalse3.split('')
let testeFalse4 = "[]["
testeFalse4 = testeFalse4.split('')
console.log("Resultado esperado: True, True, True, False, False, False, False")
printaResultado(testeTrue)
printaResultado(testeTrue2)
printaResultado(testeTrue3)
printaResultado(testeFalse)
printaResultado(testeFalse2)
printaResultado(testeFalse3)
printaResultado(testeFalse4)