const form = document.querySelector(".form-ingresso form");

function isOldEnough(birthDate){
   const today = new Date();
   const birthYear = birthDate.getFullYear();
   const currentYear = today.getFullYear();

   return currentYear - birthYear >= 14 ? true : false;
   //Make this better
}

form.addEventListener('submit', (e) => {
   e.preventDefault();


   let date = `${e.target[3].value}T00:00`;
   if(isOldEnough(new Date(date))){
      console.log("entrou");
      sessionStorage.setItem("name", e.target[0].value);
      sessionStorage.setItem("type", e.target[2].value);
      location.href = "../pages/seu-ingresso.html"
   }
});