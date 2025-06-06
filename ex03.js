// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = function (arr) {
    const correctNum = []
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr[lastIndex]; i++) {
        correctNum.push(i + 1)
    }
    const result = (correctNum.filter(num => !arr.includes(num)))[0]
    return result
}



console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3