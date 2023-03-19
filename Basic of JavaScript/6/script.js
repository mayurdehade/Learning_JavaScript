// ************************** OBJECTS IN JAVASCRIPT *******************************
/*
object -> object have
1. Properties
2. Action or Function

Objects in Programming
1. Student, Teacher, Course in Learning management system
2. Account, Account holder, Cashier, Bank Manager etc in Banking system
3. Book, Department etc in Library management system

*/

/*
//Creating a Object
let person = {
    name: "Mayur",
    age: 20,
    salary: 20020
};

let person2 = {
    'name': 'Dipak',
    'age': 21,
    'salary': 100000
};

console.log(typeof person);
console.log(person);
console.log(person.name);
console.log(person.age);

console.log(person["name"]);
console.log(person['salary']);
console.log(person2['name']);
console.log(person2['age']);

//if we access the property which is not defined then the output is undefined
console.log(person['lastname']); //undefined

//Changing the value properties of object
person2.name = 'Milind';
console.log(person2);

//creating (adding) new property
person2.lastname = "Ghegadmal";
console.log(person2);

//Deleting the property
delete person2.lastname;
console.log(person2);

//Checking the property which present or not -> in operator (output is true or false)
console.log('height' in person); //false
console.log('age' in person); //true

person2.lastname = "Ghegadmal";

//accessing the all properties of the object (iteration)

for(let key in person) {
    console.log(key); //displaying only name of properties
    console.log(person[key]); //accessing the data from key (Here dot operator not working inside loop)
}

for (let key in person2) {
    console.log(key + " : " + person2[key]);
}
*/


// ********************************** Methods in Object **********************************
//function which associated with object is called Methods

// let person3 = {
//     firstname: 'Vishwajeet',
//     lastname: 'Kumar'
// };

// person3.age = 23;

//1. first way to declaring the method
// person3.sayHello = function() {
//     console.log("Hello!");
// }

// console.log(person3);
// person3.sayHello();

//2. second way to declaring the method
// function greet() {
//     console.log("Hello!");
// }
// person3.sayHello = greet;

// person3.sayHello();


//3. Thid way to declaring the method
// let person4 = {
//     firstname: "Mayur",
//     lastname: "Dehade",
//     sayHello: function() {
//         console.log(`Hello ${person4.firstname}`);
//     }
// };

// person4.sayHello();


//4. Fourth way to declaring the method (ES6) 
// let person5 = {
//     firstname: "Dipak",
//     lastname: "Bhide",
//     //function from ES6
//     sayHello () {
//         //accessing the one object property into the another object
//         console.log("Hello! I am "+ car.brand + " car");
//     }
// };

// let car = {
//     brand: 'Tata',
//     model: 'Safari'
// };

// person5.sayHello();

/*
// *********************** this keyword in object ****************************
//This keyword is used for the accessing the properties of the object into same object
let person6 = {
    firstname: 'Mayur',
    lastname: 'Dehade',
    sayHello() {
        console.log("Hello! I am " + this.firstname);
    }
};

person6.sayHello();

*/

/*
// ************************* Math Object ******************************
//Used for solving the mathematical problems. Math object have some properties and methods

//accessing the PI value
console.log(Math.PI); //give the PI value this is the one of the property of the math object

//Eulears Number
console.log(Math.E);

//Round Property -> Roundup the values
let x = 4.333;
console.log(Math.round(x)); //output is 4 

console.log(Math.ceil(x)); //output is 5 (upper limit)

console.log(Math.floor(x)); //output is 4 (lower limit) 

console.log(Math.trunc(x)); //remove the decimal point

console.log(Math.pow(2, 3)); //2**3 = 8; -> give the power as output

console.log(Math.sqrt(4)); //square root 

console.log(Math.min(1, 29, 3, 0, 3, 2, 5, 6, 4)); //give the minimum number as output

console.log(Math.max(1, 29, 3, 0, 3, 2, 5, 6, 4)); //give the maximum number as output

//Random number generating
let a = Math.random(); //generating the number between 0 to 1 (0 < x < 1)
console.log(a);

console.log(Math.random() * 10); // 0 - 9

console.log(Math.floor(Math.random() * 10)); //decimal no between 0 - 9

console.log(Math.floor(Math.random() * 16)); //decimal no between 0 - 15

console.log(Math.floor(Math.random() * 10) + 1); //decimal no between 1 - 10


//generating random no between 15 - 25 (minimum no is included but maximum no included)
//formula for generating the number between 15 to 25
//Math.floor(Math.random() * (maxlimit - minlimit)) + minlimit;
let y = Math.floor(Math.random() * (25-15)) + 15;

console.log("A random number between 15 to 25: "+y);

function getRandom(min, max) {
    let x = Math.floor(Math.random() * (max - min)) + min;
    return x;
}

console.log(getRandom(10, 100));
*/

/*
// ************************** Date Object *********************************

//Creating a date object
let x = new Date(); //in this variable the current browser data is stored

// console.log(x);

//setting date
//jan = 0, dec = 11
let y = new Date(2023, 0, 11, 10, 5, 22, 55 ); //7 parameters (Year, month, day, hours, minutes, seconds, milisecond)
// console.log(y);
let z = new Date(2022, 3, 4);
// console.log(z);

let date = new Date(2003, 3, 5);
document.write(date);

//javascript is storing the date in milisecond

//Date in string format
let date2 = new Date("April 14, 2023 21:21:11");
console.log(date2);

console.log(date2.getTime());
console.log(date2.getFullYear());
console.log(date2.getMonth()); //output is 3 means April (jan = 0, dec = 11)
console.log(date2.getDate());
console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(date2.getSeconds());

console.log(date2.getDay()); //output is 5 means friday

date2.setYear(2000); //setting year
console.log(date2);


let a = new Date();
let b = new Date();
b.setDate(a.getDate() - 50); //date after 50 days 
// b.setDate(a.getDate() + 50); 
console.log(a);
console.log(b);

// comparing the date
if( a > b) {
    console.log("a is future date");
} else if(b > a) {
    console.log("a is past date");
} else {
    console.log("s is same date");
}

*/

// ************************** new Keyword ************************************

//creating object using new keyword

// let person = new  Object(); //create object using new keyword
// person.name = "Mayur";
// person.age = 20;
// person.sayHello = function () {
//     console.log("Hello");
// }

// person.sayHello();

// ********************** getter and setter properties *************************
//getter and setter is a properties 

// get - to define a getter method to get the property value
// set - to define a setter method to set the property value

var person = {
    name: "Mayur",
    age: 20,

    // getname : function() {
    //     return this.name.toUpperCase();
    // }


    //getter method -> this is the method which we can access like property 
    //use get keyword to defined the getter method
    //this properties use to get the value from the object
    get getname() {
        return this.name.toUpperCase();
    },

    //same as getter but this is used to set the values for peroperty
    //pass the parameter
    set setname(n) {
        this.name = n.toUpperCase();
    }
    
};

document.write(person.getname); //return the object property name by capitalizing it using getter

// document.write(person.getname()); -> error

person.name = 'Dipak';
document.write("<br>");

// document.write(person.name);
person.setname = 'Milind'; //saving the value of name property by capitalizing it
document.write(person.name);