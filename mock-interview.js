//06-10-22
//--------------------

//Classes

//ex.1)

class Car {
    constructor(name, year){
        this.name = name; //<--attribuutes
        this.year = year;
    }
    //Age method
    age(x){
        let date = new Date();
        return date.getFullYear()-this.year
    }
    //Present method
    present(){
        return `I Have a ${this.name}`;
    }
    //getter method to retrieve the name of the car
    get carname(){
        return this.name;
    }
    //setter to change the name of the car
    set carname(x){
        return this.name = x;
    }
}

let myCar1 = new Car("Ford", 2014);
//Present Method in Car Class 
console.log(myCar1.present()); //returns: I Have a Ford
//Age Method in Car Class
console.log(`My Car is ${myCar1.age(2021)} years old`); //returns: My Car is 8 Years Old
//Getter Method
console.log(myCar1.carname); //
//Setter Method
console.log(myCar1.carname = "Chevrolet");



class Model extends Car{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }
    show(){
        return `${this.present()} , it is a ${this.model}`;
    }
}

let myCar3 = new Model("Toyota", "Camry");
console.log(myCar3.show()); //returns: I Have a Toyota, it is a Camry

class Dog {
    constructor(breed, age, name){
        this.age = age;
        this.breed = breed;
        this.name = name
    }
    introduction(){
        return `Hello. My Dog's Name is ${this.name}. He's a ${this.breed}, and He's ${this.age} year's old`;
    }

}

let chester = new Dog("Poodle", "4", "Chester");
console.log(chester.introduction());







