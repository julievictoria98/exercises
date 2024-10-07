import { $ } from "../utils/dom.js";

const curseWords = [  {    bad: "var",    good: "const",  },  {    bad: "float",    good: "grid",  },  {    bad: "marquee",    good: "just don't",  },];


let firstCurseWord = curseWords[0].bad;
let secondCurseWord = curseWords[1].bad;
let thirdCurseWord = curseWords[2].bad;

let text = "Programmering er sjovt! Men husk altid at bruge " +
           firstCurseWord + " " +
           secondCurseWord + " og " +
           thirdCurseWord + " i moderne kodning.";

$("#text").innerHTML = text;

$("#button").addEventListener("click", showText);

function showText() {
    if (firstCurseWord === curseWords[0].good) {
        $("#popup").innerHTML = "Det er allerede Safe For Work";
        $(".popup").classList.add("show");
    }

    if (firstCurseWord === curseWords[0].bad) { 
        firstCurseWord = curseWords[0].good;
        secondCurseWord = curseWords[1].good;
        thirdCurseWord = curseWords[2].good;

        text = "Programmering er sjovt! Men husk altid at bruge " +
               "<span class='curse-word'>" + firstCurseWord + "</span> " +
               "<span class='curse-word'>" + secondCurseWord + "</span> og " +
               "<span class='curse-word'>" + thirdCurseWord + "</span> i moderne kodning.";

        $("#text").innerHTML = text;
    }
}

$("#okBtn").addEventListener("click", () => {
    $(".popup").classList.remove("show");
});
// textcontent, skriv teskten i p-tag