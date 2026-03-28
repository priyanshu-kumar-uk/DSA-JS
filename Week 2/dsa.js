let prompt = require("prompt-sync")();  


/*Q.54 */
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

// /*Q.55 */
// let arr =  [2, 96, 69, 77, 145 , 20]

// let max = 0;

// for(let i = 0 ; i<arr.length ; i++){

//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log("Max Number of m a array = ",max)
// console.log("arr length is = ",arr.length)

// /*Q.56 */
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

// Q. 57 pending .Not Completed
// - increeing order = not or \YES\"

// let arr =  [ 1, 5, 8, 9, 10, 15 ]

// let prev = 0 // 5, 

// for(let i=0 ; i<=arr.length; i++){
//    if(prev<arr[i]){  //1<5 = 5
//       prev = arr[i]
//    }
// }

// Q. 58 pending
// Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

// let n = Number(prompt("Enter a number"))

// let input ;
// let arr = []
// let second = []

// for(let i = 0 ; i<=n-1; i++){
//  input = Number(prompt("Enter a input"))
//  arr[i] = input
//  second = arr 
//  for(let i = second.length-1; i>=0; i--){
//    console.log(arr)
// }

// }
// console.log(second)

// 59.

// let arr = [2,4,6,8]    //  0,1,2,3  = arr[i-1], 0 = arr[1]
// let first = arr[0]

// for(let i = 1 ; i<arr.length ; i++){
//   arr[i-1] = arr[i]
// }
// arr[arr.length-1] = first
// console.log(arr)


// Q.60

// let arr = [2,4,6,8]    //  0,1,2,3  = arr[i-1], 0 = arr[1]

// let k = 2

// for(let i=1 ; i<=k ; i++){  // this loop run again K

//   let first = arr[0]
//  for(let i = 1 ; i<arr.length ; i++){  // This loop work main
//   arr[i-1] = arr[i]
//  }
// arr[arr.length-1] = first
// }
// console.log(arr)

