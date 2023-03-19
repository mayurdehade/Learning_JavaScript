// alert("Hello Mayur!");
//Output in JavaScript
// alert("Hello World!");

// document.getElementById("h").innerHTML = "Mayur Dehade";

// document.write("Hello World!");

// console.log("Hello Mayur!");

//Statement and Comments: Computer program is a list of instructions, also called as statement and comments is a not executable line which is used for understanding to programmer.

//Comment: two types of comment 1. Single line (//) 2. Multiline comment (/* */)
// var a; a = 5; alert(a); //statements

// var b = 2;

// var y = a+b;
// console.log('Addition: '+y);

//let is added in ES6
//JavaScript is case sensitive
//for assigning a variable names in javascript we cannot used reserved keywords
//

// let c = 20;
// const d = 5; //constant: cannot change
// console.log("C = "+ c + ", D = "+d);

// let x;
// console.log(x); //undefined: empty variable

////////////////////////////////////////////////////////////////////////////////
/*
********** OPERATOR IN JAVASCRIPT *****************

1. Arithmetic Operators
+ -> additon
- -> substraction
/ -> division
* -> multiplication
** -> exponentiation (ES2016)
% -> modulus
++ -> increment
-- -> decrement

2. Assignment Operator
= -> assignment
+= -> addition assignment
-= -> substraction assignment
/= -> divison assignment
*= -> multiplication assignment
** = -> exponentiation assignment
%= -> modulus assignment

3. Comparison Operators
== -> equal to
=== -> equal to and equal type
> -> greater than
< -> less than
>= -> greater than and equal to
<= -> less than and equal to
!= -> not equal to
!== -> not equal to and not equal type
? -> ternary operator

4. Logical Operators
&& -> Logical AND
|| -> Logical OR
! -> Logical NOT

TypeOf Operator
typeof -> return the type of variable
instanceof -> return true if an object is instance of an object type

5. Bitwise Operator
& -> AND
| -> OR
~ -> NOT
^ -> XOR
<< -> Left Shift
>> -> Right Shift
>>> -> Unsigned Right Shift

*/

//if additon of string and number then the concatination is happend
// let num1 = 33;
// let num2 = "33";
// console.log(num1+num2); //print '3333' which is string

//////////////////////////////////////////////////////////////////////////

/*
DATATYPES IN JAVASCRIPT
1. String
2. Number: decimal, floating points
3. Boolean: true or false
4. Array
5. Object
6. Undefined
*/

/*
let x = "Hel'lo";
let y = 'Hello"w'
let z = "Hello\"w";
let name = "Mayur";
console.log(x, y, z);

let a = 22;
let b = -39.99;
console.log(a+b);

let val = true;
let val2 = false;
console.log(val && val2);

//Array
let arr1 = ["Mayur", "Dipak", "Milind"];

//Object
let obj1 = {
    name: "Mayur",
    age: 20,
    add: "Nashik"
};

let obj2 = {name: "Rohit", age: 21, add: "Aurangabad"};

let val3;
console.log(val3); //undefined

// typeof operator
console.log(typeof val3);
console.log(typeof obj1);
console.log(typeof arr1);
console.log(typeof a);
console.log(typeof x);

//using of template literal: using variables inside string 
console.log(`Hello ${name}! Welcome`); //using variable inside string
*/

////////////////////////////////////////////////////////////////////////////
//Comparion and Logical Operator

/*
let a = 5;
let b = '5';
let c = 5;

console.log("5 == '5' -> "+ (a == b)); //true 
console.log("5 === '5' -> "+ (a=== b)); //false
console.log("5 != '5' -> "+ (a != b)); //false
console.log("5 !== '5' -> " + (a !== b)); //true
console.log("5 === 5 -> "+ (a === c)); //true

//Conditons in javascript
let age = 14;
let hasVoterCard = 'no';

// if(age >= 14 && hasVoterCard == "Yes") {
//     console.log("You can vote!");
// } else if(age >= 14 && hasVoterCard != 'Yes') {
//     console.log("Get Your voter id card!");
// } else {
//     console.log("You cannot vote!");
// }

if(age >= 14) {
    if(hasVoterCard == "Yes") {
        console.log("You can vote!");
    } else {
        console.log("Get your voter id card!");
    }
} else {
    console.log("You cannot vote!");
}


let isLoggedin = 0;
if(isLoggedin == 0){
    document.write("Login");
} else {
    document.write("Logout");
}

//Ternary Operator

let option = isLoggedin == 1 ? "Logout" : "Login";
console.log(option);

console.log(isLoggedin == 1 ? "Logout" : "Login");


//************************ Nullish coalescing operator ******************************

let user;
// user = "Mayur";

alert(user ?? "Gest User"); //if this variable is undefined or null then print other value which is given (like 'Gest User')
*/

