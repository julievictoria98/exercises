// GAMMEL VERSION (UDEN UTILS)


// console.log("Math.random",Math.floor( Math.random()*(3 + 1)));

// 3 gør at det er mellem 0 0g 2
// men hvis man plusser med 1 så kommer 3 med

// console.log("Math.random",Math.ceil( Math.random()*3));

// den her gør det samme som ovenover, bare en anden metode

// let RandomNumber = Math.floor( Math.random()*(100 + 1));
// console.log(RandomNumber);


// document.querySelector("#button").addEventListener("click", getNumber)

// function getNumber(){
//     let RandomNumber = Math.floor( Math.random()*(100 + 1));
//     console.log(RandomNumber);
//     document.querySelector("#output").innerHTML = RandomNumber;
// }


// NY VERSION MED UTILS

import { $ } from "../utils/dom.js";
import { getRandomNumber } from "../utils/numbers.js";

$("#button").addEventListener("click", getNumber);

function getNumber() {
    let randomNumber = getRandomNumber(100);
    console.log(randomNumber);
    $("#output").innerHTML = randomNumber;
}



// function guessNumber(){
//     let guess = document.querySelector("#input").value;
//     console.log(guess);
//     if(guess == RandomNumber){
//         document.querySelector("#output").innerHTML = "You guessed right";
//     } else {
//         document.querySelector("#output").innerHTML = "You guessed wrong";
//     }
// }

