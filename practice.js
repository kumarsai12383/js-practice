console.log("Hello World"); //print statement used in js to print in browers console
// This is a simple JavaScript file for practice.
//variables
//variables are the containers to store data values

//var, let, const are used to declare variables

//var is globally scoped
//var can be re-declared and updated also re-assigned
var userName = "kumar";
console.log(userName);
var userName = "Sai"; //re-declaration
console.log(userName);
var userName = "Makthala"; //updating
console.log(userName);

//let is block scoped
//let can be updated but cannot be re-declared
let age = 25;
console.log(age);
age = 30; //updating but unable to re-declare
console.log(age);

//const is block scoped
//const cannot be updated or re-declared
const pi = 3.14;
console.log(pi); //used for constant values
//pi = 3.1415; //error: assignment to constant variable

                                                                                //data types in js
//1. Primitive data types
//a. String - collection of characters or sequence of characters
//b. Number - numeric values (integers and floating point numbers)
//c. Boolean - true or false
//d. Undefined - variable declared but not assigned any value
//e. Null - represents no value or empty value
//f. Symbol - unique and immutable value used as identifier
//g. BigInt - used to represent integers larger than 2^53 - 1

                             //a) String - collection of characters or sequence of characters
let firstName = "Kumar";
let lastName = "Sai";
console.log(firstName);
console.log(lastName);
//we can add two strings using the cancatenation method
let cancatenatedString = firstName + lastName;
console.log(cancatenatedString);
// to add two strings we also use templite literals
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
 //we use ${variable name here} to add variable in the string

                                                           //we have some inbuilt methods in strings
console.log(fullName.length); //length method to find the length of the string starts from 1 to end of the length
console.log(fullName.toUpperCase()); //toUpperCase method to convert string to uppercase (all letters to capital letters)
console.log(fullName.toLowerCase()); //toLowerCase method to convert string to lowercase (all letters to small letters)
console.log(fullName.includes("Kumar")); //includes method to check if a substring is present in the string or not returns boolean value
console.log(fullName.replace("Kumar", "Makthala")); //replace method to replace a substring with another substring in the string (output will be Makthala Sai)
//we use repeat(n) method to repeat the string n number of times
let name = "Kumar ";
console.log(name.repeat(3)); //repeat method to repeat the string 3 times
//we use trim() method to remove whitespace from both ends of the string
let stringWithSpaces = "   Hello World!   ";
console.log(stringWithSpaces); // before trim (output will be "   Hello World!   ")
console.log(stringWithSpaces.trim()); //trim method to remove whitespace from both ends of the string (output will be "Hello World!")
//if we want to remove whitespace from only one side we use trimStart() or trimEnd() methods
console.log(stringWithSpaces.trimStart()); //trimStart method to remove whitespace from the start of the string (output will be "Hello World!   ")
console.log(stringWithSpaces.trimEnd()); //trimEnd method to remove whitespace from the end of the string (output will be "   Hello World!")
// we use other method like slice, split, indexOf etc. to perform various operations on strings
console.log(fullName.indexOf("S")); //indexOf method to find the index of a particular character in the string (output will be 6 as S is present at index 6)
//length starts from 1 but index starts from 0 (index values = length-1)
console.log(fullName.slice(0, 5)); //slice method to extract a part of the string from index 0 to 4 (5 is not included)
console.log(fullName.split(" "));
//split method to split the string into an array of substrings based on a specified separator (by default it splits based on space)
