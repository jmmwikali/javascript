// Object Data types:
// An object in javascript is a data type that stores data in form of key value pairs

let person = {
    name : "Mercy Nyambura",
    age : 21,
    isRegistered : true
}

console.log("The details of the person is:", person)

// First method is by use of the asquare brackets
console.log(person["age"])

// Second method is by use of the dot notation
console.log(person.name)

// Check the data type 
console.log(typeof(person))


// Array Data Types:
// This refers to a collection of items that are on indexes
let fruits = ["Mango", "Pineapple", "Apple", "Banana", "Melon", "Lemon", "Grapes"]

console.log("The entire array of fruits is:", fruits)

// To access the item of an array we use the index
console.log(fruits[3])

// You can slice items of an array
console.log(fruits.slice(0,5))