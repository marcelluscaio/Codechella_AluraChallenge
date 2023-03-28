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
      'valueMissing': "Preencha todos os campos",
      'underAge': "Você deve ter mais que 14 anos"
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

function isOldEnough(birthDate){
   console.log(birthDate);
   const birthYear = birthDate.getFullYear();
   const birthMonth = birthDate.getMonth();
   const birthDay = birthDate.getDate();
   
   const today = new Date();
   const currentYear = today.getFullYear();
   const currentMonth = today.getMonth();
   const currentDay = today.getDate();
   
   const age = currentYear - birthYear;

   const didntCelebrateBirthday = (currentMonth - birthMonth) < 0 || (currentMonth - birthMonth === 0 && currentDay < birthDay);
   if(didntCelebrateBirthday){
      age--;
   }
   return age < 14 ? 'underAge' : 'valid'; 
}

function validateOnSubmit(field){
   let validityState = getValidityState(field);
   if(field.name === 'date' && validityState === 'valid'){
      validityState = isOldEnough(new Date(`${field.value}T00:00`))
   };
   validityState === 'valid' ? eraseMessage(field.name) : showMessage(field.name, validityState);
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



