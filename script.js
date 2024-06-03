var menu = document.querySelector(".menu-contain");
var closeBtn = document.querySelector(".close-btn");
var menuBtn = document
  .querySelector(".menu-btn")
  .addEventListener("click", function () {
    menu.style.transition = "0.5s";
    menu.style.left = "0px";
    closeBtn.style.display = "flex";
  });

closeBtn.addEventListener("click", function () {
  menu.style.left = "-100%";
  setTimeout(() => {
    closeBtn.style.display = "none";
  }, 1);
});

//slide
var slide = document.querySelector(".slide");

let move = 0;
if (slide) {
  slide.style.transform = `translateX(${-move}%)`;
}
setInterval(() => {
  move += 100;
  slide.style.transform = `translateX(${-move}%)`;
  if (move < 500) {
    slide.style.transition = "transform 0.5s";
  }
  if (move >= 500) {
    setTimeout(() => {
      slide.style.transition = "none";
      move = 0;
      slide.style.transform = `translateX(${-move}%)`;
    }, 500);
  }
}, 6000);

document.querySelector(".to-right").addEventListener("click", () => {
  slide.style.transition = "transform 0.5s";
  if (move < 600) {
    move += 100;
    slide.style.transform = `translateX(${-move}%)`;
  } else {
    move = 0;
  }
});

document.querySelector(".to-left").addEventListener("click", () => {
  slide.style.transition = "transform 0.5s";
  if (move > 0) {
    move -= 100;
    slide.style.transform = `translateX(${-move}%)`;
  } else {
    move = 600;
  }
});

//Header On Scroll
let allow = true;
var marqueContain = document.querySelector(".marquee-contain");
var header = document.querySelector(".header");
var headerBg = document.querySelector(".h-bg");
window.addEventListener("scroll", function () {
  let y = window.scrollY;
  if (y > 190 && allow) {
    marqueContain.style.display = "none";
    header.style.transition = "0.5s";
    header.style.top = "-180px";
    headerBg.classList.add("low-opacity");
    setTimeout(() => {
      header.classList.add("fixed-header");
    }, 1);
    setTimeout(() => {
      header.style.position = "fixed";
      this.document.querySelector(".header").style.top = "0px";
      header.classList.remove("fixed-header");
    }, 500);
    allow = false;
  }
  if (y == 0) {
    allow = true;
    headerBg.classList.remove("low-opacity");
    header.style.position = "absolute";
    header.style.top = "0px";
    marqueContain.style.display = "block";
  }
});
