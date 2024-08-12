class Total{
    constructor(firstnumber, secondnumber, thirdnumber){
        this.firstnumber = firstnumber,
        this.secondnumber = secondnumber,
        this.thirdnumber = thirdnumber
    }
    averagenumber(){
        return ((this.firstnumber+this.secondnumber+this.thirdnumber)/3).toFixed(2);
    }
}
const total1 = new Total(23, 22, 10);
console.log(total1.averagenumber());