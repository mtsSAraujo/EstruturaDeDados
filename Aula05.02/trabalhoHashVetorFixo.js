function armazenaHash(hashPrincipal, letras){
    let tamanho = hashPrincipal.length;
    let codigoLetraFinal, codigoLetra;

    for(let i=0; i<letras.length; i++){
        codigoLetra = letras.charCodeAt(i);
        codigoLetraFinal = codigoLetra % tamanho;
        while(hashPrincipal[codigoLetraFinal]){
            codigoLetraFinal++;
            if(codigoLetraFinal >= tamanho){
                codigoLetraFinal = 0;
            }
        }
        if(hashPrincipal.includes(letras[i])){
            console.log("Letra ja mapeada!");
        }
        else{
            hashPrincipal[codigoLetraFinal] = letras[i]; 
        }    
    }
}

function armazenaLetra(hashPrincipal, letra){
    let tamanho = hashPrincipal.length
    let codigoLetra = letra.charCodeAt(0)
    let codigoLetraFinal = codigoLetra % tamanho;

    if(buscarLetra(hashPrincipal, letra)){
        return false
    }
    else{
        while(hashPrincipal[codigoLetraFinal]){
            codigoLetraFinal++
            if(codigoLetraFinal >= tamanho){
                codigoLetraFinal = 0;
            }
        }
        hashPrincipal[codigoLetraFinal] = letra
    }
}

function buscarLetra(hashPrincipal, letraBuscada){
    let tamanho = hashPrincipal.length;
    let codigoLetraProcurada = letraBuscada.charCodeAt(0);
    let posicaoInicial = codigoLetraProcurada % tamanho;
    while(hashPrincipal[posicaoInicial]){
        if(hashPrincipal[posicaoInicial] == letraBuscada){
            return(posicaoInicial);
        }
        posicaoInicial++;
    }
    return false
}

function main(){
    let hashPrincipal = new Array(29);
    let todasLetras = "ABD";
    armazenaHash(hashPrincipal, todasLetras);
    console.log(hashPrincipal);
    console.log(buscarLetra(hashPrincipal, "A"));
    console.log(armazenaLetra(hashPrincipal, "C"))
    console.log(hashPrincipal)

}

main()