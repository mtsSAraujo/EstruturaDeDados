let fila = [0, 1, 2 ,3]
let fila2 = [4, 5, 6 ,7]
let fila3 = intercalaFila(fila, fila2)
console.log(fila3)

function intercalaFila(fila1, fila2){
    let fila3 = [...fila1]
    let popado;
    for(let i=0; i< fila2.length; i++){
        popado = fila2.shift()
        fila3.push(popado)
        fila2.push(popado)
    }
    return fila3
}