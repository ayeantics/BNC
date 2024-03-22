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