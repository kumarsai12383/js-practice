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
let javaScript = "I love JavaScript and learning JavaScript is fun";
console.log(javaScript.replace("JavaScript", "Python")); //replace method to replace only the first occurrences of a substring with another substring in the string (output will be I love Python and learning JavaScript is fun)
console.log(javaScript.replaceAll("JavaScript", "Python")); //replaceAll method to replace all occurrences of a substring with another substring in the string (output will be I love Python and learning Python is fun)
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

let helo = "hello world";
let convert =
  helo[0].toUpperCase() +
  helo.slice(1, 6) +
  helo[6].toUpperCase() +
  helo.slice(7);
console.log(convert);
console.log(convert.startsWith("H")); //startsWith method to check if the string starts with a particular substring returns boolean value
console.log(convert.endsWith("D")); //endsWith method to check if the string ends with a particular substring returns boolean value

//b) Number - numeric values (integers and floating point numbers)
let intNum = 100; //integer
let floatNum = 99.99; //floating point number
console.log(intNum);
console.log(floatNum);
//we have some inbuilt arthmetic operators in numbers to perform various operations
console.log(intNum + floatNum); //addition
console.log(intNum - floatNum); //subtraction
console.log(intNum * floatNum); //multiplication
console.log(intNum / floatNum); //division
console.log(intNum % floatNum); //modulus
console.log(intNum ** floatNum); //exponentiation
//we have some inbuilt methods in numbers
console.log(intNum.toString()); //toString method to convert number to string
console.log(intNum.toExponential()); //toExponential method to convert number to exponential notation
console.log(intNum.toFixed(2)); //toFixed method to convert number to fixed number of decimal places

//we use parseInt() method to convert string to integer
let strNum = "150";
console.log(parseInt(strNum)); //parseInt method to convert string to integer
//we use parseFloat() method to convert string to floating point number
let strFloatNum = "99.99";
console.log(parseFloat(strFloatNum)); //parseFloat method to convert string to floating point number

//we also use unary plus operator to convert string to number
let strNumber = "200";
console.log(+strNumber); //unary plus operator to convert string to number

//The arthimatic operations follow the BODMAS rule
//BODMAS stands for Bracket (), Order ** exponentiation, Division /, Multiplication *, Addition +, Subtraction -
console.log(10 + 5 * 2); //multiplication first then addition (output will be 20)
console.log((10 + 5) * 2); //parentheses first then multiplication (output will be 30)
//type conversion in js
//implicit type conversion
let mixedAddition = "10" + 5; //string + number = string
console.log(mixedAddition); //output will be "105"
let mixedSubtraction = "10" - 5; //string - number = number
console.log(mixedSubtraction); //output will be 5
// If you use other than + operator ie (- , * , / ) apply operations with a text it will give output as NaN (Not a Number)
let str = "hello";
let nanResult = str * 2;
console.log(nanResult); //output will be NaN

//we have some Math methods in js
console.log(Math.round(4.6)); //Math.round() method to round a number to the nearest integer
console.log(Math.floor(4.9)); //Math.floor() method to round a number down to the nearest integer
console.log(Math.ceil(4.1)); //Math.ceil() method to round a number up to the nearest integer
console.log(Math.sqrt(16)); //Math.sqrt() method to find the square root of a Number
console.log(Math.random()); //Math.random() method to generate a random number between 0 and 1
console.log(Math.max(10, 20, 5, 15)); //Math.max() method to find the maximum number among the given numbers
console.log(Math.min(10, 20, 5, 15)); //Math.min() method to find the minimum number among the given numbers
//we use toFixed() method to format a number to a fixed number of decimal places
let num = 3.14159;
console.log(num.toFixed(2)); //output will be 3.14
//c) Boolean - true or false or yes or no or 1 or 0
let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);
//we use comparison operators to get boolean values
//comparison operators: > , < , == , != , >= , <= which compare two values and return boolean values
console.log(10 > 5); //greater than operator returns true
console.log(10 < 5); //less than operator returns false
console.log(10 == 10); //equal to operator returns true
console.log(10 === 10); //strictly equal to operator returns true (checks both value and type)
console.log("10" === 10); //strictly equal to operator returns false (checks both value and type)
console.log(10 != 5); //not equal to operator returns true
console.log(10 >= 10); //greater than or equal to operator returns true
console.log(10 <= 5); //less than or equal to operator returns false
//we use logical operators to combine multiple boolean values
//logical operators: && (AND) , || (OR) , ! (NOT) which combine multiple boolean values and return a single boolean value
console.log(true && false); //AND operator returns false.It returns true only if both the operands are true
console.log(true || false); //OR operator returns true. It returns false only if both the operands are false
console.log(!true); //NOT operator returns false. It negates the boolean value

//we use comparison and conditional statements in js to perform various operations based on certain conditions
//if , else if , else statements
let userAge = 18;
if (userAge >= 18) {
  console.log("User is an adult.");
} else {
  console.log("User is a minor.");
}
//we can use else if to check multiple conditions with conditions
let score = 85;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score >= 60) {
  console.log("Grade D");
} else {
  console.log("Fail");
}
//we can use switch case to check multiple conditions
// (switch case conditions are not allowed to be boolean values like in if else statements)
let day = "monday";
switch (day) {
  case "monday":
    console.log("Monday");
    break;
  case "tuesday":
    console.log("Tuesday");
    break;
  case "wednesday":
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
    break;
}
