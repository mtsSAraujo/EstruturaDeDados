function coletaValores(fila){
    let primeiro, proximo, ultimo;
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
    do{
        if(primeiro == "("){
            if(proximo == ")"){
                primeiro = fila.shift()
                proximo = fila.shift()
            }
            else if(ultimo == ")"){
                primeiro = fila.shift()
                ultimo = fila.pop()
            }
            else{
                return false
            }
        }
        else if(primeiro == "["){
            if(proximo == "]"){
                primeiro = fila.shift()
                proximo = fila.shift()
            }
            else if(ultimo == "]"){
                primeiro = fila.shift()
                ultimo = fila.pop()
            }
            else{
                return false
            }
        }
        else if(primeiro === "{"){
            if(proximo == "}"){
                primeiro = fila.shift()
                proximo = fila.shift()
            }
            else if(ultimo == "}"){
                primeiro = fila.shift()
                ultimo = fila.pop()
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }while(fila.length>0)
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

let testeTrue = "[[[]]]"
let testeTrue2 = "[][][[]]"
let testeTrue3 = "()"
let testeFalse = "([)]"
let testeFalse2 = "[][()()()["
let testeFalse3 = "[)"
let filaTeste = []
console.log("Resultado esperado: True, True, True, False, False, False")
atribuiOsTestes(filaTeste, testeTrue)
atribuiOsTestes(filaTeste, testeTrue2)
atribuiOsTestes(filaTeste, testeTrue3)
atribuiOsTestes(filaTeste, testeFalse)
atribuiOsTestes(filaTeste, testeFalse2)
atribuiOsTestes(filaTeste, testeFalse3)

