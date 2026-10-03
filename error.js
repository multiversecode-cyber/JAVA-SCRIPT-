// Error Handling 

// There are two type of error 
// 1 - comnpiler time error - syntax error
// console.log(;

// 2nd - runtime error - Reffrence error 

// which comes in terminal

// Handling -
// try and catch methis 

// Syntax-
// try {

// }
// catch(err){

// }

// Example
try{
    console.log("Hello World");
    console.log("Kese ho app log");
    console.log(x);
    console.log("Code ends here ");
}
catch (error){
    console.log("Your error is here :- ", error);
    throw new Error ("Bhai print karne se phele x ko initilize kardo");


}
finally{
    console.log("I will un every time coz i am final block ");
}