class NumberClass{
    constructor(element1, element2){
        this.element1 = element1;
        this.element2 = element2
    }
    substaction(){
        return this.element1 - this.element2;
    }
}
const element1 = 50;
const element2 = 30;
const totalnumber = new NumberClass(element1, element2);
console.log(totalnumber.substaction());