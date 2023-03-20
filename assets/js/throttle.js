const throttle = (myFunction, timeout = 750) => {
   let counter = 0;
   let wait = false;
   let waitingArguments;
   let timeoutFunction = () => {
      if(waitingArguments == null){
         wait = false;
      } else{
         myFunction(...waitingArguments);
         counter++;
         console.log(counter);
         waitingArguments = null;
         setTimeout(timeoutFunction, timeout);
      }
   };

   return (...functionArguments) =>  {
      if(wait) {
         waitingArguments = functionArguments;
         return;
      };
      wait = true;
      myFunction(...functionArguments);
      counter++;
      console.log(counter);
      setTimeout(timeoutFunction, timeout);
   };
};

/* const throttle = (myFunction, timeout = 750) => {
   let counter = 0;
   let wait = false;
   return (...functionArguments) =>  {
      if(wait) return;

      wait = true;
      myFunction(...functionArguments);
      counter++;
      console.log(counter);
      setTimeout(() =>{
         wait = false;
      }
      , timeout);
   };
}; */


export {throttle};

/* const example = (a, b, c) => {
   console.log(a + b + c)
}

window.addEventListener('scroll', throttle(() => example(1,2,9), 1000)); */