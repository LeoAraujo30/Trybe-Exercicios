let array = ['java', 'javascript', 'python', 'html', 'css'];
let wordMaior = array[0]
let wordMenor = array[0]

for(let i = 1; i < array.length; i += 1) {

     if (wordMaior.length < array[i].length) {
         wordMaior = array[i]
    }
    
}


for(let i = 1; i < array.length; i += 1) {

    if (wordMenor.length > array[i].length) {
        wordMenor = array[i]
   }
   
}

console.log(wordMaior)
console.log(wordMenor)