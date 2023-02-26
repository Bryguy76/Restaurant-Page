'use strict';
import pancake from './assets/pancakes.jpg';
import burger from './assets/burger.jpg';
import pageLoader from './pageLoader';
import { contentWiper } from './contentWiper';

const content = document.querySelector('#content');
const body = document.getElementsByTagName('body');

pageLoader(content);
const pinner = document.querySelector('.pinner');
const contentArea = document.querySelector('.contentArea');
const homeButton = document.querySelector('.homeButton');
const menuButton = document.querySelector('.menuButton');
const contactButton = document.querySelector('.contactButton');

const pancakePic = new Image();
const burgerPic = new Image();

pancakePic.src = pancake;
burgerPic.src = burger;
