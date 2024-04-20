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
console.log(resolveProblema(testeTrue))
console.log(resolveProblema(testeTrue2))
console.log(resolveProblema(testeTrue3))
console.log(resolveProblema(testeFalse))
console.log(resolveProblema(testeFalse2))
console.log(resolveProblema(testeFalse3))
console.log(resolveProblema(testeFalse4))

function resolveProblema(testeTrue){
    let contadorParenteses = 0, contadorColchetes = 0, contadorChaves = 0;
    let tam = testeTrue.length
    let aux;
    for(let i=0; i<tam; i++){
        aux = testeTrue.pop()
        if(aux == ")"){
            contadorParenteses ++
        }
        else if(aux == "]"){
            contadorColchetes ++
        }
        else if(aux == "}"){
            contadorChaves ++
        }
        else{
            if(aux ==  "("){
                contadorParenteses --
            }
            else if(aux == "["){
                contadorColchetes --
            }
            else if(aux == "{"){
                contadorChaves --
            }
            else{
                return false
            }
        }
        if(contadorParenteses < 0 || contadorChaves < 0 || contadorParenteses < 0){
            return false
        }
        else if(contadorParenteses == 0 && contadorColchetes == 0 && contadorChaves == 0 && testeTrue.length == 0){
            return true
        }
    }
    return false
}