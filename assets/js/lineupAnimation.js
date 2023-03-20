import {throttle} from './throttle.js';

const windowHeight = window.innerHeight;
const bandLists = document.querySelectorAll('.lineup > ul');
const arrayBandLists = [...bandLists];

const checkPosition = (list) => {
   if(list.getBoundingClientRect().top < windowHeight * 0.9){
      triggerAnimation(list);
      cleanArray(list);
      arrayBandLists.length === 0 && killEventListener();
   };
};

const triggerAnimation = (list) => {   
   for(let i=0; i<list.children.length; i++){
      list.children[i].style.setProperty('--n', `${i * .75}s`);
      list.children[i].classList.add('animate-lineup');
   };
};

const cleanArray = (list) => {
   const index = arrayBandLists.indexOf(list);
   arrayBandLists.splice(index, 1);
}

const killEventListener = () => {
   window.removeEventListener('scroll', handleScroll);
}

const handleScroll = () => {   
   console.log('alive');
   arrayBandLists.forEach(band => checkPosition(band));
}

window.addEventListener('scroll', throttle(handleScroll, 500));