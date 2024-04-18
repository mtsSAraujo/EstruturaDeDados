function coletaValores(fila){
    let primeiro, proximo, ultimo;
    if(fila.length%2 != 0){
        return false
    }
    if(fila.length > 2){
        primeiro = fila.shift()
        proximo = fila.shift()
        ultimo = fila.pop()
    }
    else{
        primeiro = fila.shift()
        proximo = fila.shift()
        ultimo = proximo
    }
    while(primeiro != undefined){
        if(primeiro === "("){
            if(proximo === ")"){
                primeiro = fila.shift()
                proximo = fila.shift()
            }
            else if(ultimo === ")"){
                primeiro = proximo
                proximo = fila.shift()
                ultimo = fila.pop()
            }
            else{
                return false
            }
        }
        else if(primeiro === "["){
            if(proximo === "]"){
                primeiro = fila.shift()
                proximo = fila.shift()
            }
            else if(ultimo === "]"){
                primeiro = proximo
                proximo = fila.shift()
                ultimo = fila.pop()
            }
            else{
                return false
            }
        }
        else if(primeiro === "{"){
            if(proximo === "}"){
                primeiro = fila.shift()
                proximo = fila.shift()
            }
            else if(ultimo === "}"){
                primeiro = proximo
                proximo = fila.shift()
                ultimo = fila.pop()
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }
    return true
}


function printaResultado(teste){
    if(coletaValores(teste)){
        console.log("True")
    }
    else{
        console.log("False")
    }
}

function atribuiOsTestes(filaTeste, teste){
    filaTeste = [...teste]
    printaResultado(filaTeste)
}

let testeTrue = "[([[]])]"
let testeTrue2 = "{()[][][[]]}"
let testeTrue3 = "()"
let testeFalse = "([))"
let testeFalse2 = "[][()()()}"
let testeFalse3 = "[)"
let testeFalse4 = "[[[]"
let filaTeste = []
console.log("Resultado esperado: True, True, True, False, False, False, False")
atribuiOsTestes(filaTeste, testeTrue)
atribuiOsTestes(filaTeste, testeTrue2)
atribuiOsTestes(filaTeste, testeTrue3)
atribuiOsTestes(filaTeste, testeFalse)
atribuiOsTestes(filaTeste, testeFalse2)
atribuiOsTestes(filaTeste, testeFalse3)
atribuiOsTestes(filaTeste, testeFalse4)