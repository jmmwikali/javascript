// Arrow functions with parameters

const greet = (name) => {
    console.log("Hello", name + ". How have you been? I trust that you are good.")
}
greet("Trevor");
greet("Peter");

// Example two
console.log("======================")
// Below is a function to find the area of a circle
const CircleArea = (radius) => {
    let pi = 22 / 7
    let area = pi *radius *radius
    console.log("The area of the circle is:", area.toPrecision(4) + "cm\u00B2")
}

CircleArea(7);
CircleArea(28);
CircleArea(22);

console.log("======================")
// Come up with your own example of an arrow function that utilizes three parameters
const greeting = (firstname, lastname, age) => {
    console.log("Hello", firstname, lastname + ". You are", age + "years old")
}
greeting("Mercy", "Nyambura", 21);

const users = [
  ["Alice", "Smith", 25],
  ["Bob", "Johnson", 30],
  ["Charlie", "Brown", 22],
  ["Diana", "Lee", 28],
  ["Ethan", "Williams", 35]
];

for (let i = 0; i < users.length; i++) {
    greeting(...users[i]) // Spread into the three arguments
}