const form = document.querySelector(".form-ingresso form");
const fields = form.querySelectorAll("input, select");
const errors = {
   'name': {
      'patternMismatch': "Insira nome e sobrenome",
      'valueMissing': "Preencha todos os campos"
   },
   'email': {
      'typeMismatch': "Insira um e-mail válido",
      'valueMissing': "Preencha todos os campos"
   },
   'type': {
      'valueMissing': "Preencha todos os campos"
   },
   'date': {
      'valueMissing': "Preencha todos os campos"
   }
};

function getValidityState(field){
   const validityObject = field.validity;
   const allErrors =[];
   for(let error in validityObject){
      allErrors.push(error);
   };
   const thisError = allErrors.filter(error => validityObject[error]);
   return thisError[0];
}

function showMessage(field, error){
   const errorField = document.querySelector(`label[for=${field}] span`);
   errorField.textContent = errors[field][error];
   console.log(field, error);
}

function eraseMessage(field){
   const errorField = document.querySelector(`label[for=${field}] span`);
   errorField.textContent = "";
}

function validateOnBlur(field){   
   const validityState = getValidityState(field);
   if(validityState !== 'valid' && validityState !== 'valueMissing'){
      showMessage(field.name, validityState);
   } else{
      eraseMessage(field.name)
   }
}

function validateOnSubmit(field){
   const validityState = getValidityState(field);
   showMessage(field.name, validityState);

}

form.setAttribute('novalidate', true);

fields.forEach(field => field.addEventListener('blur', (e) => validateOnBlur(e.target)));

form.addEventListener('submit', (e) => {
   e.preventDefault();
   form.classList.add('submitted');
   fields.forEach(field => validateOnSubmit(field));  
});

/*  let date = `${e.target[3].value}T00:00`;
   if(isOldEnough(new Date(date))){
      console.log("entrou");
      sessionStorage.setItem("name", e.target[0].value);
      sessionStorage.setItem("type", e.target[2].value);
      location.href = "../pages/seu-ingresso.html"
   } */

function isOldEnough(birthDate){
   const today = new Date();
   const birthYear = birthDate.getFullYear();
   const currentYear = today.getFullYear();

   return currentYear - birthYear >= 14 ? true : false;
   //Make this better
}

