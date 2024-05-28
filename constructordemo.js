class RailwayForm{
    constructor(){
        console.log("Constructor called");
    }
}
let radha=new RailwayForm();
let Krish=new RailwayForm();

class TrainForm{
    constructor(username,trianno,address){
        console.log("cunstructor called ",this.username);
        this.username=username;
        this.trianno=trianno;
        this.address=address;
    }
    preview(){
        console.log(this.username);
        console.log(this.trianno);
        console.log(this.address);
    }
    submit(){
        console.log("Submitted: View Your Details");
        this.preview();
        
    }
}
let RadhaForm=new TrainForm("Radha",101,"Bnglr");
RadhaForm.submit();