
"use strict"

window.addEventListener("load", switchColor);

let swtichBackground = true

function switchColor(){

const button =  document.querySelector("#button");

button.classList.add("animate");


window.addEventListener("mousemove", (e) =>{
    swtichBackground = false

});

addEventListener("animationend", turnRed); 
}

document.querySelector("#button").addEventListener("click", ()=>{
    swtichBackground = true;
    turnRed();
});

function turnRed(){

    if(swtichBackground === true){
        const root = document.documentElement;
        root.style.setProperty("--body-bg-color", "red")
    }

    if(swtichBackground === false){

    }

}
