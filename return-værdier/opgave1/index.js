


function greeting(firstName) {
    return `Hello ${firstName}`;


}

 let result = greeting();
 console.log(greeting())

// const txt = `Greeting is ${greeting("a name")}`;
// console.log( txt);


// function add(n1,n2){
//     return n1 * n2
// }

// console.log(add(2,3))



// function greeting(firstName){
// return `Hello ${firstName}`;

// }

// const result = greeting("Julie");

// console.log("result", result);

function returns5() {
    let value;
    value = 5;
    return value;
}

function thisCallsReturns5() {
    returns5();
}

function add(n1,n2){
    return n1 + n2;
}

function calculator(n1, n2, calculationType) {
    let result;

    if (isNaN(n1+n2)) {
        result = "You must write numbers in the first two parameters";
    } else if(calculationType == "plus") {
        result = n1 + n2;
    } else if (calculationType == "multiply") {
        result = n1 * n2;
    } else if (calculationType == "subtract") {
        result = n1 - n2;
    } else if (calculationType == "divide") {
        result = n1 / n2;
    } else {
        result = "Wrong calculation type\nUse either plus, multiply, subtract or divide";
    }

    return result;
}

console.log(calculator(1,2,"plus"))
