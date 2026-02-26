// Research and come up with examples on Object and Array datat types. Show how to access items of the object and of an array

// Array Data Type - This is an ordered list of values

let fruits = ["apple", "banana", "mango", "orange"]
console.log(fruits)

// Accessing items in an array(Uses the index number of the item)
console.log(fruits[3])
console.log(fruits[1])

// Modifying an array
fruits[1] = "grape"
console.log(fruits)


// Object Data Type - It stores data in key-value pairs

let student_details = {
    name: "Ednah",
    age: 19,
    location: "Kisumu",
    number: 254710832019
}
console.log(student_details)

// Accessing Object values

// 1. Dot notation
console.log(student_details.location)

// 2.Bracket notation
console.log(student_details["number"])
console.log(student_details["name"])

// Objects inside arrays
let users = [
    {name: "John", age: 25},
    {name: "Linda", age: 22},
    {name: "Brian", age: 30}
]

console.log(users[1].name)

// Arrays inside objects
let product = {
    name: "Laptop",
    price: 80000,
    colors: ["black", "silver", "gray"]
}

console.log(product.colors[1])

// Object inside object
let user = {
    name: "Brandon",
    age: 21,
    address: {
        city: "Nairobi",
        street: "Moi Avenue",
    }
}

console.log(user.address.street)

// Array inside Array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Complex
console.log(matrix[1][1])

let school = {
    name: "Tech Academy",
    students: [
        {
            name: "John",
            scores: [80, 75, 90]
        },
        {
            name: "Linda",
            scores: [88, 92, 85]
        }
    ]
}

console.log(school.students[0].name)
console.log(school.students[1].scores[1])
