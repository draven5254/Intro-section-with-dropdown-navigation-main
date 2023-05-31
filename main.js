"use strict";

const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navbar = document.querySelector("nav");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  navbar.classList.toggle("active");
});

const navbar_item = document.querySelectorAll(".nav-item");

navbar_item.forEach((item) => {
  item.addEventListener("click", function () {
    const isActive = this.classList.contains("active");
    const dropdown = this.nextElementSibling;

    if (isActive) {
      this.classList.remove("active");
      dropdown.style.maxHeight = "0px";
    } else {
      this.classList.add("active");
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    }
  });
});
