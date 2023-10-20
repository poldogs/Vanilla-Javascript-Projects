let countEl = document.getElementById("count-el");
let showSavings = document.getElementById("show-savings");
let history

text = "Your savings: "

let count=0;


function increment() {
    count++;
    countEl.innerHTML = count;
}

function save() {
    showSavings.innerHTML += count+" - ";
    count=0;
    
}

console.log(savings)