var navbar = document.getElementsByClassName("head")[0];
var sticky = navbar.offsetTop;
console.log(sticky);

function myFunction() {
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function () {
  myFunction();
};
