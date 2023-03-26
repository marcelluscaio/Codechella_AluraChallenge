const accordionButtons = document.querySelectorAll(".accordion button");
const accordionContent = document.querySelectorAll(".accordion li div");

accordionButtons.forEach(button => button.addEventListener('click', 
      (e) => {
         if(button.nextElementSibling.classList.contains('show-content')){
            button.nextElementSibling.classList.remove('show-content');
         } else {
            accordionContent.forEach(box => box.classList.remove('show-content'));
            button.nextElementSibling.classList.add('show-content'); 
         }
      }
   )
);