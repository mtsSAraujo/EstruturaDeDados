function hanoi(n, inicial, final, aux){
    if(n == 1){
        print(n, inicial, final)
        return;
    }
    else{
        hanoi(n-1, inicial, aux, final)
        print(n, inicial, final)
        hanoi(n-1,aux, final, inicial)
    }
}

function print(n, inicial, final){
    console.log('Disco: ${n}  Movimento: ${inicial} --> ${final}')
}

function numeroDeDiscos(n){
    
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
                numeroDeDiscos(n)
                hanoi(n, inicial, final, aux)
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