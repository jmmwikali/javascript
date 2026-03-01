// Research on arrow functions, functions with parameters and anonymous functions in javascript

// ARROW FUNCTIONS - Are shorter ways to write functions
// Basic syntax:
// const function_name = (parameter) => expression

// No parameters
const sayHello = () => console.log("Hello")

sayHello()


console.log("======================")
// With parameters
const number = (x, y) => console.log(x * y)

number(5, 10)


// FUNCTIONS WITH PARAMETERS
// Basic syntax:
// funtion function_name(parameter1, parameter2) {body}

function greeting(name) {
    console.log("Hello", name, "Nice to meet you!")
}
greeting("Mercy")

function product(a, b, c) {
    console.log("The product of the three numbers is:", a * b * c)
}
product(10, 24, 15)