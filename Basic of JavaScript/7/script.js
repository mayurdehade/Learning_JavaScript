"use strict"

// ************************** JavaScript Object Constructor Function **********************************

// let student1 = {
//     firstname: "Mayur",
//     lastname: "Dehade",
//     age: 20,
//     class: 10,
//     rollno: 111
// }

/*
If we required to defined the multiple object having same property then we can create the object constructor;
Object constructor can create the multiple object;
The object constructor is the function which we use to creating the object by calling that constructor function and only
passing the prarameters.
*/

/*
function Student(fname, lname, age, cls, roll) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.class = cls;
    this.rollno = roll;
}

let student1 = new Student("Mayur", "Dehade", 20, 11, 123);

let student2 = new Student("Milin", "Ghegadmal", 22, 12, 192);

let student3 = new Student("Dipak", "Bhide", 21, 10, 392);

console.log(student1);
console.log(typeof student1);
console.log(student2);
console.log(student3);

student1.nationality = "India"; //adding the new property into only student 1
console.log(student1);

student1.name = function() {
    return this.firstname + " " + this.lastname;
}

console.log(student1.name());

*/

// ******************************** Object Prototypes ********************************************
//adding new property to the constructor function 
/*
Student.prototype.nationality = "India"; //this property added for all the object which is created using object constructor function

//adding method (function) to object constructor function
Student.prototype.fullName = function() {
    return this.firstname + " " + this.lastname;
};

console.log(student1);
console.log(student2);

console.log(student3);
console.log(student3.fullName());

*/

// ************************ Nested Object *********************************
/*
let user = {
    id: 101, 
    email: "abc@gmail.com",
    
    //nested object 
    personalInfo: {
        name: "abc",
        //nested object
        add: {
            street: "Agra road",
            city: 'Nashik',
            constry: "India"
        }
    }
};

console.log(user);

//accessing the personalInfo object (nested object) 
console.log(user.personalInfo);

//accessing the add object (nested object)
console.log(user.personalInfo.add);

//propertes of the add object
console.log(user.personalInfo.add.street);
*/

// ********************** Hoisting (IMP for Interview and Debugging) ************************
//Hoist: to lift or pull

//calling the function before declaration
hello();
 
function hello() {
  console.log("Hello World");
}


//this hello function is declared after the calling of the function 
//but here is no error because of hoisting
//first the JavaScript scan the full code and whenever the declaration is found then the JavaScript is put the all declaration 
//on the top of the code that is way there is not error
//Hoisting only lift or pull the declaration not assigned value
// *** hosting is work with the let and const also but it gives error (not initalized) because in let and const there is hoisting is performed but any type of value is not assigned to it.



x = 7; //assigning the value of x before the declaration

console.log(x); //7

var x; //declaration of x 

console.log(z); //undefined
z  = 4;
var z;

console.log(a); //undefined
var a = 330;

console.log(a); //330

////////////////////
/* error (not initalized)
y = 3;
console.log(y);
let y;
*/

// m = 5; //Javascript is not give the error for that is allow to use the variable which is initalized but not declared
//but this is the form the error that the way for that use *strict mode
// console.log(m);

// ************************ Strict mode in JavaScript *********************************

//on the top of the JavaScript file "use strict" type this in double quotes then the strict mode is activated


