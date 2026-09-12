
const membersFile = 'data/members.json';
const businessCardCont = document.querySelector('#business-card-cont');

const displayCards = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let nameDiv = document.createElement('div');
        let businessName = document.createElement('h2');
        let businessTag = document.createElement('h3');
        let logo = document.createElement('img');
        let infoCont = document.createElement('div');
        let bottomCard = document.createElement('div');
        let email = document.createElement('p');
        let phone = document.createElement('p');
        let urlCont = document.createElement('p');
        let url = document.createElement('a');
        let address = document.createElement('p');


        businessName.textContent = `${member.name}`;
        businessTag.textContent = `${member.tag}`;
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo for ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');
        nameDiv.setAttribute('class', 'memberName');
        bottomCard.setAttribute('class', 'bottomCard');
        email.setAttribute('class', 'email');
        email.innerHTML = `<span class="bolded">EMAIL: </span> ${member.email}`;
        phone.innerHTML = `<span class="bolded">PHONE: </span> ${member.phone}`;
        address.textContent = `${member.address}`
        address.setAttribute('class', 'address')
        urlCont.innerHTML = `<span class="bolded">URL: </span>`;
        url.setAttribute('href', member.website);
        url.textContent = member.website;


        businessCardCont.appendChild(card);
        card.appendChild(nameDiv);
        nameDiv.appendChild(businessName);
        nameDiv.appendChild(businessTag);
        card.appendChild(bottomCard);
        infoCont.appendChild(address);
        bottomCard.appendChild(infoCont);
        bottomCard.appendChild(logo);
        infoCont.appendChild(email);
        infoCont.appendChild(phone);
        infoCont.appendChild(urlCont);
        urlCont.appendChild(url);

    });
}

async function getMembers() {
    const response = await fetch(membersFile);
    const data = await response.json();
    displayCards(data.members);

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

