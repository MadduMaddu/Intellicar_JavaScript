class RailwayForm{
    fill(name,trainNo){
        this.name=name;
        this.trainNo=trainNo;
    }
    submit(){
        console.log(this.name," form submitted with TrainNo: ",this.trainNo);
    }
    cancel(){
        console.log(this.name," form cancelled with TraiNO: ",this.trainNo);
    }
}

let radha=new RailwayForm();
let krish=new RailwayForm();
radha.fill("Radha",122);
krish.fill("Krish",133);
radha.submit();
krish.submit();
krish.cancel();