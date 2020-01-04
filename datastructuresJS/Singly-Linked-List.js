class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        //létrehozunk egy új Node-ot
        var newNode = new Node(val);
        //ha ures a lista
        if(!this.head){
            //akkor a head az új node
            this.head = newNode;
            //és a tail is az uj Node
            this.tail = this.head;
        } else {
            //a tail.next-je lesz az új node
            this.tail.next = newNode;
            //és newNode lesz az új tail
            this.tail = newNode;
        }
        //noveljuk a length-et
        this.length++;
        //visszakuldjuk a linked list-et
        return this;
    }
    pop(){
        //ha head nem létezik, akkor undefinedet returnulounk
        if(!this.head) return undefined;
        //current egyenlo a this.head-del
        var current = this.head;
        //newTail egyenlo a current-tel
        var newTail = current;
        //while loop, amíg a currentnek után van egy kovetkezo node
        while(current.next){
            //akkor a newTail lesz a jelenlegi current
            newTail = current;
            //és a kovetkezo node lesz a current
            current = current.next;
        }
        //kilépunk a loop-bol, a tail lesz a newTail
        this.tail = newTail;
        //a newTail után nem jon semmi
        this.tail.next = null;
        //és csokkentjuk a méretet
        this.length--;
        //ha a méret 0 lesz ezáltal
        if(this.length === 0){
            //akkor a head is semmi
            this.head = null;
            //és a tail is semmi
            this.tail = null;
        }
        //returnoljuk a currentet(azt amit toroltunk)
        return current;
    }
    shift(){
        //ha ures a lista, akkor visszakuldjuk az undefined-et
        if(!this.head) return undefined;
        //a jelenlegi head-et kimentjuk egy változóba
        var currentHead = this.head;
        //a currenthead.nextjét megtesszuk headnek
        this.head = currentHead.next;
        //csokkentjuk a hosszúságot
        this.length--;
        //ha a list mérete így nulla lesz
        if(this.length === 0){
            //akkor a tail is semmi lesz
            this.tail = null;
        }
        //returnoljuk a torolt headet
        return currentHead;
    }
    unshift(val){
        //létrehozunk egy új node-ot
        var newNode = new Node(val);
        //ha a list ures, akkor 
        if(!this.head) {
            //a head lesz az új node
            this.head = newNode;
            // és a tail lesz a head
            this.tail = this.head;
        }else{
            //a newnode next-je lesz a jelenlegi head
            newNode.next = this.head;
            // és a head lesz a newNode
            this.head = newNode;
        }
        //noveljuk a méretet
        this.length++;
        //visszakuldjuk a listát
        return this;
    }
    get(index){
        //ha az index kisebb mint nulla, vagy nagyobb/egyenlo mint a list mérete, nullt kuldunk vissza
        if(index < 0 || index >= this.length) return null;
        //counter egyenlo nullával
        var counter = 0;
        //current egyenlo lesz a headdel
        var current = this.head;
        //while loop, amíg a counter nem egyenlo indexxel
        while(counter !== index){
            //a current egyenlo lesz a current.next-tel
            current = current.next;
            //és emeljuk a countert
            counter++;
        }
        //utána visszakuldjuk a counter-t
        return current;
    }
    set(index, val){
        //megszerezzuk az index alapján a keresett node-ot
        var foundNode = this.get(index);
        //ha létezik,akkor
        if(foundNode){
            //updételjuk az értékét a val-lal
            foundNode.val = val;
            //és true-t kuldunk vissza
            return true;
        }
        //máskulonben falsot kuldunk vissza
        return false;
    }
    insert(index, val){
        //ha az index kissebb mint nulla vagy nagyobb a méretnél, akkor falsot kuldunk vissza
        if(index < 0 || index > this.length) return false;
        //ha az index akkor mint a méret, akkor pusht használunk(a double band true-t kuld vissza)
        if(index === this.length) return !!this.push(val);
        //ha az index nulla, akkor shiftet használunk
        if(index === 0) return !!this.unshift(val);
        
        //csinálunk egy új node-ot
        var newNode = new Node(val);
        //az elozo node-ot elmentjuk egy változóba
        var prev = this.get(index - 1);
        //az elozo node nextjét is elmentjuk egy változóba
        var temp = prev.next;
        //az elozo node nextje lesz az új node
        prev.next = newNode;
        //az uj node nextje lesz a régebbi node
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        //edge case-ek
        if(index < 0 || index >= this.length) return undefined;
        //ha az index nulla, akkor shiftet használunk
        if(index === 0) return this.shift();
        //ha az index egyel kisebb mint a length, akkor pop-ot
        if(index === this.length - 1) return this.pop();
        //megállapítjuk az elozo node-ot
        var previousNode = this.get(index - 1);
        //a removed lesz az elozo node kovetkezoje
        var removed = previousNode.next;
        //és az elozo node kovetkezoje lesz a torol kovetkezoje
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
      //a node lesz a head  
      var node = this.head;
      //a head lesz a tail
      this.head = this.tail;
      //és a tail lesz a node
      this.tail = node;
      var next;
      var prev = null;
      //for loop az arrayon
      for(var i = 0; i < this.length; i++){
        //a next lesz a node nextje
        next = node.next;
        // a node nextje lesz a prev
        node.next = prev;
        //a prev lesz a node
        prev = node;
        //és a node lesz a next
        node = next;
      }
      return this;
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)








