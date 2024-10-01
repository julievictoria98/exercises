window.addEventListener("load", start);

const queueHistory = [];
function start() {
    setInterval(updateQueue, 1000);
}

function updateQueue() {
    //generér ny random værdi (antal kunder i kø nu)
    const amount = getAmountInQueue();

    //indsæt ny værdi i queueHistory, og hvis queueHistory's længde er 20, slet den første.
    if (queueHistory.length >= 20) {
        queueHistory.shift();
    }
    queueHistory.push(amount);

    //slet html i querySelector("#queue")
    document.querySelector("#queue").innerHTML = "";

    //tegn queueHistory i querySelector("#queue")
    newPillars();
}

function newPillars() {
    queueHistory.forEach(queue => {
        const list = document.querySelector("ul");
        const li = document.createElement("li");
        li.style.setProperty("--height", `${queue}`); 
        list.appendChild(li); 
    });
}

function getAmountInQueue() {
    const amountInQueue = Math.floor(Math.random()*100)+1;

    return amountInQueue;
}

