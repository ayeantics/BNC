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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const formDataString = new URLSearchParams(formData).toString();

    fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          // Optionally, perform any other actions on successful form submission
        } else {
          // Show an error message if the submission fails
          console.error("Form submission failed.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Show an error message if there's a network error
      });
  });
});
