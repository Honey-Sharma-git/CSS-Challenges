/* //Object constructor function
function Person (first, last, age, eye ){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Indian";
    this.fullName = function (){
        return this.firstName + " " + this.lastName;
    }
}
const myFather = new Person("Amit", "Sharma", 59, "Black");
const myMother = new Person("Neerja", "Sharma", 60, "Black");
const myBrother = new Person("Money", "Sharma", 23, "Black");
const mySelf = new Person("Honey", "Sharma", 27, "Black");

console.log(myFather);
console.log(myMother);
console.log(myBrother);
console.log(mySelf);
//one way of accessing object properties
console.log(myFather.firstName);
console.log(myFather.lastName);
console.log(myFather.age);
console.log(myFather.eyeColor);
console.log(myFather.nationality);
//another way of accessing object properties
console.log(myFather["firstName"]);
console.log(myFather["lastName"]);
console.log(myFather["age"]);
console.log(myFather["eyeColor"]);
console.log(myFather["nationality"]);

//Adding a property to an object
myFather.favFood = "Ice-cream";
console.log(myFather);
Person.prototype.favFood = "Dosa";
console.log(Person);
console.log(myMother);
console.log(myMother.favFood);

//empty object:
const emptyObject = {};
console.log(emptyObject);
//Example of object containing numbers, string, boolean, objects, arrays, and methods

const objectExample ={
    firstName:"Honey",
    lastName:"Sharma",
    age: 27,
    alive: true,
    myArray: ["H", "O", "N", "E", "Y"],
    fullName: function(){
        return this.firstName + " " + this.lastName},
    anotherObj: {
        car1:"Fiat",
        car2:"Maruti",
        car3: "BMW"
    }

    };

console.log(objectExample);
console.log(objectExample.anotherObj);
console.log(objectExample.fullName());
console.log(objectExample.myArray[3]);

console.log(myBrother.fullName()); */

const person= {
    firstName:"Honey",
    lastName: "Sharma",

}
console.log(person);
person.fullName = function(){
    return this.firstName + " " + this.lastName
};

console.log(person);
console.log(person.fullName());
