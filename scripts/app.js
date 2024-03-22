function toggleNav() {
  const navLinksWrapper = document.getElementById("navLinksWrapper");
  const menuIcon = document.getElementById("menuIcon");

  navLinksWrapper.classList.toggle("show");

  if (navLinksWrapper.classList.contains("show")) {
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x-lg");
  } else {
    menuIcon.classList.remove("bi-x-lg");
    menuIcon.classList.add("bi-list");
  }
}