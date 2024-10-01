const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {

  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {


  
    // For hver objekt i arrayet arr, lav en række <tr>
    // Indeni hver række skal der laves en celle <td> for hver værdi (value) i objektet
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel === undefined ? "No fuel" : each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ===undefined? "No Stops" : each.stops}</td>
  <td>${each.ownedBy ===undefined? "No Owner" : each.ownedBy}</td>
  <td>${each.isElectric===true ? "Yes": "No" }</td>
  <td>${each.isTandem===true ? "Yes": "No"}</td>
</tr>`;
  });
}

document.querySelector("#ufilteret").addEventListener("click", () => {
  showTheseVehicles(vehicles);

  
});

document.querySelector("#rugbrodsFlerPassager").addEventListener("click", () => {
  const rugbrødAndOverOne = vehicles.filter(vehicle => rubgrød(vehicle, "Rugbrød", 1)); // Pass the vehicle to the function
  showTheseVehicles(rugbrødAndOverOne);
});


document.querySelector("#el").addEventListener("click", () => {
  const onlyElVehicles = vehicles.filter(vehicle => isElDrevneFartøjer(vehicle, "isElectric", true)); // Pass the vehicle to the function
  showTheseVehicles(onlyElVehicles);
});

document.querySelector("#toellerfleresæde").addEventListener("click", () => {
  const Seats = vehicles.filter(vehicle => amountSeats(vehicle, 2)); // Pass the vehicle to the function
  showTheseVehicles(Seats);
});
document.querySelector("#elAndJonas").addEventListener("click", () => {
  let result = vehicles.filter(vehicle => getVehiclesByNavnAndType(vehicle, "isElectric", "ownedBy",  "Jonas")); // Pass the vehicle to the function
  showTheseVehicles(result);
});

function isElDrevneFartøjer(vehicle, property){
  if(vehicle[property] === true){
    return true
  }
  if(vehicle.value === false) {
    return false
}
};

function amountSeats(vehicle, value){
  if(vehicle.passengers >= value){
    return true
  }
  if(vehicle.value < value) {
    return false
}
};

function getVehiclesByNavnAndType(vehicle, Electric, OwnedBy, name){
  if(vehicle[Electric] === true && vehicle[OwnedBy] === name){
    return true
  }
  else {
    return false
}
};


function rubgrød(vehicle, fuel, value){
  if(vehicle.fuel === fuel && vehicle.passengers >= value){
    return true
  }
  if(vehicle.value !== value) {
    return false
}
};




console.log(vehicles.filter(isElDrevneFartøjer));

