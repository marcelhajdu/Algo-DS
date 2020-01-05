class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
    		//van egy nodunk, data arrayunk és queue arrayunk
        var node = this.root,
            data = [],
            queue = [];
        // a queue-be pusholjuk a node-ot    
        queue.push(node);

        //amíg a queue ki nem urul
        while(queue.length){
        	 //a node lesz a queue-bol shiftel kivett node	
           node = queue.shift();
           //és pusholjuk a datába a node.value-t
           data.push(node.value);
           //ha a node-nak van bal odlala, akkor azt pusholjuk a queue-be
           if(node.left) queue.push(node.left);
           //és ha van a node-nak jobb oldala, akkor azt is pusholjuk a queue-be
           if(node.right) queue.push(node.right);
        }
        //returnoljuk a datát
        return data;
    }
    DFSPreOrder(){
    		//van egy data arrayunk
        var data = [];
        //traverse funkcio
        function traverse(node){
        		//a data-ba pusholjuk a node értékét
            data.push(node.value);
            //ha a nodenak van bal feloli kapcsolodása, akkor ráhivjuk a traverse-t
            if(node.left) traverse(node.left);
            //ha a nodenak van jobb oldalon kapcsolodása, ráhivjuk a traverse-t
            if(node.right) traverse(node.right);
        }
        //meghívjuk a traverse-t a root-ra
        traverse(this.root);
        //returnoljuk a datát
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();



