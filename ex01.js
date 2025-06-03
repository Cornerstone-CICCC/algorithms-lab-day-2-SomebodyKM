// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = (str => {
    let result = ""
    const words = str.split(" ")
    result = words.map(word => {
        const [first, ...rest] = word
        const firstLetter = first.toUpperCase()
        return firstLetter + rest.join("")
    });

    return result.join(" ")
})

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"