/////////////////////////////////////////////////////////////////////////////

/*
//************************** SWITCH CASE ******************
let input;
input = "1";

//string comparison
switch (input) {
    case 1:
        document.write("Continue...");
        break;
    case 'yes':
        document.write("Continue...");
        break;
    case 'Yes': 
        document.write("Continue...");
        break;
    case 'y': 
        document.write("Continue...");
        break;
    case 'Y': 
        document.write("Continue...");
        break;
    case 0: 
        document.write("End...");
        break;
    case 'no':
        document.write("End...");
        break;
    case 'No': 
        document.write("End...");
        break;
    case 'n': 
        document.write("End...");
        break;
    case 'N':
        document.write("End...");
        break;
    default: 
        document.write("Wrong Input!");
}

//Combining the same output cases
switch (input) {
    case 1:
    case "yes":
    case "Yes":
    case "y":
    case "Y":
        document.write("Continue...");
        break;
    case 0:
    case "no":
    case "No":
    case "n":
    case "N":
        document.write("End...");
        break;
    default:
        document.write("Wrong Input!");
}
*/

//****************************** LOOPS *************************************
// let counter = 12;

//1. while loop
// while (counter <= 10) {
//   document.write(counter + " ");
//   counter++;
//   if(counter == 5) {
//     break;
//   }
// }

// let sum = 0;
// while(counter <=1000) {
//     // if(counter % 2 == 0) {
//     //     sum = sum + counter;
//     // }
//     sum = sum + counter;
//     counter = counter + 2;
// }
// console.log(sum);

//2. Do While loop -> execute once if conditon is false 
// do{
//     document.write(counter + " ");
//     counter++;
// } while(counter <=10);

// for(let i=5; i<=10; i++) {
//     document.write((i) + " ");
// }

//Break, Continue and Nested Loop
// for(let counter=1; counter<=10; counter++) {
//     if(counter == 5) {
//         // break;
//         continue;
//     }
//     document.write(counter);
//     document.write('<br>'); //for next line
// }

// for(let i=1; i<=5; i++) {
//     for(let j=1; j<=i; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// for(let i=1; i<=5; i++) {
//     for(let j=1; j<=5; j++) {
//         document.write(i+' ');
//     }
//     document.write("<br>");
// }

// for(let i=1; i<=5; i++) {
//     let k = 1;
//     for(let j=1; j<=5; j++) {
//         document.write(k+' ');
//         k++;
//     }
//     document.write('<br>');
// }

//************************* breaking outer for by break condition in inner for *****************

// outer: for(let counter=1; counter<=10; counter++) {
//     document.write(counter);
//     document.write('<br>');
//     for(let counter2=1; counter2<=3; counter2++){
//         if(counter == 3){
//             // break;
//             break outer; //break outer for loop (same for continue)
//         }
//         document.write("JavaScript");
//         document.write('<br>');
//     }
// }


//************************** alert(), prompt(), confirm() ****************************
/*
1. alert() -> shows a message.
2. prompt() -> shows a message, input text. It return the text on ok or, if Cancel button 
    or Esc is clicked, null.
3. confirm() -> shows a message, confirm with 'OK' or 'Cancel'. It returns true for OK and false for Cancel/Esc.

Note: All these pause script execution and don't allow the visitor to interact with the rest of the page until the window has been dismissed.
*/

// alert("Welcome to JavaScript!");
// let age = prompt('Enter Your Age:', 20); //if user don't enter any value in the prompt then the null value is stored

// document.write("<h2> Your Age is: " + age + "</h2>" ?? "You Not Entered Your Age");

// let response = confirm("Are you sure, you want to Delete?"); //click ok -> true, cancel -> false
// if(response) {
//     document.write("<h3>Deleted!</h3>");
// } else {
//     document.write("<h3>Not Deleted!</h3>");
// }



