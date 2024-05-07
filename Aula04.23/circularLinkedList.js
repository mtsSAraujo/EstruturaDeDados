function CircularLinkedList(){

    let Node = function(element){
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = new Node();
    head.next = head;

    this.append = function(element){
        let node = new Node(element)
        current = head
        while(current.next != head){
            current = current.next
        }
        current.next = node
        node.next = head
        length++
    }

    this.getAllElements = function(){
        let atual = head
        listaDeElementos = []
        do{
            listaDeElementos.push(atual.element)
            listaDeElementos.push(atual.next != head ? " --> " : "")
            atual = atual.next
        }while(atual != head)
        listaDeElementos = listaDeElementos.join("")
        return listaDeElementos
    }

    this.getHead = function(){
        return head
    }

    this.createList = function(variavel, n){
        let i=1;
        while(i<=n){
            variavel.append(i)
            i++
        }
        return variavel
    }

    this.josephusResolution = function(m){
        let current = head
        let andar = m
        while(length>1){
            while(andar>1){
                andar--
                if(current.next == head){
                    current = current.next.next
                }
                else{
                    current = current.next
                }
            }
            if(current.next == head){
                current.next.next = current.next.next.next
            }
            else{
                current.next = current.next.next
            }
            andar = m
            length --
        }
    }

    this.getSize = function(){
        return length
    }

}

let variavel = new CircularLinkedList();
let n = 41, m =7;
variavel.createList(variavel, n)
console.log(variavel.getAllElements())
variavel.josephusResolution(m)
console.log("Ultimo elemento que sobrou: ")
console.log(variavel.getAllElements())