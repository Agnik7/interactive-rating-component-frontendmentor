const rating_cards = document.querySelectorAll(".ratings span");
const submit = document.querySelector(".submit");
const rate_point = document.getElementById("rate");
const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");
let rate = null;

rating_cards.forEach((rating_card) => {
  rating_card.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    rate = e.target.innerText;
    console.log(rate);
  });
});

submit.addEventListener("click", () => {
  if (rate) {
    rate_point.innerText = rate;
    rating.classList.add("hidden");
    thanks.classList.remove("hidden");
  }
});