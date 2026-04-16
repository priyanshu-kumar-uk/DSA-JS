let str = "foobar"
let letter = "o"

// Formula = (letter ka count / total string length) × 100
let strl = str.length
let out = str.split("")
let count = 0

for(let i = 0 ; i<out.length ; i++){
    if(out[i] == letter){
      count++
    }
}

let output = Math.floor(count/strl*100)
console.log(output+"%")