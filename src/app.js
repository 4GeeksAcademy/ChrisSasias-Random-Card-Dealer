window.onload = function () {
  randomCard();
  document.getElementById("newCardBtn").addEventListener("click", randomCard);
};

function randomCard() {
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = ["♦", "♥", "♠", "♣"];

  const randomNumber = Math.floor(Math.random() * numbers.length);
  const randomSuit = Math.floor(Math.random() * suits.length);
  const suit = suits[randomSuit];
  const color = suit === "♦" || suit === "♥" ? "red" : "black";

  document.querySelector(".top-suits").innerHTML = suit;
  document.querySelector(".bottom-suits").
  document.querySelector(".number").innerHTML = numbers[randomNumber];

  const card = document.querySelector(".card");
  card.classList.remove("red");
  if (color === "red") card.classList.add("red");
}