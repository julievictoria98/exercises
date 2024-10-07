document.querySelector("select").addEventListener("change", (event) => {  
    if (event.target.value=== "dark"){
        document.querySelector("body").dataset.theme = event.target.value
    }

    if (event.target.value=== "light"){
        document.querySelector("body").dataset.theme = event.target.value
    }

     if (event.target.value=== "hawaii"){
        document.querySelector("body").dataset.theme = event.target.value
    }
    });
