class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    greetings(){
        return `Hi, I am ${this.name}`;
    }
    description(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation=homeLocation;
    }
    hasHomeLOcation(){
        return !!this.homeLocation;
    }
    greetings(){
        let greeting = super.greetings();
        if(this.hasHomeLOcation){
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}
const me = new Traveler('Arunabh Das', 24, 'Kanpur');
console.log(me.greetings());

const other = new Person();
console.log(other.greetings());