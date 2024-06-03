class Node{
    constructor(data,prev=null,next=null)
    {
        this.val=data;
        this.prev=prev;
        this.next=next;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.count=0;
    }
    insertAtFirst(data){
        if(this.head&&this.tail){
            let newnode=new Node(data,null,this.head);
            this.head.prev=newnode;
            this.head=newnode;
            this.count++;
            return;
        }else{
        this.head=this.tail=new Node(data);
        this.count++;
        }
    }
    insertAtLast(data){
        if(this.head&&this.tail){
            let newnode=new Node(data,this.tail,null);
            this.tail.next=newnode;
            this.count++;
            return;
        }else{
        this.insertAtFirst(data);
        }
    }
    insertAtMiddle(data,index){
        if(index<=0&&index>this.count){
            console.log("Invalid index");
        }
        else{
            if(index==1)
                this.insertAtFirst(data);
            else if(index==this.count)
                this.insertAtLast(data);
            else{
                if(this.head&&this.tail){
                    let curr=this.head;
                    for(let i=1;i<index;i++){
                        curr=curr.next;
                    }
                    let newnode=new Node(data,curr,curr.next);
                    curr.next.prev=newnode;
                    curr.next=newnode;
                    this.count++;
                }
                else{
                    console.log("list is empty adding at first");
                    this.insertAtFirst(data);
                }
            }
        }
    }
    traverse(){
        if(this.head&&this.tail){
            let curr=this.head;
            let str="";
            while(curr){
                str=str+curr.val+" <--> ";
                curr=curr.next;
            }
            console.log(str);
        }
        else{
            console.log("list is empty");
        }
    }
    deleteAtFirst(){
        if(this.head&&this.tail){
            let deleted=this.head.val;
            this.head=this.head.next;
            this.head.prev=null;
            this.count--;
            return deleted;
        }
        else{
            console.log("list is empty ,can't delete");
        }
    }
    deleteAtLast(){
        if(this.head&&this.tail){
            let deleted=this.tail.val;
            let curr=this.tail.prev;
            curr.next=null;
            this.tail.prev=null;
            this.tail=curr;
            this.count--;
            return deleted;
        }
        else{
            console.log("list is empty ,can not delete");
        }
    }
    deleteAtMiddle(index){
        if(index<=0&&index>this.count){
            console.log("Invalid index");
        }
        else{
            if(index==1)
                this.deleteAtFirst();
            else if(index==this.count)
                this.deleteAtLast();
            else
            {
                if(this.head&&this.tail){
                    let curr=this.head;
                    for(let i=1;i<=index;i++){
                        curr=curr.next;
                    }
                    let deleted=curr.val;
                    let c=curr.prev;
                    c.next=curr.next;
                    curr.next.prev=c;
                    this.count--;
                    return deleted;
                }
                else
                    console.log("list is empty ,we can not delete");
            }
        }
    }
}
let l1=new DoublyLinkedList();
l1.deleteAtMiddle(5);
l1.deleteAtFirst();
l1.deleteAtLast();
l1.traverse();
l1.insertAtMiddle(4,5);
l1.insertAtFirst(3);
l1.insertAtLast(5);
l1.traverse();