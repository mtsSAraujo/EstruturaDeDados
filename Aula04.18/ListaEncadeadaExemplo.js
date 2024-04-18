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
}

let variavel = new LinkedList();

variavel.append(3)
variavel.append(5)
variavel.append(6)
console.log(variavel.size())
console.log(variavel.getHead())