// *********Current Weather*********

const todayWeather = document.querySelector('#today');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=34.20&lon=-84.14&appid=f869fd748e22b37d27d63eddb2cbb7ab&units=imperial';
const thisDay = new Date();
const todayDay = thisDay.toLocaleDateString('en-US', { weekday: 'long' });

async function apiFetchCurrent() {
    try {
        const response = await fetch(currentUrl);
        if (response.ok) {
            const currentData = await response.json();
            displayResults(currentData);
        } else {
            throw Error(await response.text());
        }


    } catch (error) {
        console.log(error);
    }

}

apiFetchCurrent();

// Display Results

function displayResults(currentData) {
    todayWeather.innerHTML = `${todayDay}`;
    currentTemp.innerHTML = `${Math.round(currentData.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;
    let desc = currentData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc} `;

}

// *********3 Day Forcast Weather*********

const ForcastTemp = document.querySelector('#current-temp');
const ForcastIcon = document.querySelector('#weather-icon');
const ForcastDesc = document.querySelector('figcaption');
const forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=34.20&lon=-84.14&cnt=22&appid=f869fd748e22b37d27d63eddb2cbb7ab&units=imperial';


async function apiFetchForcast() {
    try {
        const response = await fetch(forcastUrl);
        if (response.ok) {
            const forcastData = await response.json();
            const lists = forcastData.list;
            forcastCards(lists);
        } else {
            throw Error(await response.text());
        }


    } catch (error) {
        console.log(error);
    }

}

apiFetchForcast();

// Display Results
const threeDay = document.querySelector('#threeDay');

let usedDate = "";
const forcastCards = (lists) => {
    lists.forEach((list) => {
        const date = new Date(list.dt_txt.replace(' ', 'T'));
        const dateString = date.toLocaleDateString();
        const todayString = thisDay.toLocaleDateString();
        if (dateString !== todayString && dateString != usedDate) {
            const iconsrc = `https://openweathermap.org/img/w/${list.weather[0].icon}.png`;
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });

            let forcastImgDesc = list.weather[0].description;
            //create elements
            let forcastDay = document.createElement('p');
            let forcastFig = document.createElement('figure');
            let forcastIcon = document.createElement('img');
            let forcastTemp = document.createElement('p');
            let forcastFigCap = document.createElement('figcaption');

            //set element attributes
            forcastDay.setAttribute('class', 'day');
            forcastDay.textContent = day;
            forcastIcon.setAttribute('src', iconsrc);
            forcastIcon.setAttribute('alt', forcastImgDesc);
            forcastTemp.innerHTML = `${Math.round(list.main.temp)}&deg;F`;
            forcastFigCap.textContent = list.weather[0].description;

            //build structure
            threeDay.appendChild(forcastFig);
            forcastFig.appendChild(forcastDay);
            forcastFig.appendChild(forcastIcon);
            forcastFig.appendChild(forcastTemp);
            forcastFig.appendChild(forcastFigCap);
            usedDate = dateString;
        } else {

        }

    }
    )
}