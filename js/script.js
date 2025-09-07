const menuButton = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");
const buttonSpans = document.querySelectorAll("button > span");

menuButton.addEventListener("click", () => {
  navContainer.classList.toggle ("visibility");
  
  buttonSpans.forEach(span => {
    span.classList.toggle("active");
  });
});
