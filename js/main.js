const nav = document.querySelector("nav");
const courses = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
// Swiper Js
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   slidesPerGroup: 1,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      // when window width is >= 320px
      340: {
         slidesPerView: 2,
         slidesPerGroup: 1,
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 4,
         slidesPerGroup: 4,
      },
      992: {
         slidesPerView: 4,
         slidesPerGroup: 4,
      },
   },
});
var swiper2 = new Swiper(".mySwiper2", {
   pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
   },
});
// NavBar Change Active
document.addEventListener("scroll", function () {
   if (scrollY >= 300) {
      // change nav to fixed
      nav.classList.add("fixed-top");
      nav.classList.add("shadow");
   } else {
      nav.classList.remove("fixed-top");
      nav.classList.remove("shadow");
   }
   // to change active
   let curentSec = "";
   sections.forEach((section) => {
      if (scrollY >= section.offsetTop - 90 && section.hasAttribute("id")) {
         curentSec = section.getAttribute("id");
         navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.dataset.href.includes(curentSec)) {
               link.classList.add("active");
            }
         });
      }
   });
});
// Add Smoth Scroll By Js
for (let i = 0; i < navLinks.length; i++) {
   navLinks[i].addEventListener("click", function (e) {
      scrollTo({
         top: document.querySelector(navLinks[i].dataset.href).offsetTop - 90,
         behavior: "smooth",
      });
   });
}
// Go To Top
document.getElementById("goTop").addEventListener("click", () => {
   this.scrollTo({
      top: 0,
      behavior:'smooth'
   });
});
