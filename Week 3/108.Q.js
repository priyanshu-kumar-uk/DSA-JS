// Extend the previous question and capitalize the first & last character of each word in the sentence and print the new sentence (Ex - Hello bhai Kaise ho a, Output - HellO BhaI KaisE HO A)

let inp = "Hello bhai Kaise ho a"
let arr = inp.split(" ")

let output = ''

for(let i = 0; i<arr.length ; i++){
    let words = arr[i]

    let first = words.charAt(0).toUpperCase()
    let mid = words.substring(1,words.length-1)
    let last = words.charAt(words.length-1).toUpperCase()

    output = output+ (first+mid+last)+" "
}

console.log(output)