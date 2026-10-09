//Build Nav
const nav = document.querySelector('.nav');

function displayNav() {
    let img = document.createElement('img');
    let span = document.createElement('span');
    let button = document.createElement('button');
    let navNav = document.createElement('nav');
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let a1 = document.createElement('a');
    let a2 = document.createElement('a');
    let a3 = document.createElement('a');


    img.setAttribute('src', 'images/ngoag.webp');
    img.setAttribute('alt', 'Logo for North Georgia Outdoor Adventure Guide');
    span.setAttribute('id', 'head-name');
    span.textContent = `North Georgia Outdoor Adventure Guide`;
    button.setAttribute('id', 'ham-btn');
    button.setAttribute('class', 'hamburger');
    button.setAttribute('aria-label', 'Menu Button');
    navNav.setAttribute('id', 'nav-bar');
    navNav.setAttribute('class', 'navigation');
    li2.setAttribute('id', 'nav-border');
    a1.setAttribute('href', 'index.html');
    a1.textContent = `Home`;
    a2.setAttribute('href', 'activities.html');
    a2.textContent = `Activities`;
    a3.setAttribute('href', 'contactus.html');
    a3.textContent = `Contact Us`;

    nav.appendChild(img);
    nav.appendChild(span);
    nav.appendChild(button);
    nav.appendChild(navNav);
    navNav.appendChild(ul);
    ul.appendChild(li1);
    li1.appendChild(a1);
    ul.appendChild(li2);
    li2.appendChild(a2);
    ul.appendChild(li3);
    li3.appendChild(a3);

    //Waypoint
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage == 'index.html') {
        li1.classList.add('current');
    }
    else if (currentPage == 'activities.html') {
        li2.classList.add('current');
    }
    else if (currentPage == 'contactus.html')
        li3.classList.add('current');

}
displayNav();
//Menu button
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
})

