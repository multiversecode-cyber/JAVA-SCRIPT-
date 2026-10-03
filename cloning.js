// // dynamic nature - object can be changed 
// let obj = {
//     ht : 12,
//     wt : 178,
//     age : 20,   

// };

// console.log(obj);

// // if i want to add a color in this -
// obj.color = "White";

// console.log(obj);


// ========= Object cloning Types ========================
// // 1) Spread Operator ...
// const number = [10,20,30];
// const num = [...number]; // cloning  
// num.push(40);
// console.log(number);
// console.log(num);

// //combining 

// let num1 = [10,20,30];
// let num2 = [40,50,60];

// let result = [...num1,...num2];
// console.log(result);

// //object clonig

// let user = {
//     nam : "Sameer Thakur",
//     age : 20,

// };

// const updateUser = {
//     ...user,
//     age : 21
// }

// let user2 = {...user};
// // user2.push("Hello");
// console.log( user);
// console.log(user2);
// console.log(updateUser);

// practice
// const a = [1,2,3,4];
// const b = [...a,5,6,7,8,9];

// console.log(b);

// const member = {
//     name : "sameer",
//     age : 21,
//     city : "pune",
// }
// const updatePlace = {
//     ...member , 
//     city : "Nashik",
// }
// console.log(member);
// console.log(updatePlace);

// const a = [10,20,30,40];
// const b = [50,60,70,80];

// let result = [...a,...b];

// console.log(result);


 // Type 2 - Assign Method -  
let src = {
    name : "sameer",
    age : 20,
    wt : 80,
}
let src2 = {
    value : 101,
    name1 : "Thakur",
}

let dest = Object.assign({ } , src , src2 );

src.age = 50;
dest.age = 66;

// console.log("src " , src);
console.log( "dest ", dest);

