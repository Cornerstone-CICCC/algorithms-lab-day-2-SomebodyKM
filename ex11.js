// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

const countWordOccurrences = function (str, target) {
    const words = str.split(" ")
    const targetWord = words.filter(word => word === target)

    return targetWord.length
}



console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2