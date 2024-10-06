// prøver med .replaceAll()

const theText = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

const result = theText.replaceAll("ord", "ting");

console.log(result);


// prøver med spil/join

const theText2 = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";
const textArray = theText2.split(" ");

const updatedWord = textArray.map((object) => {
    if(object === "ord"){
        return "ting";
    }
    return object;
}
);
const newString = updatedWord.join(" ");

console.log(newString);





