"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const quotes = document.querySelectorAll(".para");
  const citatBlok = document.querySelector(".citatBlok");
  //   console.log(quotes);

  for (let i = 0; i < quotes.length; i++) {
    // skab et random index fra quotes
    let randomIndex = Math.floor(Math.random() * quotes.length);
    // skab en variabel til dit random index fra quotes
    let randomQoute = quotes[randomIndex];

    citatBlok.innerHTML = randomQoute.innerHTML;
  }
});
