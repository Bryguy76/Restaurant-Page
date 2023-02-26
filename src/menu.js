import pancake from './assets/pancakes.jpg';
import burger from './assets/burger.jpg';
const burgerPic = new Image();
const pancakePic = new Image();
pancakePic.src = pancake;
burgerPic.src = burger;
pancakePic.classList.add('menuPic');
burgerPic.classList.add('menuPic');

export function menuContent(contentArea) {
  const para1 = document.createElement('p');
  const pancakePrice = document.createTextNode('pancakes - 12');
  para1.appendChild(pancakePrice);
  contentArea.appendChild(para1);
  contentArea.appendChild(pancakePic);
  const para2 = document.createElement('p');
  const burgerPrice = document.createTextNode('burger - 15');
  para2.appendChild(burgerPrice);
  contentArea.appendChild(para2);
  contentArea.appendChild(burgerPic);
}
