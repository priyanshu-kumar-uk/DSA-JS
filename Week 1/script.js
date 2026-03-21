// Sum of two integers
// let a = 10
// let b = 30
// console.log(a+b)
         

// let a = 45
// let b = 17
// console.log(`The Sum of ${a} & ${b} = ${a+b}`)

// let age = 12
// let name = "Shery"
// console.log(`Hello ${name}, you are ${age} old`)

// let x = 5
// console.log(x++,x) // after increement
// console.log(++x) //  imidatly or before increment
// console.log(x--,x)
// console.log(--x,x)


// let x = 2  // 5 
// let y = 3   // 2
// x = x+y //5
// y = x-y // 5-3 = 2
// x = x-y   // 5-2 = 3
// console.log(x)
// console.log(y)

// let length = 10
// let width  = 10
// // Area=Length×Width // ayat
// // Perimeter=2×(Length+Width)
// console.log(`Area of rectangle : ${length*width}`)
// console.log(`Area of rectanlge : ${2*length+width}`)

// A=P×(1+100R​)y

// let  p = 1000
// let  r = 10 // %
// let  y = 2
// console.log(` A = ${Math.pow(p*1+r/100,y)}`)



// s= a+b+c/2
// A=s⋅(s−a)⋅(s−b)⋅(s−c)

// let a = 5
// let b = 6 
// let c = 7
// let s = (a+b+c)/2
// console.log(s)
// console.log(`Area = ${Math.sqrt(s*(s-a)*(s-b)*(s-c))}`)


// circle =  2*pi*r
// area =  pi*r*r

// let r = 2
// console.log(`Circusium =  ${2*Math.PI*r}`)
// console.log(`Area = ${Math.PI*Math.pow(r,r)}`)

// let x  = 10
// let y = 20

// if(x>y){
//   console.log( x," is greater than ", y)
// }else{
//     console.log(y,"is grater than ", x)
// }

// let gender = prompt("Enter your gender")

// if(gender==="male"){
//     console.log("Good morning sir")
// }else if(gender === "female"){
//    console.log("Good morning mam")
// }
// else{
//      console.log(`good morning  ${gender}`)
// }

// let gender =  prompt("Enter Your Gender")
//  console.log( gender.toLowerCase() === "male" ? "Good Morning sir" : gender.toLowerCase() === "female" ? "Good morning mam" :" Enter valid gender")


// let number = Number(prompt("Enter A number"))
// console.log(number%2===0?"Number is  Even ": "number is odd ")

// let Name = prompt("Enter your name")
// let age =  prompt("Enter Your age")
// console.log(age>=18?`${name} is valid for vote`: ` ${Name} is not valid for vote he is eligible for ${18-age} years `)

// let days = Number(prompt("Enter day"))

// switch(days){
//     case 1 :
//         console.log("Sunday")
//    break

//    case 2:
//     console.log("Monday")
//     break

//     case 3 :
//     console.log("Tuesday")
//     break

//     case 4 :
//     console.log("thursday")
//     break
//       case 5 :
//     console.log("wednesday")
//     break
//       case 6 :
//     console.log("friday")
//     break
//      case 7 :
//     console.log("saturday")
//     break

//     default :
//     console.log("Please enter valid day")
// }

// let a = Number(prompt("Enter a first number "))
// let b = Number(prompt("Enter a second number "))
// let c = Number(prompt("Enter a third number "))

// console.log(Math.max(a,b,c))


// let year = prompt("Enter a year to find a leap year")
// console.log((year%4 === 0) && (year%100 !==0 ) || (year%400 === 0)? `This is leap year ${year}`:`This is not leap year ${year}` )

// let price = prompt("Enter a price")
// let dis ;

//  price>1000 ? dis = 50 : price>450? dis = 30 : dis = 10

// let discount  = (price*dis)/100
// let finalbill  = price-discount

// console.log(finalbill)

// let unit  = Number(prompt("Enter units"))

// if(unit>0 && unit<=100){
//   console.log((unit*4.2))
// }
// else if(unit>101 && unit<=200){
//    console.log((100*4.2)+(unit-100)*6)
// }
// else if(unit>201 && unit<=400){
//    console.log((100*4.2)+(100*6)+(unit-200)*8)
// }
// else{
//      console.log((100*4.2)+(100*6)+(200*8)+(unit-400)*13)
// }

// let letter = prompt("Enter Alphabate").toLowerCase()

// let vowel = 0 , consonent = 0

// for(let i = 0; i<=letter.length ; i++ ){
//   let char =   letter.charAt(i)
//   console.log(char)

//   switch(char){
//      case  "a" :
//      case  "e" :
//      case  "i" :
//      case  "o" :
//      case  "u" :
//      vowel++
//      break     
//   }
// }
// console.log(vowel)

// let int = Number(prompt("Enter a number"))

// if(int){
//     console.log("Hello World")
// }else{
//     console.log("Please enter a true value")
// }

// let n  = prompt("Enter a Number")

// for(let i = 0 ; i<=n ; i++){
//     console.log(i)
// }


// let n  = prompt("Enter a Number")

// for(let i = n ; i>=0 ; i--){
//     console.log(i)
// }


// let n  = prompt("Enter a Number")

// for(let i = 1 ; i<=10 ; i++){
//     console.log(` ${n}*${i} = ${n*i}`)
// }


// let n  = prompt("Enter a Number")

// let sum = 0

// for( let i = 0 ; i<=n ; i++){
//      sum = sum+i
// }
// console.log(sum)


// let n  = prompt("Enter a Number")

// let fac = 1

// for( let i = 1 ; i<=n ; i++){
//      fac = fac*i
// }
// console.log(fac)


// let n  = prompt("Enter a Number")

// let sumEven = 0
// let sumOdd = 0


// for(let i = 0 ; i<=n ; i++){
//    if(n%i === 0){
//       if(i%2===0){
//          console.log("Even",i)
//          sumEven = sumEven+i
//       }else{
//          sumEven = sumOdd+i
//       }
//    }
// }

// console.log(sumEven)
// console.log(sumOdd)


// let n  = prompt("Enter a Number") //50
// let total = 0;

// for(let i = 1 ; i<=n ; i++){
//    if(n%i === 0){
//    total += i;
//    }
// }
// console.log(total)


// /* have Not Completed */ 
//  let n  = prompt("Enter a Number") //50

// for(let i = 1 ; i<=n ; i++){

//    console.log(i)
//    console.log(n)

//    if(n%i === 0){
//       console.log(i)
//    }else{
//       console.log(i)
//    }   
// }

// let input1 =Number( prompt("Enter a number first"))
// let input2 =Number( prompt("Enter a number second"))

// console.log(Math.pow(input1,input2))

let num = Number( prompt("Enter a number"))





