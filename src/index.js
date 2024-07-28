import './style.css';
import { populateContact } from './aboutTab';
import { populateMenu } from './menuTab';
import { populateHome } from './homeTab';
import bkg from './abstract.jpg'; //Image by Eduardo Davad from Pixabay
const myImg = new Image();
myImg.src = bkg;
import brg from './burger.png'; //
const myBurg = new Image();
myBurg.src = brg;


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

let contactButton = document.createElement('button');
contactButton.setAttribute('class', 'navButton');
contactButton.textContent = "Contact";
header.appendChild(contactButton);
contactButton.addEventListener("click", () => {
    populateContact();
})


let content = document.createElement('div');
content.setAttribute('id', 'content');
container.appendChild(content);




let subcontent = document.createElement('div');
subcontent.setAttribute('id', 'subcontent');
content.appendChild(subcontent);
populateHome();


