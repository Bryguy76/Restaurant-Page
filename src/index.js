'use strict';
import pancake from './assets/pancakes.jpg';
import room from './assets/dining_room.jpg';
import burger from './assets/burger.jpg';

const content = document.querySelector('#content');
const body = document.getElementsByName('body');

const pancakePic = new Image();
const roomPic = new Image();
const burgerPic = new Image();

pancakePic.src = pancake;
roomPic.src = room;
burgerPic.src = burger;
