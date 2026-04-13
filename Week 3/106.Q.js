let arr = ["athome","atraju","cat"]

let prefix = 0
for(let i = 0 ; i<arr.length ; i++){
    
    if(arr[i].startsWith("at")){
      prefix++
    }

}
console.log(prefix)