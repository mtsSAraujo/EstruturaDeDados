//fila
function exemploFila(){
    var fila = []
    var x, y

    x = parseInt(prompt("Informe um número"))
    fila.push(x)
    fila.push(1)
    fila.push(2)

    alert("Fila: " + fila)

    y = fila.shift()
    alert("elemento removido: " + y)
    alert("Fila: " + fila)
}

function empty(fila){
    while(fila.length != 0){
        fila.shift()
    }
    alert("Esvaziou: " + fila)
}

//pilha
function clear(pilha){
    while(pilha.length != 0){
        pilha.pop()
    }
    alert("Esvaziou")
}

function topPilha(pilha){
    if(pilha.length != 0){
        x = pilha.pop()
        pilha.push(x)
        return x
    }
    alert("pilha está vazia!")
    return null
}


// main
function main(){
    var fila = [3, 2 ,1]
    var pilha = [1, 2, 3, 6, 4]
    //empty(fila)
    //exemploFila()
    var topo = topPilha(pilha)
    alert("Topo: " + topo)
    clear(pilha)
    alert("Pilha: " + pilha)
    topPilha(pilha)
}
