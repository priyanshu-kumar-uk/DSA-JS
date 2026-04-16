let str = "ababbb";
let copy = str

let out = copy.split("").sort()
let out2 = str.split("")

let output = false

for(let i = 0; i<str.length ;i++){
    if(out2[i] == out[i]){
       output  = true   // reassigment
       
    }else {
        output = false
        break
    }
}

console.log(output)