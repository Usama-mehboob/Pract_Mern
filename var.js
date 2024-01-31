// f3 = (updateVlue1) => {
//     updateVlue1(6, 7);
// }


// const f1 = ()  =>{
//   var a = 2;
//   var b = 3;

 
// };

// const updateVlue = (NewA, NewB) =>{
//     a = NewA;
//     b = NewB;
// }

// f3(updateVlue);
// console.log(a, b)











// // +++++++++++++++++++++++++++++++++++++++++++LOOP+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for ( let i = 0; i < 11; i++){
//   if (i % 2 != 0){
//     continue;
//   }
//   // console.log(i);
// }


// let i = 0;
// while(i < 11){
//   if (i % 2 != 0){
//     continue
//   }
//   // console.log(i);
// }

// do{
//   if (i % 2 != 0){
//     continue
//   }
//   // console.log(i);
// }while(i < 11)



// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// const arr = ["abc", 1 , "hell", 3]
// const arr1 = ["bcd", 3, "def", arr]

// for( let i = 0; i < arr1.length; i++){
//   if (typeof arr1[i] == "object"){
//     for (let j = 0; j < arr1[i].length; j++ ){
//       // console.log(arr1[i][j]);
//     }
//   }
//   // console.log(arr1[i]);
// }

//++++++++++++++++++++++++++++++++++Methods+++++++++++++++++++++++++++++++++++++

// arr.push("hello");
// console.log(arr1);

// this methods is use for adding in list 

// arr.pop();
// console.log(arr)

// this is use for removing 

// arr.shift()
// console.log(arr)

// arr.unshift("hello")
// console.log(arr)


// ++++++++++++++++++++++++++++++++++++++  Spread/ Rest +++++++++++++


// const myArray = [1, 2, "hello", 5]

// function arraySort(a, ...b){
//     console.log(a, b)
// }

// arraySort(...myArray)
// const myArray = [1, 2, "hello", 5]

// function arraySort(a, ...b){
//     console.log(a, b)
// }

// arraySort(...myArray)

// const myArray = [1, 2, "hello", 5]

// function arraySort([a, b, ...c]){
//     console.log(a, b, c)
// }

// arraySort(myArray)


// const person = {
//     name : "usama",
//     age : 22,
//     course: "mern",
//     duration: 6
// }
// // const {name, age, ...rest} = person;

// function objectPerson({name, course, ...Rest}){
//     console.log(name, course, Rest)
// }

// objectPerson(person);


const Array = [ 1, 2, 3, 4, 5];

a = Array[0];