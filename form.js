let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", function(event) {
    event.preventDefault();
   const formData = new FormData(form);
   const formObject = Object.fromEntries(formData.entries());
   console.log(JSON.stringify(formObject));
});

