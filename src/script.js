function dollarPrice() {
  document.getElementById("price1").innerHTML = "40 USD";
  document.getElementById("price2").innerHTML = "90 USD";
  document.getElementById("price3").innerHTML = "150 USD";
  document.getElementById("price4").innerHTML = "250 USD";
  document.getElementById("currencyLink2").innerHTML = "EUR";
  document.getElementById("currencyLink1").innerHTML = null;
}

function euroPrice() {
  document.getElementById("price1").innerHTML = "35 EUR";
  document.getElementById("price2").innerHTML = "80 EUR";
  document.getElementById("price3").innerHTML = "120 EUR";
  document.getElementById("price4").innerHTML = "220 EUR";
  document.getElementById("currencyLink1").innerHTML = "USD";
  document.getElementById("currencyLink2").innerHTML = null;
}

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

let didScroll = false;
let paralaxTitles = document.querySelectorAll(".paralax-title");

const scrollInProgress = () => {
  didScroll = true;
};

const raf = () => {
  if (didScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateX(" + window.scrollY / 10 + "%)";
    });
    didScroll = false;
  }
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollInProgress);
