//This code is from ChatGPT cause I coudl not figure this out. But I'm happy how it turned out. 
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("myNavbar");

  // Add a scroll event listener
  window.addEventListener("scroll", function () {
    // Get the scroll position
    var scrollPosition = window.scrollY;

    // Change the background color based on the scroll position
    if (scrollPosition > 50) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Change to the desired background color
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  });
});