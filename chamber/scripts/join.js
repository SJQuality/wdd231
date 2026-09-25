
const lvlInfo = document.querySelector('#lvlInfo');


// Membership Data// 
const membershipLevels = [
    {
        name: "NP Membership",
        value: "np",
        cost: "$0",
        benefits: [
            "Business listing in the Chamber directory",
            "Access to Chamber networking events",
            "Community networking opportunities",
            "Nonprofit organization recognition"
        ]
    },
    {
        name: "Bronze Membership",
        value: "bronze",
        cost: "$150 per year",
        benefits: [
            "All NP membership benefits",
            "Business listing with website link",
            "Member event discounts",
            "Access to Chamber training sessions"
        ]
    },
    {
        name: "Silver Membership",
        value: "silver",
        cost: "$300 per year",
        benefits: [
            "All Bronze membership benefits",
            "Featured business listing",
            "Advertising opportunities on the Chamber website",
            "Priority registration for select events",
            "Additional event discounts"
        ]
    },
    {
        name: "Gold Membership",
        value: "gold",
        cost: "$500 per year",
        benefits: [
            "All Silver membership benefits",
            "Business spotlight placement on the home page",
            "Premium advertising opportunities",
            "Free admission to select Chamber events",
            "Priority access to training and networking events"
        ]
    }
];

// Build and Display Cards

function displayMemCards(membershipLevels) {
    let cardCount = 0;
    membershipLevels.forEach(card => {
        let memCard = document.createElement('div');
        let color = document.createElement('div');
        let title = document.createElement('h3');
        let info = document.createElement('button');

        memCard.setAttribute('class', `memCard num${cardCount}`);
        title.textContent = card.name;
        info.textContent = `Get more information!`;
        info.setAttribute('class', `modalLink num${cardCount}`);

        lvlInfo.appendChild(memCard);
        memCard.appendChild(color);
        memCard.appendChild(title);
        memCard.appendChild(info);

        //Build Modal

        let memModal = document.querySelector(`button.num${cardCount}`);
        let memLvl = document.querySelector(`dialog.memLvl${cardCount}`);
        //Add Listener
        memModal.addEventListener("click", () => {

            memLvl.showModal();
            displayLevels(card, memLvl);
        })

        cardCount += 1;

    });
}

displayMemCards(membershipLevels);

//Animate Cards
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        document.querySelectorAll('.memCard').forEach(card => {
            card.classList.add('animate');
        });

        observer.unobserve(entries[0].target);
    }
}, {
    threshold: 0.25
});

observer.observe(document.querySelector('#lvlInfo'));

// Modal


function displayLevels(level, memLv) {

    memLv.innerHTML = `
    
    <h2>${level.name}</h2>
    <p><strong>Cost</strong>: ${level.cost}</p>
    <h3>Benefits</h3>
    <ul class="benefits"></ul>
    <button id="closeModal">Close</button>
    `

    let beneDiv = memLv.querySelector('.benefits');

    const benefits = level.benefits;
    benefits.forEach(benefit => {
        let li = document.createElement('li');
        li.textContent = `${benefit}`;
        beneDiv.appendChild(li);
    })

    let close = memLv.querySelector('#closeModal');

    close.addEventListener("click", () => {
        memLv.close();
        memLv.innerHTML = "";
    })

}

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


