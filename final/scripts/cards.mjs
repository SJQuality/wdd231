


const activityCards = (activities, container) => {
    activities.forEach((activity) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let img = document.createElement('img');
        let type = document.createElement('p');
        let difficulty = document.createElement('p');
        let distance = document.createElement('p');
        let description = document.createElement('p');
        let location = document.createElement('p');

        name.textContent = `${activity.name}`;
        name.setAttribute('class', 'activityName');
        img.setAttribute('src', activity.image);
        img.setAttribute('alt', `Picture of ${activity.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');
        img.setAttribute('class', 'activityImg');
        type.innerHTML = `<span class="bolded">Type: </span> ${activity.type}`;
        type.setAttribute('class', 'activityType');
        difficulty.innerHTML = `<span class="bolded">Difficulty: </span> ${activity.difficulty}`;
        difficulty.setAttribute('class', 'activityDifficulty');
        distance.innerHTML = `<span class="bolded">Distance: </span> ${activity.distance}`;
        distance.setAttribute('class', 'activityDistance');
        description.innerHTML = `<span class="bolded">Description: </span> ${activity.description}`;
        description.setAttribute('class', 'activityDescription');
        location.innerHTML = `<span class="bolded">Location: </span> ${activity.location}`;
        location.setAttribute('class', 'activityLocation');

        container.appendChild(card);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(img);
        card.appendChild(type);
        card.appendChild(difficulty);
        card.appendChild(distance);
        card.appendChild(description);


    });
}

export { activityCards }