//06-13-22
//---------------

//ex.1) creating an object with a method from scratch

const person = {
    firstName: "Gabriel",
    lastName: "Jefferson",
    id: 44578,
    fullName: function(){return `My Name is ${this.firstName} ${this.lastName}`}
}

console.log(person.fullName());

//ex.2) Adding key/value pair to an object



