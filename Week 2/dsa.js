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

// Q.64

// let arr = [56,-35,23,-55,24,-95]  

// let i = 0
// let j = 0

// while(i<arr.length){

//     if(arr[i] <0){   // arr[1] =  0===0
//         temp  = arr[i]  // temp  = 0
//         arr[i] = arr[j]   // 0 = 0, 0
//         arr[j] = temp // 0 = 0 , 0
//         j++
//     }
//     i++
// }
// console.log(arr)

// Q. 66

// let t = Number(prompt("Enter a target number = "))
// let arr = [1,2,3,7,5]

// let count = 0
// for(let i = 0 ; i<arr.length ; i++){ // i, 2
//     let sum = 0

//     for(let j = i ; j<arr.length; j++){
//         sum = sum+arr[j]      //  13+5 , 

//         if(sum === t){  // 18 === 12
//             count++
//         }

//     }
// }

// console.log(count)

// Q.67

// function strongN(n){

// let copy = n
// let ans = 0
// while(n>0){
//   let dig = n%10
//   let fact = 1
//   for(let i  = 1 ; i<=dig ; i++){
//      fact  = fact*i
//   }
//   ans = ans+fact
//   n = Math.floor(n/10)
// }

// return ans===copy


// }

// let data = strongN(145)

// console.log(data)

// Q.68 

// function number(n){

//     let copy = n

//     let revrese = 0
//     while(n>0){
//         let one = n%10
//         revrese = revrese*10+one
//         n = Math.floor(n/10)
//     }

//     return revrese === copy

// }

// let data = number(1221)
// console.log(data)

// Q.69
// function concat(arr1,arr2) {
//     let newarr = []

//     for (let i = 0; i <= arr1.length - 1; i++) {
//         newarr.push(arr1[i])
//     }

//     for (let j = 0; j <= arr2.length - 1; j++) {
//         newarr.push(arr2[j])
//     }

//     return newarr

// }

// let data  = concat([1, 2, 3],[4, 5, 6])
// console.log(data)

// Q.70 

// let  arr = [0, 2, 1, 5, 3, 4]
// let arr1 =  []

// for(let i = 0 ; i<=arr.length-1 ; i++){

//      arr1[i] = arr[arr[i]]   // val convert-- idx ,   0 = 0, 2 = 1 , 1 = 2, 5 = 4 , 3 = 5 , 4 = 3
// }
// console.log(arr1)

// Q. 71

// let arr = [1,3,3,4]

// let n = arr.length-1
// let d = 0

// let gap = 0
// let sum = 0

// while(d<=n){

//    gap = arr[d] // 1

//     for(let i = d ; i<=arr.length-1 ; i++){
//          sum = sum + Math.abs(gap-arr[i])  // 1-1 = 0, 1-3  = 2 , 1-3 = 2 // 0 + 0 = 0,  = 2+2 = 4+3 = 7 , 3-3 = 0, 7 , 3-4 = 1+7 = 8, 
//     }
// d++
// }
// console.log(sum)

// Q .72

// let arr1 = ['a', 'c', 'b', 'a', 'c']   // 2+3, 5
// let arr2 = [4, 2, 7, 1, 3]

// let pairsA = 0
// let pairsc = 0
// let pairsb = 0



// for(let i = 0; i<arr1.length ; i++){

//   let a = i

//     for(let j = i ; j<arr2.length ; j++){
//        if(a === j && arr1[j]==="a"){ //  0 === 0 
//         pairsA = pairsA+arr2[j]     //  
//        }  else if(a === j && arr1[j]==="c"){
//         pairsc  = pairsc + arr2[j]
//        }else if(a === j && arr1[j]==="b"){
//         pairsb  = pairsb + arr2[j]
//        }
//     }
// }
// console.log("a = ",pairsA)
// console.log("c = ",pairsc)
// console.log("b = ",pairsb)


// Q. 73   

// let arr = [2, 3, 4, 5, 6]

// let newarr = []
//  newarr[0] = arr[0]*arr[1]
//  let n = arr.length

//  for(let i = 1 ; i<= arr.length-1 ; i++){
//      newarr[i] = arr[i-1]*arr[i+1]
//     }
//      newarr[n-1] = arr[n-1]*arr[n-2]  
//     console.log(newarr)

// Q.74

// let arr = [2, 3, 5, 4, 1]

// let step = 0
// while(arr.length>0){
//     let max = arr[0]  // 5
//     let idx = 0
// for (let i = 1; i<arr.length ; i++) {
//     if (arr[i] > max) {  //  2>0 
//         max = arr[i]
//         idx = i 
//     }
// }
//  arr.splice(idx,arr.length-idx)   // 3 , 5-3 = 2 
//     step++
// }

// console.log(arr)
// console.log(step)

// Q.75

// let arr = [1, 2, 1, 2, 1, 3]

// let left = 0
// let right = 0
// let mid = arr.length / 2
// let check = 0


// for (let i = 0; i < mid; i++) {
//     left = left + arr[i]
// }

// for (let i = mid; i < arr.length; i++) {
//     right = right + arr[i]
// }

// if(left>right){
//      check = left-right
//      right = right+check
//     console.log(check)
// }else if(right>left){
//      check  = right-left
//      left = left+check
// }
// console.log(left)
// console.log(right)

// Q . 76

// let arr = [7, 2, 9, 1, 5, 3]
// let mid = arr.length / 2
// let small = arr[0]  //
// for (let i = 1; i <= mid - 1; i++) {

//     if (arr[i] < small) {  // 9<7 
//         arr[0] = arr[i]
//         arr[i] = small
//     }
// }
// // let arr = [7, 2, 9, 1, 5, 3]

// let n = arr.length

