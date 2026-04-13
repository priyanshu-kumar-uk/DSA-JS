let prompt = require("prompt-sync")();

let s = prompt("Enter a String = ")

for(let i= 0 ; i<s.length ; i++){
    console.log(s.charAt(i))
}