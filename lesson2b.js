// Comparison operators
// They usually evaluate to a boolean answer
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number2 != number2)

// Triple equal sign - Research in javascript (the strict equality operator)
// It compares both value and type
console.log(5 === 5) // true(both are numbers)

console.log(5 === "5") // false(they are not of the same type)

console.log(true === 1) // false(they are not of the same type)


// Logical operators are used to evaluate two or more conditions and they also give a boolean answer

// Logical AND (&&) - It evaluates to true is and only if all of the conditions/statements are true
console.log((number1 < number2) && (number2 > number1) && (number3 > number2))

// Logical OR (||) - It evaluates to true if one of the statements is true
console.log((number1 > number2) || (number2 > number1))

// Logical NOT (!) - It is used to negate a condition/statement
console.log(!(number1 < number2))