const throttle = (myFunction, timeout) => {
   let wait = false;
   let waitingArguments;
   let timeoutFunction = () => {
      if(waitingArguments == null){
         wait = false;
      } else{
         myFunction(...waitingArguments);
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
      setTimeout(timeoutFunction, timeout);
   };
};

export {throttle};