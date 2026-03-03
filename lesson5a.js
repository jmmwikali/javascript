// Arrow functions
// This is a function that was introduced in the ECMAScript 6 and they give us the latest/modern way of defining functions in a compact manner.
// At times the arrow functions can be said to be anonymous functions - This is because they use the names of the variables they are contained in.


const sayHello = () => {
    console.log("This is an Arrow Function")
}
sayHello();

console.log("================================")
// Create an arrow function that is able to find the product of three numbers

const product = () => {
    a = 5
    b = 10
    c = 15
    console.log("The product of the three numbers is:", a * b * c)
}

product();