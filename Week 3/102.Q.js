let prompt = require("prompt-sync")();

let s = prompt("Enter a String = ")
let val1 = s
let val2 = ""

for(let i = s.length-1 ;i>=0 ; i--){
    val2 = val2+s.charAt(i)
}

if(val1===val2){
    console.log("This string is palindromic = " ,val2)
}else{
    console.log("Try again This is not palindromic string")

}