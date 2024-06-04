class Node{
    constructor(data){
        this.val=data;
        this.right=null;
        this.left=null;
    }
}
class Bst{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root==null;
    }
    insert(data){
        let newnode=new Node(data);
        if(this.isEmpty()){
            this.root=newnode;
        }else{
            this.insertNode(this.root,newnode);
        }
    }
    insertNode(root,newnode){
        if(newnode.val<root.val){
            if(root.left){
                this.insertNode(root.left,newnode);
            }
            else{
                root.left=newnode;
            }
        }
        else if(newnode.val>root.val){
            if(root.right){
                this.insertNode(root.right,newnode);
            }
            else{
                root.right=newnode;
            }
        }
        else{
            console.log("Duplicate node");
        }
    }
    search(root,data){
        if(!root){
            return false;
        }
        else{
            if(data===root.val)
                return true;
            else if(data<root.val)
                return this.search(root.left,data);
            else
                return this.search(root.right,data);
        }
    }
    preorder(root){
        if(root){
            console.log(root.val,"-->");
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.val,"-->");
            this.inorder(root.right);
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.val,"-->");
        }
    }
    levelorder(root){
        let queue=[];
        queue.push(root);
        while(queue.length){
            let curr=queue.shift();
            console.log(curr.val);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
    min(root){
        let min=root.val;
        let curr=root;
        while(curr.left){
            curr=curr.left;
            min=curr.val;
            
        }
        return min;
    }
    min1(root){
        if(!root.left){
            return root.val;
        }
        else{
            return this.min1(root.left);
        }
    }
    max(root){
        let max=root.val;
        let curr=root;
        while(curr.right){
            curr=curr.right;
            max=curr.val;
            
        }
        return max;
    }
    delete(root,data){
        root=this.deleteNode(root,data);
    }
    deleteNode(root,data){
        if(root==null){
            return root;
        }
        if(data<root.val){
            root.left=this.deleteNode(root.left,data);
        }
        else if(data>root.val){
            root.right=this.deleteNode(root.right,data);
        }
        else{
            if(!root.left&&!root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }
            else if(!root.right){
                return root.left;
            }
            root.val=this.min(root.right);
            root.right=this.deleteNode(root.right,root.val);
        }
        return root;
    }
}
let tree=new Bst();
console.log(tree.search(3));
console.log(tree.isEmpty());
tree.insert(10);
console.log(tree.isEmpty());
tree.insert(5);
tree.insert(10);
tree.insert(15);
tree.insert(3);
tree.insert(7);
console.log(tree.search(tree.root,7));
console.log(tree.search(tree.root,3));
console.log(tree.search(tree.root,25));
tree.preorder(tree.root);
console.log("-----------------");
tree.inorder(tree.root);
console.log("-----------------");
tree.postorder(tree.root);
console.log("-----------------");
tree.levelorder(tree.root);
console.log("Min Node:",tree.min1(tree.root));
console.log("Max Node:",tree.max(tree.root));
tree.levelorder(tree.root);
//tree.delete(tree.root,7);
//tree.delete(tree.root,3);
//tree.delete(tree.root,5);
tree.delete(tree.root,10);
console.log("----------");
tree.levelorder(tree.root);