import { activityCards } from "./cards.mjs";


const activityCardsCont = document.querySelector('#activityCards');
const activityFile = 'data/activities.json';

async function getActivities() {
    try {
        const response = await fetch(activityFile);
        if (response.ok) {
            const data = await response.json();
            activityCards(data.activities, activityCardsCont);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}
getActivities();





