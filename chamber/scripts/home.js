import { displayCards } from './cards.mjs';

const membersFile = 'data/members.json';
// Randomize Spotlight Cards

const spotlightCont = document.querySelector('#spotlight');

// Display Spotlight Cards
async function getMembersSpotlight() {
    const response = await fetch(membersFile);
    const data = await response.json();
    const qualifyingMembers = data.members.filter(member => member.membershipLevel === 3 || member.membershipLevel === 2);
    qualifyingMembers.sort(() => Math.random() - 0.5);
    const selectedMembers = qualifyingMembers.slice(0, 2);
    displayCards(selectedMembers, spotlightCont);
}
getMembersSpotlight();