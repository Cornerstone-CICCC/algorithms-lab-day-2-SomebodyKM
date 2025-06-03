// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = function (str) {

    const words = str.split("")
    const uniqueWord = words.filter(word => {
        if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u" || word === " ") {
            return false
        } else {
            return true
        }
    })


    return uniqueWord.length
}

console.log(countConsonants("hello world")); // Expected output: 7
