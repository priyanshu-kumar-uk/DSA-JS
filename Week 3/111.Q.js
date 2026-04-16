
let arr1 = 'state'
let arr2 = 'taste'

let one = arr1.split("").sort().join(" ") // join array ka elemnt ko string ban det ahi 
let two = arr2.split("").sort().join(' ')

if(arr1.length !== arr2.length){
    console.log("Not Anagram Word")
} else if(one == two){
    console.log("Anagram Word")
}else console.log("Not a Anagram word")
