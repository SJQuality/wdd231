

const displayCards = (members, container) => {
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
        let memLvl = document.createElement('p');
        let logoMem = document.createElement('div');
        let memberColor = '';
        if (member.membershipLevel == 3) {
            memberColor = "Gold";
        }
        else if (member.membershipLevel == 2) {
            memberColor = "Silver";
        }
        else if (member.membershipLevel == 1) {
            memberColor = "Bronze";
        }


        businessName.textContent = `${member.name}`;
        businessTag.textContent = `${member.tag}`;
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo for ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        memLvl.innerHTML = `<span class="bolded">Membership Level: </span> ${memberColor}`;
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


        container.appendChild(card);
        card.appendChild(nameDiv);
        nameDiv.appendChild(businessName);
        nameDiv.appendChild(businessTag);
        card.appendChild(bottomCard);
        infoCont.appendChild(address);
        bottomCard.appendChild(infoCont);
        bottomCard.appendChild(logoMem);
        logoMem.appendChild(logo);
        logoMem.appendChild(memLvl);
        infoCont.appendChild(email);
        infoCont.appendChild(phone);
        infoCont.appendChild(urlCont);
        urlCont.appendChild(url);

    });
}

export { displayCards };