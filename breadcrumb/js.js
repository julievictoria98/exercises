const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },{ name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];


document.querySelector("#button").addEventListener("click", breadcrumb);  
function breadcrumb() {

    
  bc.forEach((item, index) => {

     if(index === bc.length -1 ){
         const breadcrumb = document.createElement("li"); 
    breadcrumb.innerHTML = "/" + item.name;
    document.getElementById("ul").appendChild(breadcrumb); 
    }

    else{   const breadcrumb = document.createElement("li"); 
    breadcrumb.innerHTML = `<a href="${item.link}">${"/" +item.name}</a>`;
    document.getElementById("ul").appendChild(breadcrumb); }
 


  });
}