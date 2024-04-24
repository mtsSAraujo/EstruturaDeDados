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

    this.size = function(){
        return length
    }

    this.getHead = function(){
        return head
    }

    this.getAllElements = function(variavel){
        let atual = variavel.getHead()
        listaDeElementos = []
        while(atual.next){
            listaDeElementos.push(atual.element)
            listaDeElementos.push(" --> ")
            atual = atual.next
        }
        listaDeElementos.push(atual.element)
        listaDeElementos = listaDeElementos.join("")
        return listaDeElementos
    }

    this.toString = function (){
        let atual = head, string = ""
        while(atual){
            string += atual.element + (atual.next ? " --> " : "")
            atual = atual.next
        }
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
        let removido
        let anterior
        let proximo
        let atual = head
        if(index < length){
            for(let i =0; i< index-1; i++){
                atual = atual.next
            }
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
        else{
            return console.log("Index out of bounds")
        }
    }

}


let variavel = new LinkedList();

variavel.append(3)
variavel.append(5)
variavel.append(6)
console.log(variavel.size())
console.log(variavel.getHead().element)
console.log(variavel.getAllElements(variavel))
variavel.shift()
variavel.unshift(9)
variavel.unshift(3)
console.log(variavel.toString())
variavel.removeByIndex(3)
console.log("Posicao: " + variavel.findElement(3))
console.log(variavel.toString())