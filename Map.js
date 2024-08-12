class number{
    constructor(element1, element2){
        this.element1 = element1;
        this.element2 = element2
    }
    totalnumber(){
        return this.element1+this.element2;
    }
}
const element1 = 20;
const element2 = 10;
const instance = new number(element1, element2);
console.log(instance.totalnumber());