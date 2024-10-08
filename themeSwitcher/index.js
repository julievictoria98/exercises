document.querySelector("select").addEventListener("change", (event) => {  
    document.querySelector("body").dataset.theme = event.target.value
    
    });
