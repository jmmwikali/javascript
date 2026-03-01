// Create a for loop that is able to print out all the leap years from 2000 to 2026

console.log("These are all the leap years between 2000 and 2026:")
for (let year = 2000; year <= 2026; year++) {
    if (year % 4 == 0) {
        console.log(year)
    }
}
console.log("=========================")
// Write a for loop to print all odd numbers from 1 to 19

console.log("These are all the odd numbers:")
for (let number = 1; number <= 19; number++) {
    if (number % 2 != 0) {
        console.log(number)
    }
}

console.log("=========================")
// Write a for loop to count down from 10 to 1 and print the numbers in the console

console.log("Count down")
for (let count = 10; count >= 1; count--){
    console.log(count)
}

console.log("=========================")
// Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1]

let numbers = [20, 55, 3, 80, 75, 19]
let largest = numbers[0]
for (i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]
    }
}
console.log("The largets number in the array is:", largest)


console.log("=========================")
// Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10

console.log("The Multiplication table of 5")
for (i = 1; i <= 10; i++) {
    product = 5 * i
    console.log("5 x", i,"=", product)
}


console.log("=========================")
// Implement a program using if statements to calculate NHIF premium rates based on gross salary ranges:
let Grose_Income = 50000

console.log("Calculation of NHIF premium rates based on gross salary ranges")
if (Grose_Income > 0 && Grose_Income <= 5999) {
    console.log("Your Monthly Contribution is: 150.00")
}
else if (Grose_Income >= 6000 && Grose_Income <= 7999) {
    console.log("Your Monthly Contribution is: 300.00")
}
else if (Grose_Income >= 8000 && Grose_Income <= 11999) {
    console.log("Your Monthly Contribution is: 400.00")
}
else if (Grose_Income >= 12000 && Grose_Income <= 14999) {
    console.log("Your Monthly Contribution is: 500.00")
}
else if (Grose_Income >= 15000 && Grose_Income <= 19999) {
    console.log("Your Monthly Contribution is: 600.00")
}
else if (Grose_Income >= 20000 && Grose_Income <= 24999) {
    console.log("Your Monthly Contribution is: 750.00")
}
else if (Grose_Income >= 25000 && Grose_Income <= 29999) {
    console.log("Your Monthly Contribution is: 850.00")
}
else if (Grose_Income >= 30000 && Grose_Income <= 49999) {
    console.log("Your Monthly Contribution is: 1,000.00")
}
else if (Grose_Income >= 50000 && Grose_Income <= 99999) {
    console.log("Your Monthly Contribution is: 1,500.00")
}
else {
    console.log("Your Monthly Contribution is: 2,000.00")
}