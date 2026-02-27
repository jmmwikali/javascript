// While Loop
// Below is a simple syntax of the while loop
// 1. Intilialization of a variable
// 2. while keyword
// 3. Condition to be checked
// 4. Body of the while loop

let i = 0
while(i <= 10){
    console.log("The new value of i is:", i)
    i++
}

console.log("===============================")

let numbers = [1,2,3,4,5]
let squared = numbers.map(x => x * 2)
console.log("The square of the numbers are:", squared)

console.log("==============================")

const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]