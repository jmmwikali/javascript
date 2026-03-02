// Functions with parameters
// Parameters are values that get passed as arguments when we invoke a function.
// They help us to crate functions that can be reusable through out a program.

function greeting(name){
    console.log("Hello", name + "! How have you been?")
}
greeting("Jessica")
greeting("Emmanuel")


console.log("==================")
// Below is a function with parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the numbers is:", sum)
}
// By use of a function that accepts parameters, calculate the area of a triangle whose base is 20cm and height is 12cm
function triangle_area(b, h){
    area = (b * h) / 2
    console.log("The area of the triangle is:", area + "cm\u00B2")
}
triangle_area(12, 10)


// Find the simple interest given the principle as 50000, rate as 5% and time as 8 years
function simple_interest(principle,rate, time){
    interest = (principle * rate * time) / 100
    console.log("The simple interest is:", interest)
}
simple_interest(50000, 5, 8)