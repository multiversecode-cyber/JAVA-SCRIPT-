//default parameter - 
function name (name = "defaultname"){
    console.log("my name is ", name);
}
name();
// classes
// class human {



//     // function name () {

//     // }
// //     //properties 
// //     age = 20; // this is public can be accessed by anywhere 
// //     #wt = 200; // making this private -- accesing by this.wt 
// //     ht = 170 ;

// //     constructor(NewAge, NewWeight, NewHeight){
// //         this.age = NewAge;
// //         this.#wt = NewWeight;
// //         this.ht = NewHeight;

// //     }

// //     old (){
// //         console.log("I am walking " + this.#wt);
// //     }

// //     running(){
// //         console.log("I am runing " + this.ht );
// //     }

// //     //to access pvt like here wt 
// //     // write function using get and set to access and modify 
// //     get fetchWeight(){
// //         return this.#wt;
// //     }
// //     set modifyWeight(val){
// //         this.#wt = val;
// //     }


// }

// let obj  = new human ();

// console.log(obj.age);
// // console.log(obj.#wt); cant be accessed out side
// obj.old(); 

// // console.log(obj.fetchWeight);
// obj.modifyWeight = 45; // modified 
// console.log(obj.fetchWeight);

// let obj = new human ( 22, 69, 180);
// console.log(obj.fetchWeight);
// obj.old();
// obj.running();