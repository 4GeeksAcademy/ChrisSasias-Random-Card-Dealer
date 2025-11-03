import "bootstrap";
import "./style.css";



window.onload = function() {

  randomCard();
  randomSticks();
 

};

function randomCard() {

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
let pokerSticks = ["♦", "♥", "♠", "♣"];


let randomNumbers = Math.floor(Math.random()*numbers.length)
let randomSticks = Math.floor(Math.random()*pokerSticks.length)


document.querySelector(".top-suits").innerHTML = pokerSticks[randomSticks];
document.querySelector(".bottom-suits").innerHTML = pokerSticks[randomSticks];
document.querySelector(".number").innerHTML = numbers[randomNumbers];

}

