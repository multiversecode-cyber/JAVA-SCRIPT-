// let object = {
//     name : "Sameer",
//     age:25,
//     add: "Pune",

//     greet: function(){
//         console.log("Hello World");
//     }


// };
// console.log(object);
// object.greet();


// array ceation - 
// 1[]
// let arr = [1,20,3,4,5,6,7];
// console.log(arr);

// //2nd array consrtuctor 
// let brr = new Array ('Sameer', 25,27,100);
// console.log(brr);
// console.log(typeof(arr));
// console.log(typeof(brr));

// // acessing the element by using index no 
// console.log(arr[0]);
// console.log(brr[0]);
// console.log(arr[3]);

// let arr = new Array (10,20,30);
// // phase 1-
// arr.push(40);
// console.log(arr);
// arr.pop(10);
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.shift(20);
// console.log(arr);

// // phase 2-
// arr.slice(1,4);
// console.log(arr);
// arr.splice(0,1);
// console.log(arr);


// phase 2-
// //map()
// let arr = new Array (1,2,3,4,5,6,);
// let result = arr.map(num=> num*2);
// console.log(result);

// let r = arr.map(num=> num+5);
// console.log(r);

// let ans = arr.map((number)=>{
//     return number * number;
// })
// console.log(ans)

// //filter()

// let brr = [10,20,30,40,50,60,70,80,90];
// let re = arr.filter(num=> num%2==0);
// console.log(re);

// // reduce()

// let srr = [10,20,30,40];
// let s = arr.reduce((total, num ) => {
//     return total + num; 
// } ,0);

// console.log(s);

// let sum = [10,20,30,40];
// let zum = sum.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(zum);

// let sum1 = [1,2,3,4,5,6,7,8,9];
// let b = sum1.reduce((tot,num)=>{
//     return tot*num;
// },1)
// console.log(b);

// // Sort 
// let arr = [5,3,9,4,1,7];
// // arr.sort();
// arr.reverse();

// console.log(arr);

// // concat() - joint two array 
// let a = [1,2,3,4,5];
// let b = [6,7,8,9,10];

// // let result = a.concat(b);
// let result = a.concat(5,6,10);

// console.log(result);

//join - converts array in the string 

// let arr = [10,20,30];
// let result = arr.join();
// console.log(result);

// for each();
let arr = [1,2,3,4,5,6,7];

let result = arr.forEach((value,index)=> {
      console.log("value " + value + " index" + index );
},0)

