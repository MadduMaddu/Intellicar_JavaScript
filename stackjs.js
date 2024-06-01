class Stack{
    constructor(){
        this.items=[];
        this.count=0;
    }
    push(data){
        this.items[this.count]=data;
        this.count++;
        return this.count;
    }
    pop(){
        if(this.count==0) return undefined;
        let result=this.items[this.count-1];
        this.count--;
        return result;
    }
    peek(){
        if(this.count==0)return undefined;
        return this.items[this.count-1];
    }
    isEmpty(){
        return this.count==0;
    }
    size(){
        return this.count;
    }
    print(){
        if(this.count==0) console.log("stack is empty");
        else{
            let str="";
            for(var i=0;i<this.count;i++){
                str+=" "+this.items[i];
            }
            console.log(str);
        }
    }
}
let stack=new Stack();
console.log(stack.pop());
console.log(stack.push(1));
console.log(stack.push(4));
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
console.log(stack.isEmpty());
console.log(stack.size());