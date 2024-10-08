"use strict";

window.addEventListener("load", start);

const Animal = {
    name: "default name",
    desc: "default desc",
    type: "unknown",
    age: 0,

};
    


const allAnimals = [[
    {
        name: "Mandu" ,
        desc: "amazing",
        type: "cat",
        age: 10
    },
    {
        name: "Mia",
        desc: "black",
        type: "cat",
        age: 10
    },
    {
        name: "Leeloo",
        desc: "growing",
        type: "dog",
        age: 3
    },
    {
        name: "Toothless",
        desc: "trained",
        type: "dragon",
        age: 14
    },
    {
        name: "ScoobyDoo",
        desc: "wondering",
        type: "dog",
        age: 58
    },
    {
        name: "Horsey",
        desc: "horsing",
        type: "horse",
        age: 10
    }
]];

function start( ) {
    console.log("ready");

    loadJSON();
    attachEventListeners();
}

function attachEventListeners() {
    document.querySelector(".onlyCats").addEventListener("click", () => {
        const onlyCats = allAnimals.filter(animal => animal.type === "cat");
        document.querySelector("#list tbody").innerHTML = ""; 
        onlyCats.forEach( displayAnimal );
    });

    document.querySelector(".onlyDogs").addEventListener("click", ()=>{
        const onlyDogs = allAnimals.filter(animal => animal.type === "dog")

        document.querySelector("#list tbody").innerHTML = ""; 

        onlyDogs.forEach(displayAnimal);
    });

    document.querySelector(".all").addEventListener("click", () =>{

        document.querySelector("tbody").innerHTML = "";
        allAnimals.forEach(displayAnimal);
    });

    document.querySelector(".nameSort").addEventListener("click", ()=>{

        const nameArray = allAnimals.filter(animal => animal.name);

        // const her = nameArray.map(animal => animal.name);

        // console.log ("hehhhhr" + her);
        // const sort = nameArray.sort((a,b) => a.name.localeCompare(b.name));
        const sortedAnimals = allAnimals.sort((a, b) => a.name.localeCompare(b.name));

        console.log(sortedAnimals)

        document.querySelector("tbody").innerHTML =""
        sortedAnimals.forEach(displayAnimal);

        console.log(sort)

    });
}

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

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
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
    console.log(animal);

}


