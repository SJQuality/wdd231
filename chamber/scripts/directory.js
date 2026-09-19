
import { displayCards } from './cards.mjs';

const membersFile = 'data/members.json';
const businessCardCont = document.querySelector('#business-card-cont');


// Display cards for Directory Page
async function getMembers() {
    const response = await fetch(membersFile);
    const data = await response.json();
    displayCards(data.members, businessCardCont);
}
getMembers();


// Grid/List Select

const gridButton = document.querySelector('#grid-button');
const listButton = document.querySelector('#list-button');


gridButton.addEventListener("click", () => {
    businessCardCont.classList.add("grid");
    businessCardCont.classList.remove("list");
    gridButton.classList.add("current");
    listButton.classList.remove("current");
});

listButton.addEventListener("click", () => {
    businessCardCont.classList.add("list");
    businessCardCont.classList.remove("grid");
    gridButton.classList.remove("current");
    listButton.classList.add("current");
})

