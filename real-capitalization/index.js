const fullName = "julie victOria rAdant"


const nameArray = fullName.split(" ");

const firstName = nameArray[0].substring(0,1).toUpperCase() + nameArray[0].substring(1, nameArray[0].length).toLowerCase();
const middleName = nameArray[1].substring(0,1).toUpperCase() + nameArray[1].substring(1, nameArray[1].length).toLowerCase();
const lastName = nameArray[2].substring(0,1).toUpperCase() + nameArray[2].substring(1, nameArray[2].length).toLowerCase();


console.log("first name: " + firstName);
console.log("middle name: " + middleName);
console.log("last name: " + lastName);
