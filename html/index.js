// let a=75;
// let b=77;
// let c=65;
// console.log(a&&b&&c>=35)

// let  mark=34;
// let result = mark>=35? "pass":"fail"
// console.log(result)

// comma operator:
// // let a= 1,b=3,c=5;
// // console.log(a,b,c)

//  tenary operator:
// let age=22;
// let result= age>=18?"eligible to vote":"not eligible to vote";
// console.log(result)

// yield function:
// function* sample() {
//     let age=21 >=18? "allowed":"not allowed"
//     yield age
//     yield 3
//     yield 4
// }
// var gen = sample()
// console.log(gen.next().value)

// if condition:
// let a= 20;
// let b=20;
// if(a>b){
//     console.log(a)
// }
// else if(a==b){
//         console.log("equal")
//     }
// else{
//     console.log(b)
// }

// let a= 35;
// if(a<35){
//     console.log("fail")
// }
// else if(a>35){
//         console.log("pass")
//     }
// else if(a>65){
//         console.log("good")
// }
// else if(a>100){
//     console.log("excellent")
// }
// switch condition:
// switch is used to executed diff code blocks based on value of a variable

// switch (key){
//     case value:

//      break;

//      default:

//         break;

// }
// switch condition:
// let age=16;
// switch (true){
//     case age>=18:
//     vote="eligible to vote";
//     break;
//     case age<18:
//     vote=" not eligible to vote";
//     break;
// }
// console.log(vote)

// for loop:
// for loop is used when you know how many times you want to iterate

// for (let i=0; i<5; i++) {
//     console.log(i)
// }

// for (let i=1; i<=100; i++) {
//     console.log("welcome")
// }

// let num=11;
// if(num%2==0){
//     console.log("even")
// }
// else {
//     console.log("odd")
// }

// for of loop:
// the for of loop is used to iterate over iterable objects like arrays,string,or other collections

// var a=[1,2,3,4,5,6];
// for ( let b of a){
//     // console.log(b);
//     if(b=4){
//         console.log(b)
//         break;
//     }
// }

// function:
// A js function is a block of code designed for perform  a particular task.
// function name(parameters) {
//     code 
// }

// function sample(){
//     var a=10;
//     var b=20;
//     console.log(a+b)
// }
// function sample1(){
//     var a=20;
//     var b=20;
//     console.log(a+b)
// }
// sample();
// sample1();

// function with parameters:

//  function par(a,b){ 
//     console.log(a+b) 
// }
// par(1,2)

// function return_name(a,b){
//     return a+b
// }
// console.log(return_name(1,3));


// let age=16;
// switch (true){
//     case age>=18:
//     vote="eligible to vote";
//     break;
//     case age<18:
//     vote=" not eligible to vote";
//     break;
// }
// console.log(vote)

// loop print 1 t0 5:
// function numbers(n) {
//     for ( i = 1; i <= n; i++) {
//       console.log(i);
//     }
//   }
//   numbers(5);  

// odd or even:
// let a
// function num(a) {
//     if (a % 2 == 0) {
//       console.log("even")
//     } else {
//       console.log("odd")
//   }
// }
// num(2);

// add to numbers using function:
// function add(a,b){
//     return a+b;
// }
// let sum = add(4,3);
// console.log(sum)

// voting system using function:
// let a
// function age(a){
// switch (true){
//     case a>=18:
//     vote="eligible to vote";
//     break;
//     case a<18:
//     vote=" not eligible to vote";
//     break;
//     }
//     console.log(vote)
// }
// age(19);

// find largest number using function:
// function findLargest(a, b) {
//     if (a > b) {
//       return a;
//     } else {
//       return b;
//     }
//   }  
//   let sum = findLargest(22, 20);
//   console.log("The largest number is:", sum);