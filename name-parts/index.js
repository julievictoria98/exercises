let firstName = "Julie";

let firstpart = firstName.substring(0,2).toLowerCase();

let thirdLetter = firstName.substring(2,3).toUpperCase();

let finalPart = firstName.substring(3, firstName.length).toLowerCase();
let newName = firstpart + thirdLetter + finalPart;


console.log(newName);


