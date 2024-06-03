class Node{
    constructor(data){
        this.val=data;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.head=null;
        this.tail=null;
        this.count=0;
    }
    enqueue(data){
        if(this.head==null&&this.tail==null){
            this.head=this.tail=new Node(data);
            this.count++;
            return;
        }
        let newNode=new Node(data);
        this.tail.next=newNode;
        this.tail=newNode;
        this.count++;
    }
    dequeue(){
        if(this.head&&this.tail)
        {
            let deletedEle=this.head.val;
            this.head=this.head.next;
            this.count--;
            return deletedEle;
        }
        console.log("Queue is Empty");
                
    }
    peek(){
        if(this.head&&this.tail)
        {
            return this.tail.val;
                
        }
        console.log("Queue is Empty");
    }
    isEmpty(){
        return this.count==0;
    }
    size(){
        return this.count;
    }
}
let q1=new Queue();
console.log("size: ",q1.size());
console.log(q1.peek());
console.log(q1.dequeue());
console.log(q1.isEmpty());
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
console.log("size: ",q1.size());
console.log(q1.peek());
console.log(q1.dequeue());
console.log(q1.isEmpty());
