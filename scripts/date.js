

//Copywrite date
const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = today.getFullYear();

//Last Modified
const lastModified = document.querySelector("#lastModified");
document.getElementById("lastModified").innerHTML = document.lastModified;