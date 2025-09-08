// TASK ZI

// Shundan function yozing, bu function 3 soniydan so'ng
// "Hello World!" so'zini qaytarsin.

// MASALAN: delayHelloWorld("Hello World"); return "Hello World";


const delayHelloWorld = (input: string): Promise<string> => {
   return new Promise((resolve) => {
     let count = 3;
 
     const interval = setInterval(() => {
       console.log(count);
       count--;
 
       if (count === 0) {
         clearInterval(interval);
         setTimeout(() => {
           resolve(input); // natijani qaytaramiz
         }, 1000);
       }
     }, 1000);
   });
 };
 
 delayHelloWorld("Hello, World!").then((result) => {
   console.log("delayHelloWorld:", result);
 });