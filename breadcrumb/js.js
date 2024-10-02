const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },{ name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];


document.querySelector("#button").addEventListener("click", breadcrumb);  
function breadcrumb() {

    document.querySelector("#button").removeEventListener("click", breadcrumb);      
    
    bc.forEach((item, index) => {
        if(index === bc.length -1 ){
            const breadcrumb = document.createElement("li"); 
            breadcrumb.innerHTML = "/" + item.name;
            document.querySelector("#ul").appendChild(breadcrumb); 
        } else {   
            const breadcrumb = document.createElement("li"); 
            breadcrumb.innerHTML = `<a href="${item.link}">${"/" +item.name}</a>`;
            document.querySelector("#ul").appendChild(breadcrumb); 
        }
    });
}