function hanoi(n, inicial, final, aux, vetorQtd){
    if(n === 1){
        printHanoi(n, inicial, final, vetorQtd)
        return
    }
    hanoi((n-1), inicial, aux, final, vetorQtd)
    printHanoi(n, inicial, final, vetorQtd)
    hanoi((n-1), aux, final, inicial, vetorQtd)
}

function printHanoi(n, inicial, final, vetorQtd){
    console.log(`Disco: ${n}  Movimento: ${inicial} --> ${final}`)
    vetorQtd[0]++
}

function checaInteiro(num){
    if(Number.isInteger(num)){
        return true
    }
    return false
}

function numeroDeDiscos(n){
    do{
        n = Number(prompt("Digite um número inteiro positivo de discos:"))
    }while(n<=0 || !checaInteiro(n))
    return n;
}

function main(){

    let n;
    let inicial = "A"
    let final = "C"
    let aux = "B"
    let entrada = 1;
    while(entrada != 0){
        entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Resolve torre de hanoi para N discos;\n0-Finalizar o programa;"))
        switch(entrada){
            case 1:
                let vetorQtd = [0];
                n = numeroDeDiscos(n)
                hanoi(n, inicial, final, aux, vetorQtd)
                console.log(`Quantidade de movimentos: ${vetorQtd[0]}`)
                vetorQtd[0] = 0;
                break;

            case 0:
                break;

            default:
                alert("Opção Digitada inválida!")
                entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Resolve torre de hanoi para N discos;\n0-Finalizar o programa;"))
                break;
        }
    }
}