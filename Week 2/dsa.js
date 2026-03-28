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

// Q.61

// let arr = [20,45,76,39]

// let i = 0 , j = arr.length-1
// console.log(i)

// while(i<j){
//     let copy  = arr[i]  // arr[0] = 20
//     arr[i] = arr[j]   //arr[1] = 20 = 39  first value 
//     arr[j] = copy // arr[3]  = 20   deside last value  
//     j--   // 2
//     i++ //1
// }

// console.log(arr)

// 62

// let n = Number(prompt("Enter a number = "))
// let arr = [30,48,57,92,95,38]

// let idx = -7

// for(let i = 0 ; i<arr.length ; i++){

//     if(n == arr[i]){
//         idx  = i  
//     }

// }

// console.log(idx== -7 ? "not found" : "Index is = " + idx)

// Q. 63  Binary Search. If element found print the index, else -1\
// What happening here loop staps bhut kaam ho jate hai bhut kam bar code chalta hai this is optimize way of finding a index of any value

// let n = Number(prompt("Enter a number = "))

// let arr = [20,38,45,49,50,80]

// let st = 0
// let en = arr.length-1
// let idx = -1

// while(st<=en){

//     let mid = Math.floor((st+en)/2)   //Check mid index value S-1

//     if(arr[mid] == n){      //n === mid hai so finds a value of index
//        idx = mid
//         break
//     }
//     else if(arr[mid]<n) st = mid+1         // if value grater than of mid value perform that  increes by 1 and each step will have changed a starting point of index
//     else if(arr[mid]>n) en = mid-1 ,console.log(mid-1)    //if value less than of mid value perform that  l decree by 1 and each step will have changed a ending point of index
// }

// console.log(idx== -1 ? "not found" : "Index is = " + idx)


