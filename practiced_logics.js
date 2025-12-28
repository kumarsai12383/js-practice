// //simple login form with OTP verification
let userName1 = prompt("Enter your name:");
let password = prompt("Enter your password:");
if (userName1.length === 0 && password.length === 0) {
  alert("Please enter valid credentials");
} else if (
  /[A-Za-z]/.test(password) &&
  /[0-9]/.test(password) &&
  userName1.length > 0 &&
  password.length > 0
) {
  let OTP = Math.floor(Math.random() * 999999);
  alert(`Your OTP is ${OTP}`);
  let enterOtp = Number(prompt("Enter your OTP:"));
  if (OTP === enterOtp) {
    alert(`Welcome ${userName1} we are happy to see you again`);
  } else {
    alert("Invalid OTP, please try again");
  }
} else if (
  !/[A-Za-z]/.test(password) ||
  !/[0-9]/.test(password) ||
  password.length <= 0
) {
  alert("Please enter a valid password with letters and numbers");
}

// maskEmail function
function maskEmail(email) {
  let atindex =
    email[0] +
    "*".repeat(email.slice(email[1], email.indexOf("@") - 1).length - 1) +
    email[email.indexOf("@") - 1] +
    email.slice(email.indexOf("@"));
  return atindex;
}
let email = "Kumarsai@gmail.com";
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));

//Loan eligibility checker
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if (
    annualIncome >= minIncomeForDuplex &&
    creditScore >= minCreditScoreForDuplex
  ) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (
    annualIncome >= minIncomeForCondo &&
    creditScore >= minCreditScoreForCondo
  ) {
    return "You qualify for a condo and car loan.";
  } else if (
    annualIncome >= minIncomeForCar &&
    creditScore >= minCreditScoreForCar
  ) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}

console.log(getLoanMessage(75000, 720)); // You qualify for a duplex, condo, and car loan.
console.log(getLoanMessage(50000, 690)); // You qualify for a condo and car loan.
console.log(getLoanMessage(35000, 660)); // You qualify for a car loan.
console.log(getLoanMessage(25000, 600)); // You don't qualify for any loans.


