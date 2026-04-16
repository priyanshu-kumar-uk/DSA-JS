let str = 'l*eet**code'

let out = str.split("")
let count = 0

for(let i = 0 ; i<out.length ; i++){
 
    if(out[i] == "*"){
        count++
    }
}

console.log("* = ",  count)