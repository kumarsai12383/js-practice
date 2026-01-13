// // //-------------------------------------------------------------------------------simple login form with OTP verification
// let userName1 = prompt("Enter your name:");
// let password = prompt("Enter your password:");
// if (userName1.length === 0 && password.length === 0) {
//   alert("Please enter valid credentials");
// } else if (
//   /[A-Za-z]/.test(password) &&
//   /[0-9]/.test(password) &&
//   userName1.length > 0 &&
//   password.length > 0
// ) {
//   let OTP = Math.floor(Math.random() * 999999);
//   alert(`Your OTP is ${OTP}`);
//   let enterOtp = Number(prompt("Enter your OTP:"));
//   if (OTP === enterOtp) {
//     alert(`Welcome ${userName1} we are happy to see you again`);
//   } else {
//     alert("Invalid OTP, please try again");
//   }
// } else if (
//   !/[A-Za-z]/.test(password) ||
//   !/[0-9]/.test(password) ||
//   password.length <= 0
// ) {
//   alert("Please enter a valid password with letters and numbers");
// }

// //----------------------------------------------------------------------------------------------// maskEmail function
// function maskEmail(email) {
//   let atindex =
//     email[0] +
//     "*".repeat(email.slice(email[1], email.indexOf("@") - 1).length - 1) +
//     email[email.indexOf("@") - 1] +
//     email.slice(email.indexOf("@"));
//   return atindex;
// }
// let email = "Kumarsai@gmail.com";
// console.log(maskEmail(email));
// console.log(maskEmail("apple.pie@example.com"));
// console.log(maskEmail("freecodecamp@example.com"));
// console.log(maskEmail("info@test.dev"));
// console.log(maskEmail("user@domain.org"));

// //--------------------------------------------------------------------------------------------//Loan eligibility checker
// const minIncomeForDuplex = 60000;
// const minCreditScoreForDuplex = 700;

// const minIncomeForCondo = 45000;
// const minCreditScoreForCondo = 680;

// const minIncomeForCar = 30000;
// const minCreditScoreForCar = 650;

// function getLoanMessage(annualIncome, creditScore) {
//   if (
//     annualIncome >= minIncomeForDuplex &&
//     creditScore >= minCreditScoreForDuplex
//   ) {
//     return "You qualify for a duplex, condo, and car loan.";
//   } else if (
//     annualIncome >= minIncomeForCondo &&
//     creditScore >= minCreditScoreForCondo
//   ) {
//     return "You qualify for a condo and car loan.";
//   } else if (
//     annualIncome >= minIncomeForCar &&
//     creditScore >= minCreditScoreForCar
//   ) {
//     return "You qualify for a car loan.";
//   } else {
//     return "You don't qualify for any loans.";
//   }
// }

// console.log(getLoanMessage(75000, 720)); // You qualify for a duplex, condo, and car loan.
// console.log(getLoanMessage(50000, 690)); // You qualify for a condo and car loan.
// console.log(getLoanMessage(35000, 660)); // You qualify for a car loan.
// console.log(getLoanMessage(25000, 600)); // You don't qualify for any loans.
// //---------------------------------------------------------------------------------------------------// Recipe Difficulty Evaluator
// const recipes = [];

// const recipe1 = {
//   name: "Spaghetti Carbonara",
//   ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
//   cookingTime: 22,
//   totalIngredients: null,
//   difficultyLevel: ""
// };

// const recipe2 = {
//   name: "Chicken Curry",
//   ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
//   cookingTime: 42,
//   totalIngredients: null,
//   difficultyLevel: ""
// };

// const recipe3 = {
//   name: "Vegetable Stir Fry",
//   ingredients: ["broccoli", "carrot", "bell pepper"],
//   cookingTime: 15,
//   totalIngredients: null,
//   difficultyLevel: ""
// };

// recipes.push(recipe1, recipe2, recipe3);

// function getTotalIngredients(ingredients) {
//   return ingredients.length;
// }

// function getDifficultyLevel(cookingTime) {
//   if (cookingTime <= 30) {
//     return "easy";
//   } else if (cookingTime <= 60) {
//     return "medium";
//   } else {
//     return "hard";
//   }
// }

// const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
// console.log(recipe1TotalIngredients);

// const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
// console.log(recipe1DifficultyLevel);

// recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
// recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
// recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

// recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
// recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// console.log(recipes);
// //---------------------------------------------------------------------------------------------------// Simple Calculator using prompt() method
// let number1 =Number(prompt("Enter first number:"));
// let number2 =Number( prompt("Enter second number:"));
// let oprator = prompt("Enter operator (+, -, *, /):");
// if(oprator === "+"){
//   alert(`The sum is ${number1 + number2}`);
// }
// else if(oprator === "-"){
//     alert(`The difference is ${number1 - number2}`);
// }
// else if(oprator === "*"){
//     alert(`The product is ${number1 * number2}`);
// }
// else if(oprator === "/"){
//     alert(`The quotient is ${number1 / number2}`);
// }
// else {
//     alert("Invalid operator");
// }
// //----------------------------------------------------------------------------------------------------// Age calculator
// let userDOB = Number(prompt("Enter your DOB in (YYYY) format:"));
// let convertDOB = String(userDOB);
// let age = 2026 - userDOB;
// if (convertDOB.length === 4 && userDOB < 2026) {
//   alert(`Your age is ${age}`);
// } else if (convertDOB.length !== 4) {
//   alert("Please enter a valid DOB in (YYYY) format");
// } else if (userDOB >= 2026) {
//   alert("You are not born yet lol");
// } else {
//   alert("Invalid DOB");
// }

//-------------------------------------------------------Vowels and consonants counter
// function getVowelCount(str) {
//   const vowels = 'aeiou';
//   let vowelscount = 0;
//   let consonantsCount = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       vowelscount++;
//     }
//     else if(!vowels.includes(char) && char >="a" && char <= "z"){
//       consonantsCount++;
//     }
//   }
//   let count = {
//     vowels: vowelscount,
//     consonants: consonantsCount
//   }
//   return count;
// }
// console.log(getVowelCount("Hello World")); 

// console.log(getVowelCount("Programming is fun"));