

//Copywrite date
const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = today.getFullYear();

//Last Modified
const lastModified = document.querySelector("#lastModified");
document.getElementById("lastModified").innerHTML = document.lastModified;

//Last Visited


const currentVisit = today.getTime();
const lastVisit = localStorage.getItem("lastVisit");

const lastVisited = document.querySelector(".lastVisited");
let message = "";


function displayLastVisit() {
    if (lastVisit == null) {
        message = "Welcome! Let us know if you have any questions."
    }
    else if (currentVisit - lastVisit < 86400000) {
        message = "Back so soon! Awesome!"
    }
    else if (currentVisit - lastVisit >= 86400000 && currentVisit - lastVisit < 172800000) {

        message = `You last visited 1 day ago.`;
    }
    else {
        let n = (currentVisit - lastVisit) / 86400000;
        message = `You last visited ${Math.floor(n)} days ago.`;
    }
    lastVisited.textContent = `${message}`;
}

displayLastVisit();

localStorage.setItem("lastVisit", currentVisit);