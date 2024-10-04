const fullName = "Julie Victoria Radant"

const firstName = fullName.substring(0,fullName.indexOf(" "));

const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1, fullName.length);

console.log("first name: " + firstName );
console.log("middle name: " + middleName );
console.log("last name: " + lastName );


// Anden metode ved brug af split()

const nameArray = fullName.split(" ");

const firstName2 = nameArray[0];
const middleName2 = nameArray[1];

const lastName2 = nameArray[2];


console.log("first name: " + firstName2);
console.log("middle name: " + middleName2);
console.log("last name: " + lastName2);



