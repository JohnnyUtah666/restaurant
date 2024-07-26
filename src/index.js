import './style.css';
import { populateAbout } from './aboutTab';
import { populateMenu } from './menuTab';
import { populateHome } from './homeTab';




let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

let header = document.createElement('div');
header.setAttribute('id', 'header');
container.appendChild(header);

let homeButton = document.createElement('button');
homeButton.setAttribute('class', 'navButton');
homeButton.textContent = "Home";
header.appendChild(homeButton)
homeButton.addEventListener("click", () => {
    populateHome();
})

let menuButton = document.createElement('button');
menuButton.setAttribute('class', 'navButton');
menuButton.textContent = "Menu";
header.appendChild(menuButton);
menuButton.addEventListener("click", () => {
    populateMenu();
})

let aboutButton = document.createElement('button');
aboutButton.setAttribute('class', 'navButton');
aboutButton.textContent = "About";
header.appendChild(aboutButton);
aboutButton.addEventListener("click", () => {
    populateAbout();
})


let content = document.createElement('div');
content.setAttribute('id', 'content');
container.appendChild(content);


let subcontent = document.createElement('div');
subcontent.setAttribute('id', 'subcontent');
content.appendChild(subcontent);
populateHome();


