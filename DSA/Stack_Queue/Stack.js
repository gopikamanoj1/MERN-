class Stack {
    constructor(){
        this.items=[]
    }
    push(data){
        this.items.push(data)
    }
    pop(){
        if (this.items==null){
            console.log("empty stack");
        }else{
           return this.items.pop()
        }
    }
    print(){
        console.log(this.items);
    }
}
let stack= new Stack()
stack.push(2)
stack.push(3)
stack.push(6)
stack.print()
console.log(stack.pop());
