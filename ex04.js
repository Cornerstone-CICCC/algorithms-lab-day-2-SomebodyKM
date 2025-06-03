// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = function (str) {
    const letterArr = str.split("")
    const letters = {}
    let maxLetter = ""
    let maxLetterNum = 0

    letterArr.forEach(letter => {
        if (letters[letter]) {
            letters[letter]++
        } else {
            letters[letter] = 1
        }
    })

    for (const key in letters) {
        if (letters[key] > maxLetterNum) {
            maxLetter = key
            maxLetterNum = letters[key]
        }
    }

    return maxLetter

}

console.log(mostFrequentChar("javascript")); // Expected output: "a"