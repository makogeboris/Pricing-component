"use strict";

const toogle = document.getElementById("toggleBtn");
const basic = document.getElementById("basic");
const pro = document.getElementById("pro");
const master = document.getElementById("master");
const labelMonthly = document.querySelector(".label--monthly");
const labelAnnually = document.querySelector(".label--annually");

const showPrice = document.querySelectorAll(".show");
const hidePrice = document.querySelectorAll(".hidden");

function switchPrice() {
  showPrice.forEach((price) => {
    price.classList.add("show");
  });

  hidePrice.forEach((price) => {
    price.classList.remove("hidden");
  });
}

toogle.addEventListener("click", switchPrice);
