// // let firstName = "sameer";
// // let lastName = 'thakur';
// // console.log(typeof(firstName));
// // console.log(lastName);

// // let name = `Sameer thakur 
// // thakue sameer`;
// // console.log(name);

// // Oprations on the Strings - 
// // 1) concateration -  adding two string 
// // let a = 'sameer ';
// // let b = 'thakur ';
// // let ans = a + b ;
// // console.log(ans);

// //Backticking 
// // let a = `Sameer `;
// // let b = `Thakur `;
// // let ans = `${a}  ${b}`;
// // console.log(ans);   

// //length and methods 
// let a = `Sameer `;
// let b = `Thakur `;

// console.log(b.length);
// console.log(typeof(b));

// //Upparcase
// console.log(a.toUpperCase());
// console.log(b.toLowerCase());

// // Substring metods - to emove elements from the string 
// console.log(a.substring(1));
// console.log(a.substring(1,5)); // ending indec char nhi consider hoga

// split method in string;
// let a = "hello bachho kese ho abb saab";
// let sp = a.split("");

// console.log(sp);    


// ==============================================================================================================
// FUNCTION - 
// 3 type of function 
// 1st
// function greet (){
//     console.log("Hello World");
// }

// greet ();

// 2nd FUNCTIONS WITH PARAMETERS 

// function greet (name){
//     console.log("Hello " +  name );

// }
// greet("sameer");
// greet("Rahul");

// 3 FUCTION WITH RETURN TYPE
// function sum (a,b){
//     return a + b ;
// }
// let result  = sum(10,25);
// console.log(result);

// 
//
// function printCounting() {
//     for(let i = 0; i <10 ; i++){
//         console.log(i);
//     }
// }
// printCounting();

// //avg 
// function avg(a , b){
//     let average = (a+b) / 2;
//     console.log(average);
// }
// avg(10,20);
// ========================================================================
// // type 1 5 questions 
// //q1 type hello worls 
// function greet (){
//     console.log("Hello World");

// }
// greet();

// // q2 - print no from 1 to 20;
// function printNumber (){
//     for(let i = 1; i <= 20; i++){
//         console.log(i);
//     }
// }
// printNumber();

// //q3 - prin all even no from 1 to 20
// function printEven(){
//     for(let i = 1 ; i <= 20; i++){
//         if(i % 2 == 0){
//             console.log(i);
//         }
//         // else{
//         //     console.log("hi");
//         // }
//     }
// }
// printEven();


// //q4 print table of 5 
// function printTale(){
//     for(let i = 1 ; i <= 50; i++){
//         if( i % 5 == 0){
//             console.log(i);
//         }
//     }
// }
// printTale();

// // q5 - function reverse count frm 20 to 1 
// function printCount(){
//     for(let i = 20; i >= 1; i--){
//         console.log(i);
//     }
// }
// printCount();

// ==============================================================================

// type 2 - function with parameter 
// q1- create a function calls name taking input 
function greet (name){
    console.log("Hello " + name );

}
greet("Sameer");

//q2 - squaring number -
function square (num){
    let result = num * num ;
    console.log(result);
}
square(5);

// q3 - add 2 numbers 
function addNumbers(a,b){
    let sum = a + b;
    console.log(sum);
}
addNumbers(15,25);

//q4 - check even or odd
function checkEvenOdd(a){
    if(a % 2 == 0){
        console.log("the number is even");
    }
    else{
        console.log("odd")
    }
}
checkEvenOdd(25);
checkEvenOdd(24);

//q5 - area of reactangle - 
function area (length , breath ){
    let a = length * breath;
    console.log(a);
}
area(2,5);

// funstion with return type 
// q1 - sum 
function add(a, b){
    return a + b;
    
}
let result = add(10,20);
console.log(result);

// q2 - function multiplication
function multi(a , b){
    return a * b;
}
let out = multi(2,10);
console.log(out);

//q3 sqaring
function square (a){
    return a*a;
}
let sq = square(5);
console.log(sq);

//q4 avg -
function aver(a,b){
    return (a+b)/2;
}
let av = aver(10,50);
console.log(av);

// q5 - ca, culate percentage 
function percentage(value , total ){
    return value / total * 100;
}
let per = percentage(425,500);
console.log(per);