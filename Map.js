//superkey - keyword is called the constroctor and access the propertyes and method of the perent
class Animal{ 
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}
class Rabbit extends Animal{
    constructor(name, age, runspeed){
        super(name, age)
        this.runspeed = runspeed;
    }
}
class Eagle extends Animal{
    constructor(name, age, flyingSpeed){
        super(name, age);
        this.flyingSpeed = flyingSpeed
    }
}
const rabbit = new Rabbit("jarry",2, 25);
const eagle =new Eagle("Jasmin", 4, 150);
console.log(eagle.name);
console.log(eagle.age);
console.log(eagle.flyingSpeed);
