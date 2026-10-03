
import { discoverData } from "../data/interestData.mjs";

const cardContainer = document.querySelector('#cardContainer');

function buildDiscoverCards(data) {
    data.forEach((location) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let figure = document.createElement(`figure`);
        let img = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let button = document.createElement('button');

        title.textContent = `${location.name}`;
        img.setAttribute('src', location.image);
        img.setAttribute('alt', `Picture of ${location.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');
        address.textContent = `${location.address}`;
        description.textContent = `${location.description}`;
        button.textContent = `Learn More`;

        cardContainer.appendChild(card);
        card.appendChild(title);
        card.appendChild(figure);
        figure.appendChild(img);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

    });
}
buildDiscoverCards(discoverData);