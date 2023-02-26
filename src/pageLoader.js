'use strict';

import room from './assets/dining_room.jpg';

export default function pageLoader(content) {
  //Create Title
  const restarantHeader = document.createElement('h1');
  const restarantName = document.createTextNode("Bourgeois'");
  restarantHeader.appendChild(restarantName);
  restarantHeader.classList.add('restaurantHeader');
  content.appendChild(restarantHeader);

  //Create nav bar
  const nav = document.createElement('nav');
  content.appendChild(nav);
  const ul = document.createElement('ul');
  nav.appendChild(ul);
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  const homeButton = document.createElement('button');
  const menuButton = document.createElement('button');
  const contactButton = document.createElement('button');
  li1.appendChild(homeButton);
  li2.appendChild(menuButton);
  li3.appendChild(contactButton);
  const homeText = document.createTextNode('Home');
  const menuText = document.createTextNode('Menu');
  const contactText = document.createTextNode('Contact');
  homeButton.appendChild(homeText);
  menuButton.appendChild(menuText);
  contactButton.appendChild(contactText);
  homeButton.classList.add('selected');
  homeButton.classList.add('menuButton');
  menuButton.classList.add('menuButton');
  contactButton.classList.add('contactButton');
  //Create 'pinner'
  const pinner = document.createElement('div');
  pinner.classList.add('pinner');
  content.appendChild(pinner);
  //Add backbround picture
  const roomPic = new Image();
  roomPic.src = room;
  pinner.appendChild(roomPic);
  //Add content area
  const contentArea = document.createElement('div');
  contentArea.classList.add('contentArea');
  pinner.appendChild(contentArea);
}
