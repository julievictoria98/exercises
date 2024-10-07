import { $ } from "../utils/dom.js";

const curseWords = [  {    bad: "var",    good: "const",  },  {    bad: "float",    good: "grid",  },  {    bad: "marquee",    good: "just don't",  },];

let text = $("#text").textContent;

$("#button").addEventListener("click", testTekst);

function testTekst(){ 
    curseWords.forEach((curseWord) => {

        if(text.includes(curseWord.bad)){
        text = text.replaceAll(curseWord.bad, `<span>${curseWord.good}</span>`);
        
        }

        else{
            $("dialog").setAttribute("open", true);
        }
        $("#text").innerHTML = text;
    });

};

