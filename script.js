const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

// Default values
function validateForm() {
  // Using Constraint Api
  // Style main message for and error
  if (!form.checkVisibility()) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return false;
  }

  // Validate password match
  if (password1.value === password2.value) {
    password1.style.borderColor = "green";
    password2.style.borderColor = "green";
  } else {
    message.textContent = "Make sure your passwords are match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1.style.borderColor = "red";
    password2.style.borderColor = "red";
    return false;
  }

  // if form is valid and password match
  message.textContent = "Successfully register!";
  message.style.color = "green";
  messageContainer.style.borderColor = "green";

  return true;
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  //   Do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  //   Validate Form
  if (validateForm()) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener("submit", processFormData);
