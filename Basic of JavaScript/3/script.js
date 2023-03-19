// ******************** typeof operator ***********************
// let str = "Hello";
// let num = 12;
// let num2 = 32.22;
// let bool = true;
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof num2);
// console.log(typeof bool);

// ******************** Type Conversion ***********************
/*
1. Automatic type conversion: performed by javascript
2. Manual type conversion: performed by programmer
*/

// let type = '5' + 5; //automatic type conversion -> number 5 converted into string
// let type2 = '5' * '3'; //automatic type conversion -> string is converted into number and perform multiplication
// let type3 = 'd' * '3'; //automatic type conversion -> NaN (Not a Number) automatic type conversion is not possible 
// console.log(type, type2, type3);
// console.log(typeof type, typeof type2, typeof type3);

/*
1. String() -> convert into string
2. Number() -> convert into number
3. Boolean() -> convert into boolean
*/

// let num1 = 4;
// console.log("Type of 4: " + typeof num1);
// let str1 = String(num1);
// let bool1 = Boolean(num1);
// console.log(str1 + " -> " + typeof str1, bool1 + " -> " + typeof bool1);


// let str2 = 'd';
// console.log("Type of 'd': "+ typeof str2);
// let num2 = Number(str2);
// let bool2 = Boolean(str2);
// console.log(num2 + " -> " + typeof num2, bool2 + " -> " + typeof bool2); //d is not converted to number that way it gives NaN which is of type number


// let bool3 = true;
// console.log("Type of 'true': "+ typeof bool3);
// let num3 = Number(bool3); //1
// let str3 = String(bool3); // " " -> blank string is false otherwise true
// console.log(num3 + " -> " + typeof num3, str3 + " -> " + typeof str3);


// ************************** String Manipulation *********************************

//******STRING IS ARRAY OF CHARACTERS*********

// let str = 'Mayur';
// let greet = `Hello ${str}`; //using variable inside string
// console.log(greet);

// console.log("Mayur \n Dehade");
/*
\n -> for new line
\t -> for tab
\(backslash) used for escape special character
*/

// //str length
// console.log(greet.length);

// //fetching perticular character by indexing
// console.log(greet[6]);

// //concatination -> joining two or more string
// let str2 = "Dehade";
// console.log(str + str2);
// console.log(str + " " + str2);

// if("Mayur" == str) {
//     console.log("Equal");
// } else {
//     console.log("Not Equal");
// }

//concat function
// let str6 = "Hello";
// let str7 = "JavaScript";
// let str8 = "Welcome";
// let str9 = str6.concat(" ",str7, " ", str8);
// document.write(str9);

// let newstr = "    This is JavaScript language. Which is a scripting language used for the web and app development.   ";

/*
let substring1 = newstr.substr(8, 10); // substr(startposition, lenght); -> output JavaScript
let substring2 = newstr.substring(0, 27); //substring(startposition, endposition); -> output This is JavaScript language.
document.write(substring1);
document.write('<br>');
document.write(substring2);

let position = newstr.indexOf('used');
console.log(position); // give start position (index) of used

let position2 = newstr.indexOf('is', 10);
console.log(position2); //give start position (index) of 'is' and search form index 10

let position3 = newstr.lastIndexOf('is'); //searching from back side
console.log(position3); // is string is not present the the index of value is -1

//for removing whitespace used trim
let trimedStr = newstr.trim();
console.log(newstr);
console.log(trimedStr)

let trimedStart = newstr.trimStart(); //remove whitespace from front
let trimedEnd = newstr.trimEnd(); //remove whitespace from back
console.log(trimedStart);
console.log(trimedEnd);


// Upper and Lower case
let upper = newstr.toUpperCase();
let lower = newstr.toLowerCase();
console.log(newstr);
console.log(upper);
console.log(lower);

//Replace a string (also change the sentace not only one word)

let replace = newstr.replace('JavaScript', 'Java');
console.log(replace);

let hasIncludes = newstr.includes('HTML'); //also checks substring -> Java is present in the string 'Java'Script
console.log(hasIncludes); // if string is present then return true otherwise false

*/

/*
// ****************************** Array **********************************
//two type of array decleration
let book = ['Math', 'Physics', 'Bio', 'Computer Science'];
let names = new Array("Mayur", "Diapk", "Milind");
let mixed = new Array("Mayur", 20, 20000);

console.log(book[1]);
console.log(names[2]);
console.log(book);
console.log(mixed); //display the full array

//update element in array
book[1] = 'Chemistry';
console.log(book);

//length of array
console.log(mixed.length);
console.log(book.length);

//adding the element to the last -> push() function
book.push("Web Technology");
console.log(book);

//adding element to the first of the array -> unshift()
book.unshift("DSA");
console.log(book);

//removing the element from ending of array -> pop()
book.pop();
console.log(book);

//removing the element from front of array -> shift()
book.shift();
console.log(book);

//removing the element from array (between start and end) -> splice(start, elements number)
book.splice(2, 2); //removing 2 element from position (index) of 2
console.log(book);

//empty the array -> 2 types
book.length = 0;
console.log(book);

names = [];
console.log(names);

//finding the index of the element from array
let position = mixed.indexOf(20); //giving the index of 20 from array
console.log(mixed);
console.log(position);

let book2 = 'Math';
let arr1 = new Array("DSA", 'DBMS', 'Web Technology', 'TOC');

console.log("book2 is a array: "+ Array.isArray(book2)); //return true if the given variable is array otherwise false
console.log("arr1 is a array: "+ Array.isArray(arr1));

//converting the string into array 
let text = "This is a random text";
let wordArray = text.split(" "); // spliting the array from space (' ') and also remove that thing like here we given parameter space then space is removed
console.log(wordArray);

let wordArray2 = text.split('s');
console.log(wordArray2);

//Joining array element by using join() function
let word = mixed.join("-");
let word2 = wordArray.join(" ");
let word3 = wordArray.join(); //here is the joint filed is empty the it insert the comma (,) and join element
console.log(word);
console.log(word2);
console.log(word3);

//Joining two arrays
let arr2 = ["Math", "Physics", "Bio", "Computer Science"];
let arr3 = ["Hindi", "English", "Marathi"];
let arr4 = ["Web Technology", "AI", "Data Science"];

let joinArray = arr2.concat(arr3);
let joinArray2 = arr3.concat(arr2);
let jointArry3 = arr2.concat(arr3, arr4);
console.log(joinArray);
console.log(joinArray2);
console.log(jointArry3);

*/


// ************************** Multidimentional Array *******************************
let book = ["Math", "Physics", "Bio", "Computer Science"];

let bookWithPages = [
    ["Math", "300"], 
    ["Physics", "500"], 
    ["Bio", "400"], 
    ["Computer Science", ["400", "1000"]]
];

console.log(bookWithPages);

let bookpage = bookWithPages[1][1];
console.log(bookpage);

console.log(bookWithPages[1]);
console.log(bookWithPages[3][1][0]);
console.log(bookWithPages[3][1]);

for(let i=0; i<book.length; i++) {
    console.log(book[i]);
};


//Displaying element using forEach loop
//nameofArray.forEach(function);
book.forEach(myfu);

//function nameofFunction(value) 
function myfu(value) {
    console.log(value);
};

bookWithPages.forEach(myfu2);
function myfu2(value) {
    console.log(value);
}