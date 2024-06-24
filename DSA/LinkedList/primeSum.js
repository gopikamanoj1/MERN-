class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    addData(value){
        let newNode= new Node(value)
        if(!this.head){
            this.head=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
    }
    display(){
        let curr=this.head
        while(curr!==null){
            console.log(curr.value)
            curr=curr.next
        }
    }
}

let list= new linkedList()
list.addData(10)
list.addData(11)
list.addData(12)

list.display()