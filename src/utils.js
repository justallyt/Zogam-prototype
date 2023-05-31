export const removeClasses = (nodeList, cssClasses) => {
         for(let i = 0; i < nodeList.length; i++){
               nodeList[i].classList.remove(...cssClasses);
         }
}

export const addClasses = (nodeList, cssClasses) => {
       for(let i = 0; i < nodeList.length; i++){
             nodeList[i].classList.add(...cssClasses);
       }
}

export const requestInterval = (fn, delay) => {
       const requestAnimFrame = (function() {
               return window.requestAnimationFrame || function(callback){
                       window.setTimeout(callback, 1000/60);
               };
       })();


       let start = new Date().getTime(), handle = {};

       let loop = () => {
               const current = new Date().getTime(), delta = current - start;

               if(delta >= delay){
                     fn.call();
                     start = new Date().getTime();
               }

               handle.value = requestAnimFrame(loop);
       }

       handle.value = requestAnimFrame(loop);

       return handle;
}

export const clearRequestInterval = (handle) => {
          window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) : clearInterval(handle);
}