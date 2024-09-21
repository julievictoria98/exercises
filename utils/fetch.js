
export function fetchUrl(url){
    return fetch(url).then((response) =>response.json());

}

// function randomFunc () {
//     const data = await fetchUrl("https://api.spacexdata.com/v4/launches");
// }