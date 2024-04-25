// Lista encadeada circular para resolver o exercicio
function LinkedList(){

    let Node = function(element){
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function(element){

        let node = new Node(element), current;
        if(head == null){
            head = node;
        }
        else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length ++
    }

    this.createList = function(variavel, n){
        let i=1;
        let ultimo = new Node();
        while(i<=n){
            variavel.append(i)
            i++
        }
        let busca = head
        while(busca.next){
            busca = busca.next
            ultimo = busca
        }
        ultimo.next = head
        return variavel
    }

    this.size = function(){
        return length
    }

    this.getHead = function(){
        return head
    }

    this.getAllElements = function(variavel){
        let atual = variavel.getHead()
        listaDeElementos = []
        do{
            listaDeElementos.push(atual.element)
            listaDeElementos.push(atual.next != head ? " --> " : "")
            atual = atual.next
        }while(atual != head)
        listaDeElementos = listaDeElementos.join("")
        return listaDeElementos
    }

    this.toString = function (){
        let atual = head, string = ""
        do{
            string += atual.element + (" ")
            atual = atual.next
        }while(atual != head)
        return string
    }

    this.shift = function (){
        if(length == 0){
            return console.log("Lista Vazia!")
        }
        let atual = head
        let proximo = atual.next
        head = proximo
        length --
    }

    this.unshift = function(element){
        let node = new Node(element)
        if(head == null){
            head = node
        }
        else{
            node.next = head
            head = node
        }
        length ++
    }

    this.findElement = function(element){
        let atual = head;
        let posicao = 0;
        while(atual.element != element){
            atual = atual.next
            posicao++
        }
        if(atual.element === element){
            return posicao
        }
        else{
            return -1
        }
    }

    this.removeByIndex = function(index){
        let removido;
        let anterior;
        let proximo;
        let atual = head
        if(index < length){
            for(let i =0; i< index-1; i++){
                atual = atual.next
            }
            if(atual == head){
                this.shift()
            }
            else{
                if(index == length - 1){
                    anterior = atual
                    removido = atual.next
                    anterior.next = null
                    removido.next = null
                }
                else{
                    anterior = atual
                    removido = atual.next
                    proximo = removido.next
                    removido.next = null
                    anterior.next = proximo
                }
            }
        }
        else{
            return console.log("Index out of bounds")
        }
    }

    this.findByIndex = function(index){
        let atual = head;
        if(index < length){
            for(let i =0; i< index -1; i++){
                atual = atual.next
            }
            return atual
        }
        return console.log("Index out of bounds")
    }

    this.removeMValues = function(variavel, m){
        let contagem = 0
        let auxM = m
        while(length>1){
            if(contagem + m <= length){
                contagem += m
                console.log("Contagem: " + contagem)
                variavel.removeByIndex(contagem-1)
                console.log(variavel.getAllElements(variavel))
            }
            else{
                while(contagem < length - 1){
                    contagem++
                    auxM --
                }
                contagem = 0 + auxM
                variavel.removeByIndex(contagem - 1)
            }
            length--
        }
    }

}


let variavel = new LinkedList();

variavel = variavel.createList(variavel, 5)
console.log("Lista: " + variavel.getAllElements(variavel))
variavel.removeMValues(variavel, 2)
//console.log(variavel.toString())
console.log(variavel.getHead())