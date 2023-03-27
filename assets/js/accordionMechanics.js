const accordionButtons = document.querySelectorAll(".accordion button");
const accordionContent = document.querySelectorAll(".accordion li div");

function showContent(button, content){
   accordionContent.forEach((box, index) => hideContent(accordionButtons[index], box));
   content.classList.add('show-content');
   button.setAttribute("aria-expanded", "true");
   content.setAttribute("aria-hidden", "false");
};

function hideContent(button, content){
   content.classList.remove('show-content');
   button.setAttribute("aria-expanded", "false");
   content.setAttribute("aria-hidden", "true");
};


accordionButtons.forEach(button => button.addEventListener('click', 
      (e) => {
         if(button.nextElementSibling.classList.contains('show-content')){
           hideContent(button, button.nextElementSibling);
         } else {
            showContent(button, button.nextElementSibling)
         }
      }
   )
);

