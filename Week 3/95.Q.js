// let arr = [[1 ,2],[3, 4]]



// for(let i = 0  ; i<arr.length ; i++){
    //   arr[i].reverse()
    // }                   
    // console.log(arr)
    
    let arr = [[1 ,2],[3, 4]]
    let target =   [[3 ,1],[4, 2]]          

let row = arr.length ,  col = arr[0].length
let arr2 = new Array(col)

for(let i = 0 ; i<arr2.length ; i++){
   arr2[i] = new Array(row)
}

for(let i = 0 ; i<arr.length; i++){
    for(let j=0 ; j<arr[i].length ; j++){
       arr2[j][i] = arr[i][j]
    }
}


for(let i = 0 ; i<arr2.length ; i++){
arr2[i].reverse()
}

let ans = true

for(let i = 0; i<arr2.length; i++){
    for(let j = 0 ; j<arr2[i].length; j++){
         if(arr2[i][j] !== target[i][j]){
             ans = false
             break
         }
    }
    if(!ans) break
}

console.log(true)