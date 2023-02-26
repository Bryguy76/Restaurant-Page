'use strict';
import { pageLoader } from './pageLoader';
import { contentWiper } from './contentWiper';
import { homeContent } from './home';
import { menuContent } from './menu';
import { contactContent } from './contact';

const content = document.querySelector('#content');
const body = document.getElementsByTagName('body');

pageLoader(content);

const pinner = document.querySelector('.pinner');
const contentArea = document.querySelector('.contentArea');
const homeButton = document.querySelector('.homeButton');
const menuButton = document.querySelector('.menuButton');
const contactButton = document.querySelector('.contactButton');
homeContent(contentArea);

homeButton.addEventListener('click', function () {
  contentWiper(contentArea);
  menuButton.classList.remove('selected');
  homeButton.classList.add('selected');
  contactButton.classList.remove('selected');
  homeContent(contentArea);
});

menuButton.addEventListener('click', function () {
  contentWiper(contentArea);
  menuButton.classList.add('selected');
  homeButton.classList.remove('selected');
  contactButton.classList.remove('selected');
  menuContent(contentArea);
});

contactButton.addEventListener('click', function () {
  contentWiper(contentArea);
  menuButton.classList.remove('selected');
  homeButton.classList.remove('selected');
  contactButton.classList.add('selected');
  contactContent(contentArea);
});
