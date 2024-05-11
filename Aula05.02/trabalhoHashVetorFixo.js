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
    return "Não encontrado!"
}

function main(){
    let hashPrincipal = new Array(29);
    let todasLetras = "ABCDe";
    armazenaHash(hashPrincipal, todasLetras);
    console.log(hashPrincipal);
    console.log(buscarLetra(hashPrincipal, "e"));
}

main()