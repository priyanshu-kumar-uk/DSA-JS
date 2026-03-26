let prompt = require("prompt-sync")();  


/*Q.55 */
// let n = prompt("Enter a array length = ")

// let arr  = []
// let sum = 0;
// let avr = 0

// for(let i = arr.length ; i<=n-1 ; i++){
//   value = Number(prompt("Enter a array value = "))
//   arr[i]=  value
//   sum = sum+arr[i]
// }
// avr = sum/arr.length
// console.log(arr)
// console.log(sum)
// console.log(avr)

// /*Q.56 */
// let arr =  [2, 96, 69, 77, 145 , 20]

// let max = 0;

// for(let i = 0 ; i<arr.length ; i++){

//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log("Max Number of m a array = ",max)
// console.log("arr length is = ",arr.length)

// /*Q.57 */
// let arr =  [2, 96, 69, 77, 145, 20]

// let max = 0
// let secMax = 0

// for(let i= 0 ; i<=arr.length; i++){

//     if(arr[i]>max){
//         secMax = max
//         max = arr[i]
//     }else if(arr[i]>secMax){
//         secMax = arr[i]
//     }
// }
// console.log("Max = ",max)
// console.log("Second max = ",secMax)

// Q. 58
// - increeing order = not or \YES\"
let arr =  [ 1, 5, 8, 9, 10, 15 ]

let prev = 0

for(let i=0 ; i<=arr.length; i++){
   if(arr[i]>prev){  //1>0,15>1, 8>15
    prev = arr[i]
   }
}
