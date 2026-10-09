

//Phone Number Formatting
const phoneInput = document.querySelector('#mobile');

phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 10) {
        value = value.substring(0, 10);
    }

    if (value.length > 6) {
        value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6)}`;
    } else if (value.length > 3) {
        value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
    } else if (value.length > 0) {
        value = `(${value}`;
    }

    e.target.value = value;
});

//get timestamp

const now = new Date();
const timestamp = document.querySelector('#timestamp');
timestamp.value = now;


// Difficulty Levels// 
const difficultyLevels = [
    {
        name: "Hard",

        description: [
            "Best suited for experienced outdoor enthusiasts with good physical fitness. These activities may involve steep climbs, rugged terrain, longer distances, significant elevation changes, or challenging trail conditions."
        ]
    },
    {
        name: "Moderate",

        description: [
            "Best for visitors with some outdoor experience and a reasonable level of fitness. These activities may include uneven terrain, moderate elevation changes, longer distances, or sustained physical effort."
        ]
    },
    {
        name: "Easy",

        description: [
            "Suitable for beginners, families, and visitors looking for a relaxed outdoor experience. These activities generally involve gentle terrain, shorter distances, or minimal physical exertion."
        ]
    },
    {
        name: "Varies",

        description: [
            "Difficulty depends on the specific route, activity, conditions, or location. Check the details before heading out to choose an experience that matches your ability and comfort level."
        ]
    },
];

// Build and Display Cards
const diffInfo = document.querySelector('#diffInfo');

function displayDiffCards(difficultyLevels) {
    let cardCount = 0;
    difficultyLevels.forEach(card => {
        let difCard = document.createElement('div');
        let color = document.createElement('div');
        let name = document.createElement('h3');
        let info = document.createElement('button');

        difCard.setAttribute('class', `diffCard num${cardCount}`);
        name.textContent = card.name;
        info.textContent = `Get more information!`;
        info.setAttribute('class', `modalLink num${cardCount}`);

        diffInfo.appendChild(difCard);
        difCard.appendChild(color);
        difCard.appendChild(name);
        difCard.appendChild(info);

        //Display Modal

        let diffButton = document.querySelector(`button.num${cardCount}`);
        let diffCardLvl = document.querySelector(`dialog.diffLvl${cardCount}`);
        //Add Listener
        diffButton.addEventListener("click", () => {

            diffCardLvl.showModal();
            displayLevels(card, diffCardLvl);
        })

        cardCount += 1;

    });
}

displayDiffCards(difficultyLevels);

//Build Modal
function displayLevels(level, difLvl) {

    difLvl.innerHTML = `
    
    <h2>${level.name}</h2>
    <p> ${level.description}</p>
    <button id="closeModal">Close</button>
    `

    let close = difLvl.querySelector('#closeModal');

    close.addEventListener("click", () => {
        difLvl.close();
        difLvl.innerHTML = "";
    })

}

