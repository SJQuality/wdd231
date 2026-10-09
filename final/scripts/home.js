import { activityCards } from "./cards.mjs";

const activityFile = 'data/activities.json';
const hardActCont = document.querySelector('#activities');

// Display Featured Activities Cards
async function getHardAct() {
    try {
        const response = await fetch(activityFile);
        if (response.ok) {
            const data = await response.json();
            const hardVaryDiff = data.activities.filter(activity => activity.difficulty === "Hard" || activity.difficulty === "Varies");
            hardVaryDiff.sort(() => Math.random() - 0.5);
            const selectedActivities = hardVaryDiff.slice(0, 2);
            activityCards(selectedActivities, hardActCont);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
getHardAct();