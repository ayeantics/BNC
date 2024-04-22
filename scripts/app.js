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

// Get the modal
let modal = document.getElementById("myModal");

// Get all images and insert them inside the modal - use their "alt" text as a caption
let images = document.querySelectorAll(".roof-image img");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Also close the modal if the user clicks outside of the image
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
