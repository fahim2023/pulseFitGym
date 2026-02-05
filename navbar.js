// Existing code for nav links
document.querySelectorAll(".navbar-collapse .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    let section = document.querySelector(e.target.getAttribute("href"));
    if (section) {
      e.preventDefault();
      let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
      window.scroll({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      document.querySelector(".navbar-collapse").classList.remove("show");
    }
  });
});

// NEW CODE: Close navbar when clicking outside
document.addEventListener("click", function (e) {
  const navbar = document.querySelector(".navbar-collapse");
  const toggler = document.querySelector(".navbar-toggler");

  // Check if navbar is expanded and click is outside navbar
  if (navbar.classList.contains("show")) {
    // If click is not inside navbar or on the toggler button
    if (!navbar.contains(e.target) && !toggler.contains(e.target)) {
      navbar.classList.remove("show");
    }
  }
});
