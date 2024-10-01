// Hjælpe funtion ift. document.querySelector/document.querySelectorAll

export function $(element){
    return  document.querySelector(element);
}

export function $$(element){
    return  document.querySelectorAll(element);
}

// const btns = document.querySelectorAll('button');
// const div = document.ATTRIBUTE_NODE('div');

// det nedenunder erstatter det ovenover
// $("div")

// $$("button")


// Husk <script type ="module" src=""></script>
// import {$, $$} from "../utils/dom.js"
