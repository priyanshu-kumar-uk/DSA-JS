let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
]

target = 3
let out = false
for(let i = 0 ; i<matrix.length ; i++){

   for(let j = 0 ; j<matrix[i].length ; j++){
     if(matrix[i][j] === target){
          out = true
          break
     }
   }

   if(out){
    break
   }

}

console.log(out)