let p1=new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("p1 resolved")
    },2000);
    })
    p1.then((value)=>{
        console.log(value);
    });
    
    
    let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("p2 is rejected"));
        },2000);
    })
    p2.catch(error=>{
        console.error(error);
    });
    
    
    
    let promise = new Promise((resolve, reject) => {
        resolve(1);
    });
    
    promise.then((value) => {
        console.log(value); // Output: 1
        return value + 1;
    }).then((value) => {
        console.log(value); // Output: 2
        return value + 1;
    }).then((value) => {
        console.log(value); // Output: 3
    });