/*
  temporal deadroom
    the time taken btwn value allocation and 
  var - hoisting
  let vs var vs const
  5 types of function declaration
   1)named func
   2)function expression
   3)arrow function  
  IIFE-Immediately Invoked Function Expression 
*/

//function expr  
const av = function(){
    console.log("Function expression");
}
av();   

//arrow function
var s = () => {
    console.log("Arrow function")
}
s();

//IIFE
(()=>{
    console.log("IIFE")
})();