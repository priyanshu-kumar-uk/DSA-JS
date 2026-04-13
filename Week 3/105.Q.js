
// Toggle each alphabet of String (In - AcgDfD Output - aCGdFd)

let inp = "AcgDfD"

let out = ""
for(let i = 0 ; i<inp.length; i++){

    let ch = inp.charAt(i)
    let k = ch.toLowerCase()

    if(inp.charAt(i)== k){
        out = out+inp.charAt(i).toUpperCase()
    }else{
        out = out+inp.charAt(i).toLowerCase()
    }

}

console.log(out)