```js

###Object Oriented Programming

To Structure our code

1. prototypes
2. New operator
3. constructors
4. classes
5. keywords (extends, super).



## Object Prototypes:-

 - Prototypes are the mechanism by which Javascript Objects inherit features from one another.
 - It is like a single template object that all objects inherit methods and properties from without having their own copy.

 arr.__proto__(reference)
 Array.prototype (actual object)
 String.prototype


## New operator:-

 - The new operator lets developers create an instance of a user-define object type or of one of the built-in object types that has a constructor function.

Example:

//Constructors - dosen't return anything & start with capital
function Person(name, age) = {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){
    console.log(`Hi, my name is ${this.name}`);
}

let p1 = new Person("adam", 25);
let p2 = new Person("sedn", 27);


## Classes:-

- Classes are a template for creating objects
- The constructor method is a special method of a class for creating and initializing an object instance of that class.

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

let p1 = new Person("mada", 29);
let p2 = new Person("kuta", 32);


## Inheritance:-

 - Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

 class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name} `)
    }
 }

class Student extends Person {
    constructor(name,age, marks){
        super(name, age) // parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject){
        super(name, age) // parent class constructor is being called
        this.subject = subject;
    }
}

let Stu1 = new Student("nit", 28, 86);
let Tec1 = new Teacher("shr", 26, "Full Stack Development")



















```
