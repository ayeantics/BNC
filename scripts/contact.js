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
  const sendButton = document.querySelector(".submit-button");
  const formSubmittedMessage = document.getElementById(
    "form-submitted-message"
  );

  // Hide the form submitted message initially
  formSubmittedMessage.style.display = "none";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Show the loading message and hide the form
    formSubmittedMessage.innerHTML = "<p>Loading...</p>";
    formSubmittedMessage.style.display = "block";
    form.style.display = "none";

    const formData = new FormData(form);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });
    const formDataString = new URLSearchParams(formDataObj).toString();

    fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          // Show the success message and the send button
          formSubmittedMessage.innerHTML = `
                    <h2>მოთხოვნა მიღებულია!</h2>
                    <p>მადლობა მოთხოვნისთვის, მალე დაგვიკავშირდებით.</p>
                    <a href="../index.html">მთავარ გვერდზე დაბრუნება</a>
                `;
          sendButton.style.display = "inline-block";
        } else {
          // Show an error message if the submission fails and show the send button again
          formSubmittedMessage.innerHTML =
            "<p>Form submission failed. Please try again later.</p>";
          form.style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Show an error message if there's a network error and show the send button again
        formSubmittedMessage.innerHTML =
          "<p>An error occurred. Please try again later.</p>";
        form.style.display = "block";
      });
  });
});
