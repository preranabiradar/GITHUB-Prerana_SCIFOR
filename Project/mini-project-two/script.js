//For contact Page
function FormValidation() {
  // Clear any previous error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("subjectError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Regular expression for email validation
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  var isValid = true;

  // Check if fields are empty
  if (name.trim() === "") {
    document.getElementById("nameError").innerHTML = "Name is required.";
    isValid = false;
  }

  if (email.trim() === "") {
    document.getElementById("emailError").innerHTML = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML =
      "Enter a valid email address.";
    isValid = false;
  }

  if (subject.trim() === "") {
    document.getElementById("subjectError").innerHTML = "Subject is required.";
    isValid = false;
  }

  if (phone.trim() === "") {
    document.getElementById("phoneError").innerHTML =
      "Phone number is required.";
    isValid = false;
  }

  if (message.trim() === "") {
    document.getElementById("messageError").innerHTML = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
}

//For Resume Page
document
  .getElementById("show-education")
  .addEventListener("click", function () {
    const educationContainer = document.getElementById("education-container");
    const isHidden =
      educationContainer.style.display === "none" ||
      educationContainer.style.display === "";
    educationContainer.style.display = isHidden ? "grid" : "none";
    this.textContent = isHidden
      ? "Hide Education Details"
      : "Show Education Details";
  });
