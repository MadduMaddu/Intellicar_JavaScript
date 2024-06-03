class Node{
    constructor(data,next=null){
        this.val=data;
        this.next=next;
    }
}
class Linked{
    constructor(){
        this.head=null;
        this.count=0;
    }
    insertAtfirst(data){
        if(this.head){
            let newNode=new Node(data,this.head);
            this.head=newNode;
            this.count++;
            return;
        }
        this.head=new Node(data);
        this.count++;
    }
    insertAtLast(data){
        if(this.head==null){
            this.insertAtfirst(data);
            return;
        }
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=new Node(data);
        this.count++;
    }
    insertAtMiddle(data,index){
        if(index<=0&&index>this.count){
            console.log("invalid Index");
        }
        else{
            if(index==0)
                this.insertAtfirst(data);
            else if(index==this.count)
                this.insertAtLast(data);
            else{
                let curr=this.head;
                for(let i=1;i<index;i++){
                    curr=curr.next;
                }
                let newNode=new Node(data,curr.next);
                curr.next=newNode;
                this.count++;
            }
        }
    }
    deleteAtFirst(){
        if(this.head){
            let deleted=this.head.val;
            this.head=this.head.next;
            this.count--;
            return deleted;
        }
        console.log("List is Empty");
    }
    deleteAtLast(){
        if(this.head){
            let curr=this.head;
            while(curr.next.next){
                curr=curr.next;
            }
            let deleted=curr.next.val;
            curr.next=null;
            this.count--;
            return deleted;

        }
        console.log("List is Empty");
    }
    deleteAtMiddle(index){
        if(index<=0&&index>this.count){
            console.log("Invalid Index");
        }
        else{
            if(index==1)
                this.deleteAtFirst();
            else if(index==this.count)
                this.deleteAtLast();
            else{
                let curr=this.head;
                for(let i=1;i<index;i++){
                    curr=curr.next;
                }
                let deleted=curr.next.val;
                curr.next=curr.next.next;
                this.count--;
                return deleted;
            }
        }
    }
    traverse(){
        if(this.head){
            let curr=this.head;
            while(curr){
                console.log(curr.val," ");
                curr=curr.next;
            }
        }else{
            console.log("List is empty");
        }
    }
    size(){
        return this.count;
    }
}
let l1=new Linked();
l1.deleteAtFirst();
l1.deleteAtMiddle(0);
l1.deleteAtLast();
l1.traverse();
l1.insertAtLast(1);
l1.traverse();
console.log("---------------");
l1.insertAtfirst(0);
l1.traverse();
console.log("---------------");
l1.insertAtLast(2);
l1.traverse();
console.log("---------------");
l1.insertAtLast(3);
l1.insertAtLast(4);
l1.insertAtLast(6);
l1.traverse();
console.log("---------------");
l1.insertAtMiddle(5,5);
l1.traverse();
console.log("---------------");
l1.deleteAtFirst();
l1.deleteAtLast();
l1.traverse();
console.log("---------------");
l1.deleteAtMiddle(3);
l1.traverse();
console.log("---------------");
console.log(l1.size());