// for (let i = mid; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         if (arr[i] < arr[j]) {  // 5>1  
//             let temp = arr[i]
//             arr[i] = arr[j]   //  1=5 
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr)

// Q . 77

// let arr = [3, 8, 12, 5]
// let sum = 0 
// arr.sort((a,b)=>{
//     return a-b
// })

// for(let i = 0 ; i<arr.length-1 ; i++){
//     sum = sum+Math.abs(arr[i]-arr[i+1])
// }
// console.log(arr)
// console.log(sum)

//  Q.79
// let arr = [1,2,2,1]

// let prev =  ""
// arr.sort((a,b)=> a-b)
// for(let i= 0 ; i<=arr.length-1 ; i+=2){
    
//  if(arr[i] === arr[i+1]){ // 0 === 1 , 2===3
//     prev = "true"
//  }else{
//     prev = "false"
//     break
//  }

// }
// console.log(prev)

// Q . 79  

// let arr = [1,2,2,1]

// let prev =  ""
// arr.sort((a,b)=> a-b)
// for(let i= 0 ; i<=arr.length-1 ; i+=2){
    
//  if(arr[i] === arr[i+1]){ // 0 === 1 , 2===3
//     prev = "true"
//  }else{
//     prev = "false"
//     break
//  }

// }
// console.log(prev)

// Q .80 
// let arr = [3, 1, 2, 2, 2, 1, 3]
// let k = 2

// let count = 0

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j] && (i * j) % k === 0) {
//             count++
//         }
//     }
// }

// console.log(count)

// Q. 81

// let arr = [5, 3, 6, 1, 12]
// let num = 3

// for(let i = 0 ; i<=arr.length-1; i++){

//     if(arr[i]===num){
//         num = arr[i]
//         num = num*2
//     }
// }

// console.log(num)

// Q .82

// let arr = [0, 2, 3, 4]

// let idx = ``

// for(let i = 0 ; i<=arr.length-1 ; i++){
//     if(arr[i]===i){
//      idx = `  ${i} === ${arr[i]}  True`
//      break
//     }else{
//       idx = `Not matched`
//     }

// }

// console.log(idx)

// Q.83

// let num1 = 2
// let num2 = 3
// let count = 0

// while (num1 !== 0 && num2 !== 0) {
//     if (num1 >= num2) {
//         num1 = num1 - num2
//     } else {
//         num2 = num2 - num1
//     }
//     count++
// }
// console.log(count)

// Q.84

// let arr = [1, 5, 0, 3, 5]

// let count = 0

// for (let i = 0; i <= arr.length - 1; i++) {

//     if (arr[i] > 0) {
//         let isDuplicate = false

//         for (let j = 0; j < i; j++) {
//             if (arr[i] === arr[j]) {
//                 isDuplicate = true
//                 break
//             }
//         }

//         if (isDuplicate === false) {
//             count++
//         }
//     }
// }

// console.log(count)

// Q.85

// let arr = [2, 4, 1]

// let mid  = Math.floor(arr.length/2)


// if(arr[mid]>arr[mid-1]&&arr[mid]>arr[mid+1]){
//     console.log("Hill")
// }else{
//     console.log("Valley")
// }


// Q.86

// let arr = [2, 5, 6, 9, 10]

// let min = arr[0]
// let max = arr[0]

// // find min and max
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }

// // find gcd
// let gcd = 1

// for (let i = 1; i <= min; i++) {
//     if (min % i === 0 && max % i === 0) {
//         gcd = i
//     }
// }

// console.log(gcd)

// Q.87

// let arr = [-5, 1, 5, 0, -7]
// let step = 0 

// for(let i = 0 ; i<=arr.length-1; i++){
//     step =  step+arr[i]

//     arr[i] = step
// }


// console.log(arr)

//  Q.88

// let num = 2932

// let digits = String(num).split('').sort((a,b)=>a-b)

// let num1 = digits[0]*10 + Number(digits[2])
// let num2 = digits[1]*10 + Number(digits[3])

// let result = num1 + num2
// console.log(result)

//  Q. 89

// let arr = [4, 1, 2, 3]

// let even = []
// let odd = []

// // step 1: even aur odd index values alag karo
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         even.push(arr[i])
//     } else {
//         odd.push(arr[i])
//     }
// }

// // step 2: sort karo
// even.sort((a, b) => a - b)     // ascending
// odd.sort((a, b) => b - a)      // descending

// let e = 0
// let o = 0

// // step 3: wapas array me fill karo
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         arr[i] = even[e]
//         e++
//     } else {
//         arr[i] = odd[o]
//         o++
//     }
// }

// console.log(arr)

// Q.90

// let nums = [1, 3, 5, 2, 4, 8, 2, 2]

// while (nums.length > 1) {
//     let newArr = []

//     for (let i = 0; i < nums.length / 2; i++) {
//         if (i % 2 === 0) {
//             newArr[i] = Math.min(nums[2 * i], nums[2 * i + 1])
//         } else {
//             newArr[i] = Math.max(nums[2 * i], nums[2 * i + 1])
//         }
//     }

//     nums = newArr
// }

// console.log(nums[0])

//  Q.91

// let seats = [3, 1, 5]
// let students = [2, 7, 4]

// seats.sort((a, b) => a - b)
// students.sort((a, b) => a - b)

// let moves = 0

// for (let i = 0; i < seats.length; i++) {
//     moves = moves + Math.abs(seats[i] - students[i])
// }

// console.log(moves)

// Q .92

// let arr =[
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
// ]
// let sum = 0

// for(let i = 0; i<arr.length; i++){
//     for(let j  = 0 ; j<=arr[i].length-1 ; j++ ){

//         if(i===j||i+j==arr[i].length-1) sum = sum+arr[i][j]
//     }
// }

// console.log(sum)

