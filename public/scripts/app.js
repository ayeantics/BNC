const form = document.querySelector("form");
const submitButton = document.getElementById("submit-button");

function toggleNav() {
  const navLinksWrapper = document.getElementById("navLinksWrapper");
  const menuIcon = document.getElementById("menuIcon");

  if (navLinksWrapper.classList.contains("show")) {
    navLinksWrapper.classList.add("hide"); // Add the hide class first
    setTimeout(() => {
      navLinksWrapper.classList.remove("show"); // Then remove the show class after a short delay
    }, 300); // Adjust the delay as needed to match your animation duration
    menuIcon.classList.remove("bi-x-lg");
    menuIcon.classList.add("bi-list");
  } else {
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x-lg");
    navLinksWrapper.classList.remove("hide");
    navLinksWrapper.classList.add("show");
  }
}

function handleSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Hide the submit button after submission
  submitButton.style.display = 'none';

  // Display the confirmation message (optional)
  const confirmationMessage = document.getElementById('form-submitted-message');
  confirmationMessage.style.display = 'block';

  form.reset();
}

form.addEventListener("submit", handleSubmit);
