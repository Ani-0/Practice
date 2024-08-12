class Animal{
    Alive = true;
   
    eat(){
        console.log(`This  ${this.name} is eating`)
    }
    sleep(){
        console.log(`This is ${this.name} Sleep`);
    }
}
class Fox extends Animal{
    name = "fox";
}
class elephent extends Animal{
    name =  "elephent";
}
const fox = new Fox();
fox.eat();
console.log(fox.Alive);
