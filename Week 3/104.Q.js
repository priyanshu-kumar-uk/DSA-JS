let prompt = require("prompt-sync")();

let s = prompt("Enter a String = ").toLocaleLowerCase()

console.log(s)

let vowel = "aeiou"
let value = 0
let cons = 0

for(let i = 0 ; i<s.length ; i++){
   for(let j = 0 ; j<vowel.length ; j++){  // arrray ko length tak chalna hai
    if(s.charAt(i) == vowel.charAt(j)){
       value++
    }
   }

   cons++
}
console.log("Vowel",value)
console.log("Consonent",Math.abs(cons-value))
