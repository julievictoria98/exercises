import { $ } from "../utils/dom.js";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
   en: {
    texts: [
      { text: "The Boat", location: ".header" },
      { text: "The Robot", location: ".footer" },
    ],
  },
};
const locale = "da";

const HTMLheader = texts.de.texts[0].location;
const HTMLfooter = texts.de.texts[1].location;

$(HTMLheader).innerHTML = texts.da.texts[0].text;
$(HTMLfooter).innerHTML = texts.da.texts[1].text;

 $("#language");

language.addEventListener("change" , (event) => {
  if(event.target.value === "da"){
    $(HTMLheader).innerHTML = texts.da.texts[0].text;
    $(HTMLfooter).innerHTML = texts.da.texts[1].text;

    console.log(event.target.value);
  }
if(event.target.value === "de"){
   $(HTMLheader).innerHTML = texts.de.texts[0].text;
   $(HTMLfooter).innerHTML = texts.de.texts[1].text;
}
if(event.target.value === "en"){
    $(HTMLheader).innerHTML = texts.en.texts[0].text;
   $(HTMLfooter).innerHTML = texts.en.texts[1].text;
}
});


