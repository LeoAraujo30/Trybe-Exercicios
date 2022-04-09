let word = 'tryber';
let lasteLetter = word.length - 1;
let reverseWord = '';

for (let i = lasteLetter; i >= 0; i -= 1) {
    reverseWord += word[i]
}

console.log(reverseWord)