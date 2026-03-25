let prompt = require("prompt-sync")();
//  Right angled triangle pattern

//  let prompt = require("prompt-sync")()

//  let n = Number(prompt("Enter a number"))

//  for(let i = 1 ; i<=n ; i++){
//         for(let l = 1 ; l<=i ; l++){
//         process.stdout.write("*")
//     }
//     console.log(" ")
// }

//  Right angled triangle number pattern

//  let prompt = require("prompt-sync")()

//  let n = Number(prompt("Enter a number"))

//  for(let i = 1 ; i<=n ; i++){
//         for(let l = 1 ; l<=i ; l++){
//         process.stdout.write(`${l}`)
//     }
//     console.log(" ")
// }

// /  Right angled triangle Alphabate pattern

//  let prompt = require("prompt-sync")()

//  let n = Number(prompt("Enter a number"))

//  for(let i = 1 ; i<=n ; i++){
//         for(let l = 1 ; l<=i ; l++){
//         process.stdout.write(`a`)
//     }
//     console.log(" ")
// }

// /  Right angled triangle invertate pattern

//  let prompt = require("prompt-sync")()

//  let n = Number(prompt("Enter a number"))

//  for(let i = 1 ; i<=n ; i++){
//         for(let l = n ; l>=i ; l--){
//         process.stdout.write(`*`)
//     }
//     console.log(" ")
// }

// /  Right angled triangle mirroed pattern

// let n = Number(prompt("Enter a number"));

// for (let i = 1; i <= n; i++) {

//   for (let l = 1; l <= n - i; l++) {   // 5-1 = 4 ,
//     process.stdout.write(" ");
//   }
//   for (let l = 1; l <= i; l++) {
//     process.stdout.write("*");
//   }
//   console.log(" ");
// }

// /  Right angled trangle pattern

// let n = Number(prompt("Enter a number"));

// for (let i = 1; i <= n; i++) {

//   for (let l = 1; l <= n - i; l++) {   // 5-1 = 4 ,
//     process.stdout.write(" ");
//   }
//   for (let l = 1; l <= i; l++) {
//     process.stdout.write(" *");
//   }
//   console.log(" ");
// }

// / x pattern

// let n = Number(prompt("Enter a number"));

// for (let i = 1; i <= n; i++) {

//   for (let l = 1; l <=n+5; l++) { // 5+5 = 10
//   if(i===l ||( i+l === n+5)){
//     process.stdout.write(" *");
//   }else{
//   process.stdout.write(" ")
//   }
//   }
//   console.log(" ");
// }

// 39,  pending


let n = Number(prompt("Enter a Number"))

let square = n*n
let copy =  n

if(square.toString().endsWith(copy.toString()))console.log("Yes this is AutoPhormic Number")
  else{
console.log("Not a autoPhormic numbers")}