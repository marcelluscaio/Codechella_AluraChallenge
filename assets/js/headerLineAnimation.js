const menu = document.querySelector(".menu-options");
const menuItems = document.querySelectorAll(".menu-options > li");
let timeout;

menuItems.forEach(item => item.addEventListener("mouseover", () => 
   {
      menu.style.setProperty('--line-position', item.offsetLeft + 'px');
      menu.style.setProperty('--line-size', item.clientWidth + 'px');
      menu.style.setProperty('--scale', '1');
      clearTimeout(timeout);      
   })
);

menuItems.forEach(item => item.addEventListener("mouseout", () => 
   {
      timeout = setTimeout(() => {
         menu.style.setProperty('--scale', '0');
      }, 1000);
   })
);