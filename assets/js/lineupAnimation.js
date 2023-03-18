const windowHeight = window.innerHeight;
const bandLists = document.querySelectorAll('.lineup > ul');

const checkPosition = (list) => {
   if(list.getBoundingClientRect().top < windowHeight * 2 / 3){
      triggerAnimation(list);
   };
};

const triggerAnimation = (list) => {
   for(let i=0; i<list.children.length; i++){
      list.children[i].style.setProperty('--n', `${i * .75}s`);
      list.children[i].classList.add('animate-lineup');
   }
}

window.addEventListener('scroll', () => {
   bandLists.forEach(band => checkPosition(band));
});