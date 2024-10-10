"use strict"

window.addEventListener("mousemove", (e) =>{
    let x = e.clientX
    let windowWidth = window.innerWidth;
    let brightness = (x/windowWidth)*100 + "%";

    const root = document.documentElement;
    
    root.style.setProperty('--brightness', brightness);


});