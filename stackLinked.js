class Node{
    constructor(value){
        this.val=value;
        this.next=null;
    }
    // constructor(value,next){
    //     this.val=value;
    //     this.next=next;
    // }
}
class Stack{
    constructor(){
        this.top=null;
        this.count=0;
    }
    push(data){
        const newNode = new Node(data);
        if (this.top) {
            newNode.next = this.top;
        }
        this.top = newNode;
        this.count++;
    }
    pop(){
        if(this.top==null){
            console.log("Stack is Empty");
            return;
        }
        let deletedEle=this.top.val;
        this.top=this.top.next;
        this.count--;
        return deletedEle;
    }
    peek(){
        if(this.top==null){
            console.log("Stack is Empty");
            return;
        }
        return this.top.val;
    }
    isEmpty(){
        return this.top==null;
    }
    getSize(){
        return this.count;
    }
}
let s1=new Stack();
s1.pop();
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
console.log("Size: ",s1.getSize());
console.log(s1.peek());
console.log(s1.pop());
console.log(s1.isEmpty());
console.log("Size: ",s1.getSize());