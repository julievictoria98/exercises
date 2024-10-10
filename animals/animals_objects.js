"use strict";

window.addEventListener("load", start);

const Animal = {
    name: "default name",
    desc: "default desc",
    type: "unknown",
    age: 0,

};

const allAnimals = [];
let displayedAnimals = [];
let sortDescending = true;

function start( ) {
    console.log("ready");
    loadJSON();
    attachEventListeners();
}

function attachEventListeners() {
    document.querySelector(".onlyCats").addEventListener("click", () => {
        displayedAnimals = allAnimals.filter(animal => animal.type === "cat");
        document.querySelector("#list tbody").innerHTML = ""; 
        displayedAnimals.forEach( displayAnimal );
    });

    document.querySelector(".onlyDogs").addEventListener("click", ()=>{
        displayedAnimals = allAnimals.filter(animal => animal.type === "dog")

        document.querySelector("#list tbody").innerHTML = ""; 

        displayedAnimals.forEach(displayAnimal);
    });

    document.querySelector(".all").addEventListener("click", () =>{
        displayedAnimals = allAnimals;
        document.querySelector("tbody").innerHTML = "";
        displayedAnimals.forEach(displayAnimal);
    });

    // SORTING--------------------------------------------
    document.querySelector(".nameSort").addEventListener("click", ()=>{
        sortString("name");
    });

    document.querySelector(".typeSort").addEventListener("click", () => {
        sortString("type");
    });

    document.querySelector(".descSort").addEventListener("click", () => {
        sortString("desc");
    });

    document.querySelector(".ageSort").addEventListener("click", () => {
        let sortedAnimals = [];

        if(sortDescending) {
            sortedAnimals = displayedAnimals.sort((a,b) => a.age-b.age);
        } else {
            sortedAnimals = displayedAnimals.sort((a,b) => b.age-a.age);
        }

        sortDescending = !sortDescending;

        document.querySelector("tbody").innerHTML = "";
        sortedAnimals.forEach(displayAnimal);
    });
}

function sortString(data) {
    let sortedAnimals = [];

    if(sortDescending) {
        sortedAnimals = displayedAnimals.sort((a, b) => a[data].localeCompare(b[data]));
    } else {
        sortedAnimals = displayedAnimals.sort((a, b) => b[data].localeCompare(a[data]));
    }
    sortDescending = !sortDescending;

    
    document.querySelector("tbody").innerHTML = "";
    sortedAnimals.forEach(displayAnimal);
}

// -------------------------------------------------------------------
function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        // Create new object
        const animal = Object.create(Animal);
        
        
        // extract data from json
        const fullName = jsonObject.fullname;
        const firstSpace = fullName.indexOf(" ");
        const secondSpace = fullName.indexOf(" ", firstSpace + 1);
        const lastSpace = fullName.lastIndexOf(" ");
        const name = fullName.substring(0, firstSpace);
        const desc = fullName.substring(secondSpace +1 , lastSpace);
        const type = fullName.substring(lastSpace + 1);
       
        // put cleaned data in object    
        animal.name = name;
        animal.desc = desc;
        animal.type = type;
        animal.age = jsonObject.age

        // add the object to the allAnimals array
        allAnimals.push(animal);
    });

    displayedAnimals = allAnimals;

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    displayedAnimals.forEach( displayAnimal );
}


function displayAnimal( animal ) {
 const clone = document.querySelector("template#animal").content.cloneNode(true);

    // create clone

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


