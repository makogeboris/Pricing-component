"use strict";

const toggleBtn = document.getElementById("toggleBtn");

function switchPrice() {
  document.querySelectorAll(".card__price").forEach((priceContainer) => {
    const showPrice = priceContainer.querySelector(".show");
    const hiddenPrice = priceContainer.querySelector(".hidden");

    showPrice.classList.remove("show");
    showPrice.classList.add("hidden");

    hiddenPrice.classList.remove("hidden");
    hiddenPrice.classList.add("show");
  });
}

toggleBtn.addEventListener("click", switchPrice);
