
const throttle = (myFunction, timeout = 750) => {
   let wait = false;
   return (...functionArguments) =>  {
      if(wait) return;
      wait = true;
      myFunction(functionArguments);
      setTimeout(() =>{
         wait = false;
      }, timeout)
   };
};
export {throttle};

/* const example = (a, b, c) => {
   console.log(a + b + c)
}

window.addEventListener('scroll', throttle(() => example(1,2,9), 1000)); */