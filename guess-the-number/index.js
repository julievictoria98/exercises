// GAMMEL VERSION (UDEN UTILS)

// let RandomNumber = Math.floor(Math.random() * 100) + 1;
//     console.log(RandomNumber)

// document.querySelector("#button").addEventListener("click", guessNumber)

// function guessNumber(){
//     let guess = document.querySelector("#input").value;
//     console.log(guess);
//      if(guess == RandomNumber){
//         document.querySelector("#output").classList.add("win");
//         document.querySelector("#output").innerHTML = "You guessed right!";
//         document.querySelector("#output").style.color="green"
//     } 
//     else if(guess > RandomNumber){
//         document.querySelector("#output").innerHTML = "WRONG - You guessed too high";
//     }
//     else if(guess === ""){
//         document.querySelector("#output").innerHTML = " emmmh?? Please fill in the input field";
//     }
//      else{
//         document.querySelector("#output").innerHTML = " WRONG - You guessed too low";
//     }

//  }

//  NY VERSION DER BRUGER UTILS

import { $ } from "../utils/dom.js";
import { getRandomNumber } from "../utils/numbers.js";

let RandomNumber = getRandomNumber(100);
console.log(RandomNumber);

$("#button").addEventListener("click", guessNumber);

function guessNumber(){
    let guess = $("#input").value;
    console.log(guess);
    if(guess == RandomNumber){
        $("#output").classList.add("win");
        $("#output").innerHTML = "You guessed right!";
        $("#output").style.color = "green";
    } else if(guess > RandomNumber){
        $("#output").innerHTML = "WRONG - You guessed too high";
    } else if(guess === ""){
        $("#output").innerHTML = " emmmh?? Please fill in the input field";
    } else {
        $("#output").innerHTML = " WRONG - You guessed too low";
    }
}

