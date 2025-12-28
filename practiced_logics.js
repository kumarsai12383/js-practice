//simple login form with OTP verification
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