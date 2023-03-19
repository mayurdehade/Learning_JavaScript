// ************************ Functions in JavaScript ********************************
/*
1. Predefined Functions
2. Userdefined Functions
*/

/*
//defining function
function MulTable(num) {
    for (let i = 1; i <= 10; i++) {
      document.write(`${num} x ${i} = ${num * i}`);
      document.write("<br>");
    }
};

//calling function
document.write("Write a multiplication table of 2: <br>");
MulTable(2);
document.write('<br>');
MulTable(10);

//Argument and Parameters: passing a variable into the function


function add(num1, num2) {
    document.write("Addition: " +(num1+num2));
};
add(10, 20);

*/

/*
//**************************** The Arguments Object *****************************
//arguments is a array which stores the all parameters which is passed to the function

//This is the function in which we can pass any no of arguments
function add1() {
    // console.log(arguments);
    // console.log("Length of arguments: "+arguments.length);
    if(arguments.length == 0) {
        console.log("No argument passed!");
    } else {
        //adding elements
        let sum = 0;
        for(let i=0; i<arguments.length; i++) {
            sum = sum + arguments[i];
        }
        console.log("Additon: "+sum);
    }
};

add1();
add1(1);
add1(2, 3);
add1(4, 5, 6);
add1(7, 8, 9, 10);

//Storing function into variable -> by using this we can call the function using the function name and also from variable name;
//variable_name = function_name;
let addition = add1;

add1(20, 33);
addition(1,23,3);
*/

/*
//Return in Function
//if we don't use the return in function the that function return undefined
//We cannot return multiple times if there is first return found then the function is stop the execution
function add(a, b) {
    return `Addition is ${a+b}`;
};

let c = add(5,6);
console.log(c);

function createArray(a, b){
    let d = [a, b];
    return d;
    // return [a,b];
};

let e = createArray(2,4);
console.log(e);


function compare(a,b) {
    if(a>b){
        return 1;
    } else if(b>a) {
        return -1;
    } else {
        return 0;
    }
};

console.log(compare(1,4));
console.log(compare(5,2));
console.log(compare(5,5));


//************************** Global and Local Variables ******************************
//Variable defined inside the function is called as Local variable
//Variable defined outside the function is called as Global variable.
//Local variable is created when the function start execution and Local variable is deleted after the function exection is completed.
//Global variable is a variable which we can use (access) anywhere in the code.

let car = 'Audi'; //Global variable

function display() {
    //the scope of the local variable is only inside this block of code.
    let result = 44; //Local variable
};

*/

/*
// ****************************** Anonymous Function **********************************
//Anonymous Function is a function which is not have a name
//Anonymous Function -> function without name

//1. Storing the anonymous function to the vriable -> this is also called function expression
let anony = function () {
    console.log("This is the Anonymous Function.")
};
anony();

//2. Using the anonymous function inside the function
// setTimeout(FunctionName, 3000); -> This is the function which is execute after 3 second (3000 mili second)

function show() {
    console.log("Hello!");
};
setTimeout(show,3000); //here the function is defined and which is stored inside the RAM that the way javascript have anonymous function

setTimeout(function() { //here is function name is not given then the system is not storing the name of function
    console.log("This is the Anonymous Function which is displayed after 3 second!");
}, 3000);

//we use anonymous function whenever we want to execute the function only once. For passing the function as a parameter of another function.

*/


/*
// ******************************* Immediately invoked function ***************************************
//This is the function which is executed immediately
//Syntax: (funtion(){...})();
(function () {
    console.log("Hello World!");
    console.log("Welcome to JavaScript!");
})();
//after the exection of this function then this function is removed from memory
*/

