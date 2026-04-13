let prompt = require("prompt-sync")();

let s = prompt("Enter a String = ")

// Accept a string and print it in reverse order

for(let i = s.length ; i>0 ; i--){
    console.log(s.charAt(i))
}