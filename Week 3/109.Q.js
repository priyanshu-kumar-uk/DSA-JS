
let arr = ["I love coding", "My name is Priyanshu", "JavaScript is very interesting"]
// Maximum Number of Words Found in Sentences

let max = 0
let idx = 0
for(let i = 0 ; i<arr.length ; i++){

    if(arr[i].split(" ").length>max){
        max = arr[i].split(" ").length
        idx = arr[i] 
    }


}
console.log(idx ," = ",max)