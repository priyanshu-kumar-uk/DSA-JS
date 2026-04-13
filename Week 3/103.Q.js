let prompt = require("prompt-sync")();

let s = prompt("Enter a String = ")

let i = 0 , j = s.length-1

let value = true

while(i<j){

    if(s.charAt(i) !== s.charAt(j)){
          value = false
          break
    }
    i++
    j--
}

console.log(value?"Palindrom":"Not Palindrom")
